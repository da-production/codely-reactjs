import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
    config: {
        initialColorMode: 'dark',
        useSystemColorMode: false
    }
});

export const monacoThemes = {};

export default theme;