import { Component } from 'react';
import FirstComponent from './component/one/first';
import './App.css';
import SecondComponent from './component/two/second';
import './styles.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
    }
  }

  render() {
    return (
      <div className="App">
        {
          <><FirstComponent name="Thieves105"/><SecondComponent/> \</>}
      </div>
    )
  }
}
export default App;
