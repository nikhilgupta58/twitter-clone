import { extendTheme } from "@chakra-ui/react";

import { createBreakpoints } from '@chakra-ui/theme-tools'

const breakpoints = createBreakpoints({
    sm: '500px',
    md: '1101px',
    lg: '1290px',
    xl: '1290px',
    '2xl': '1290px',
})

const theme = extendTheme({
    breakpoints,
    fonts: {
        body: `'Sen', sans-serif;`,
        heading: `'Sen', sans-serif;`,
        th: `'Sen', sans-serif;`,
        // body: `'Inter', sans-serif;`,
    },
    colors: {
        "tt.primary": "#125DF5",
        "tt.offwhite": "#F5F7FB",
        "tt.grey": "#6F749A",
    },
    config: {
        initialColorMode: "light",
    },
});

export default theme