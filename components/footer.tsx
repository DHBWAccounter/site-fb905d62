import Link from "next/link";
import { ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#1F1F1F] text-white">
      {/* Social Icons Section */}
      <div className="py-12 px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center items-center gap-8">
            {/* Meetup */}
            <a
              href="https://www.meetup.com/Bitcoin-Meetup-Switzerland"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-[#1F1F1F] transition-colors"
              aria-label="Meetup"
            >
              <svg className="w-6 h-6" viewBox="0 0 64 64" fill="currentColor">
                <path d="M30.8,33.4c0-6.3,1.9-11.9,3.5-15.3c0.5-1.1,0.9-1.4,1.9-1.4c1.3,0,2.9,0.2,4.1,0.4 c1.1,0.2,1.5,1.6,1.7,2.5c1.2,4.5,4.7,18.7,5.5,22.4c0.2,0.8,0.6,2,0.1,2.3c-0.4,0.2-2.5,0.9-3.9,1c-0.6,0.1-1.1-0.6-1.4-1.5 c-1.5-4.6-3.5-11.8-5.2-16.6c0,3.7-0.3,10.8-0.4,12c-0.1,1.7-0.4,3.7-1.8,3.9c-1.1,0.2-2.4,0.4-4,0.4c-1.3,0-1.8-0.9-2.4-1.8 c-1-1.4-3.1-4.8-4.1-6.9c0.3,2.3,0.7,4.7,0.9,5.8c0.1,0.8,0,1.5-0.6,1.9c-1,0.7-3.2,1.4-4.1,1.4c-0.8,0-1.5-0.8-1.6-1.6 c-0.7-3.4-1.2-8-1.1-11.1c0-2.8,0-5.9,0.2-8.3c0-0.7,0.3-1.1,0.9-1.4c1.2-0.5,3-0.6,4.7-0.3c0.8,0.1,1,0.8,1.4,1.4 C26.9,25.5,28.9,29.5,30.8,33.4z"></path>
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="https://www.youtube.com/channel/UC5nVX9C2vM1dFg0BvatKEOg"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-[#1F1F1F] transition-colors"
              aria-label="YouTube"
            >
              <svg className="w-6 h-6" viewBox="0 0 64 64" fill="currentColor">
                <path d="M46.7,26c0,0-0.3-2.1-1.2-3c-1.1-1.2-2.4-1.2-3-1.3C38.3,21.4,32,21.4,32,21.4h0 c0,0-6.3,0-10.5,0.3c-0.6,0.1-1.9,0.1-3,1.3c-0.9,0.9-1.2,3-1.2,3S17,28.4,17,30.9v2.3c0,2.4,0.3,4.9,0.3,4.9s0.3,2.1,1.2,3 c1.1,1.2,2.6,1.2,3.3,1.3c2.4,0.2,10.2,0.3,10.2,0.3s6.3,0,10.5-0.3c0.6-0.1,1.9-0.1,3-1.3c0.9-0.9,1.2-3,1.2-3s0.3-2.4,0.3-4.9 v-2.3C47,28.4,46.7,26,46.7,26z M28.9,35.9l0-8.4l8.1,4.2L28.9,35.9z"></path>
              </svg>
            </a>

            {/* X (Twitter) */}
            <a
              href="https://x.com/bitcoin_ch"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-[#1F1F1F] transition-colors"
              aria-label="X"
            >
              <svg className="w-5 h-5" viewBox="0 0 64 64" fill="currentColor">
                <path d="M34.426 29.9327L43.9189 18.5H41.6694L33.4267 28.4268L26.8432 18.5H19.25L29.2055 33.5111L19.25 45.5H21.4997L30.2042 35.0169L37.1568 45.5H44.75L34.426 29.9327ZM22.3102 20.2546H25.7656L41.6704 43.8252H38.2151L22.3102 20.2546Z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Back to Top */}
      <div className="border-t border-white/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="py-4">
            <Link
              href="/#header"
              className="inline-flex items-center gap-2 text-white text-sm hover:text-white/80 transition-colors"
            >
              <ArrowUp className="w-4 h-4" />
              Back to Top
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="border-t border-white/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <nav className="py-6 flex flex-wrap gap-6 md:gap-8">
            <Link
              href="/privacy"
              className="text-white text-sm hover:text-white/80 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-white text-sm hover:text-white/80 transition-colors"
            >
              Terms and Conditions
            </Link>
          </nav>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="py-6 text-center">
            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} Bitcoin Association Switzerland. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
