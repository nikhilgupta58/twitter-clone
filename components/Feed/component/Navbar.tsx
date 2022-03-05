import { Flex } from '@chakra-ui/react'
import React from 'react'
export default function Navbar() {
    return (
        <Flex
            h='53px'
            bgColor={'white'}
            alignItems='center'
            fontWeight='700'
            position='sticky'
            top={'0'}
            opacity='0.9'
            fontSize={'20px'}
            lineHeight='24px'
            color={'rgb(15, 20, 25)'}
            backdropBlur='12px'
            px={'16px'}
        >
            Home
        </Flex>
    )
}