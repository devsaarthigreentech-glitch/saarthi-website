'use client'
import Link from 'next/link'
import React from 'react'

const NewCTA = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-[#33A04A]">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-[#000]/10 mix-blend-multiply"></div>
      {/* Organic shapes */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-[#FBB040] rounded-full blur-[100px] opacity-30 mix-blend-screen"></div>
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-[#051C10] rounded-full blur-[100px] opacity-40 mix-blend-soft-light"></div>

      <div className="container relative z-10 mx-auto px-6 lg:px-8 text-center text-white">
        <span className="font-bold tracking-wider uppercase opacity-80 mb-6 block text-[#051C10]">Call to Action</span>
        <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">Let’s Talk About Your <br /> Diesel Footprint</h2>
        <p className="text-xl md:text-2xl opacity-90 mb-12 max-w-2xl mx-auto font-medium">
          If diesel powers your operations, decarbonisation doesn’t have to wait.
        </p>

        <Link
          href="/contact"
          className="inline-flex items-center justify-center px-12 py-5 text-lg font-bold text-[#33A04A] bg-white rounded-full hover:bg-[#ebfbf0] hover:scale-105 transition-all shadow-xl hover:shadow-2xl"
        >
          Start a Conversation
        </Link>
      </div>
    </section>
  )
}

export default NewCTA
