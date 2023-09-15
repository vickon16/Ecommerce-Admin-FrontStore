import { Category } from "@/types";


const getCategories = async (): Promise<Category[]> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories`, {cache : "no-store"});
  return res.json();
};

export default getCategories;

