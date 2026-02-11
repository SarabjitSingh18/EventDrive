import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/10">
      {/* subtle glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-purple-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h2 className="text-xl font-semibold tracking-tight">
              spott<span className="text-purple-400">*</span>
            </h2>
            <p className="mt-4 text-sm text-gray-400 max-w-sm">
              Discover and create meaningful events. Built for people who care
              about real connections.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300">
              Product
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-400">
              <li>
                <Link href="/explore" className="hover:text-white transition">
                  Explore Events
                </Link>
              </li>
              <li>
                <Link href="/create" className="hover:text-white transition">
                  Create Event
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300">
              Company
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-400">
              <li>
                <Link href="/about" className="hover:text-white transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-white transition">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300">
              Legal
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-400">
              <li>
                <Link href="/privacy" className="hover:text-white transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-8">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Spott. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-gray-400">
            <Link href="#" className="hover:text-white transition text-sm">
              Twitter
            </Link>
            <Link href="#" className="hover:text-white transition text-sm">
              GitHub
            </Link>
            <Link href="#" className="hover:text-white transition text-sm">
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
