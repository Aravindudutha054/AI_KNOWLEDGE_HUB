import * as pipelineApi from "../api/pipeline.api";

export const getPipeline = async () => {

    const response = await pipelineApi.getPipeline();

    return response.data.data;

};

export const reindexDocument = async id => {

    const response = await pipelineApi.reindexDocument(id);

    return response.data.data;

};

export const reindexAll = async () => {

    const response = await pipelineApi.reindexAll();

    return response.data.data;

};