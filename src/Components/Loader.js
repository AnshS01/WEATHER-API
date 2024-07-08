import React, { Component } from 'react'
import RingLoader from "react-spinners/RingLoader";

export class Loader extends Component {
  render() {
    console.log(this.props.wetherData)
    
    return (
      <div>
        <div>
          <RingLoader className='d-block mx-auto my-5'  color="#666" size={80} speedMultiplier={100000} />
        </div>
        {/* <Triangle
      visible={true}
      height="80"
      width="80"
      color="#4fa94d"
      ariaLabel="triangle-loading"
      wrapperStyle={{}}
      wrapperClass=""
      /> */}
      </div>
    )
  }
}

export default Loader