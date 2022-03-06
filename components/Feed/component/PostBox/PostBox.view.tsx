import { useReactiveVar } from '@apollo/client'
import { Button, Flex, Image, Spacer, Textarea } from '@chakra-ui/react'
import React from 'react'
import InputItems from '../../../InputItems'
import ProfileImage from '../../../sidebar/ProfileBox/ProfileImage'
import { usePostContext } from './utils/context'
import { TiDeleteOutline } from 'react-icons/ti'
import { userInfoVar } from '../../../../Files/cache'

export default function PostBoxView() {
    const userDetails = useReactiveVar(userInfoVar)
    const { selected, addImageToPost, uploadImage, imageRef, body, setHeading, onTweet, addPostLoading, removeImage } = usePostContext()
    return (
        <Flex
            bgColor='rgba(255,255,255,1.00)'
            py={'4px'}
            px={'16px'}
            w='100%'
        >
            <Flex
                justifyContent={'start'}
                alignItems='start'
                w='100%'
            >
                <Flex>
                    <ProfileImage url={userDetails?.avatar} />
                </Flex>
                <Flex
                    flexDir={'column'}
                    ml='10px'
                    w='100%'
                >
                    <Flex
                        w='100%'
                        mt='12px'
                        borderBottom='1px solid #E4E7EC'
                        flexDir={'column'}
                        flex={1}
                    >
                        <Textarea
                            placeholder="What's happening"
                            p='2px'
                            whiteSpace={'pre-wrap'}
                            border='none'
                            _focus={{
                                border: 'none'
                            }}
                            resize={'none'}
                            _placeholder={{
                                fontSize: '20px',
                                fontWeight: '500'
                            }}
                            rows={2}
                            minH='50px'
                            value={body}
                            onChange={setHeading}
                        />
                        {selected &&
                            <Flex
                                py='10px'
                                w='100%'
                                h='100%'
                                overflow={'hidden'}
                                position='relative'
                            >
                                <Flex
                                    position={'absolute'}
                                    top={'15px'}
                                    left={'10px'}
                                    fontSize='35px'
                                    onClick={removeImage}
                                    color='gray.400'
                                    cursor={'pointer'}
                                >
                                    <TiDeleteOutline />
                                </Flex>
                                <Image
                                    w='100%'
                                    maxH='300px'
                                    alt='postImage'
                                    src={selected}
                                    objectFit='contain'
                                    borderRadius={'20px'}
                                />
                            </Flex>
                        }
                    </Flex>
                    <Flex>
                        <InputItems addImageToPost={addImageToPost} />
                        <Spacer />
                        <Button
                            bgColor='rgb(29, 155, 240)'
                            boxShadow={'rgb(0 0 0 / 8%) 0px 8px 28px'}
                            borderRadius='100px'
                            color='white'
                            my='16px'
                            _hover={{
                                bgColor: 'blue.500'
                            }}
                            _focus={{
                                border: 'none',
                                bgColor: 'blue.500'
                            }}
                            px='30px'
                            fontSize='12px'
                            onClick={onTweet}
                            isLoading={addPostLoading}
                            disabled={body === '' ? true : false}
                        >
                            Tweet
                        </Button>
                    </Flex>
                    <input
                        type="file"
                        hidden
                        ref={imageRef}
                        onChange={uploadImage}
                        accept='image/*'
                    ></input>
                </Flex>
            </Flex>
        </Flex>
    )
}