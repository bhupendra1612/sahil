import type { Metadata } from "next";
import Link from "next/link";
import { Package, Search } from "lucide-react";

export const metadata: Metadata = {
  title: "Industrial Machinery Catalog",
  description: "Browse our complete catalog of industrial packaging machines, including pouch packing, liquid filling, and sealing equipment.",
};

const DUMMY_PRODUCTS = [
  { id: 1, name: "Automatic Pouch Packaging Machine", type: "Packaging", speed: "80 units/min", image: "machine-1.jpg" },
  { id: 2, name: "Volumetric Liquid Filling Machine", type: "Filling", speed: "120 bottles/min", image: "machine-2.jpg" },
  { id: 3, name: "Multi-Head Weigher Packing Machine", type: "Weighing", speed: "60 bags/min", image: "machine-3.jpg" },
  { id: 4, name: "Continuous Band Sealer", type: "Sealing", speed: "15 meters/min", image: "machine-4.jpg" },
  { id: 5, name: "Granule Powder Packing Machine", type: "Packaging", speed: "45 pouches/min", image: "machine-5.jpg" },
  { id: 6, name: "Automated Check Weigher", type: "Inspection", speed: "200 units/min", image: "machine-6.jpg" },
];

export default function ProductsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* HEADER */}
      <section className="bg-primary py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay" />
        <div className="container relative z-10 mx-auto px-4 sm:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-primary-foreground sm:text-5xl">
            Industrial Machinery Catalog
          </h1>
          <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Engineered for precision and continuous operation. Browse our premium lineup of packaging and filling equipment.
          </p>
        </div>
      </section>

      {/* CATALOG FILTERS & GRID */}
      <section className="py-16 md:py-24 bg-muted/10">
        <div className="container mx-auto px-4 sm:px-8">
          
          {/* Filter Bar Placeholder */}
          <div className="mb-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-b pb-6">
             <div className="relative w-full sm:max-w-xs">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input 
                  type="text" 
                  placeholder="Search machinery..." 
                  className="h-10 w-full pl-9 pr-4 rounded-md border border-input bg-background/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                  disabled
                />
             </div>
             <div className="flex gap-2 w-full sm:w-auto overflow-x-auto pb-2 sm:pb-0">
                <button className="px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-md">All</button>
                <button className="px-4 py-2 border bg-background text-foreground text-sm font-medium rounded-md hover:bg-muted">Packaging</button>
                <button className="px-4 py-2 border bg-background text-foreground text-sm font-medium rounded-md hover:bg-muted">Filling</button>
                <button className="px-4 py-2 border bg-background text-foreground text-sm font-medium rounded-md hover:bg-muted">Sealing</button>
             </div>
          </div>

          {/* Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {DUMMY_PRODUCTS.map((prod) => (
              <div key={prod.id} className="group flex flex-col overflow-hidden rounded-2xl border bg-background shadow-sm transition-all hover:shadow-xl hover:-translate-y-1">
                {/* Product Image */}
                <div className="aspect-square w-full bg-muted flex flex-col items-center justify-center relative overflow-hidden">
                  <Package className="h-12 w-12 text-muted-foreground/30 mb-2" />
                  <span className="text-xs text-muted-foreground/70 bg-background/80 px-2 py-1 rounded">public/products/{prod.image}</span>
                  <div className="absolute top-2 right-2 bg-background/90 backdrop-blur-sm text-xs px-2 py-1 rounded-full font-medium border text-muted-foreground">
                    {prod.type}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent transition-opacity opacity-0 group-hover:opacity-100" />
                </div>
                
                {/* Product Info */}
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-lg font-bold text-foreground leading-tight group-hover:text-primary transition-colors">
                    {prod.name}
                  </h3>
                  
                  <div className="mt-4 flex items-center justify-between opacity-80 mt-auto">
                     <span className="text-xs font-semibold bg-muted px-2 py-1 rounded text-muted-foreground">Speed</span>
                     <span className="text-sm font-medium text-foreground">{prod.speed}</span>
                  </div>

                  <div className="mt-5 pt-4 border-t border-border/50">
                    <Link
                      href={`/contact`}
                      className="inline-flex w-full items-center justify-center rounded-md border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                    >
                      Request Specs
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </section>
    </div>
  );
}
