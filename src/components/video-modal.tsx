// import { createPortal } from "react-dom";

// type PropsType = {
//   isOpen: boolean;
//   onClose: () => void;
// } & (
//   | {
//       channel: "youtube";
//       videoId: string;
//     }
//   | {
//       channel?: "custom";
//       src: string;
//     }
// );

// export default function VideoModal({ isOpen, onClose, ...props }: PropsType) {
//   if (!isOpen) return null;

//   let src = "";

//   if (props.channel === "youtube") {
//     src = `https://www.youtube.com/embed/${props.videoId}`;
//   } else {
//     src = props.src;
//   }

//   return createPortal(
//     <div className="fixed inset-0 flex items-center justify-center bg-black/60">
//       <div className="relative w-full max-w-4xl bg-gray-900">
//         <button
//           onClick={onClose}
//           className="absolute -top-2 -right-4 translate-x-full text-7xl leading-none text-white"
//         >
//           <span className="sr-only">Close modal</span>
//           &times;
//         </button>
//         <iframe width="100%" height="500" src={src} allowFullScreen />
//       </div>
//     </div>,
//     document.body,
//   );
// }

// src/components/video-modal/index.tsx
'use client'

import { useEffect } from "react";
import { createPortal } from "react-dom";

type PropsType = {
  isOpen: boolean;
  onClose: () => void;
} & (
  | {
      channel: "youtube";
      videoId: string;
    }
  | {
      channel?: "custom";
      src: string;
    }
);

export default function VideoModal({ isOpen, onClose, ...props }: PropsType) {
  useEffect(() => {
    if (!isOpen) return;

    // lock body scroll while modal open
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  let src = "";
  if ((props as any).channel === "youtube") {
    // @ts-ignore
    src = `https://www.youtube.com/embed/${(props as any).videoId}?autoplay=1&rel=0`;
  } else {
    // @ts-ignore
    src = (props as any).src;
  }

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
      role="dialog"
      aria-modal="true"
      onClick={(e) => {
        // close if clicking the backdrop (not the iframe container)
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-5xl mx-auto">
        <button
          onClick={onClose}
          className="absolute -top-6 -right-6 z-60 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-black shadow-lg"
          aria-label="Close video"
          title="Close"
        >
          ×
        </button>

        {/* video container */}
        <div className="w-full aspect-video rounded-md overflow-hidden bg-black">
          <iframe
            src={src}
            title="Video player"
            width="100%"
            height="100%"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      </div>
    </div>,
    document.body
  );
}
