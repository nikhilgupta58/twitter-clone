import { Flex, FlexProps, Text } from '@chakra-ui/react'
import React from 'react'
import { RiQuillPenFill } from 'react-icons/ri'
export default function TweetBtn({ ...props }: FlexProps) {
    return (
        <Flex
            w='80%'
        >
            <Flex {...props}
                bgColor='rgb(29, 155, 240)'
                boxShadow={'rgb(0 0 0 / 8%) 0px 8px 28px'}
                minH='52px'
                cursor={'pointer'}
                borderWidth={'1px'}
                borderRadius='100px'
                justifyContent={'center'}
                alignItems='center'
                color='white'
                my='16px'
                _hover={{
                    bgColor: 'blue.500'
                }}
                minW={{
                    lg: '100%',
                }}
            >
                <Flex
                    px='18px'
                    display={{
                        lg: 'none'
                    }}
                >
                    <RiQuillPenFill />
                </Flex>
                <Text
                    display={{
                        base: 'none',
                        sm: 'none',
                        md: 'none',
                        lg: 'initial',
                    }}
                    fontSize={'16px'}
                    fontWeight='700'
                    letterSpacing={'2px'}
                    px='32px'
                >
                    Tweet
                </Text>
            </Flex>
        </Flex>
    )
}