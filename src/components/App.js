import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Home from './Home';
import Profile from './Profile';
import Redirect from './Error';

export class App extends Component {
    render() {
		const style = {
			marginTop: '20px'
		}
        return (
            <div class="app container" style={style}>
                <Router>
                    <Home path="/" />
                    <Profile path="/profile/:user" />
                    <Redirect default />
                </Router>
            </div>
        );
    }
}

export default App;