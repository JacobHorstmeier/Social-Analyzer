import React, {Component} from 'react';
import Header from '../Header/Header';
import './Contact.css'

export default class Conctact extends Component {
    render(){
        return (
            <div>
            <div className='BDP'>
            <div className='upper'>
                <Header />
                <div className='Contact'>
            
                <p>Have any Questions?</p>
                <p>Contact me at SocialAnalyzerWeb@gmail.com</p>
                </div>
                </div>
                </div>
            </div> 
        )
    }
}