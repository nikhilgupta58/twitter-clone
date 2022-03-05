import { Flex, HStack, StackDivider } from '@chakra-ui/react'
import React from 'react'
import RightSideBar from './rightSIdeBar'
import SideBar from './sidebar'

export default function AppLayout({ children }) {
    return (
        <HStack
            minH="100vh"
            maxW="100vw"
            justifyContent={'center'}
            alignItems="start"
            spacing={0}
            divider={<StackDivider borderColor={"#E4E7EC"} />}
        >
            <SideBar />
            {children}
            <RightSideBar />
        </HStack>
    )
}