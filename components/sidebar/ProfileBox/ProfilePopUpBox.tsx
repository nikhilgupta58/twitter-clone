import { useReactiveVar } from '@apollo/client'
import { Flex, Text, Image, Spacer, FlexProps, Button } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React from 'react'
import { TiTick } from 'react-icons/ti'
import { userInfoVar } from '../../../Files/cache'
import ProfileImage from './ProfileImage'

export default function ProfilePopUpBox({ ...props }: FlexProps) {
    const userDetails = useReactiveVar(userInfoVar)
    return (
        <Flex
            minW={'260px'}
            minH='30px'
            maxW='360px'
            maxH={'480px'}
            position={'absolute'}
            bottom='12%'
            boxShadow={'rgb(101 119 134 / 20%) 0px 0px 15px, rgb(101 119 134 / 15%) 0px 0px 3px 1px'}
            bgColor='rgba(255,255,255,1.00)'
            flexDir={'column'}
            fontSize={'15px'}
            color='rgb(15, 20, 25)'
            borderRadius={'16px'}
            {...props}
        >
            <Flex
                alignItems='center'
                justifyContent={'start'}
                my='16px'
                p='12px'
                borderBottom='1px solid rgb(239, 243, 244)'
            >
                <ProfileBox />
            </Flex>
            <LogState />
        </Flex>
    )
}

const LogState = () => {
    const router = useRouter()
    const user = useReactiveVar(userInfoVar)
    const [btnClicked, setBtnClicked] = React.useState(false)
    if (user?.email) {
        return (
            <Button
                mb='10px'
                px='12px'
                py='10px'
                _hover={{
                    bgColor: 'gray.200'
                }}
                cursor='pointer'
                onClick={() => {
                    setBtnClicked(true)
                    router.push('/api/auth/logout')
                }}
                isLoading={btnClicked}
                bgColor={'white'}
                fontWeight='400'
                w='100%'
            >
                <Text>
                    Log out {user?.email}
                </Text>
            </Button>
        )
    }
    return (
        <Button
            mb='10px'
            px='12px'
            py='10px'
            _hover={{
                bgColor: 'gray.200'
            }}
            cursor='pointer'
            onClick={() => {
                setBtnClicked(true)
                router.push('/api/auth/login')
            }}
            w='100%'
            bgColor={'white'}
            isLoading={btnClicked}
            fontWeight='400'
        >
            <Text>
                Log in
            </Text>
        </Button>
    )
}

const ProfileBox = () => {
    const userDetails = useReactiveVar(userInfoVar)
    if (userDetails?.id) {
        return (
            <>
                <ProfileImage url={userDetails?.avatar}/>
                <Flex
                    flexDir={'column'}
                    mx='12px'
                >
                    <Text
                        fontWeight={'700'}
                    >
                        {userDetails?.name}
                    </Text>
                    <Text
                        color='gray.400'
                    >
                        {userDetails?.email}
                    </Text>
                </Flex>
                <Spacer />
                <Flex
                    ml={'12px'}
                    color='green.500'
                >
                    <TiTick />
                </Flex>
            </>
        )
    }
    return (
        <>
            <Flex
                maxW='52px'
                h='52px'
                borderRadius={'100%'}
                overflow='hidden'
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
            >
                <Text
                    color='gray.400'
                >
                    No User
                </Text>
            </Flex>

        </>
    )
}