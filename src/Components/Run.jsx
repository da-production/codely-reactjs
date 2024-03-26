import React from 'react'
import {  Text, useToast  } from '@chakra-ui/react'
import { useContext, useState } from 'react';
import { CodeEditorContext } from '../store/CodeEditor';
import SvgSpinnersBarsScaleFade from './Spinner'
import { Play } from 'lucide-react'
import Header from './Header';
function Run() {
    const toast = useToast()
    const {runCode,values} = useContext(CodeEditorContext);
    const [isLoading, setIsLoading] = useState();
    const handleCode = async () => {
        if(!values.selectedLanguage?.language || !values.sourceCode){
            toast({
                title: 'Error',
                description: "Please select a language and write your code",
                status: 'error',
                duration: 9000,
                isClosable: true,
            })
            return;
        }
        setIsLoading(true)
        await runCode();
        setIsLoading(false);
    }
    return (
        <>
            <Text mb={2} fontSize="lg">Output:</Text>
            <div className='flex justify-between'>
                <button
                    onClick={handleCode}
                    disabled={isLoading}
                    className='btn__  flex items-center mb-4 '
                >
                    {
                        isLoading ? <SvgSpinnersBarsScaleFade /> : <Play className='w-5 h-5' /> 
                    }
                    &nbsp; Run Code
                </button>
                <Header />
            </div>
        </>
    )
}

export default Run