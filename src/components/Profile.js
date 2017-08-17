import { h, Component } from 'preact';

import User from './User';
import Redirect from './Error';

export class Profile extends Component {
	constructor(props) {
		super(props);

		this.state = {
			user: null,
			loading: true
		}
	}
    componentDidMount() {
        fetch(`https://api.github.com/users/${this.props.user}`)
        	.then(resp => resp.json())
        	.then(user => {
        		console.log(user)
        		this.setState({
        			user,
        			loading: false
        		});
        	})
        	.catch(err => console.error(err));
    }
    handlerRender(){
    	if (this.state.loading){
    		return <h5>Fetching...</h5>
    	} else {
	    	if (this.state.user.message){
	    		return (
	    			<Redirect/>
	    		)
	    	} else {
	     		return (
	    			<User image={this.state.user.avatar_url} name={this.state.user.name} />
	    		)   		
	    	}
    	}
    }
    render({}, {}) {
        return (
        	<div>{this.handlerRender()}</div>
        )
    }
}

export default Profile;