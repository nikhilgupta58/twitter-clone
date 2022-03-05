import { SearchIcon } from '@chakra-ui/icons'
import { Flex, Text, Input, InputGroup, InputLeftAddon, InputLeftElement, Spacer, VStack } from '@chakra-ui/react'
import React from 'react'
import { IoIosSearch } from 'react-icons/io'
import ArticleBox from './ArticleBox'
import Trending from './Trending'
import Article from './utils/Article'
import Trend from './utils/Trend'
export default function RightSideBar() {
    return (

        <VStack
            mt='4px'
            overflowY={'auto'}
            px='40px'
            sx={{
                '&::-webkit-scrollbar': {
                    display: 'none'
                },
                '&::-webkit-scrollbar-thumb': {
                    display: 'none'
                },
            }}
            display={{
                base: 'none',
                sm: 'none',
                md: 'initial'
            }}
            justifyContent={'start'}
            flexDir='column'
            h='100vh'
            top="0"
            position="sticky"
        >
            <Flex
                flexDir={'column'}
            >
                <Flex
                    bgColor={'white'}
                    position={'sticky'}
                    top={'0'}
                    fontSize='15px'
                    pb={1}
                >
                    <InputGroup>
                        <InputLeftAddon
                            pl='20px'
                            bgColor={'rgb(239, 243, 244)'}
                            borderRadius={'100px'}
                            border='none'
                            fontSize={'25px'}
                            color='gray.500'
                            py='25px'
                        >
                            <IoIosSearch />
                        </InputLeftAddon>
                        <Input
                            placeholder='Search Tweet'
                            borderRadius={'100px'}
                            bgColor={'rgb(239, 243, 244)'}
                            border='none'
                            _focus={{
                                border: 'none'
                            }}
                            py='25px'
                        />
                    </InputGroup>
                </Flex>
                <Flex
                    flexDir={'column'}
                    mt={'15px'}
                    bgColor={'rgb(247, 249, 249)'}
                    color='rgb(15, 20, 25)'
                    fontSize={'15px'}
                    overflowWrap='break-word'
                    mb='16px'
                    overflow='hidden'
                    borderRadius={'16px'}
                    border='1px solid rgb(247, 249, 249)'
                    flex={1}
                    maxW='350px'
                >
                    <Text
                        fontSize={'20px'}
                        fontWeight={'700'}
                        p='10px 16px'
                    >
                        What’s happening
                    </Text>
                    {Article.map((article, id) => (
                        <ArticleBox data={article} key={id} />
                    ))}
                    {Trend.map((article, id) => (
                        <Trending data={article} key={id} />
                    ))}
                    <Text
                        fontSize={'14px'}
                        fontWeight={'400'}
                        p='10px 20px 16px'
                        color='rgb(29, 155, 240)'
                        cursor={'not-allowed'}
                        _hover={{
                            bgColor: 'gray.100'
                        }}
                    >
                        Show more
                    </Text>
                </Flex>
                <Flex
                    fontSize='12px'
                    mb='100px'
                    color={'gray.500'}
                    p='10px 20px 16px'
                    lineHeight={'20px'}
                >
                    Terms of Service
                    Privacy Policy
                    Cookie Policy<br />
                    Accessibility
                    Ads info
                    More ...<br />
                    © 2022 Twitter, Inc.
                </Flex>
            </Flex>
        </VStack>
    )
}