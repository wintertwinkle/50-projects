import React from "react"
import ReactDOM, { render } from "react-dom"

export class BlurryLoading extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      load: 0,
    }
  }

  scale(number, inMin, inMax, outMin, outMax) {
    return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin
  }

  loading() {
    const load = this.state.load
    // console.log(`loading${load}`)
    if (load < 99) {
      this.setState({
        load: load + 1,
      })
    } else {
      clearInterval(this.interval)
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => this.loading(), 30)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    const load = this.state.load
    const bgStyle = {
      filter: `blur(${this.scale(load, 0, 100, 30, 0)}px)`,
    }

    const loadStyle = {
      opacity: this.scale(load, 0, 100, 1, 0),
    }

    return (
      <div>
        <section className="bg" style={bgStyle}></section>
        <div className="loading-text" style={loadStyle}>
          {load}%
        </div>
      </div>
    )
  }
}
