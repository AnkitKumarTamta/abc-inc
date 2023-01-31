import React from 'react'
import '../App.css';


const PortFolioCard = (props) => {
    
  return (
    <div className='yes mt-5' id='sadow'>
        <div className="card" style={{width: "18rem"}}>
  <img src={props.portimg} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{props.portheading}</h5>
    <p className="card-text">{props.portdesc}</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>

    </div>
  )
}

export default PortFolioCard