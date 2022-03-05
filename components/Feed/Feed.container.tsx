import React from 'react'
import FeedView from './Feed.view'
import { FeedContext } from './util/context'
export default function FeedContainer() {
    return (
        <FeedContext.Provider
            value={{

            }}
        >
            <FeedView />
        </FeedContext.Provider>
    )
}