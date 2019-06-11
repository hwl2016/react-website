import React from 'react'
import { Link } from 'react-router-dom'

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 0
        }
        this.handler = this.handler.bind(this)
        this.reportDPR = this.reportDPR.bind(this)
    }
    handler() {
        this.setState({
            state: {
                num: this.state.num++
            }
        })
    }
    reportDPR() {
        let str = `clientWidth: ${document.documentElement.clientWidth}\n 
        devicePixelRatio: ${window.devicePixelRatio}`
        alert(str)
    }
    render() {
        console.log('APP render')
        return (
            <div>
                <p onClick={ this.handler }>App Test: { this.state.num }</p>
                <p id="btn">btn</p>
                <p><Link to='/login'>Login</Link></p>
                <p><Link to='/register'>Register</Link></p>
                <p><a href='/bill'>账单</a></p>
            </div>
        )
    }
    componentWillMount() {
        console.log('APP componentWillMount')
    }

    componentDidMount() {
        console.log('APP componentDidMount')
        let btn = document.getElementById('btn')
        btn.onclick = this.reportDPR
        this.handler();
    }

    componentWillUpdate() {
        console.log('APP componentWillUpdate')
    }
    componentDidUpdate() {
        console.log('APP componentDidUpdate')
    }
    componentWillReceiveProps() {
        console.log('APP componentWillReceiveProps')
    }
    componentWillUnmount() {
        console.log('APP componentWillUnmount')
    }

    shouldComponentUpdate(v) {
        console.log('APP shouldComponentUpdate', v)
        return true
    }
}