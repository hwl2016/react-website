import React from 'react'

export default class Login extends React.Component {
    render() {
        console.log('Login render')
        return <h4>Login Page {this.props.type}</h4>
    }

    componentWillMount() {
        console.log('Login componentWillMount')
    }

    componentDidMount() {
        console.log('Login componentDidMount')
    }

    componentWillUpdate() {
        console.log('Login componentWillUpdate')
    }
    componentDidUpdate() {
        console.log('Login componentDidUpdate')
    }
    componentWillReceiveProps() {
        console.log('Login componentWillReceiveProps')
    }
    componentWillUnmount() {
        console.log('Login componentWillUnmount')
    }
    
}