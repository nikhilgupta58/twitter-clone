import { RiHome7Fill } from 'react-icons/ri'
import { BsHash, BsBookmark } from 'react-icons/bs'
import { IoIosNotificationsOutline } from 'react-icons/io'
import { GoMail } from 'react-icons/go'
import { CgNotes, CgMoreO } from 'react-icons/cg'
import { AiOutlineUser } from 'react-icons/ai'

const Navigator = [
    {
        title: 'Home',
        icon: RiHome7Fill
    },
    {
        title: 'Explore',
        icon: BsHash
    },
    {
        title: 'Notifications',
        icon: IoIosNotificationsOutline
    },
    {
        title: 'Messages',
        icon: GoMail
    },
    {
        title: 'Bookmarks',
        icon: BsBookmark
    },
    {
        title: 'Lists',
        icon: CgNotes
    },
    {
        title: 'Profile',
        icon: AiOutlineUser
    },
    {
        title: 'More',
        icon: CgMoreO
    },
]

export default Navigator