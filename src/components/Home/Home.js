import React, {Component} from 'react';
import PersonalityInsight from '../PersonalityInsight/PersonalityInsight';
import Header from '../Header/Header'


export default class Home extends Component {
    render(){
        return (
            <div>
                <Header />
             <PersonalityInsight />
            </div> 
        )
    }
}