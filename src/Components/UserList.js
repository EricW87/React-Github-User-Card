import React from 'react';

const UserList = props => {
    if(!props.followers || props.followers.length === 0)
        return <div>No followers found</div>;

    return (
        <div>
            {props.followers.map((follower) => {
                return (
                    <div className="follower">
                        <img src={follower.avatar_url}/>
                        <h3><a href={follower.html_url}>{follower.login}</a></h3>
                    </div>
                );
            })}
        </div>
    )
};

export default UserList;

