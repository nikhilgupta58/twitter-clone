import { ArrowBackIcon } from '@chakra-ui/icons'
import { Flex, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React from 'react'
export default function Navbar({ title, goback = false }: { title: string, goback?: boolean }) {
    const router = useRouter()
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
            {goback &&
                <Flex
                    onClick={() => router.back()}
                    cursor='pointer'
                    mr='20px'
                    _hover={{
                        bgColor: 'gray.100',
                    }}
                    p='10px'
                    borderRadius={'100%'}
                >
                    <ArrowBackIcon />
                </Flex>
            }
            <Text>
                {title}
            </Text>
        </Flex>
    )
}