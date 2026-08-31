import { useRef, useEffect } from "react";

import {
    Send,
    Paperclip,
    Mic,
    X
} from "lucide-react";

import styles from "./ChatInput.module.css";

export default function ChatInput({

    value,

    onChange,

    onSend,

    loading = false

}) {

    const fileInputRef = useRef(null);

    const textareaRef = useRef(null);

    const selectedFile = useRef(null);

    /* ==========================================
       Auto Resize
    ========================================== */

    useEffect(() => {

        if (!textareaRef.current) return;

        textareaRef.current.style.height = "auto";

        textareaRef.current.style.height =
            `${textareaRef.current.scrollHeight}px`;

    }, [value]);

    /* ==========================================
       Send
    ========================================== */

    const sendMessage = () => {

        if (!value.trim() && !selectedFile.current)

            return;

        onSend?.({

            message: value,

            file: selectedFile.current

        });

        onChange("");

        selectedFile.current = null;

        if (fileInputRef.current) {

            fileInputRef.current.value = "";

        }

    };

    /* ==========================================
       Keyboard
    ========================================== */

    const handleKeyDown = (event) => {

        if (

            event.key === "Enter" &&

            !event.shiftKey

        ) {

            event.preventDefault();

            sendMessage();

        }

    };

    /* ==========================================
       Upload
    ========================================== */

    const handleFile = (event) => {

        selectedFile.current =

            event.target.files?.[0] || null;

    };

    return (

        <div className={styles.wrapper}>

            {

                selectedFile.current &&

                <div className={styles.filePreview}>

                    <Paperclip size={16} />

                    <span>

                        {selectedFile.current.name}

                    </span>

                    <button

                        onClick={() => {

                            selectedFile.current = null;

                            fileInputRef.current.value = "";

                        }}

                    >

                        <X size={16} />

                    </button>

                </div>

            }

            <div className={styles.inputBox}>

                <button

                    className={styles.iconButton}

                    onClick={() =>

                        fileInputRef.current.click()

                    }

                >

                    <Paperclip size={20} />

                </button>

                <input

                    hidden

                    type="file"

                    ref={fileInputRef}

                    onChange={handleFile}

                />

                <textarea

                    ref={textareaRef}

                    rows={1}

                    value={value}

                    placeholder="Ask anything about your department..."

                    className={styles.textarea}

                    onChange={(event) =>

                        onChange(

                            event.target.value

                        )

                    }

                    onKeyDown={handleKeyDown}

                />

                <button

                    className={styles.iconButton}

                    title="Voice Input"

                >

                    <Mic size={20} />

                </button>

                <button

                    className={styles.send}

                    disabled={loading}

                    onClick={sendMessage}

                >

                    <Send size={18} />

                </button>

            </div>

            <div className={styles.footer}>

                <span>

                    Enter to send • Shift + Enter for new line

                </span>

            </div>

        </div>

    );

}