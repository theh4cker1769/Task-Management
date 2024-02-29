import React from 'react'
import { PiCheckCircleBold } from "react-icons/pi";
import { GiBackwardTime, GiSandsOfTime } from "react-icons/gi";
import { AiOutlineFieldTime } from "react-icons/ai";
import { Bar } from 'react-chartjs-2';
import { Doughnut } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const RecordsSec = () => {

    // Record Count Bar Graph
    const data = {
        labels: ['Completed Task', 'Overdue Task', 'Pending Task', 'Delayed Task'],
        datasets: [
            {
                label: 'Record Count',
                data: [30, 20, 60, 5,],
                backgroundColor: [
                    'rgb(66, 221, 54)',
                    'rgb(255, 228, 20)',
                    'rgb(255, 51, 51)',
                    'rgb(212, 212, 212)'
                ],
            },
        ],
    };

    const options = {
        indexAxis: 'y',
        scales: {
            x: {
                type: 'linear',
                position: 'bottom',
                min: 0,
                max: 100,
                ticks: {
                    stepSize: 20,
                    callback: function (value, index, values) {
                        return value + '%';
                    }
                }
            },
            y: {
                grid: {
                    display: false
                }
            }
        },
        plugins: {
            legend: {
                display: false,
            }
        },
        gridLines: {
            display: false
        }
    };

    // Record Count Doughnut Graph
    const dataDounut = {
        labels: ['Completed Task', 'Overdue Task', 'Pending Task', 'Delayed Task'],
        datasets: [
            {
                label: 'Record Count',
                data: [30, 20, 60, 5],
                backgroundColor: [
                    'rgb(66, 221, 54)',
                    'rgb(255, 228, 20)',
                    'rgb(255, 51, 51)',
                    'rgb(212, 212, 212)'
                ],
            },
        ],
    };

    const optionsDount = {
        cutout: '75%',
        plugins: {
            legend: {
                display: false,
            }
        },
    };

    return (
        <section className="records-sec">
            <div className="overall-records-box">
                <div className="box-item">
                    <div className="icon-div">
                        <PiCheckCircleBold className="icon" />
                    </div>
                    <div className="details">
                        <h4>12</h4>
                        <p>Completed Task</p>
                    </div>
                </div>
                <div className="box-item">
                    <div className="icon-div">
                        <GiBackwardTime className="icon" />
                    </div>
                    <div className="details">
                        <h4>18</h4>
                        <p>Overdue Task</p>
                    </div>
                </div>
                <div className="box-item">
                    <div className="icon-div">
                        <GiSandsOfTime className="icon" />
                    </div>
                    <div className="details">
                        <h4>10</h4>
                        <p>Pending Task</p>
                    </div>
                </div>
                <div className="box-item">
                    <div className="icon-div">
                        <AiOutlineFieldTime className="icon" />
                    </div>
                    <div className="details">
                        <h4>116</h4>
                        <p>Delayed Task</p>
                    </div>
                </div>
            </div>
            <div className="record-count">
                <h4 className='title'>Record Count</h4>
                <Bar data={data} options={options} />
            </div>
            <div className="record-count record-dount-graph">
                <h4 className='title'>On time Task Performance</h4>
                <div className="chart-container">
                    <Doughnut data={dataDounut} options={optionsDount} />
                    <div className='graph-text'>
                        <h5>133</h5>
                        <p>Total Tasks</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RecordsSec