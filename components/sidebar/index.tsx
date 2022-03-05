import { Flex, Spacer, VStack } from '@chakra-ui/react'
import React from 'react'
import { BsTwitter } from 'react-icons/bs'
import Navigate from '../Navigate'
import Navigator from './Navigator'
import { ProfileBox } from './ProfileBox'
import TweetBtn from './TweetBtn'

export default function SideBar() {
    return (
        <Flex
            justifyContent={'start'}
            flexDir='column'
            h='100vh'
            top="0"
            position="sticky"
            px='12px'
        >
            <Flex
                fontSize={'28px'}
                color='rgb(29, 155, 240)'
            >
                <Flex
                    borderRadius='50%'
                    padding='10px'
                    _hover={{
                        bgColor: 'blue.50',
                        transition: '0.2s ease-in'
                    }}
                >
                    <BsTwitter />
                </Flex>
            </Flex>
            {Navigator.map((row, id) => {
                const Icon = row.icon
                return (
                    <Flex
                        key={id}
                        cursor={row.title === 'Home' ? 'pointer' : 'not-allowed'}
                        _hover={{
                            bgColor: 'gray.100',
                            transition: '0.2s ease-in'
                        }}
                        p='12px'
                        borderRadius={'100px'}
                    >
                        <Navigate
                            title={row.title}
                            fontWeight={row.title === 'Home' ? '700' : '400'}
                            mt='1'
                        >
                            <Icon />
                        </Navigate>
                    </Flex>
                )
            })}
            <TweetBtn />
            <Spacer />
            <ProfileBox />
        </Flex>
    )
}