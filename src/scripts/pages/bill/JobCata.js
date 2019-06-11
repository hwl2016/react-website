import React from 'react'
import { jobsCata as jobs } from './jobs'
// const jobs = getJobsCatalog();
// console.log(JSON.stringify(jobs))
import '$style/bill.scss'

export default class JobCata extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstStatus: 0,
            secondStatus: 0,
            thirdStatus: 0
        }
    }

    render() {
        let idx = this.state.firstStatus.toString().slice(0,1);
        let secidx = this.state.secondStatus.toString().slice(1,3);
        return (
            <div>
                <div className="bill-go-home"><a href="/">返回首页</a></div>
                <div>
                <select placeholder="一级" onChange={(e) => {this.firstChange(e)}}>
                <option value ="0">请选择</option>
                {
                    jobs.map(item => {
                        return (
                            <option key={item.code} value={item.code}>{item.name}</option>
                        )
                    })
                }
                </select>
                </div>
                <div>
                <select placeholder="二级" onChange={(e) => {this.secondChange(e)}} 
                        disabled={this.state.firstStatus == 0}>
                <option value ="0">请选择</option>
                {
                    this.state.firstStatus && 
                    jobs[parseInt(idx) - 1] && 
                    jobs[parseInt(idx) - 1]['children'] ?
                    jobs[parseInt(idx) - 1]['children'].map(item => {
                        return (
                            <option key={item.code} value={item.code}>{item.name}</option>
                        )
                    }) : null
                }
                </select>
                </div>
                <div>
                <select placeholder="三级" onChange={(e) => {this.thirdChange(e)}} 
                        disabled={this.state.secondStatus == 0}>
                <option value ="0">请选择</option>
                {
                    this.state.secondStatus && 
                    jobs[parseInt(idx) - 1] && 
                    jobs[parseInt(idx) - 1]['children'] && 
                    jobs[parseInt(idx) - 1]['children'][secidx-1] && 
                    jobs[parseInt(idx) - 1]['children'][secidx-1]['children'] ?
                    jobs[parseInt(idx) - 1]['children'][secidx-1]['children'].map(item => {
                        return (
                            <option key={item.code} value={item.code}>{item.name}</option>
                        )
                    }) : null
                }
                </select>
                </div>
            </div>
        )
    }

    // 同步设置state状态
    firstChange = async (e) => {
        await this.setState({
            firstStatus: e.target.value,
            secondStatus: 0,
            thirdStatus: 0
        })
        console.log(this.state)
    }

    secondChange = (e) => {
        this.setState({
            ...this.state,
            secondStatus: e.target.value,
            thirdStatus: 0
        }, () => {
            console.log(this.state)
        })
    }

    thirdChange = (e) => {
        this.setState({
            ...this.state,
            thirdStatus: e.target.value
        }, () => {
            console.log(this.state)
        })
        
    }

}