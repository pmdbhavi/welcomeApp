import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {button: false}

  isButton = () => {
    this.setState(prevState => ({button: !prevState.button}))
  }

  render() {
    const {button} = this.state
    return (
      <div className="main-container">
        <div className="contain">
          <h1 className="heading">Welcome</h1>
          <p className="para">Thank you! Happy Learning</p>
          <button type="button" className="button" onClick={this.isButton}>
            {button ? 'Subscribed' : 'Subscribe'}
          </button>
        </div>
      </div>
    )
  }
}

export default Welcome
