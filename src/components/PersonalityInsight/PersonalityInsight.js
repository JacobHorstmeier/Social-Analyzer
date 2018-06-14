import React, { Component } from 'react';
import axios from 'axios';
import Chart from './chart';



export default class PersonalityInsight extends Component {
    constructor(props) {
        super(props)

        this.state = {
            nameInput: 'Coldplay',
            profile: {},
            
            
           
        }
        this.getProfile = this.getProfile.bind(this)
    }

    componentDidMount(){
       
    }

    getProfile() {
       

        axios.post('/api/getProfile', { name: this.state.nameInput }).then(res => { 
            let obj = {
                openness: Math.round(res.data.personality[0].percentile*100),
                conscientousness: Math.round(res.data.personality[1].percentile*100),
                extraversion: Math.round(res.data.personality[2].percentile*100),
                agreeableness: Math.round(res.data.personality[3].percentile*100),
                neuroticism: Math.round(res.data.personality[4].percentile*100),
            }
            
            this.setState({profile: obj})
            })
    }

    render() {
        console.log(this.state.profile)
        return (
            <div>
                <button onClick={() => {this.getProfile()}}>Get Profile</button>
                <br />
                {this.state.profile.openness}
                <br />
                {this.state.profile.conscientousness}
                <br />
                {this.state.profile.extraversion}
                <br />
                {this.state.profile.agreeableness}
                <br />
                {this.state.profile.neuroticism}
                <br />
               <input onChange={ (e) => this.setState({
                   nameInput: e.target.value
               }) }/>
                <Chart />

                






            </div>
        )
    }
}

