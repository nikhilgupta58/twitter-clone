import { Flex } from '@chakra-ui/react'
import Head from 'next/head'
import React from 'react'
import AppLayout from '../../components/AppLayout'
import { Feed } from '../../components/Feed'
import SideBar from '../../components/sidebar'

export default function Home() {
    return (
        <>
            <Head>
                <title>Home / Twitter</title>
            </Head>

            <AppLayout>
                <Feed />
            </AppLayout>
        </>
    )
}