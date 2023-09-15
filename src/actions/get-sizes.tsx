import { Size } from "@/types";

const getSizes = async (): Promise<Size[]> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/sizes`, {cache : "no-store"});

  return res.json();
};

export default getSizes;
