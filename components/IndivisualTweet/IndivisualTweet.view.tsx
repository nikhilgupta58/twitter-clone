import { useReactiveVar } from '@apollo/client'
import { Button, Flex, Input, Spacer, StackDivider, Text, Textarea, VStack } from '@chakra-ui/react'
import React from 'react'
import { userInfoVar } from '../../pages/cache'
import { IPost } from '../../types/IPost'
import CommentBox from '../CommentBox'
import ProfileImage from '../sidebar/ProfileBox/ProfileImage'
import Tweet from '../Tweet'
import { useIndivisualTweetContext } from './utils/context'

export default function IndivisualTweetView() {
    const { data, addCommentHandler, addCommentLoading, message, addMessage }:
        {
            data: IPost,
            addCommentHandler: () => void,
            addCommentLoading: boolean,
            message: string,
            addMessage: (e: any) => void
        } = useIndivisualTweetContext()
    const userDetails = useReactiveVar(userInfoVar)
    return (
        <Flex
            flexDir={'column'}
        >
            <Tweet data={data} />
            <Flex
                alignItems={'center'}
                px='16px'
                borderBottom={'1px solid rgb(239, 243, 244)'}
                fontSize='15px'
                py='4px'
                flex={1}
            >
                <Flex>
                    <ProfileImage url={userDetails?.avatar} />
                </Flex>
                <Flex
                    w='80%'
                >
                    <Textarea
                        placeholder="Tweet your reply"
                        border='none'
                        _focus={{
                            border: 'none'
                        }}
                        resize={'none'}
                        _placeholder={{
                            fontSize: '18px',
                            fontWeight: '500'
                        }}
                        pt='25px'
                        value={message}
                        onChange={addMessage}
                    />
                </Flex>
                <Spacer />
                <Button
                    fontWeight='600'
                    letterSpacing={'2px'}
                    px='32px'
                    bgColor='rgb(29, 155, 240)'
                    boxShadow={'rgb(0 0 0 / 8%) 0px 8px 28px'}
                    color='white'
                    borderRadius={'100px'}
                    fontSize='12px'
                    _hover={{
                        bgColor: 'blue.500'
                    }}
                    _focus={{
                        border: 'none'
                    }}
                    onClick={addCommentHandler}
                    isLoading={addCommentLoading}
                >
                    Reply
                </Button>
            </Flex>
            {
                //@ts-ignore
                data?.comment?.map((comment, id) => (
                    <CommentBox key={id} commentData={comment} />
                ))
            }
        </Flex>
    )
}