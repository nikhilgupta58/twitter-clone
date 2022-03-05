import { Flex } from '@chakra-ui/react'
import React from 'react'
import { RiImage2Line } from 'react-icons/ri'
import { AiOutlineFileGif } from 'react-icons/ai'
import { BiPoll } from 'react-icons/bi'
import { MdInsertEmoticon } from 'react-icons/md'
import { GoLocation } from 'react-icons/go'
const InputItem = [
    {
        icon: RiImage2Line,
        disbled: false
    },
    {
        icon: AiOutlineFileGif,
        disbled: false
    },
    {
        icon: BiPoll,
        disbled: true
    },
    {
        icon: MdInsertEmoticon,
        disbled: true
    },
    {
        icon: GoLocation,
        disbled: true
    }
]

export default function InputItems({ addImageToPost }) {
    return (
        <Flex
            mt='12px'
        >
            {InputItem?.map((Icon, id) => (
                <Flex
                    key={id}
                    h='36px'
                    w={'36px'}
                    fontSize='20px'
                    color='rgb(29, 155, 240)'
                    fontWeight={'400'}
                    _hover={{
                        bgColor: 'blue.50',
                        transition: '0.2s ease-in'
                    }}
                    justifyContent='center'
                    alignItems={'center'}
                    borderRadius='100px'
                    cursor={Icon.disbled ? 'not-allowed' : 'pointer'}
                    onClick={() => {
                        addImageToPost()
                    }}
                >
                    <Icon.icon />
                </Flex>
            ))}
        </Flex>
    )
}