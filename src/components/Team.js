import React from 'react'
import '../App.css';


const Team = (props) => {
    // console.log(props)
  return (
    <>
    
    <div className="card mb-3 p-3 mb-5" id='teamwala' style={{maxWidth: "1140px"}}>
  <div className="row no-gutters">
    <div className="col-md-4">
      <img src={props.image} alt="first"/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h3 className="card-title">{props.name}</h3>
        <p className="card-text" id='desig'>{props.designation}</p>
        <p><span>Lives: </span>{props.from}</p>
        <p><span>Technologies: </span> {props.technologies}</p>
        <p><span>Present in the industry: </span> {props.industry}</p>
        <p><span>Description: </span> {props.description}</p>
        
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default Team