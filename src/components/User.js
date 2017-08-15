import { h } from 'preact';

export function User (props) {
    return(
        <div>
            <img height='200' width='200' src={props.image} alt=""/>
            <p>{props.name}</p>
            <p><a href="/">Home</a></p>
        </div>
    );
}

export default User;