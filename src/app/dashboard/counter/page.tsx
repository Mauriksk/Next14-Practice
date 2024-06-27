import CartCounter from "@/app/shopping-cart/components/CartCounter";

export const metadata = {
  title: "Counter",
  description: "Contador de productos",
};

const Counter = () => {
  
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos en el carrito de compra</span>

      <CartCounter value={10}/>
    </div>
  );
};

export default Counter;
