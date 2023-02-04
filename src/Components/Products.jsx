import useProducts from "../Hooks/useProducts";
import PlaceholderCars from "./PlaceholderCars";
import ProductList from "./ProductList";

const Products = () => {
  const [products, loading] = useProducts();

  return (
    <div className="container py-3">
      {loading ? <PlaceholderCars /> : <ProductList products={products} />}
    </div>
  );
};

export default Products;
