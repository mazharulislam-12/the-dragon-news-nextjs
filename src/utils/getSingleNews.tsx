export const getSingleNews = async (id) => {
    try {
        const res = await fetch(`https://the-news-portal-server.vercel.app/news/${id}`, {
            cache: "no-store"
        });
        return res.json();
    } catch (error) {
        console.error("Error fetching single news:", error);
        // Handle the error appropriately (e.g., show an error message to the user)
        return null;
    }
};
