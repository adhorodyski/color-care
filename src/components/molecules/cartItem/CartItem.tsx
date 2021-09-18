import { FC } from "react";
import Image from "next/image";
import { formatCurrencyString } from "use-shopping-cart";

interface CartItemProps {
    name: string;
    price: number;
    image?: string;
    onDelete: () => void;
}

export const CartItem: FC<CartItemProps> = ({ name, price, image, onDelete }) => (
    <div className="flex p-4 gap-5">
        {image && <Image src={image} alt={name} height={100} width={100} className="rounded" />}
        <div className="flex justify-between w-full">
            <div>
                <p className="font-medium pr-8 mb-3">{name}</p>
                <button className="text-gray-400" onClick={onDelete}>
                    Usuń z koszyka
                </button>
            </div>
            <p className="font-medium text-lg text-gray-400">
                {formatCurrencyString({ value: price, currency: "pln" })}
            </p>
        </div>
    </div>
);
