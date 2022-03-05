import { Flex, StackDivider, VStack } from '@chakra-ui/react'
import React from 'react'
import Navbar from './component/Navbar'
import { PostBox } from './component/PostBox'

export default function FeedView() {
    return (
        <Flex
            h='100%'
            mt='4px'
            flexDir={'column'}
            fontSize='15px'
        >
            <Navbar />
            <VStack
                divider={<StackDivider borderColor={"#E4E7EC"} />}
            >
                <PostBox />
            </VStack>
        </Flex>
    )
}