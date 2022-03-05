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
                <Flex
                    w='100px'
                    h='3000px'
                    borderRight={'1px solid #E4E7EC'}
                >
                    
                </Flex>
            </AppLayout>
        </>
    )
}