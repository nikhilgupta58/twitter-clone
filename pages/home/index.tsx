import { Flex } from '@chakra-ui/react'
import Head from 'next/head'
import React from 'react'
import AppLayout from '../../components/AppLayout'
import SideBar from '../../components/sidebar'

export default function Home() {
    return (
        <>
            <Head>
                <title>Home / Twitter</title>
            </Head>

            <AppLayout>
                <Flex h="100%" flexDir="column">
                    <Flex w='100px' h='2000px' border={'1px solid'}></Flex>
                </Flex>
            </AppLayout>
        </>
    )
}