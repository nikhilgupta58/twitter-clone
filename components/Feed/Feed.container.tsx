import { useReactiveVar } from '@apollo/client'
import { Flex } from '@chakra-ui/react'
import React from 'react'
import { userInfoVar } from '../../Files/cache'
import ProfileImage from '../sidebar/ProfileBox/ProfileImage'
import ProfilePopUpBox from '../sidebar/ProfileBox/ProfilePopUpBox'
import FeedView from './Feed.view'
import { FeedContext } from './util/context'
export default function FeedContainer() {
    const userDetails = useReactiveVar(userInfoVar)
    const [open, setOpen] = React.useState(false)
    return (
        <FeedContext.Provider
            value={{

            }}
        >
            <FeedView />
            <Flex>
                <Flex
                    display={{
                        base: 'initial',
                        sm: 'none'
                    }}
                    position='fixed'
                    top={'90%'}
                    left={'80%'}
                >
                    <Flex
                        onClick={() => setOpen(!open)}
                    >
                        <ProfileImage url={userDetails?.avatar} />
                    </Flex>
                    {open &&
                        <Flex
                            position={'fixed'}
                            top='88%'
                            left={'20%'}
                        >
                            <ProfilePopUpBox />
                        </Flex>
                    }
                </Flex>
            </Flex>
        </FeedContext.Provider>
    )
}