import { Flex, StackDivider, VStack } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React from 'react'
import { Tweets } from '../Tweets'
import Navbar from '../Navbar'
import { PostBox } from './component/PostBox'
import { IndivisualTweet } from '../IndivisualTweet'

export default function FeedView() {
    const router = useRouter()
    if (router?.query?.tweetId) {
        return (
            <Flex
                h='100%'
                mt='4px'
                flexDir={'column'}
                fontSize='15px'
                maxW='650px'
                minW='400px'
                flex={1}
            >
                <Navbar title={'Tweet'} goback />
                <IndivisualTweet />
            </Flex>
        )
    }
    return (
        <Flex
            h='100%'
            mt='4px'
            flexDir={'column'}
            fontSize='15px'
            maxW='650px'
            minW='400px'
            flex={1}
        >
            <Navbar title={'Home'} />
            <VStack
                divider={<StackDivider borderColor={"#E4E7EC"} />}
            >
                <PostBox />
                <Tweets />
            </VStack>
        </Flex>
    )
}