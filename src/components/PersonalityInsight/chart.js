import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';


class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: {
                labels: [
                    "Openess",
                    "Conscientiousness",
                    "Extraversion",
                    "Agreeableness",
                    "Neuroticism",
                    
                ],
                datasets: [{
                    label: "Big 5 OCEAN Traits",
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    backgroundColor: [
                        "rgba(255, 99, 132, 0.2)",
                        "rgba(255, 159, 64, 0.2)",
                        "rgba(255, 205, 86, 0.2)",
                        "rgba(75, 192, 192, 0.2)",
                        "rgba(54, 162, 235, 0.2)",
                        
                    ],
                    borderColor: [
                        "rgb(255, 99, 132)",
                        "rgb(255, 159, 64)",
                        "rgb(255, 205, 86)",
                        "rgb(75, 192, 192)",
                        "rgb(54, 162, 235)",
                        
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            
        
            }
        }
    }



    render() {
        return (
            <div className="chart">
                <Bar
                    data={this.state.chartData}
                    options={{
                        maintainAspectRatio: false
                    }}
                />
            </div>
        )
    }
}

export default Chart