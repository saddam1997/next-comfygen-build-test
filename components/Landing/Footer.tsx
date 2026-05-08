export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#1A1614] py-8 text-[13px] text-white/60">
      
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        
        <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          
          {/* Left */}
          <div>
            © 2026 Comfygen Private Limited. All rights reserved.
          </div>

          {/* Right Links */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-end">
            
            <a
              href="#"
              className="text-white/70 transition-colors duration-200 hover:text-[#FF5A3C]"
            >
              Privacy Policy
            </a>

            <span className="text-white/30">·</span>

            <a
              href="#"
              className="text-white/70 transition-colors duration-200 hover:text-[#FF5A3C]"
            >
              Terms of Service
            </a>

            <span className="text-white/30">·</span>

            <a
              href="mailto:sales@comfygen.com"
              className="text-white/70 transition-colors duration-200 hover:text-[#FF5A3C]"
            >
              sales@comfygen.com
            </a>

          </div>
        </div>
      </div>
    </footer>
  );
}