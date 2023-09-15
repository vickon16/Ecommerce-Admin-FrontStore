"use client";

import { formatter } from "@/lib/utils";
import { FC} from "react";
import ClientOnly from "../ClientOnly";

interface CurrencyProps {
  value?: string | number;
}

const Currency: FC<CurrencyProps> = ({ value = 0 }) => {
  return (
    <ClientOnly>
      <div className="font-semibold">{formatter.format(Number(value))}</div>
    </ClientOnly>
  );
};

export default Currency;
