import { Flex, FlexProps, Text } from '@chakra-ui/react'
import React, { Children } from 'react'

interface NavigateProp extends FlexProps {
    title: string;
    children: React.ReactNode
}

export default function Navigate({ children, title, ...props }: NavigateProp) {
    return (
        <>
            <Flex
                alignItems={'center'}
                {...props}
            >
                <Flex
                    fontSize={'28px'}
                >
                    {children}
                </Flex>
                <Flex
                    mr='16px'
                    ml='20px'
                    display={{
                        base: 'none',
                        sm: 'none',
                        md: 'none',
                        lg: 'initial',
                    }}
                >
                    <Text
                        lineHeight={'24px'}
                        fontSize='20px'
                        color='rgb(15, 20, 25)'
                    >
                        {title}
                    </Text>
                </Flex>
            </Flex>
        </>
    )
}