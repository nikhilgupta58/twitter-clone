import { Box, Flex, Image, Spacer, Text } from '@chakra-ui/react'
import React from 'react'

interface ArticleProp {
    heading: string;
    title: string;
    image: string;
    tags: string
}

export default function ArticleBox({ data }: { data: ArticleProp }) {
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
                    {data?.heading}
                </Text>
                <Text
                    fontWeight={'700'}
                    color='black'
                    my='3px'
                    lineHeight='20px'
                >
                    {data?.title}
                </Text>
                <Text>
                    Trending with <span style={{ color: 'rgb(29, 155, 240)', paddingLeft: '2px' }}>
                        {data?.tags}
                    </span>
                </Text>
            </Flex>
            <Spacer />
            <Box
                borderRadius='12px'
                overflow={'hidden'}
                w='68px'
                h='68px'
                ml='20px'
            >
                <Image
                    src={data?.image}
                    alt='article'
                    w={'100%'}
                    h='100%'
                />
            </Box>
        </Flex>
    )
}