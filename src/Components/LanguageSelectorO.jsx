import React from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Box,
    Button,
    Text
} from '@chakra-ui/react'
import { MoveDown } from 'lucide-react';
import { LANGUAGE_VERSIONS } from '../libs/constants';
import { useContext } from 'react';
import { CodeEditorContext } from '../store/CodeEditor';
import { useEffect } from 'react';

// const languages = Object.entries(LANGUAGE_VERSIONS)

function LanguageSelector({language,onSelect}) {
    const {languages} = useContext(CodeEditorContext);
    return (
        <Box ml={2} mb={4}>
            <Text mb={2} fontSize='lg' >Language: </Text>
            <Menu isLazy height="100px">
            <MenuButton as={Button}  rightIcon={<MoveDown size="15px" />}>
                {language}
            </MenuButton>
            <MenuList bg="#110c1b" >
                {
                    languages.map(({language:lang, version}) => {
                        return (
                            <MenuItem  
                                color={lang === language? 'blue.400' : 'gray.500'}
                                bg={lang === language? 'gray.700' : 'transparent'}
                                key={lang} onClick={() => onSelect(lang)}
                                _hover={{
                                    bg: 'gray.800',
                                    color: 'blue.500'
                                }}
                            >
                                {lang}
                                &nbsp;
                                <Text as="span" color="gray.500">
                                    {version}
                                </Text>
                            </MenuItem>
                        )
                    })
                }
            </MenuList>
            </Menu>
        </Box>
    )
}

export default LanguageSelector