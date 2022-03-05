import { Flex, Image } from '@chakra-ui/react'
import React from 'react'

export default function ProfileImage({ url, clickHandler }: { url: string, clickHandler?: any }) {
    return (
        <Flex
            w='52px'
            h='52px'
            borderRadius={'100%'}
            overflow='hidden'
            onClick={clickHandler}
            cursor='pointer'
        >
            <Image
                src={url}
                alt='avatar'
                width='100%'
                height='100%'
                objectFit='contain'
                fallbackSrc='/user.png'
            />
        </Flex>
    )
}