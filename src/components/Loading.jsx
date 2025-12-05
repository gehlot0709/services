import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Orbital loader */}
      <div className="relative w-32 h-32">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
            style={{
              top: `${Math.sin((i * Math.PI) / 4) * 50 + 50}%`,
              left: `${Math.cos((i * Math.PI) / 4) * 50 + 50}%`,
              animation: `orbit 2s linear infinite`,
              animationDelay: `${i * -0.25}s`,
              transformOrigin: "center",
            }}
          />
        ))}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"></div>
        </div>
      </div>

      {/* Text with typewriter effect */}
      <div className="mt-8 text-center">
        <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
          <span className="inline-block animate-typing overflow-hidden whitespace-nowrap border-r-4 border-purple-500 pr-1">
            Loading your experience
          </span>
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          Please wait a moment...
        </p>
      </div>

      <style jsx>{`
        @keyframes orbit {
          0% {
            transform: rotate(0deg) translateX(40px) rotate(0deg);
          }
          100% {
            transform: rotate(360deg) translateX(40px) rotate(-360deg);
          }
        }

        @keyframes typing {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        .animate-typing {
          animation: typing 3s steps(40, end) infinite;
        }
      `}</style>
    </div>
  );
};

export default Loading;
