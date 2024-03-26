import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { CodeEditorContext } from '../store/CodeEditor'
import { useContext } from 'react'
import AnimatedText from './AnimatedText'
import Icons from './UI/Icones'
import { motion } from 'framer-motion'
function Output() {
    const {values} = useContext(CodeEditorContext);
    return (
        <>
            <div className='flex flex-col gap-4 h-[60vh]'>
                
                <div className='h-3/6 w-full'>
                    
                    <div className="h-full dark:bg-[#111b21] bg-white shadow-md dark:border-gray-800 border-gray-300  rounded-md p-2" >
                        {
                            (values.output && values.code == 0) ? 
                            <AnimatedText  text={values.output} />
                            : 'Click "Run Code" to see the output here'
                        }
                        
                    </div>
                </div>
                <div className='h-3/6 w-full  rounded-md bg-red-100 shadow-md dark:bg-red-900/40 overflow-hidden'>
                    <Tabs>
                        <TabList className='dark:bg-[#111b21] rounded-t-md bg-white'>
                            <Tab color="red.500">
                                <motion.span animate={{ rotateZ: 45 }} style={{ originX: 0.5,originY: 0.5}}>
                                    <Icons.shield className="w-5 h-5 mr-2" />
                                </motion.span>
                                <span>Errors</span>
                            </Tab>
                        </TabList>

                        <TabPanels>
                            <TabPanel className=''>
                                {
                                    (values.code != undefined && values.code != 0 ) && <AnimatedText className='text-red-500' text={values.output} />
                                }
                                
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </div>
            </div>
        </>
    )
}

export default Output