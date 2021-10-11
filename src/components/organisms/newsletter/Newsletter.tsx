import { useState } from "react";
import { useFetch } from "lib/hooks";
import { CheckIcon } from "@heroicons/react/outline";

export const Newsletter = () => {
    const { fetchPostJSON } = useFetch();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState(false);
    const [subscribed, setSubscribed] = useState(false);

    const onSubscribe = async (e: any) => {
        e.preventDefault();
        const res = await fetchPostJSON("/api/newsletter/subscribe", { email, name });

        if (res.error) {
            setError(true);
            return;
        }

        setSubscribed(true);
    };

    const perks = ["Zero spamu", "Rezygnujesz kiedy chcesz"];

    return (
        <div>
            {!subscribed ? (
                <div className="w-full">
                    <ul className="flex flex-col gap-3 mb-12">
                        {perks.map((perk, idx) => (
                            <li key={idx} className="flex gap-2 text-gray-400">
                                <CheckIcon height={20} width={20} className="text-green-400" />
                                {perk}
                            </li>
                        ))}
                    </ul>
                    <form className="flex flex-col md:flex-row gap-4" onSubmit={onSubscribe}>
                        <input
                            required
                            autoFocus
                            placeholder="Twoje imię"
                            value={name}
                            onChange={({ target }) => setName(target.value)}
                            className="border-2 rounded focus:outline-none focus:border-black text-black w-full md:w-44 p-2 h-12"
                        />
                        <input
                            required
                            type="email"
                            placeholder="Twój adres email"
                            value={email}
                            onChange={({ target }) => setEmail(target.value)}
                            className="border-2 rounded focus:outline-none focus:border-black text-black w-full md:w-80 p-2 h-12 mb-6 md:mb-0"
                        />
                        <button
                            type="submit"
                            className="bg-black focus:outline-none text-gray-100 text-center px-8 py-2 rounded h-12"
                        >
                            Zapisuję się
                        </button>
                    </form>
                    {error && (
                        <p className="text-sm text-red-500 mt-6">
                            🤷🏼‍♀️ Nie udało mi się dopisać Cię do listy. Odezwij się do mnie (kontakt
                            jest w stopce) - postaram się pomóc.
                        </p>
                    )}
                </div>
            ) : (
                <h4 className="text-2xl font-medium">Dziękuję za dołączenie! 🎉</h4>
            )}
        </div>
    );
};
