import { FriendListItem } from '../friendListItem/FriendListItem'
import css from './FriendList.module.css'

export const FriendList = ({friends}) => {
    return (
        <ul className={css.friendList}>      
            <FriendListItem friends={friends}/>
        </ul> )
}