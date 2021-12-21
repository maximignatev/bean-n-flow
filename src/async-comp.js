import React from 'react'

class AsyncComponent extends React.Component {
  state = {
    Component: null,
    isLoaded: false,
  }

  async componentWillMount() {
    const module = await this.props.lazyLoadComponent
    this.setState({
      Component: module.default,
      isLoaded: true,
    })
  }

  render() {
    const { Component } = this.state
    return <div>{this.state.isLoaded ? <Component /> : this.props.loader}</div>
  }
}

export default AsyncComponent
