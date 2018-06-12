import React, {Component} from 'react';
// import logo from './communityBank.svg';
import './Login.css';

export default class Login extends Component {
    render() {
        return (
            <div className='App'>
                {/* <img src={logo} alt=""/>
                using an a or anchor tag we can specify a hypertext reference. by giving it a href attribute we can change the user's location */}
                <a href={process.env.REACT_APP_LOGIN}>
                    <button>Login</button>
                </a>
            </div> 
        )
    }
}