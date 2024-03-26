import React from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Box,
    Button,
    Text,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton
} from '@chakra-ui/react'
import {MoveDown} from 'lucide-react';
import {LANGUAGE_VERSIONS} from '../libs/constants';
import {useContext} from 'react';
import {CodeEditorContext} from '../store/CodeEditor';
import {useEffect} from 'react';
import {useState} from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import Icons from './UI/Icones';

// const languages = Object.entries(LANGUAGE_VERSIONS)

function LanguageSelector() {
    const {values, onSelect} = useContext(CodeEditorContext);
    const [isOpen,
        setIsOpen] = useState();
    const handleLanguage = (l) => {
        onSelect(l)
        setIsOpen(false)
    }
    return (
        <Box mb={4}>
            <Text mb={2} fontSize='lg'>Language:
            </Text>
            <div className='flex justify-between'>
                <button className='uppercase btn__' onClick={() => setIsOpen(true)}>{values.selectedLanguage
                        ?.language == undefined
                            ? 'SELECT'
                            : values.selectedLanguage.language}</button>
                <CopyToClipboard text={values.sourceCode}>
                    <button className='uppercase btn__'>
                    <Icons.copie className="w-5 h-5 mr-2" />
                        <span>Copy</span>
                    </button>
                </CopyToClipboard>
            </div>

            <Modal isOpen={isOpen} size='full' >
                <ModalOverlay/>
                <ModalContent >
                    <ModalHeader className='modal__header'>Select a language
                    </ModalHeader>
                    <ModalCloseButton/>
                    <ModalBody className='modal__body'>
                        {values.languages.length && (values.languages.map((l, i) => (
                            <button
                                key={i}
                                className={`btn__ mb-4 mx-2 ${l.language == values.selectedLanguage
                                ?.language && ' ls'}`}
                                onClick={() => handleLanguage(l)}>
                                {l.language}
                                &nbsp;
                                <span className='text-[11px] '>{l.version}</span>
                            </button>
                        )))
                        }
                    </ModalBody>

                    <ModalFooter className='modal__footer'>
                        <button className='btn__' onClick={() => setIsOpen(false)}>
                            Close
                        </button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    )
}

export default LanguageSelector