export default function AnimatedLineGradient() {
  return (
    <div className="relative max-w-7xl mx-auto h-2 overflow-hidden bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 animate-gradient">
      <style>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        @keyframes slideRight {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100vw);
          }
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        .animate-slide-right {
          animation: slideRight 10s linear infinite;
        }
      `}</style>
      
      {/* Animated Line */}
      <div className="absolute top-1/2 left-0 w-full h-1 bg-white  shadow-lg shadow-white/50 animate-slide-right"></div>
    </div>
  );
}