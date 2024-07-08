import React, { Component } from 'react'


export class Search extends Component {
  constructor(props) {
    super(props)
  
    this.props = props;
  }
  
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-12 col-sm-12 ">
              <form>
                <div className="mb-3 mt-5">
                  <label className="form-label">Enter City</label>
                  <input type="text" className="form-control" value={this.props.city} onChange={this.props.change} name='city' placeholder='Enter City Name'></input>
                </div>
              </form>
            </div>
            <div className='col-lg-2 d-lg-block d-md-none d-sm-none mt-5'>
              <center>
                <h4 className='mt-5'>
                OR 
                </h4>
              </center>
            </div>
            <div className="col-lg-5 col-md-12 col-sm-12">
              <form>
                <div className='mb-3 mt-5 d-flex'>
                  <p className=''>Get Co-Ordinate</p><span className="ms-2 material-symbols-outlined" onClick={this.props.location}>my_location</span>
                </div>
                <div className="mb-3">
                  <label className="form-label">Lat:</label>
                  <input type="number" className="form-control"  value={this.props.lat} onChange={this.props.change} name='lat' placeholder='Enter latitute'></input>
                </div>
                <div className="mb-3">
                  <label className="form-label">Lon</label>
                  <input type="number" className="form-control"  value={this.props.lon}  onChange={this.props.change} name='lon' placeholder='Enter longitude'></input>
                </div>
                <div className="mb-3 d-flex">
                  <p>Search</p><span onClick={this.props.search} className="material-symbols-outlined ms-2">Search</span>
                </div>  
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Search