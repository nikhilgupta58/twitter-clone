import { Flex, FlexProps, Spacer, Text, Image } from '@chakra-ui/react'
import React from 'react'

export default function ProfileLoading({ ...props }: FlexProps) {
    return (
        <Flex
            {...props}
            my='16px'
            p='12px'
        >
            <Flex
                w='52px'
                h='52px'
                className={'animate-pulse'}
                bgColor='gray.300'
                borderRadius={'100px'}
            />
            <Flex
                flexDir={'column'}
                mx='12px'
                display={{
                    base: 'none',
                    sm: 'none',
                    md: 'none',
                    lg: 'initial',
                }}
                w='150px'
            >
                <Flex
                    bgColor={'gray.300'}
                    h='40%'
                    mb={3}
                    className={'animate-pulse'}
                />
                <Flex
                    bgColor={'gray.300'}
                    h='40%'
                    className={'animate-pulse'}
                />
            </Flex>
        </Flex>
    )
}