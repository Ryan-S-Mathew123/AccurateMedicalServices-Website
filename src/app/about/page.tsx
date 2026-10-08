import { Metadata } from "next";
import { motion } from "framer-motion";

export const metadata: Metadata = {
  title: "About Us | Accurate Medical Service",
  description: "Learn about Accurate Medical Service, established in 2008 in Bengaluru, supplying quality medical equipment across India and internationally.",
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

// Server component — but we use CSS animations for simplicity
export default function AboutPage() {
  return (
    <div className="flex flex-col w-full pb-24">

      {/* Hero */}
      <section className="bg-slate-900 text-white pt-24 pb-16 lg:pt-32 lg:pb-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-cover bg-center" style={{ backgroundImage: "url('/images/front-page-bg.png')" }} />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <p className="text-teal-400 text-xs font-bold uppercase tracking-[0.2em] mb-4">Est. 2008 · Bengaluru</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-[1.1]">
              About Accurate<br />Medical Service
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Supplying quality healthcare products with a commitment to dependable service and consistent supply since 2008.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="pt-20 lg:pt-28 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <div className="aspect-[4/5] rounded-2xl bg-slate-100 overflow-hidden shadow-lg border border-slate-200 relative flex items-center justify-center">
                <div className="w-full h-full bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px] opacity-60 absolute inset-0" />
                <span className="relative text-slate-400 text-sm font-medium">Office / Warehouse Photo</span>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-10">
              <div>
                <p className="text-teal-600 text-xs font-bold uppercase tracking-[0.2em] mb-3">Our Story</p>
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">Who We Are</h2>
                <div className="space-y-5 text-slate-600 text-lg leading-relaxed">
                  <p>
                    Accurate Medical Service began its business operations in 2008 as a sole proprietorship firm. From its operational headquarters in Bengaluru, Karnataka, India, the company is engaged in trading and supplying medical equipment and accessories to customers across India and internationally.
                  </p>
                  <p>
                    Our comprehensive product range includes medical consumables, hospital accessories, surgical instruments, ventilator circuits, and other critical medical equipment and accessories.
                  </p>
                  <p>
                    The company focuses on supplying quality healthcare products at competitive prices while building long-term relationships through dependable service and consistent supply.
                  </p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-8 pt-8 border-t border-slate-100">
                <div className="pl-4 border-l-4 border-teal-400">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Our Vision</h3>
                  <p className="text-slate-500 leading-relaxed text-sm">
                    To be recognized as a leading medical supplier company while developing and supplying complementary products and services that add significant value to customers.
                  </p>
                </div>
                <div className="pl-4 border-l-4 border-blue-900">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Our Mission</h3>
                  <p className="text-slate-500 leading-relaxed text-sm">
                    To provide quality products and dependable service that meet our customers' needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="mt-20 lg:mt-28 pt-20 pb-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <p className="text-teal-600 text-xs font-bold uppercase tracking-[0.2em] mb-3">Leadership</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Guided by Experience</h2>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/5] max-w-xs mx-auto rounded-2xl bg-slate-200 overflow-hidden shadow-lg relative flex items-end">
              <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:20px_20px] opacity-50" />
              <div className="relative z-10 p-5 bg-white/85 backdrop-blur w-full border-t border-slate-200">
                <p className="font-bold text-slate-900">Mr. Vijay AJ</p>
                <p className="text-sm text-slate-500">Proprietor</p>
              </div>
            </div>

            <div>
              <p className="text-2xl font-extrabold text-slate-900 mb-1">Mr. Vijay AJ</p>
              <p className="text-teal-600 font-semibold text-sm mb-6 uppercase tracking-wider">Proprietor</p>
              <p className="text-slate-600 text-lg leading-relaxed border-l-4 border-teal-400 pl-6">
                Mr. Vijay AJ oversees the operations of Accurate Medical Service and provides leadership and direction to the organization. His domain knowledge, decision-making, dedication and commitment to ethical business practices have contributed to the development of the company.
              </p>
              <div className="mt-8 bg-white rounded-xl p-5 border border-slate-100 shadow-sm">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">At a Glance</p>
                <div className="space-y-2 text-sm text-slate-700">
                  <p><span className="font-semibold">Founded:</span> 2008</p>
                  <p><span className="font-semibold">HQ:</span> Bengaluru, Karnataka</p>
                  <p><span className="font-semibold">Serving:</span> India · Qatar · Mauritius · Philippines</p>
                  <p><span className="font-semibold">Certification:</span> LSE Code Certified</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
