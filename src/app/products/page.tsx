"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Search, X, ChevronRight, Filter } from "lucide-react";
import { products, categories, Product } from "@/data/products";
import { cn } from "@/lib/utils";

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            product.model.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === "All" || product.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  return (
    <div className="flex flex-col w-full pb-24 bg-slate-50 min-h-screen">
      {/* Header */}
      <section className="bg-slate-900 text-white pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Products Catalogue
            </h1>
            <p className="text-xl text-slate-300">
              Browse our comprehensive range of medical equipment and accessories.
            </p>
          </div>
        </div>
      </section>

      <section className="pt-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar / Filters */}
            <div className="lg:w-1/4">
              {/* Mobile Filter Toggle */}
              <div className="lg:hidden mb-4">
                <button
                  onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
                  className="flex items-center justify-between w-full px-4 py-3 bg-white border border-slate-200 rounded-lg font-medium text-slate-700 shadow-sm"
                >
                  <span className="flex items-center">
                    <Filter className="w-5 h-5 mr-2" />
                    Categories
                  </span>
                  <ChevronRight className={cn("w-5 h-5 transition-transform", mobileFilterOpen && "rotate-90")} />
                </button>
              </div>

              <div className={cn("bg-white border border-slate-200 rounded-xl p-6 shadow-sm sticky top-28", !mobileFilterOpen && "hidden lg:block")}>
                <h2 className="text-lg font-bold text-slate-900 mb-4 hidden lg:block">Categories</h2>
                <ul className="space-y-2">
                  <li>
                    <button
                      onClick={() => {
                        setActiveCategory("All");
                        setMobileFilterOpen(false);
                      }}
                      className={cn(
                        "w-full text-left px-3 py-2 rounded-md transition-colors text-sm font-medium",
                        activeCategory === "All" 
                          ? "bg-blue-50 text-blue-900" 
                          : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                      )}
                    >
                      All Products
                    </button>
                  </li>
                  {categories.map((category) => (
                    <li key={category}>
                      <button
                        onClick={() => {
                          setActiveCategory(category);
                          setMobileFilterOpen(false);
                        }}
                        className={cn(
                          "w-full text-left px-3 py-2 rounded-md transition-colors text-sm font-medium",
                          activeCategory === category 
                            ? "bg-blue-50 text-blue-900" 
                            : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                        )}
                      >
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:w-3/4">
              {/* Search Bar */}
              <div className="relative mb-8">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-slate-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search products by name or code..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-10 py-4 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-900 focus:border-blue-900 outline-none transition-all shadow-sm text-slate-900 placeholder:text-slate-400"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-600"
                  >
                    <X className="h-5 w-5" />
                  </button>
                )}
              </div>

              {/* Product Grid */}
              {filteredProducts.length > 0 ? (
                <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <Link
                      key={product.id}
                      href={`/products/${product.id}`}
                      className="group bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col"
                    >
                      <div className="aspect-square bg-slate-100 relative overflow-hidden flex items-center justify-center p-6">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                          onError={(e) => {
                            // Fallback to placeholder pattern
                            e.currentTarget.style.display = 'none';
                            if (e.currentTarget.parentElement) {
                               e.currentTarget.parentElement.innerHTML = '<div class="w-full h-full bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px] opacity-40"></div><span class="absolute text-slate-400 text-xs font-medium uppercase tracking-wider">Image Coming Soon</span>';
                            }
                          }}
                        />
                      </div>
                      <div className="p-5 flex flex-col flex-grow">
                        <div className="text-xs font-semibold text-teal-700 mb-2 uppercase tracking-wider">
                          {product.category}
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-blue-900 transition-colors line-clamp-2">
                          {product.name}
                        </h3>
                        <p className="text-sm text-slate-500 mb-4 line-clamp-2">
                          Code: {product.model}
                        </p>
                        <div className="mt-auto pt-4 border-t border-slate-100 flex items-center text-blue-700 font-medium text-sm group-hover:text-blue-900">
                          View Details
                          <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="bg-white border border-slate-200 rounded-xl p-12 text-center shadow-sm">
                  <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-400">
                    <Search className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">No products found</h3>
                  <p className="text-slate-500 mb-6">
                    We couldn't find any products matching your search or filter criteria.
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery("");
                      setActiveCategory("All");
                    }}
                    className="px-6 py-2 bg-slate-900 text-white rounded-md font-medium hover:bg-slate-800 transition-colors"
                  >
                    Clear Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
