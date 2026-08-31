import { useMemo, useState } from "react";

import { motion } from "framer-motion";

import {
    Plus,
    Search,
    Pin,
    MessageSquare,
    Clock
} from "lucide-react";

import styles from "./ChatSidebar.module.css";

export default function ChatSidebar({

    conversations = [],

    selectedChat,

    onSelectChat,

    onNewChat

}) {

    const [search, setSearch] = useState("");

    const filteredChats = useMemo(() => {

        return conversations.filter((chat) =>

            chat.title

                .toLowerCase()

                .includes(search.toLowerCase())

        );

    }, [conversations, search]);

    const formatTime = (date) => {

        if (!date) return "";

        return new Date(date).toLocaleDateString([], {

            month: "short",

            day: "numeric"

        });

    };

    return (

        <div className={styles.sidebar}>

            {/* ============================= */}
            {/* New Chat */}
            {/* ============================= */}

            <button

                className={styles.newChat}

                onClick={onNewChat}

            >

                <Plus size={18} />

                <span>

                    New Conversation

                </span>

            </button>

            {/* ============================= */}
            {/* Search */}
            {/* ============================= */}

            <div className={styles.search}>

                <Search size={18} />

                <input

                    type="text"

                    value={search}

                    placeholder="Search conversations"

                    onChange={(e) =>

                        setSearch(

                            e.target.value

                        )

                    }

                />

            </div>

            {/* ============================= */}
            {/* Conversations */}
            {/* ============================= */}

            <div className={styles.section}>

                <h3>

                    Recent Chats

                </h3>

                {

                    filteredChats.length === 0 && (

                        <div className={styles.empty}>

                            No conversations

                        </div>

                    )

                }

                {

                    filteredChats.map((chat) => (

                        <motion.button

                            key={chat.id}

                            whileHover={{

                                x: 4

                            }}

                            whileTap={{

                                scale: .98

                            }}

                            onClick={() =>

                                onSelectChat?.(

                                    chat

                                )

                            }

                            className={`${styles.chat} ${

                                selectedChat?.id === chat.id

                                    ? styles.active

                                    : ""

                            }`}

                        >

                            <div

                                className={styles.chatIcon}

                            >

                                <MessageSquare

                                    size={18}

                                />

                            </div>

                            <div

                                className={styles.chatContent}

                            >

                                <h4>

                                    {

                                        chat.title ||

                                        "New Conversation"

                                    }

                                </h4>

                                <div

                                    className={styles.meta}

                                >

                                    <Clock

                                        size={12}

                                    />

                                    <span>

                                        {

                                            formatTime(

                                                chat.updatedAt

                                            )

                                        }

                                    </span>

                                </div>

                            </div>

                            {

                                chat.pinned && (

                                    <Pin

                                        size={14}

                                        className={

                                            styles.pin

                                        }

                                    />

                                )

                            }

                        </motion.button>

                    ))

                }

            </div>

        </div>

    );

}