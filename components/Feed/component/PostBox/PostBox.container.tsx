import { useMutation, useReactiveVar } from '@apollo/client'
import { useRouter } from 'next/router'
import React from 'react'
import { userInfoVar } from '../../../../pages/cache'
import ADD_POST from '../../../../Query/ADD_POST'
import ALL_POST from '../../../../Query/All_POST'
import { queryErrorHandler } from '../../../ErrorToast'
import PostBoxView from './PostBox.view'
import { PostContext } from './utils/context'

export default function PostBoxContainer() {
    const router = useRouter()
    const imageRef = React.useRef(null)
    const postRef = React.useRef(null)
    const addImageToPost = async () => {
        imageRef.current.click()
    }
    const [selected, setSelected] = React.useState(null)
    const uploadImage = async () => {
        try {
            const file = imageRef.current.files[0]
            const reader = new FileReader();
            const url = reader.readAsDataURL(file)
            reader.onloadend = function (e) {
                setSelected(reader.result)
            }
        } catch (e) {
            // console.log(e)
        }
    }
    const [body, setBody] = React.useState('')
    const setHeading = (e) => {
        setBody(e.target.value)
    }

    const [addPost, { loading: addPostLoading }] = useMutation(ADD_POST, {
        refetchQueries: [
            { query: ALL_POST }
        ],
        onError(err) {
            queryErrorHandler(err)
        },
    })
    const userDetails = useReactiveVar(userInfoVar)

    const onTweet = () => {
        if (!userDetails?.id) {
            router.push('/api/auth/login')
        }
        addPost({
            variables: {
                "body": body,
                "userId": userDetails?.id,
                "createdAt": new Date().getTime() + "",
                "image": selected
            }
        });
        setSelected(null)
        setBody('')
    }

    const removeImage = () => {
        setSelected(null)
    }

    return (
        <PostContext.Provider value={{
            imageRef,
            addImageToPost,
            selected,
            uploadImage,
            addPostLoading,
            setHeading,
            body,
            onTweet,
            removeImage
        }}>
            <PostBoxView />
        </PostContext.Provider>
    )
}