import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div>

      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <Link className="navbar-brand" to="/">{props.title}</Link>
        {/* <a className="navbar-brand" href="/">{props.title}</a> */}
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
            <Link className="nav-link" to="/">Home<span className="sr-only">(current)</span></Link>
            {/* <a className="nav-link" href="/">Home<span className="sr-only">(current)</span></a> */}
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/about">{props.about}</Link>
            {/* <a className="nav-link" href="/about">{props.about}</a> */}
            </li>
          </ul>

          {/* TO ADD MORE T5HEMES COLOR */}
          <div className="d-flex">
            <div className="bg-primary rounded ms-2" style={{height:'20px', width:'20px', cursor:'pointer'}} onClick={()=>{props.changeMode('primary')}}>
            </div>
            <div className="bg-secondary rounded ms-2" style={{height:'20px', width:'20px', cursor:'pointer'}} onClick={()=>{props.changeMode('secondary')}}>
            </div>
            <div className="bg-success rounded ms-2" style={{height:'20px', width:'20px', cursor:'pointer'}} onClick={()=>{props.changeMode('success')}}>
            </div>
            <div className="bg-danger rounded ms-2" style={{height:'20px', width:'20px', cursor:'pointer'}} onClick={()=>{props.changeMode('danger')}}>
            </div>
            <div className="bg-warning rounded ms-2" style={{height:'20px', width:'20px', cursor:'pointer',color:'black'}} onClick={()=>{props.changeMode('warning')}}>
            </div>
            <div className="bg-info rounded ms-2" style={{height:'20px', width:'20px', cursor:'pointer'}} onClick={()=>{props.changeMode('info')}}>
            </div>
          </div>

          <div className={`form-check form-switch ms-2 text-${props.mode === 'light' ? 'dark':'light' }`}>
            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Change Mode</label>
          </div>
        </div>
      </nav>
    </div>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string
}

Navbar.defaultProps = {
  title: "Hello title",
  about: "Hello about"
}

