"use client";

import React, { useState, useRef, useEffect } from 'react';

// === CONFIGURATION ===
const N8N_WEBHOOK_URL = "https://n8n.saarthigreentech.com/webhook/917e0a18-4b37-4241-897e-4382110c8376/chat";
// =====================

const initialMessage = {
    role: 'model',
    text: "Hello! I'm Saarthi's AI assistant. Ask me anything about our hydrogen retrofit solutions, GreenVision platform, or decarbonisation services.",
    timestamp: new Date().toISOString()
};

// Utility for exponential backoff
const fetchWithRetry = async (url, options, maxRetries = 3) => {
    for (let i = 0; i < maxRetries; i++) {
        try {
            const response = await fetch(url, options);
            console.log('n8n Response Status:', response.status);
            
            if (!response.ok) {
                if (response.status === 429 || response.status >= 500) {
                    throw new Error(`HTTP error ${response.status}`);
                }
                const errorText = await response.text();
                console.error('n8n Error Response:', errorText);
                throw new Error(`API error: ${response.status} - ${errorText}`);
            }
            
            return response;
        } catch (error) {
            console.error(`Retry ${i + 1}/${maxRetries}:`, error);
            if (i === maxRetries - 1) throw error;
            const delay = Math.pow(2, i) * 1000 + Math.random() * 1000;
            await new Promise(resolve => setTimeout(resolve, delay));
        }
    }
};

const ChatbotWidget = () => {
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [messages, setMessages] = useState([initialMessage]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const chatEndRef = useRef(null);

    useEffect(() => {
        if (chatEndRef.current && isChatOpen) {
            chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages, isChatOpen]);

    const toggleChat = () => {
        setIsChatOpen(!isChatOpen);
    };

    const handleSend = async (e) => {
        e.preventDefault();

        if (!input.trim() || isLoading) return;

        const userMessage = { 
            role: 'user', 
            text: input.trim(),
            timestamp: new Date().toISOString()
        };

        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        try {
            console.log('Sending to n8n:', input);

            const payload = {
                prompt: input.trim(),
                sessionId: `session_${Date.now()}`,
            };

            const options = {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(payload)
            };

            const response = await fetchWithRetry(N8N_WEBHOOK_URL, options);
            const contentType = response.headers.get('content-type');
            
            let result;
            if (contentType && contentType.includes('application/json')) {
                result = await response.json();
            } else {
                result = { response: await response.text() };
            }
            
            console.log('n8n Response:', result);
            
            let modelText = "I apologize, but I couldn't generate a proper response. Please try again.";
            
            if (typeof result === 'string') {
                modelText = result;
            } else if (result.response) {
                modelText = result.response;
            } else if (result.output) {
                modelText = result.output;
            } else if (result.text) {
                modelText = result.text;
            } else if (result.answer) {
                modelText = result.answer;
            } else if (result.message) {
                modelText = result.message;
            } else if (result.data?.response) {
                modelText = result.data.response;
            } else if (Array.isArray(result) && result.length > 0) {
                modelText = result[0].response || result[0].text || result[0].output;
            }
            
            const modelMessage = { 
                role: 'model', 
                text: modelText,
                timestamp: new Date().toISOString()
            };
            
            setMessages(prev => [...prev, modelMessage]);

        } catch (error) {
            console.error('n8n Webhook Error:', error);
            
            const errorMessage = { 
                role: 'model', 
                text: "I'm having trouble connecting right now. Please try again in a moment, or contact us directly at contact@saarthigreen.com.",
                timestamp: new Date().toISOString(),
                isError: true
            };
            
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    const Message = ({ message }) => {
        const isUser = message.role === 'user';
        const isError = message.isError;
        
        return (
            <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-3 animate-fadeIn`}>
                <div className={`max-w-[85%] px-3 py-2 rounded-2xl shadow-sm ${
                    isUser 
                        ? 'bg-green-600 text-white rounded-br-sm' 
                        : isError
                        ? 'bg-red-50 text-red-800 border border-red-200 rounded-bl-sm'
                        : 'bg-white text-gray-800 border border-gray-200 rounded-bl-sm'
                }`}>
                    <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.text}</p>
                    <span className="text-xs opacity-60 mt-1 block">
                        {new Date(message.timestamp).toLocaleTimeString([], { 
                            hour: '2-digit', 
                            minute: '2-digit' 
                        })}
                    </span>
                </div>
            </div>
        );
    };

    return (
        <>
            {/* Floating Chat Button */}
            <button
                onClick={toggleChat}
                aria-label={isChatOpen ? "Close Chat" : "Open Chat"}
                className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-green-300 z-[9999]"
                style={{ 
                    boxShadow: '0 10px 40px rgba(16, 185, 129, 0.3)',
                }}
            >
                {isChatOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                    </svg>
                )}
            </button>

            {/* Chat Window - FIXED HEIGHT */}
            {isChatOpen && (
                <div className="fixed bottom-24 right-6 w-[95vw] sm:w-[400px] md:w-[420px] bg-white rounded-2xl shadow-2xl flex flex-col z-[9999] border border-gray-200 animate-slideUp"
                     style={{ 
                         height: 'min(520px, calc(100vh - 140px))',
                         maxHeight: '520px'
                     }}>
                    
                    {/* Header - Fixed */}
                    <div className="flex items-center justify-between p-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-t-2xl shadow-md flex-shrink-0">
                        <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                                <span className="text-green-600 font-bold text-base">S</span>
                            </div>
                            <div>
                                <h3 className="text-base font-semibold leading-tight">Saarthi AI</h3>
                                <p className="text-xs text-green-100">Ask about our solutions</p>
                            </div>
                        </div>
                        <button 
                            onClick={toggleChat} 
                            className="p-1.5 rounded-full hover:bg-green-600 transition-colors flex-shrink-0"
                            aria-label="Close chat"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Messages Area - Scrollable */}
                    <div className="flex-1 p-3 overflow-y-auto bg-gradient-to-b from-gray-50 to-white min-h-0">
                        {messages.map((msg, index) => (
                            <Message key={index} message={msg} />
                        ))}
                        {isLoading && (
                            <div className="flex justify-start mb-3">
                                <div className="max-w-[85%] px-3 py-2 rounded-2xl bg-white border border-gray-200 rounded-bl-sm">
                                    <div className="flex space-x-1.5">
                                        <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce"></div>
                                        <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                                        <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div ref={chatEndRef} />
                    </div>

                    {/* Input Area - Fixed */}
                    <form onSubmit={handleSend} className="p-3 border-t border-gray-200 bg-white rounded-b-2xl flex-shrink-0">
                        <div className="flex items-end space-x-2">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Ask about our solutions..."
                                disabled={isLoading}
                                className="flex-1 p-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent disabled:bg-gray-100 disabled:text-gray-500 text-sm"
                            />
                            <button
                                type="submit"
                                disabled={!input.trim() || isLoading}
                                className="p-2.5 bg-green-600 text-white rounded-xl hover:bg-green-700 transition duration-150 disabled:bg-gray-300 disabled:cursor-not-allowed flex-shrink-0"
                                aria-label="Send message"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                                </svg>
                            </button>
                        </div>
                        <p className="text-xs text-gray-500 mt-1.5 text-center">
                            Powered by GreenVision AI
                        </p>
                    </form>
                </div>
            )}

            <style jsx>{`
                @keyframes slideUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }
                .animate-slideUp {
                    animation: slideUp 0.3s ease-out;
                }
                .animate-fadeIn {
                    animation: fadeIn 0.3s ease-out;
                }
            `}</style>
        </>
    );
};

export default ChatbotWidget;