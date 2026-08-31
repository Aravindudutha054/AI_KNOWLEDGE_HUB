export function generateConversationTitle(question) {

    const stopWords = new Set([
        "how",
        "what",
        "when",
        "where",
        "why",
        "who",
        "do",
        "does",
        "did",
        "is",
        "are",
        "can",
        "could",
        "should",
        "would",
        "will",
        "i",
        "me",
        "my",
        "the",
        "a",
        "an",
        "for",
        "to",
        "of",
        "about",
        "tell",
        "explain"
    ]);

    const words = question
        .toLowerCase()
        .replace(/[^\w\s]/g, "")
        .split(/\s+/)
        .filter(word => !stopWords.has(word));

    return words
        .slice(0, 3)
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}