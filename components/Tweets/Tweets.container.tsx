import { useQuery } from '@apollo/client'
import React from 'react'
import ALL_POST from '../../Query/All_POST'
import { queryErrorHandler } from '../ErrorToast'
import TweetsView from './Tweets.view'
import { TweetsContext } from './utils/context'

export default function TweetsContainer() {
    const { data, loading, error } = useQuery(ALL_POST, {
        onError(err) {
            queryErrorHandler(err)
        },
    })
    if (loading)
        return (
            <>Loading...</>
        )
    return (
        <TweetsContext.Provider value={{
            data: data?.allPosts
        }}
        >
            <TweetsView />
        </TweetsContext.Provider>
    )
}