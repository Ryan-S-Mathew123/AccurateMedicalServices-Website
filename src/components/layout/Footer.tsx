import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { categories } from "@/data/products";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex flex-col flex-shrink-0 group inline-block">
              <img 
                src="/images/company-logo.png" 
                alt="Accurate Medical Service Logo" 
                className="h-14 w-auto object-contain brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity"
              />
            </Link>
            <p className="text-sm leading-relaxed text-slate-400 mt-4 max-w-xs">
              Medical equipment and accessories supplier based in Bengaluru, Karnataka. Established in 2008 to provide quality products and dependable service across India, Qatar, Mauritius, and the Philippines. LSE Code Certified.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {["About", "Products", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-sm hover:text-white transition-colors flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all text-teal-500" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              Product Categories
            </h3>
            <ul className="space-y-3">
              {categories.slice(0, 6).map((category) => (
                <li key={category}>
                  <Link
                    href={`/products?category=${encodeURIComponent(category)}`}
                    className="text-sm hover:text-white transition-colors line-clamp-1"
                  >
                    {category}
                  </Link>
                </li>
              ))}
              {categories.length > 6 && (
                <li>
                  <Link href="/products" className="text-sm text-teal-500 hover:text-teal-400 font-medium">
                    View All Categories &rarr;
                  </Link>
                </li>
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              Contact Us
            </h3>
            <address className="not-italic space-y-3 text-sm text-slate-400">
              <p>
                <strong className="text-slate-300 block mb-1">Accurate Medical Service</strong>
                Shettihalli Main Rd, opp. S.Muniraj, Shetty Halli<br />
                Jalahalli West, Bengaluru, Karnataka 560015
              </p>
              <p className="pt-2">
                <a href="tel:8884440025" className="hover:text-white transition-colors block mb-1">
                  8884440025
                </a>
                <a href="mailto:accuratems09@gmail.com" className="hover:text-white transition-colors block">
                  accuratems09@gmail.com
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">
            &copy; 2026 Accurate Medical Service. All rights reserved.
          </p>
          <div className="flex space-x-4 text-xs text-slate-500">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
