"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

import { Button } from "@/components/ui/button";
import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";
import { toast } from "react-hot-toast";
import ClientOnly from "../ClientOnly";

const Summary = () => {
  const searchParams = useSearchParams();
  const {items, removeAll} = useCart();


  useEffect(() => {
    if (searchParams.get("success")) {
      toast.success("Payment completed.");
      removeAll();
    }

    if (searchParams.get("canceled")) {
      toast.error("Something went wrong.");
    }
  }, [searchParams, removeAll]);

  const totalPrice = items.reduce((total, item) => {
    return total + Number(item.price);
  }, 0);

  const onCheckout = async () => {
    const productIds = items.map((item) => item.id);
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productIds,
        }),
        cache: "no-store",
      }
    );
    const data = await response.json();

    window.location = data.url;
  };

  return (
    <ClientOnly>
      <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
        <h2 className="text-lg font-semibold text-gray-900">Order summary</h2>
        <div className="mt-6 flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-base font-medium text-gray-900">Order total</div>
          <Currency value={totalPrice} />
        </div>

        <Button
          onClick={onCheckout}
          disabled={items.length === 0}
          className="w-full mt-6"
        >
          Checkout
        </Button>
      </div>
    </ClientOnly>
  );
};


export default Summary;
