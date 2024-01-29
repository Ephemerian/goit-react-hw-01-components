import css from './FriendListItem.module.css'
export const FriendListItem = ({friends}) => {
    return (  
        <>
            {friends.map(({id, avatar, name, isOnline}) => {
                return (
            <li className={css.item} key={id}>
                <span className={css.status} style={{ backgroundColor: (isOnline ? 'green' : 'red') }}></span>
                <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
                <p className={css.name}>{name}</p>
            </li>
                )})}
        </>

        )
        } 