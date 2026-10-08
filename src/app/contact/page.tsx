"use client";

import { useState, Suspense, useEffect } from "react";
import { CheckCircle2, MapPin, Phone, Mail } from "lucide-react";
import { useSearchParams } from "next/navigation";

function ContactForm() {
  const searchParams = useSearchParams();
  const [productParam, setProductParam] = useState("");
  
  useEffect(() => {
    const p = searchParams.get("product");
    if (p) setProductParam(p);
  }, [searchParams]);

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real application, form data would be sent to an API endpoint here.
  };

  if (submitted) {
    return (
      <div className="text-center py-16">
        <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Thank you. Your enquiry has been recorded.</h2>
        <p className="text-slate-600 mb-8 max-w-md mx-auto">
          Our team will review your requirements and get back to you shortly.
        </p>
        <button 
          onClick={() => setSubmitted(false)}
          className="text-blue-700 font-medium hover:text-blue-800"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-slate-700">Full Name</label>
          <input required type="text" id="name" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-900 focus:border-blue-900 outline-none transition-all" placeholder="John Doe" />
        </div>
        <div className="space-y-2">
          <label htmlFor="company" className="text-sm font-medium text-slate-700">Company / Organization</label>
          <input required type="text" id="company" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-900 focus:border-blue-900 outline-none transition-all" placeholder="City Hospital" />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-slate-700">Email Address</label>
          <input required type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-900 focus:border-blue-900 outline-none transition-all" placeholder="john@example.com" />
        </div>
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium text-slate-700">Phone Number</label>
          <input required type="tel" id="phone" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-900 focus:border-blue-900 outline-none transition-all" placeholder="+91 98765 43210" />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="product" className="text-sm font-medium text-slate-700">Product / Requirement</label>
        <input 
          type="text" 
          id="product" 
          value={productParam}
          onChange={(e) => setProductParam(e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-900 focus:border-blue-900 outline-none transition-all" 
          placeholder="e.g. ICU Cot, Patient Monitor" 
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-slate-700">Message</label>
        <textarea required id="message" rows={5} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-900 focus:border-blue-900 outline-none transition-all resize-none" placeholder="Please provide details about your requirement..."></textarea>
      </div>

      <button type="submit" className="w-full py-4 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-lg transition-colors shadow-sm">
        Submit Enquiry
      </button>
    </form>
  );
}

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full pb-24">
      <section className="bg-slate-50 border-b border-slate-200 pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6">
              Let's Discuss Your Requirement
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Tell us what medical equipment or accessories you are looking for. Our team can help you with your requirement.
            </p>
          </div>
        </div>
      </section>

      <section className="pt-16 lg:pt-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5 space-y-12">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-blue-50 text-blue-900 rounded-full flex items-center justify-center shrink-0 mr-4">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Corporate Office</h3>
                      <p className="text-slate-600">
                        Accurate Medical Service<br />
                        Shettihalli Main Rd, opp. S.Muniraj, Shetty Halli<br />
                        Jalahalli West, Bengaluru, Karnataka 560015
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-blue-50 text-blue-900 rounded-full flex items-center justify-center shrink-0 mr-4">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Phone</h3>
                      <p className="text-slate-600">
                        <a href="tel:8884440025" className="hover:text-blue-700 transition-colors">
                          8884440025
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-blue-50 text-blue-900 rounded-full flex items-center justify-center shrink-0 mr-4">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Email</h3>
                      <p className="text-slate-600">
                        <a href="mailto:accuratems09@gmail.com" className="hover:text-blue-700 transition-colors">
                          accuratems09@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <Suspense fallback={<div className="h-[400px] flex items-center justify-center">Loading form...</div>}>
                  <ContactForm />
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
