import { Flex } from '@chakra-ui/react'
import Head from 'next/head'
import React from 'react'
import SideBar from './sidebar'

export default function Home() {
    return (
        <>
            <Head>
                <title>Home / Twitter</title>
            </Head>
            <Flex
                overflow={'hidden'}
                height='100vh'
                justifyContent={'center'}
                w='100vw'
            >
                <Flex
                    m='5px'
                    h='100%'
                >
                    <SideBar />
                    <Flex
                        overflowY={'auto'}
                        sx={{
                            '&::-webkit-scrollbar': {
                                width: '7px',
                                borderRadius: '10px',
                                backgroundColor: `rgba(0, 0, 0, 0.08)`,
                                boxShadow: '0 0 1px rgb(0 0 0 / 10%)',
                                padding: '1px'
                            },
                            '&::-webkit-scrollbar-thumb': {
                                backgroundColor: `rgba(0, 0, 0, 0.08)`,
                                padding: '1px',
                                boxShadow: '0 0 1px rgb(0 0 0 / 10%)',
                            },
                        }}
                    >
                        <Flex
                            h='2000px' w='100px' border={'1px solid'}>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </>
    )
}