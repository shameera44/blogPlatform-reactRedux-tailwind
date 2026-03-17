
export const calculateReadingTime = (html) => {
    const text = html.replace(/<[^>]+>/g, ""); // remove HTML tags
    const words = text.trim().split(/\s+/).length;
    const wordsPerMinute = 200;

    return Math.ceil(words / wordsPerMinute);
};