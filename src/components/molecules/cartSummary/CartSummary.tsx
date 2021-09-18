import { FC } from "react";

interface CartSummaryProps {
    price: number;
    onCheckout: () => void;
}

export const CartSummary: FC<CartSummaryProps> = ({ price, onCheckout }) => (
    <div className="flex flex-col items-end gap-3 p-4">
        <h5 className="font-medium text-xl mb-5">
            <span className="text-gray-400 mr-8">Razem</span> {price}
        </h5>
        <button className="bg-black text-gray-100 px-5 py-2 rounded" onClick={onCheckout}>
            Przejdź do kasy 🔒
        </button>
    </div>
);
