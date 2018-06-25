import React, { Component } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import {connect} from 'react-redux';



class PersonalityInsight extends Component {
    constructor(props) {
        super(props)

        this.state = {
            nameInput: '',
            profile: {},
            showBarGraph: false



        }
        this.getProfile = this.getProfile.bind(this)
    }





    componentDidMount() {

    }

    getProfile() {
        if(this.state.nameInput === ''){
            alert('Please fill out the required field')
        } else

        axios.post('/api/getProfile', { name: this.state.nameInput }).then(res => {
            let obj = {
                openness: Math.round(res.data.personality[0].percentile * 100),
                conscientousness: Math.round(res.data.personality[1].percentile * 100),
                extraversion: Math.round(res.data.personality[2].percentile * 100),
                agreeableness: Math.round(res.data.personality[3].percentile * 100),
                neuroticism: Math.round(res.data.personality[4].percentile * 100),
            }

           
            this.setState({showBarGraph:true, profile: obj})
        })
        
    }

    render() {
        console.log(this.state.profile)

            if(this.state.showBarGraph === false){

                return (
                    <div>
                <button onClick={() => { this.getProfile() }}>Get Profile</button>
                <br />
               
                <input onChange={(e) => this.setState({
                    nameInput: e.target.value
                })} />
                </div>
            )} else 
            return (
            <div>
               
                <input onChange={(e) => this.setState({
                    nameInput: e.target.value
                })} />
                <br />
                <button onClick={() => { this.getProfile() }}>Get Profile</button>
                <br/>
                <Bar
                    data={{labels: ["Openess","Conscientiousness","Extraversion","Agreeableness","Neuroticism",],
                        datasets: [{
                                label: ["Big 5 OCEAN Traits"],
                                backgroundColor: ["rgba(255, 99, 132, 0.2)","rgba(255, 159, 64, 0.2)", "rgba(255, 205, 86, 0.2)", "rgba(75, 192, 192, 0.2)", "rgba(54, 162, 235, 0.2)",],
                                    borderColor: [ "rgb(255, 99, 132)", "rgb(255, 159, 64)", "rgb(255, 205, 86)","rgb(75, 192, 192)", "rgb(54, 162, 235)",],
                                        borderWidth: 1,
                                        data: [this.state.profile.openness, this.state.profile.conscientousness, this.state.profile.extraversion, this.state.profile.agreeableness, this.state.profile.neuroticism]
                                    }
                                ]
                            }}
                            width={380} 
                            height={400}
                            options={{
                                scales: {
                                    yAxes: [{
                                        display: true,
                                        ticks: {
                                            beginAtZero:true,
                                            max: 100
                                        }
                                    }]
                                },
                                maintainAspectRatio: true  
                            }}
                            />








    
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        profile: state.profile,
        user: state.user

        // capsText: state.capsText,
        // reverseText: state.reverseText
    }
}
export default connect(mapStateToProps)(PersonalityInsight)