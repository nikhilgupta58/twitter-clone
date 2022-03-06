import { useReactiveVar } from '@apollo/client';
import { Flex, FlexProps, Spacer, Text, Image } from '@chakra-ui/react'
import React from 'react'
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import { useProfileContext } from './utils/context';
import { FaUserCircle } from 'react-icons/fa'
import ProfileImage from './ProfileImage';
import { userInfoVar } from '../../../Files/cache';

export default function ProfileBoxView({ ...props }: FlexProps) {
    const userDetails = useReactiveVar(userInfoVar)
    const { clickHandler } = useProfileContext()
    if (userDetails?.id) {
        return (
            <Flex {...props}
                borderRadius='100px'
                alignItems='center'
                justifyContent={'center'}
                my='16px'
                p='12px'
                fontSize={'15px'}
                _hover={{
                    bgColor: 'gray.100'
                }}
            >
                <ProfileImage url={userDetails?.avatar} clickHandler={clickHandler} />
                <Flex
                    flexDir={'column'}
                    mx='12px'
                    flexShrink={'1'}
                    display={{
                        base: 'none',
                        sm: 'none',
                        md: 'none',
                        lg: 'initial',
                    }}
                    w='150px'
                >
                    <Text
                        fontWeight={'700'}
                        //@ts-ignore
                        noOfLines={'1'}
                    >
                        {userDetails?.name}
                    </Text>
                    <Text
                        color='gray.400'
                        //@ts-ignore
                        noOfLines={'1'}
                    >
                        {userDetails?.email}
                    </Text>
                </Flex>
                <Spacer />
                <Flex
                    ml={'12px'}
                    display={{
                        base: 'none',
                        sm: 'none',
                        md: 'none',
                        lg: 'initial',
                    }}
                    cursor='pointer'
                    onClick={clickHandler}
                >
                    <BiDotsHorizontalRounded />
                </Flex>
            </Flex>
        )
    }
    return (
        <Flex {...props}
            borderRadius='100px'
            alignItems='center'
            justifyContent={'center'}
            my='16px'
            p='12px'
            fontSize={'15px'}
            _hover={{
                bgColor: 'gray.100'
            }}
        >
            <Flex
                maxW='52px'
                h='52px'
                borderRadius={'100%'}
                overflow='hidden'
                onClick={clickHandler}
                cursor='pointer'
            >
                <Image
                    src={'/user.png'}
                    alt='avatar'
                    width='100%'
                    height='100%'
                    objectFit='contain'
                />
            </Flex>
            <Flex
                flexDir={'column'}
                mx='12px'
                flexShrink={'1'}
                display={{
                    base: 'none',
                    sm: 'none',
                    md: 'none',
                    lg: 'initial',
                }}
                w='150px'
            >
                <Text
                    fontWeight={'700'}
                    //@ts-ignore
                    noOfLines={'1'}
                >
                    No User
                </Text>
            </Flex>
            <Spacer />
            <Flex
                ml={'12px'}
                display={{
                    base: 'none',
                    sm: 'none',
                    md: 'none',
                    lg: 'initial',
                }}
                cursor='pointer'
                onClick={clickHandler}
            >
                <BiDotsHorizontalRounded />
            </Flex>
        </Flex>
    )
}