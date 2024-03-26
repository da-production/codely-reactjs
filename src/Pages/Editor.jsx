import React from 'react'
import CodeEditorProvider from '../store/CodeEditor'
import { Box } from '@chakra-ui/react'
import CodeEditor from '../Components/CodeEditor'
import Footer from '../Components/Footer'
function Editor() {
    
    return (
        <CodeEditorProvider>
            <Box minH="100vh" className='dark:bg-[#1b252a] dark:bg-gradient-to-t dark:from-[#1b252a] dark:via-[#24343b] dark:to-[#1b252a] bg-gradient-to-tr from-[#e3e8ec] via-pink-50 to-[#e3e8ec]' color="gray.100" px={6} py={8}>
                <CodeEditor  />
                <Footer />
                <div className='fixed w-3/4 h-3/5 left-1/2 -bottom-[28rem] -translate-x-1/2 rounded-[100%] dark:bg-[#412a2f] bg-[#a4cbff] blur-3xl z-0'></div>
            </Box>
        </CodeEditorProvider>
    )
}

export default Editor