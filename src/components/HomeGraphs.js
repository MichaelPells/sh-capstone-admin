import React from 'react'
import { Line, Doughnut, Bar } from 'react-chartjs-2'
import Chart from 'chart.js/auto'

const HomeGraphs = () => {

    const line_data = {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [
            {
              label: 'December',
              data: [20, 36, 73, 40], 
              backgroundColor: 'rgba(34, 51, 119, 0.1)',
              borderColor: 'rgba(34, 51, 119, 0.3)',
              borderWidth: 3,
              tension: 0.4,
              pointBorderWidth: 0,
              pointHoverBorderWidth: 0,
              pointBackgroundColor: 'rgba(34, 51, 119)',
              pointHoverRadius: 10,
              pointHoverBackgroundColor: 'rgba(237, 103, 8, 0.8)',
              fill: 'origin'
            }
        ]
    }

    const doughnut_data = {
        labels: ['Facebook 1', 'Facebook 2', 'Instagram', 'Google'],
        datasets: [
            {
              data: [156, 114, 283, 150],
              backgroundColor: ['rgba(34, 51, 119)', 'rgba(7, 157, 177)', 'rgba(194, 46, 46)', 'rgba(119, 34, 119)'],
              borderWidth: 0,
              offset: 10,
              hoverBackgroundColor: ['rgba(237, 103, 8, 0.8)'],
              hoverOffset: 30
            }
        ]
    }

    const bar_data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
              label: 'Month (2022)',
              data: [102, 96, 45, 90, 56, 76, 85, 55, 84, 75, 60, 140],
              backgroundColor: ['rgba(34, 51, 119, 0.5)'],
              borderWidth: 0,
              hoverBackgroundColor: ['rgba(237, 103, 8, 0.8)'],
              hoverBorderWidth: 3,
              hoverBorderColor: ['rgba(237, 103, 8, 1)']
            }
        ]
    }

    return (
        <React.Fragment>
            <div className="stats1 view">
                <Line style={{height: "100%"}}
                    data={line_data}
                    options={{
                        plugins: {
                            title: {
                            display: true,
                            text: "This Month's Sales"
                            },
                            legend: false,
                        },
                        responsive: true,
                        maintainAspectRatio: false,
                        animation: {
                            duration: 2000
                        }
                    }}
                />
            </div>
            <div className="stats2 view">
                <Doughnut style={{height: "100%"}}
                    data={doughnut_data}
                    options={{
                        plugins: {
                            title: {
                            display: true,
                            text: "Leads from Running Ads"
                            },
                            legend: false
                        },
                        responsive: true,
                        maintainAspectRatio: false,
                        animation: {
                            duration: 2000,
                        }
                    }}
                />
            </div>
            <div className="stats3 view">
                <Bar style={{height: "100%"}}
                    data={bar_data}
                    options={{
                        plugins: {
                            title: {
                            display: true,
                            text: "Sales Per Month (in 10's)"
                            },
                            legend: false,
                        },
                        responsive: true,
                        maintainAspectRatio: false,
                        animation: {
                            duration: 2000
                        }
                    }}
                />
            </div>
        </React.Fragment>
    )
}

export default HomeGraphs
