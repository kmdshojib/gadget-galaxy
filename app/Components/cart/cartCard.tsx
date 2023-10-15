import React from "react";
import Button from "../Common/Button";
import Image from "next/image";
import { RiDeleteBin6Line } from "react-icons/ri";
interface ICartProps {
  imageUrl: HTMLImageElement;
  name: string | null;
  price: number | null;
}
const CartCard: React.FC<ICartProps> = ({ imageUrl, name, price }) => {
  return (
    <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-1 text-gray-100">
      {name !== null && price !== null && (
        <ul className="flex flex-col divide-y divide-gray-700">
          <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
            <div className="flex w-full space-x-2 sm:space-x-4">
              <Image
                className="border-transparent rounded"
                src={imageUrl}
                width={100}
                height={100}
                alt="Image"
              />
              <div className="flex flex-col justify-between w-full pb-4">
                <div className="flex justify-between w-full pb-2 space-x-2">
                  <div className="space-y-1">
                    <h3 className="text-xs font-semibold leadi sm:pr-8 text-gray-900">
                      {name}
                    </h3>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-semibold text-gray-800">
                      {price}$
                    </p>
                  </div>
                </div>
                <div className="flex justify-center items-center w-50">
                  <Button
                    label="Remove"
                    buttonType="button"
                    icon={RiDeleteBin6Line}
                  />
                </div>
              </div>
            </div>
          </li>
        </ul>
      )}
    </div>
  );
};

export default CartCard;
