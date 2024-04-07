import React, { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

const CheckoutButton = ({ product, quantity }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCheckout = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const parsePrice = (priceString) => {
    return parseFloat(priceString.replace(/[^\d.]/g, ''));
  };

  const totalAmount = product && quantity && !isNaN(parsePrice(product.price))
    ? (quantity * parsePrice(product.price)).toFixed(2)
    : 0;

  return (
    <>
      <button
        onClick={handleCheckout}
        className="text-2xl text-white font-medium uppercase mb-8 px-5 py-4 rounded-md bg-sky-700 hover:bg-sky-800 mt-4 w-96 lg:w-96"
      >
        Checkout
      </button>

      <Transition appear show={isOpen} as={React.Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block align-middle bg-white rounded-lg p-8 text-left overflow-hidden shadow-xl transform transition-all my-8 w-full max-w-md">
                <Dialog.Title
                  as="h3"
                  className="text-2xl font-medium leading-6 text-gray-900"
                >
                  Checkout Confirmation
                </Dialog.Title>
                <div className="mt-4">
                  {product ? (
                    <p className="text-lg text-gray-700">
                      You have selected {quantity} of {product.product} for GHS {totalAmount}.
                    </p>
                  ) : (
                    <p className="text-lg text-gray-700">
                      Please select a product.
                    </p>
                  )}
                </div>
                <div className="mt-6">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-sky-500 border border-transparent rounded-md hover:bg-sky-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-500"
                    onClick={closeModal}
                  >
                    Close
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default CheckoutButton;
