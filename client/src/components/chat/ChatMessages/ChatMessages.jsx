import { useEffect, useRef } from "react";

import ChatMessage from "../ChatMessage/ChatMessage";
import TypingIndicator from "../TypingIndicator/TypingIndicator";

import styles from "./ChatMessages.module.css";

export default function ChatMessages({ messages, loading }) {
    const bottomRef = useRef(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, loading]);

    return (
        <div className={styles.container}>
            {messages.map((message, index) => (
    <ChatMessage
        key={message._id ?? message.id ?? index}
        message={message}
    />
))}
            {loading && <TypingIndicator />}

            <div ref={bottomRef} />
        </div>
    );
}
