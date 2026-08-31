import { useEffect, useState } from "react";

import { Upload, X } from "lucide-react";

import styles from "./UploadDocumentModal.module.css";

const emptyDocument = {

    name: "",

    file: null

};

export default function UploadDocumentModal({

    document,

    onSave,

    onClose

}) {

    const [form, setForm] = useState(emptyDocument);

    useEffect(() => {

        if (document) {

            setForm({

                ...document,

                file: null

            });

        }

        else {

            setForm(emptyDocument);

        }

    }, [document]);

    const handleChange = (event) => {

        const {

            name,

            value

        } = event.target;

        setForm(previous => ({

            ...previous,

            [name]: value

        }));

    };

    const handleFile = (event) => {

        setForm(previous => ({

            ...previous,

            file: event.target.files[0]

        }));

    };

    const handleSubmit = (event) => {

        event.preventDefault();

        onSave?.(form);

    };

    return (

        <div className={styles.overlay}>

            <div className={styles.modal}>

                <div className={styles.header}>

                    <h2>

                        {

                            document

                                ? "Edit Document"

                                : "Upload Document"

                        }

                    </h2>

                    <button onClick={onClose}>

                        <X size={20}/>

                    </button>

                </div>

                <form

                    className={styles.form}

                    onSubmit={handleSubmit}

                >

                    <input

                        name="name"

                        placeholder="Document Name"

                        value={form.name}

                        onChange={handleChange}

                        required

                    />

                    <label

                        className={styles.uploadBox}

                    >

                        <Upload size={24}/>

                        <span>

                            {

                                form.file

                                    ?

                                    form.file.name

                                    :

                                    "Choose PDF / DOC / DOCX"

                            }

                        </span>

                        <input

                            type="file"

                            accept=".pdf,.doc,.docx"

                            hidden

                            onChange={handleFile}

                        />

                    </label>

                    <div className={styles.footer}>

                        <button

                            type="button"

                            className={styles.cancel}

                            onClick={onClose}

                        >

                            Cancel

                        </button>

                        <button

                            type="submit"

                            className={styles.upload}

                        >

                            Upload

                        </button>

                    </div>

                </form>

            </div>

        </div>

    );

}