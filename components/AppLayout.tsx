import { Flex, HStack } from '@chakra-ui/react'
import React from 'react'
import SideBar from './sidebar'

export default function AppLayout({ children }) {
    return (
        <HStack
            minH="100vh"
            maxW="100vw"
            justifyContent={'center'}
            alignItems="start"
            spacing={0}
        >
            <SideBar />
            {children}
        </HStack>
    )
}