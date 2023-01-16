import React from 'react'
import FirstComponent from '../../component/one/first'
import SecondComponent from '../../component/two/second'

const Home = () => {
        return (
          <div className="App">
              <FirstComponent/>
              <SecondComponent/>
          </div>
        )
}

export default Home;