import React, { Component } from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { Routes , Route } from 'react-router-dom'
import Home from './Pages/Home'
import Weather from './Pages/Weather'
import 'bootstrap/dist/css/bootstrap.css';

export class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/weather' element={<Weather></Weather>}></Route>
          </Routes>
        <Footer></Footer>
      </div>
    )
  }
}

export default App