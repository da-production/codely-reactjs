import React from 'react'
import { Box,HStack } from '@chakra-ui/react'
import Editor, {useMonaco} from '@monaco-editor/react';
import { useState } from 'react';
import { useRef } from 'react';
import LanguageSelector from './LanguageSelector';
import Output from './Output';
import { CodeEditorContext } from '../store/CodeEditor';
import { useContext } from 'react';

import theme from '../libs/Dracula.json'
import { useEffect } from 'react';
import Header from './Header';
import Run from './Run';

import { Resizable } from 'react-resizable';
import { AppContext } from '../store/AppContext';

function CodeEditor() {
    const monaco = useMonaco();
    monaco?.editor.defineTheme('dracula', theme)
    monaco?.editor.defineTheme('dracula', theme)
    const editorRef = useRef();
    const {values,handleSourceCode} = useContext(CodeEditorContext);
    const {appValues}   = useContext(AppContext);
    const onMount = (editor) => {
        editorRef.current = editor;
        editor.focus();
    };
    
    const [width, setWidth] = useState(50);
    const [height, setHeight] = React.useState(200);

    return (
        <Box minH="100%" className='relative z-10'>
            <HStack spacing={4} color="gray.500">
                <Resizable
                    width={width}
                    height={height}
                    onResize={(event, {element, size}) => {
                        setWidth(size.width);
                    }}>
                    <Box w="50%">
                        <LanguageSelector />
                        <Box
                        className='shadow-md dark:border-gray-800 rounded-md overflow-hidden '
                        >
                            <Editor 
                                height="60vh" 
                                theme={appValues.theme} 
                                language={values.selectedLanguage?.language} 
                                onMount={onMount}
                                defaultValue='// do something ...'
                                value={values?.sourceCode} 
                                onChange={(value) => handleSourceCode(value)}
                            />
                        </Box>
                    </Box>
                </Resizable>
                <div className='w-6/12 h-full'>
                    <Run />
                    <Output langauge={values.selectedLanguage} editorRef={editorRef} />
                </div>
                
            </HStack>
        </Box>
    )
}

export default CodeEditor