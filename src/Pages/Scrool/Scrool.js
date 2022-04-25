
import React from 'react'
import createScrollSnap from 'scroll-snap'
import './Scrool.css';

class Scrool extends React.Component {
  
  container = React.createRef()

  bindScrollSnap() {
    const element = this.container.current
    
    createScrollSnap(element, {
      snapDestinationY: '100vh',
    }, () => console.log('snapped'))
  }

  componentDidMount() {
    this.bindScrollSnap()
  }

  render() {
    return (
      <div id="container" ref={this.container}>
        <div className="page first-page">
          <div>I</div>
          <div className="hint">scroll down</div>
        </div>
        <div className="page second-page">
          <div>II</div>
        </div>
        <div className="page third-page">
          <div>III</div>
          <div>
              <h1>hi lo koko</h1>
          </div>
        </div>

        <div className="page fourth-page">
          <div>IV</div>
          <div className="hint">scroll up</div>
        </div>

        <div className="page fourth-page">
          <div>IIV</div>
          <div className="hint">I crate</div>
        </div>

        <div className="page fourth-page">
          <div>IIIV</div>
          <div className="hint">New Here</div>
        </div>

        <div className="page fourth-page">
          <div>v</div>
          <div className="hint">Thank You</div>
        </div>

      </div>
    )
  }
}


const rootElement = document.getElementById('root')
export default Scrool;
