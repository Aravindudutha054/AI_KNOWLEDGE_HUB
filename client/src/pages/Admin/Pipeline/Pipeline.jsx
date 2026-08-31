import {
    useEffect,
    useMemo,
    useState
} from "react";


import PipelineHome from "../../../components/admin/pipeline/PipelineHome";

import * as pipelineService from "../../../services/pipeline.service";

export default function Pipeline() {

    const [pipeline, setPipeline] = useState(null);

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        loadPipeline();

    }, []);

    const [search, setSearch] = useState("");
const [status, setStatus] = useState("");

const filteredDocuments = useMemo(() => {

    if (!pipeline) return [];

    return pipeline.documents.filter(doc => {

        const matchesSearch =

            doc.name
                ?.toLowerCase()
                .includes(search.toLowerCase()) ||

            doc.originalName
                ?.toLowerCase()
                .includes(search.toLowerCase());

        const matchesStatus =

            !status ||

            doc.status === status;

        return matchesSearch && matchesStatus;

    });

}, [

    pipeline,

    search,

    status

]);

    const filteredSummary = useMemo(() => {

    return {

        uploaded: filteredDocuments.length,

        processing: filteredDocuments.filter(
            doc => doc.status === "Processing"
        ).length,

        indexed: filteredDocuments.filter(
            doc => doc.status === "Indexed"
        ).length,

        failed: filteredDocuments.filter(
            doc => doc.status === "Failed"
        ).length,

        queue: filteredDocuments.filter(
            doc => doc.status === "Uploaded"
        ).length

    };

}, [filteredDocuments]);

    const loadPipeline = async () => {

        setLoading(true);

        try {

            const data = await pipelineService.getPipeline();

            setPipeline(data);

        }

        catch (error) {

            console.error(error);

        }

        finally {

            setLoading(false);

        }

    };

    return (

        <PipelineHome
    data={
    pipeline
        ? {
            ...pipeline,
            summary: filteredSummary,
            documents: filteredDocuments
        }
        : null
}
    loading={loading}
    onRefresh={loadPipeline}
    search={search}
    status={status}
    setSearch={setSearch}
    setStatus={setStatus}
/>

    );

}