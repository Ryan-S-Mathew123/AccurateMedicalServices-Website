import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Check, ChevronRight } from "lucide-react";
import { products } from "@/data/products";

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  return (
    <div className="flex flex-col w-full pb-24 bg-slate-50 min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-slate-200 pt-24 pb-4">
        <div className="container mx-auto px-4 md:px-6">
          <nav className="flex text-sm text-slate-500 font-medium">
            <Link href="/products" className="hover:text-blue-900 flex items-center">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Products
            </Link>
          </nav>
        </div>
      </div>

      <section className="pt-8 lg:pt-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Product Image */}
              <div className="p-8 lg:p-12 bg-slate-50 border-b lg:border-b-0 lg:border-r border-slate-200 flex items-center justify-center relative min-h-[400px]">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full max-w-md h-auto object-contain mix-blend-multiply"
                />
              </div>

              {/* Product Info */}
              <div className="p-8 lg:p-12 flex flex-col">
                <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
                  {product.name}
                </h1>
                <p className="text-slate-500 font-medium mb-8">
                  Model / Code: {product.model}
                </p>
                
                <div className="prose prose-slate mb-10">
                  <p>{product.description}</p>
                </div>

                <div className="mb-10 flex-grow">
                  <h3 className="text-lg font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">
                    Specifications
                  </h3>
                  <ul className="space-y-3">
                    {Object.entries(product.specifications)
                      .filter(([key]) => key.toLowerCase() !== "brand" && key.toLowerCase() !== "category")
                      .map(([key, value]) => (
                      <li key={key} className="flex items-start">
                        <Check className="w-5 h-5 text-blue-600 mr-3 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold text-slate-900">{key}:</span>{" "}
                          <span className="text-slate-600">{value}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8 border-t border-slate-100 mt-auto">
                  <Link
                    href={`/contact?product=${encodeURIComponent(product.name)}`}
                    className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 text-base font-medium text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors shadow-sm"
                  >
                    Enquire About This Product
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
