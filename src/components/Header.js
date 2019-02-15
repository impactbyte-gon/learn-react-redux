import React from 'react'
import { connect } from 'react-redux'

const Header = props => {
  return <h1>Learn React Redux {props.counter} times</h1>
}

const mapStateToProps = state => {
  return {
    counter: state.counter
  }
}

export default connect(mapStateToProps)(Header)
