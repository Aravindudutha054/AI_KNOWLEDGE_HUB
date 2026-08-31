import { Plus } from "lucide-react";

import styles from "./ConversationSidebar.module.css";

export default function ConversationSidebar({

    conversations,

    selectedConversation,

    onSelect,

    onNewConversation

}) {

    return (

        <aside className={styles.sidebar}>

            <button

                className={styles.newButton}

                onClick={onNewConversation}

            >

                <Plus size={18}/>

                New Chat

            </button>

            <div className={styles.list}>

                {

                    conversations.map(conversation=>(

                        <button

                            key={conversation._id}

                            className={

                                conversation._id===selectedConversation

                                ?

                                styles.active

                                :

                                styles.item

                            }

                            onClick={()=>

                                onSelect(

                                    conversation

                                )

                            }

                        >

                            {conversation.title}

                        </button>

                    ))

                }

            </div>

        </aside>

    );

}