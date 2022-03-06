import { useMutation, useReactiveVar } from '@apollo/client'
import { SpinnerIcon } from '@chakra-ui/icons'
import { Flex, FlexProps } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineDelete, AiOutlineRetweet, AiOutlineHeart } from 'react-icons/ai'
import { FcLike } from 'react-icons/fc'
import { FiShare } from 'react-icons/fi'
import { VscComment } from 'react-icons/vsc'
import { userInfoVar } from '../../pages/cache'
import ADD_LIKE from '../../Query/ADD_LIKE'
import ALL_POST from '../../Query/All_POST'
import GET_POST from '../../Query/GET_POST'
import REMOVE_LIKE from '../../Query/REMOVE_LIKE'
import REMOVE_POST from '../../Query/REMOVE_POST'
import { IPost } from '../../types/IPost'
import { queryErrorHandler } from '../ErrorToast'
import StatsView from './Stats.view'
import { StatsContext } from './utils/context'

interface StatsProp extends FlexProps {
    data: IPost
}
export default function StatsContainer({ data, ...props }: StatsProp) {
    const userDetails = useReactiveVar(userInfoVar)
    const [like, setLiked] = React.useState(false)

    React.useEffect(() => {
        const likeArr = data?.like
        let flag = false
        //@ts-ignore
        likeArr?.map((row) => {
            if (userDetails?.id === row?.userId) {
                flag = true
            }
        })
        setLiked(flag)
    }, [data?.like, userDetails])

    const [removePost, { loading: delLoading }] = useMutation(REMOVE_POST, {
        refetchQueries: [
            { query: ALL_POST },
        ],
        onError(err) {
            queryErrorHandler(err)
        },
    })

    const [addLike, { loading: addLikeLoading }] = useMutation(ADD_LIKE, {
        refetchQueries: [
            { query: ALL_POST }
        ],
        onError(err) {
            queryErrorHandler(err)
        },
    })

    const [removeLike, { loading: removeLikeLoading }] = useMutation(REMOVE_LIKE, {
        refetchQueries: [
            { query: ALL_POST }
        ],
        onError(err) {
            queryErrorHandler(err)
        },
    })

    const clickHandler = () => {

    }
    const likeHandler = () => {
        if (!like) {
            addLike({
                variables: {
                    "createdAt": new Date().getTime() + "",
                    "userId": `${userDetails?.id}`,
                    "postId": `${data?.id}`
                }
            });
        }
        else {
            removeLike({
                variables: {
                    "userId": `${userDetails?.id}`,
                    "postId": `${data?.id}`
                }
            });
        }
    }
    const delHandler = () => {
        removePost({
            variables: {
                "postId": `${data?.id}`
            }
        });
    }
    const Stat = [
        {
            icon: VscComment,
            title: 'Comment',
            disabled: false,
            bgColor: 'rgba(29,155,240,0.1)',
            color: 'rgb(29,155,240)',
            //@ts-ignore
            text: `${data?.comment?.length}`,
            click: clickHandler
        },
        {
            icon: delLoading ? SpinnerIcon : AiOutlineDelete,
            title: 'Delete',
            disabled: false,
            display: (data?.userId === userDetails?.id) ? 'inherit' : 'none',
            bgColor: 'rgba(0,186,124,0.1)',
            color: 'rgb(0, 186, 124)',
            text: '',
            click: delHandler
        },
        {
            icon: AiOutlineRetweet,
            title: 'ReTweet',
            disabled: true,
            display: (data?.userId === userDetails?.id) ? 'none' : 'inherit',
            bgColor: 'rgba(0,186,124,0.1)',
            color: 'rgb(0, 186, 124)',
            text: '',
            click: clickHandler
        },
        {
            icon: (addLikeLoading || removeLikeLoading) ? SpinnerIcon : like ? FcLike : AiOutlineHeart,
            title: 'Heart',
            disabled: false,
            bgColor: 'rgba(249,24,128,0.1)',
            color: 'rgb(249,24,128)',
            //@ts-ignore
            text: `${data?.like?.length}`,
            click: likeHandler
        },
        {
            icon: FiShare,
            title: 'Share',
            disabled: true,
            bgColor: 'rgba(29,155,240,0.1)',
            color: 'rgb(29,155,240)',
            text: '',
            click: clickHandler
        },
    ]
    return (
        <StatsContext.Provider value={{
            data,
            Stat,
        }}>
            <Flex {...props}>
                <StatsView />
            </Flex>
        </StatsContext.Provider>
    )
}