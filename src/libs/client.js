import axios from "axios";
import {
    LANGUAGE_VERSIONS
} from "./constants";

export const API = axios.create({
    baseURL: "https://emkc.org/api/v2/piston",
});

export const executeCode = async (selected, sourceCode) => {
    if(selected == undefined) return true;
    const response = await API.post("/execute", {
        language: selected?.language,
        version: selected?.version,
        files: [{
            content: sourceCode,
        }, ],
    })
    .catch(erro=>{
        console.log(erro)
    })
    return response.data;
};