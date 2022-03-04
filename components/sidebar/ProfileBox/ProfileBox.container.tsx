import { useMutation } from '@apollo/client';
import { useUser } from '@auth0/nextjs-auth0';
import React from 'react'
import ADD_USER from '../../../Query/ADD_USER';
import { userInfoVar } from '../../../pages/cache';
import ProfileBoxView from './ProfileBox.view';
import ProfileLoading from './ProfileLoading';
import ProfilePopUpBox from './ProfilePopUpBox';
import { ProfileBox } from './utils/context';

export default function ProfileBoxContainer() {
    const { user, error, isLoading: authOLoading } = useUser();
    const [showPopup, setShowPopUp] = React.useState('none')
    const [addUser, { data: userInfo, loading: addUserLoading }] = useMutation(ADD_USER);
    React.useEffect(() => {
        if (user) {
            addUser({
                variables:
                {
                    "email": user.email,
                    "name": user.name,
                    "avatar": user.picture
                }
            });
        }
    }, [user])
    React.useEffect(() => {
        if (userInfo && !addUserLoading) {
            userInfoVar({
                id: userInfo.addUser.id,
                email: userInfo.addUser.email,
                name: userInfo.addUser.name,
                avatar: userInfo.addUser.avatar
            })
        }
    }, [userInfo])

    if (addUserLoading || authOLoading) {
        return (
            <ProfileLoading />
        )
    }
    const clickHandler = () => {
        setShowPopUp(showPopup === 'none' ? 'initial' : 'none')
    }
    return (
        <ProfileBox.Provider
            value={{
                clickHandler
            }}
        >
            <ProfilePopUpBox display={showPopup} />
            <ProfileBoxView />
        </ProfileBox.Provider>
    )
}