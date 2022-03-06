import { Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { constructTime } from '../../Function/GetTime'
import { IComment } from '../../types/IComment'
import { useIndivisualTweetContext } from '../IndivisualTweet/utils/context'
import ProfileImage from '../sidebar/ProfileBox/ProfileImage'
import { CommentStata } from './CommentStats'

export default function CommentBox({ commentData }: { commentData: IComment }) {
    const [time, setTime] = React.useState('')
    React.useEffect(() => {
        setTime(constructTime(commentData?.createdAt))
    }, [commentData?.createdAt])
    return (
        <Flex
            alignItems={'center'}
            px='16px'
            borderBottom={'1px solid rgb(239, 243, 244)'}
            fontSize='15px'
            py='10px'
            flex={1}
        >
            <Flex
                flex={1}
                overflow={'hidden'}
            >
                <Flex
                    mr='12px'
                >
                    <ProfileImage url={commentData?.user?.avatar} />
                </Flex>
                <Flex
                    flexDir={'column'}
                    w='100%'
                >
                    <Flex>
                        <Text
                            fontWeight={'bold'}
                        >
                            {commentData?.user?.name}
                            <span style={{
                                color: 'gray',
                                paddingLeft: '10px',
                                fontWeight: 'normal'
                            }} >
                                {commentData?.user?.email} - {time}
                            </span>
                        </Text>
                    </Flex>
                    <Flex>
                        <Text>
                            {commentData?.message}
                        </Text>
                    </Flex>
                    <CommentStata
                        mt='12px'
                        fontSize={'15px'}
                        data={commentData}
                    />
                </Flex>

            </Flex>
        </Flex>
    )
}