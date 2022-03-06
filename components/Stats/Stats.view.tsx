import { useReactiveVar } from '@apollo/client'
import { Flex, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React from 'react'
import { userInfoVar } from '../../pages/cache'
import { useStatsContext } from './utils/context'
export default function StatsView() {
    const { data, Stat } = useStatsContext()
    const userDetails = useReactiveVar(userInfoVar)
    const router = useRouter()
    return (
        <Flex
            justifyContent={'space-between'}
            w='100%'
        >
            {Stat.map((row, id) => {
                const Icon = row.icon
                return (
                    <Flex
                        key={id}
                        display={row?.display ? row?.display : 'inherit'}
                        px='12px'
                        alignItems={'center'}
                        _hover={{
                            transition: '0.2s ease-in',
                            color: `${row?.color}`
                        }}
                        onClick={(e) => {
                            if (!userDetails?.id) {
                                router.push('/api/auth/login')
                            }
                            if (row?.title != 'Comment')
                                e.stopPropagation()
                            if (row?.title == 'Delete') {
                                if (router?.query?.tweetId)
                                    router.back()
                            }
                            row?.click()
                        }}
                        cursor={userDetails?.id && row?.disabled ? 'not-allowed' : 'pointer'}

                    >
                        <Flex
                            _hover={{
                                bgColor: `${row?.bgColor}`,
                                transition: '0.2s ease-in',
                                color: `${row?.color}`
                            }}
                            borderRadius='100%'
                            p='8px'
                        >
                            <Icon />
                        </Flex>
                        <Flex>
                            <Text px='5px'>
                                {row.text}
                            </Text>
                        </Flex>
                    </Flex>
                )
            })}
        </Flex>
    )
}