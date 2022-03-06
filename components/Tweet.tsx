import { Flex, Text, Image } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React from 'react'
import { constructTime } from '../Function/GetTime'
import { IPost } from '../types/IPost'
import ProfileImage from './sidebar/ProfileBox/ProfileImage'
import { Stats } from './Stats'

export default function Tweet({ data }: { data: IPost }) {
    const [time, setTime] = React.useState('')

    React.useEffect(() => {
        setTime(constructTime(data?.createdAt))
    }, [data?.createdAt])
    const router = useRouter()
    return (
        <Flex
            w='100%'
            borderBottom={'1px solid rgb(239, 243, 244)'}
            fontSize='15px'
            cursor={'pointer'}
            overflow='hidden'
            _hover={{
                bgColor: 'rgba(247,247,247,255)',
                transition: '0.2s ease-in'
            }}
            py='20px'
            color='rgb(15, 20, 25)'
            maxH={'500px'}
            onClick={() => {
                router.push({
                    pathname: '/home',
                    query: { tweetId: `${data?.id}` },
                })
            }}
        >
            <Flex
                px='16px'
                flex={1}
                overflow={'hidden'}
            >
                <Flex
                    mr='12px'
                >
                    <ProfileImage url={data?.user?.avatar} />
                </Flex>
                <Flex
                    flexDir={'column'}
                    w='100%'
                >
                    <Flex>
                        <Text
                            fontWeight={'bold'}
                        >
                            {data?.user?.name}
                            <span style={{
                                color: 'gray',
                                paddingLeft: '10px',
                                fontWeight: 'normal'
                            }} >
                                {data?.user?.email} - {time}
                            </span>
                        </Text>
                    </Flex>
                    <Flex>
                        <Text>
                            {data?.body}
                        </Text>
                    </Flex>
                    {data?.image &&
                        <Flex
                            mt='12px'
                            border={'1px solid #d3d3d3'}
                            borderRadius='30px'
                            overflow='hidden'
                        >
                            <Image
                                src={data?.image}
                                alt='postImage'
                                width={'100%'}
                                h='100%'
                                objectFit={'contain'}
                            />
                        </Flex>
                    }
                    <Stats
                        mt='12px'
                        fontSize={'15px'}
                        data={data}
                    />
                </Flex>

            </Flex>
        </Flex>
    )
}