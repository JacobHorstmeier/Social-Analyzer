import React, {Component} from 'react';
import PersonalityInsight from '../PersonalityInsight/PersonalityInsight';
import Header from '../Header/Header';


import './Home.css'


export default class Home extends Component {
    render(){
        return (
            <div className='BDP'>

            <Header />
            <div className='upper'>
             <PersonalityInsight />
            
            <div  />
            
            </div> 
            </div> 
        )
    }
}