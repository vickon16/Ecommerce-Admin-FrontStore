import { Product } from "@/types";

const getProduct = async (id: string): Promise<Product> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${id}`, {cache : "no-store"});

  return res.json();
};

export default getProduct;
