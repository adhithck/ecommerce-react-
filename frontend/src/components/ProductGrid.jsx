import ProductCard from "./ProductCard";

export default function ProductGrid({ products }) {
  return (
    <section className="mt-8">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-white font-semibold text-sm">
            Today’s featured products
          </h2>
          <p className="text-xs text-gray-400">
            Data streaming directly from Express API
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </section>
  );
}
