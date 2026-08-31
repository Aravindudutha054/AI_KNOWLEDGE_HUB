import { motion } from "framer-motion";

import SearchBar from "../SearchBar";
import CategoryFilter from "../CategoryFilter";
import DepartmentFilter from "../DepartmentFilter";
import DocumentGrid from "../DocumentGrid";
import RecentKnowledge from "../RecentKnowledge";
import PopularKnowledge from "../PopularKnowledge";
import EmptyKnowledge from "../EmptyKnowledge";

import styles from "./KnowledgeHome.module.css";

const container = {

    hidden: {},

    show: {

        transition: {

            staggerChildren: .08

        }

    }

};

const item = {

    hidden: {

        opacity: 0,

        y: 20

    },

    show: {

        opacity: 1,

        y: 0,

        transition: {

            duration: .45

        }

    }

};

export default function KnowledgeHome({

    user,

    loading,

    search,

    category,

    department,

    documents,

    recentDocuments,

    popularDocuments,

    onSearch,

    onCategoryChange,

    onDepartmentChange,

    onOpenDocument,

    onDownload

}) {

    return (

        <motion.div

            variants={container}

            initial="hidden"

            animate="show"

            className={styles.container}

        >

            {/* ====================================== */}
            {/* Header */}
            {/* ====================================== */}

            <motion.div

                variants={item}

                className={styles.header}

            >

                <div>

                    <h1>

                        Knowledge Base

                    </h1>

                    <p>

                        Browse approved enterprise knowledge and department documentation.

                    </p>

                </div>

            </motion.div>

            {/* ====================================== */}
            {/* Search */}
            {/* ====================================== */}

            <motion.div

                variants={item}

                className={styles.searchSection}

            >

                <SearchBar

                    value={search}

                    onChange={onSearch}

                />

            </motion.div>

            {/* ====================================== */}
            {/* Filters */}
            {/* ====================================== */}

            <motion.div

                variants={item}

                className={styles.filters}

            >

                <CategoryFilter

                    value={category}

                    onChange={onCategoryChange}

                />

                <DepartmentFilter

                    value={department}

                    onChange={onDepartmentChange}

                />

            </motion.div>

            {/* ====================================== */}
            {/* Documents */}
            {/* ====================================== */}

            <motion.div

                variants={item}

                className={styles.documents}

            >

                {

                    documents.length > 0

                        ?

                        <DocumentGrid

                            documents={documents}

                            loading={loading}

                            onOpen={onOpenDocument}

                            onDownload={onDownload}

                        />

                        :

                        <EmptyKnowledge />

                }

            </motion.div>

            {/* ====================================== */}
            {/* Bottom */}
            {/* ====================================== */}

            <motion.div

                variants={item}

                className={styles.bottomGrid}

            >

                <div className={styles.leftColumn}>

                    <RecentKnowledge

                        documents={recentDocuments}

                        loading={loading}

                        onOpen={onOpenDocument}

                    />

                </div>

                <div className={styles.rightColumn}>

                    <PopularKnowledge

                        documents={popularDocuments}

                        loading={loading}

                        onOpen={onOpenDocument}

                    />

                </div>

            </motion.div>

        </motion.div>

    );

}