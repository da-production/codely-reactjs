import { useState,useEffect } from "react";
import { createContext } from "react";
import { API, executeCode } from "../libs/client";
import { useReducer } from "react";
import CodeReducerDispatcher from "../reducers/CodeReducerDispatcher";


export const CodeEditorContext = createContext({
    languages:[],
    selectedLanguage: undefined,
    sourceCode: undefined,
    output: undefined,
    stdoutput: undefined,
    error: undefined,
    code: undefined,
    signal:undefined,
    runCode: async () => {},
    onSelect: (langauge) => {}
});

const CodeEditorProvider = ({children}) => {
    const [codeState,codeDispatch] = useReducer(CodeReducerDispatcher,{
        languages:[],
        selectedLanguage: undefined,
        sourceCode: undefined,
        output: undefined,
        stdout: undefined,
        stderr: undefined,
        code: undefined,
        signal: undefined,
    })
    const [values, setValues] = useState({
        languages:[],
        selectedLanguage: undefined,
        sourceCode: undefined,
        output: undefined,
        stdout: undefined,
        stderr: undefined,
        code: undefined,
        signal: undefined,
    })
    
    useEffect(()=>{
        const loadLanguages = async () => {
            const response = await API.get("/runtimes");
            setValues({
                ...values,
                languages: response.data
            })
        }
        loadLanguages();
    },[]);

    const runCode = async () => {
        setValues((p)=>{
            return {
                ...values,
                output: undefined,
                code: undefined,
            }
        })
        const {run:result} = await executeCode(values.selectedLanguage, values.sourceCode)
        setValues((p)=>{
            return {
                ...values,
                output: result.output,
                stdout:result.stdout,
                stderr:result.stderr,
                signal:result.signal,
                code: result.code,
            }
        })
    }

    const onSelect = (langauge) => {
        setValues(p=>{
            return {
                ...values,
                selectedLanguage: langauge
            }
        })
    }

    const handleSourceCode = (sourceCode) => {
        codeDispatch({
            type: 'UPDATE_SOURCECODE',
            payload: sourceCode
        })
        setValues(p=>{
        return {
            ...values,
            sourceCode: sourceCode
            }
        })
    }

    return (
        <CodeEditorContext.Provider value={{values,runCode,onSelect,handleSourceCode}}>
            {children}
        </CodeEditorContext.Provider>
    )
}
export default CodeEditorProvider;