import React from 'react';

const UserCard = props => {
    if(!props.data) 
        return (
            <div>Could not load profile</div>
        )

    return (
        <div>
            <img src={props.data.avatar_url} alt={props.data.name}/>
            <div><a href={props.data.url}>Github Profile</a></div>
            <p>Name: {props.data.name}</p>
            {props.data.location ? <p>Location: {props.data.location}</p> : <></>}
            <p>Bio: {props.data.bio}</p>
        </div>
    )
}

export default UserCard;