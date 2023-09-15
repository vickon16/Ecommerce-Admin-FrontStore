
import CartClient from "@/components/cart/cart-client";
import Summary from "@/components/cart/summary";
import Container from "@/components/ui/container";

const CartPage = async () => {
  return (
    <Container>
      <div className="px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-black">Shopping Cart</h1>
        <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
          <CartClient />
          <Summary />
        </div>
      </div>
    </Container>
  );
};

export default CartPage;
