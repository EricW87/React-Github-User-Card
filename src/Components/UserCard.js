import React from 'react';

const UserCard = props => {
    if(!props.data) 
        return (
            <div>Could not load profile</div>
        )

    return (
        <div className={props.user ? "user" :"profile"}>
            <img src={props.data.avatar_url} alt={props.data.name}/>
            <div><a href={props.data.html_url}>{props.data.login}</a></div>
            {props.data.name ? <p>Name: {props.data.name}</p> : <></>}
            {props.data.location ? <p>Location: {props.data.location}</p> : <></>}
            {props.data.company ? <p>Company: {props.data.company}</p> : <></>}
            {props.data.blog ? <p>Blog: {props.data.blog}</p> : <></>}
            {props.data.public_repos ? <p>Number of Repos: {props.data.public_repos}</p> : <></>}
            {props.data.followers ? <p>Followers: {props.data.followers}</p> : <></>}
        </div>
    )
}

export default UserCard;