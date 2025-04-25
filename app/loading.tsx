import React from 'react';

const Loading = () => {
  const styleString = 
   `@keyframes fadeInScale {
      0% { opacity: 0; transform: scale(0.8); }
      100% { opacity: 1; transform: scale(1); }
    }

    @keyframes slideUp {
      0% { opacity: 0; transform: translateY(20px); }
      100% { opacity: 1; transform: translateY(0); }
    }

    @keyframes fadeOut {
      0% { opacity: 1; }
      100% { opacity: 0; }
    }

    .loading-container {
      animation: fadeOut 1s ease-in forwards;
      animation-delay: 4s;
    }

    .animate-fade-in-scale {
      animation: fadeInScale 2s ease-out forwards;
    }

    .animate-slide-up-title {
      animation: slideUp 2s ease-out 1s forwards;
    }`;

  return (
    <div>
      <style>{styleString}</style>
      <div
        className="flex flex-col items-center justify-center h-screen bg-gray-100 loading-container"
      >
        <div className="flex flex-col items-center">
          <div className="flex gap-2 mb-4 animate-fade-in-scale">
            <span className="text-6xl text-black">
              ADesign Studio
            </span>
          </div>
          <h2 className="text-4xl text-black font-julietta opacity-0 animate-slide-up-title">Adithya Devi</h2>
        </div>
      </div>
    </div>
  );
};

export default Loading;