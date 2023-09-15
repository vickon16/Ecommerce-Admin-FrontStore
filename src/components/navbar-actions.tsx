"use client";

import { ShoppingBag } from "lucide-react";
import { useRouter } from "next/navigation";

import {Button} from "@/components/ui/button";
import useCart from "@/hooks/use-cart";
import ClientOnly from "./ClientOnly";

const NavbarActions = () => {
  const router = useRouter();
  const cart = useCart();

  return ( 
    <ClientOnly>
      <div className="ml-auto flex items-center gap-x-4">
        <Button onClick={() => router.push('/cart')}className=" rounded-full px-4 py-2">
          <ShoppingBag
            size={20}
            color="white"
          />
          <span className="ml-2 text-xl font-semibold text-white">
            {cart.items.length}
          </span>
        </Button>
      </div>
    </ClientOnly>
  );
}
 
export default NavbarActions;