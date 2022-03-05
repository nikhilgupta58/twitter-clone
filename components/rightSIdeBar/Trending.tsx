import { Flex, Text } from '@chakra-ui/react'
import React from 'react'

export default function Trending({ data }: {
    data: {
        country: string,
        tweets: string,
        trend: string
    }
}) {
    return (
        <Flex
            p='12px 16px'
            _hover={{
                bgColor: 'gray.100'
            }}
        >
            <Flex
                flexDir={'column'}
                justifyContent='start'
                alignItems={'start'}
                color='gray.600'
                w='80%'
            >
                <Text>
                    Trending in {data?.country}
                </Text>
                <Text
                    fontWeight={'700'}
                    color='black'
                    my='3px'
                    lineHeight='20px'
                >
                    {data?.trend}
                </Text>
                <Text>
                    {data?.tweets} Tweets
                </Text>
            </Flex>
        </Flex>
    )
}