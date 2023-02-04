import { useEffect, useState } from "react";
import axios from "axios";

function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let unmounted = false;

    async function getProducts() {
      try {
        setLoading(true);
        let res = await axios.get("/products");

        if (!unmounted && res.status === 200) setProducts(res.data);
      } catch (error) {
        toast(error.response.data.error);
      } finally {
        setLoading(false);
      }
    }

    getProducts();

    return () => {
      unmounted = true;
    };
  }, []);

  return [products, loading];
}

export default useProducts;
