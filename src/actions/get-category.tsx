import { Category } from "@/types";

const getCategory = async (id: string): Promise<Category> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories/${id}`, {cache : "no-store"});

  return res.json();
};

export default getCategory;
