import React from 'react'
import Tweet from '../Tweet'
import { useTweetsContext } from './utils/context'

export default function TweetsView() {
    const { data } = useTweetsContext()
    React.useEffect(() => {
        console.log(data)
    }, [data])
    return (
        <>
            {data?.map((tweet, id) => (
                <Tweet key={id} data={tweet} />
            ))}
        </>
    )
}