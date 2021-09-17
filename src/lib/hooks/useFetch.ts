export const useFetch = () => {
    const fetchGetJSON = async (url: string) => {
        try {
            const res = await fetch(url);
            return await res.json();
        } catch (err: any) {
            throw new Error(err.message);
        }
    };

    const fetchPostJSON = async (url: string, data?: {}) => {
        try {
            const res = await fetch(url, {
                method: "POST",
                mode: "cors",
                cache: "no-cache",
                credentials: "same-origin",
                headers: {
                    "Content-Type": "application/json",
                },
                redirect: "follow",
                referrerPolicy: "no-referrer",
                body: JSON.stringify(data || {}),
            });
            return await res.json();
        } catch (err: any) {
            throw new Error(err.message);
        }
    };

    return { fetchGetJSON, fetchPostJSON };
};
