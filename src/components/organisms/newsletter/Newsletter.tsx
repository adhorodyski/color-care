import { useState } from "react";
import { useFetch } from "lib/hooks";
import { CheckIcon } from "@heroicons/react/outline";

export const Newsletter = () => {
    const { fetchPostJSON } = useFetch();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subscribed, setSubscribed] = useState(false);

    const onSubscribe = async (e: any) => {
        e.preventDefault();
        await fetchPostJSON("/api/newsletter/subscribe", { email, name });
        // TODO add error handling
        setSubscribed(true);
    };

    const perks = ["Zero spamu.", "Rezygnujesz kiedy chcesz."];

    return (
        <div className="flex justify-center">
            {!subscribed ? (
                <div className="w-full md:w-auto">
                    <ul className="flex flex-col gap-3 mb-12">
                        {perks.map((perk, idx) => (
                            <li key={idx} className="flex gap-2 text-gray-400">
                                <CheckIcon height={20} width={20} className="text-green-400" />
                                {perk}
                            </li>
                        ))}
                    </ul>
                    <form
                        className="flex flex-col md:flex-row md:items-end gap-6 md:gap-4"
                        onSubmit={onSubscribe}
                    >
                        <div className="flex flex-col">
                            <label className="text-sm text-gray-400">Imię</label>
                            <input
                                autoFocus
                                value={name}
                                placeholder="Maria"
                                className="border-2 rounded focus:outline-none focus:border-black text-black w-full md:w-44 p-2 h-12"
                                onChange={({ target }) => setName(target.value)}
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-sm text-gray-400">Email</label>
                            <input
                                type="email"
                                value={email}
                                placeholder="miwanska@mail.com"
                                className="border-2 rounded focus:outline-none focus:border-black text-black w-full md:w-80 p-2 h-12"
                                onChange={({ target }) => setEmail(target.value)}
                            />
                        </div>
                        <button
                            className="bg-black text-gray-100 text-center px-8 py-2 h-12 rounded"
                            type="submit"
                        >
                            Dołącz
                        </button>
                    </form>
                </div>
            ) : (
                <h4 className="text-2xl font-medium">Dziękuję za dołączenie do newslettera! 🎉</h4>
            )}
        </div>
    );
};
