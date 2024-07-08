import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Header extends Component {
  render() {
    return (
      <div>
        <section className="container-fluid ">
          <div className="row py-4">
            <div className="col-lg-2 col-md-3 col-sm-4">
              <Link to='/' className='text-decoration-none'><h2 className='text-dark text-decoration-none icon-link-hover  p-2'>WEATHER</h2></Link>
            </div>
            <div className="col-lg-10 col-md-9 col-sm-8">
              <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid">
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 c2">
                      <li className="nav-item">
                        <Link className="nav-link active text-secondary" aria-current="page" to="/">Home</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="/weather">Weather</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </section>
    </div>
    )
  }
}

export default Header