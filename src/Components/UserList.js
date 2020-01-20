import React from 'react';
import UserCard from './UserCard';

const UserList = props => {

    if(props.followers)
        console.log(props.followers, props.followers.length )
    if(!props.followers || props.followers.length === 0)
        return <div>No followers found</div>;

    return (
        <div className="followers">
            {props.followers.map((follower) => {
                return (
                    <UserCard key={follower.id} user={false} data={follower} />
                );
            })}
        </div>
    )
};

export default UserList;

