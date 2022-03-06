import { useMutation, useQuery, useReactiveVar } from '@apollo/client'
import { useRouter } from 'next/router'
import React from 'react'
import { userInfoVar } from '../../Files/cache'
import ADD_COMMENT from '../../Query/ADD_COMMENT'
import ALL_POST from '../../Query/All_POST'
import GET_POST from '../../Query/GET_POST'
import { queryErrorHandler } from '../ErrorToast'
import LoadingState from '../LoadingState'
import IndivisualTweetView from './IndivisualTweet.view'
import { IndivisualTweetContext } from './utils/context'

export default function IndivisualTweetContainer() {
    const router = useRouter()
    const userDetails = useReactiveVar(userInfoVar)
    const { data, loading } = useQuery(GET_POST, {
        variables: {
            "postId": `${router?.query?.tweetId}`
        },
        onError(err) {
            queryErrorHandler(err)
        }
    })

    const [addComment, { loading: addCommentLoading }] = useMutation(ADD_COMMENT, {
        refetchQueries: [
            { query: ALL_POST },
            {
                query: GET_POST,
                variables: {
                    "postId": `${router?.query?.tweetId}`
                },
            }
        ],
        onError(err) {
            queryErrorHandler(err)
        }
    })

    const [message, setMessage] = React.useState('')
    const addMessage = (e) => {
        setMessage(e.target.value)
    }

    const addCommentHandler = () => {
        addComment({
            variables: {
                "postId": `${router?.query?.tweetId}`,
                "createdAt": new Date().getTime() + "",
                "userId": userDetails?.id,
                "message": message
            }
        })
        setMessage('')
    }

    if (loading)
        return (
            <>
                <LoadingState />
            </>
        )
    return (
        <IndivisualTweetContext.Provider value={{
            data: data?.getPost,
            addCommentLoading,
            addCommentHandler,
            addMessage,
            message
        }}
        >
            <IndivisualTweetView />
        </IndivisualTweetContext.Provider>
    )
}