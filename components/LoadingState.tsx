import { Flex } from '@chakra-ui/react'
import React from 'react'
import ProfileLoading from './sidebar/ProfileBox/ProfileLoading'

export default function LoadingState() {
    return (
        <Flex
            w='100%'
            flexDir={'column'}
            h='100%'
        >
            <Flex
                my='16px'
                p='12px'
                w='70%'
            >
                <Flex>
                    <Flex
                        w='52px'
                        h='52px'
                        className={'animate-pulse'}
                        bgColor='gray.300'
                        borderRadius={'100px'}
                    />
                </Flex>
                <Flex
                    flexDir={'column'}
                    mx='12px'
                    w='100%'
                >
                    <Flex
                        bgColor={'gray.300'}
                        h='40%'
                        mb={3}
                        className={'animate-pulse'}
                        w='60%'
                    />
                    <Flex
                        bgColor={'gray.300'}
                        h='40%'
                        className={'animate-pulse'}
                    />
                </Flex>
            </Flex>

            <Flex
                w='100%'
                h='200px'
                my='16px'
                p='12px'
                flexDir={'column'}
            >
                <Flex
                    mb={3}
                    bgColor={'gray.300'}
                    className={'animate-pulse'}
                    w='100%'
                    h='40%'
                />
                <Flex
                    mb={3}
                    bgColor={'gray.300'}
                    className={'animate-pulse'}
                    w='100%'
                    h='40%'
                />
            </Flex>
        </Flex>
    )
}