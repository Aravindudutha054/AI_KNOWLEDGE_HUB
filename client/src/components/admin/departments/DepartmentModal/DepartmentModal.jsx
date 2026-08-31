import { useEffect, useState } from "react";

import { X } from "lucide-react";

import styles from "./DepartmentModal.module.css";

const emptyDepartment = {

    name: "",

    description: "",

    status: "Active"

};

export default function DepartmentModal({

    department,

    onSave,

    onClose

}) {

    const [form, setForm] = useState(emptyDepartment);

    useEffect(() => {

        if (department) {

            setForm(department);

        } else {

            setForm(emptyDepartment);

        }

    }, [department]);

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

                            department

                                ? "Edit Department"

                                : "Add Department"

                        }

                    </h2>

                    <button onClick={onClose}>

                        <X size={20} />

                    </button>

                </div>

                <form

                    className={styles.form}

                    onSubmit={handleSubmit}

                >

                    <input

                        name="name"

                        placeholder="Department Name"

                        value={form.name}

                        onChange={handleChange}

                        required

                    />

                    <textarea

                        name="description"

                        rows={4}

                        placeholder="Department Description"

                        value={form.description}

                        onChange={handleChange}

                    />

                    <select

                        name="status"

                        value={form.status}

                        onChange={handleChange}

                    >

                        <option value="Active">

                            Active

                        </option>

                        <option value="Inactive">

                            Inactive

                        </option>

                    </select>

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

                            className={styles.save}

                        >

                            Save

                        </button>

                    </div>

                </form>

            </div>

        </div>

    );

}