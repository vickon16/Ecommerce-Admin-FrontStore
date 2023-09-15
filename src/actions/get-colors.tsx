import { Color } from "@/types";

const getColors = async (): Promise<Color[]> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/colors`, {cache : "no-store"});

  return res.json();
};

export default getColors;
