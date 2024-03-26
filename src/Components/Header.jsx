import React from 'react'
import Icons from './UI/Icones'
import { Tooltip,Tag, Box } from '@chakra-ui/react'
import { useContext } from 'react'
import { CodeEditorContext } from '../store/CodeEditor';
import { saveAs } from "file-saver";
import { AppContext } from '../store/AppContext';
function Header() {
    const {values} = useContext(CodeEditorContext);
    const {appValues, switchMode} = useContext(AppContext);
    const exportFile = () => {
        const content = values.sourceCode
        if(content){
            const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
            saveAs(blob, "codex.txt");
        }
    }

    return (
        <nav className="z-20 flex justify-between gap-3  btn__ mb-4">
            <button href="#settings" className="navlink relative group" onClick={exportFile}>
                <Icons.zip className="w-6 h-6 "/>
                <span className='tooltip__ tooltip__br'>Download</span>
            </button>
            <button href="#settings" className="navlink relative group" onClick={() => switchMode(appValues.mode == 'dark' ? 'light' : 'dark')}>
                {appValues.mode == 'dark' ? <Icons.moon className="w-6 h-6 "/> : <Icons.sun className="w-6 h-6 "/>}
                <span className='tooltip__ tooltip__br'>Mode</span>
            </button>
        </nav>
    )
}


export default Header