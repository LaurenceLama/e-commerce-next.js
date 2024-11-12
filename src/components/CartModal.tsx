"use client";

import Image from "next/image";

const CartModal = () => {
  const cartItems = !false;

  return (
    <div
      className="w-max absolute p-4 rounded-md bg-white top-12 right-0 flex flex-col 
        gap-6 z-20 shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
    >
      {!cartItems ? (
        <div className="r">Cart is Empty!</div>
      ) : (
        <>
          <h2 className="text-xl">Your Cart</h2>
          {/* List */}
          <div className="flex flex-col gap-8">
            {/* Item */}
            <div className="flex gap-4">
              <Image
                src=""
                alt=""
                width={72}
                height={96}
                className="object-cover rounded-md"
              />
              <div className="flex flex-col justify-between w-full">
                {/* Top */}
                <div className="">
                  {/* Title */}
                  <div className="flex items-center justify-between gap-8">
                    <h3 className="font-semibold">Product name</h3>
                    <div className="p-1 bg-gray-50 rounded-sm">$4</div>
                  </div>
                  {/* Desc */}
                  <div className="text-sm text-gray-500">available</div>
                </div>

                {/* Bottom */}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Qty. 3</span>
                  <span className="text-blue-500">Remove</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="r">
            <div className="flex items-center justify-between font-semibold">
              <span>Subtotal</span>
              <span>$4</span>
            </div>
            <p className="text-gray-500 text-sm mt-2 mb-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam,
              consectetur.
            </p>
            <div className="flex justify-between text-sm">
              <button className="rounded-md py-3 px-4 ring-1 ring-gray-300">
                View Cart
              </button>
              <button className="rounded-md py-3 px-4 bg-black text-white">
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartModal;
