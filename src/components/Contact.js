import React from "react";
import "../App.css";
import swara from '../images/swarajfabrics.png';





const Contact = () => {
  return (
    <>
      <div className="bnrpic" id="bnr">
        <img
          src="https://www.askgalore.com/wp-content/uploads/2021/11/contactus-banner.jpg"
          alt="banner"
        />
        <h1 className="bottom-left">
          ABC Inc <br /> <span>Incredible Solutions</span>{" "}
        </h1>
      </div>

      <div className="container" id="twoCol">
        <div className="row">
          <div className="col-6">
          <h6>Contact US</h6>
          <h1>Send Your Messages</h1>
          </div>
          <div className="col-6">
            <p>GateData Are A IT Solutions & Technology Services Provider Institutions. Suitable 
              For IT Solutions, IT Technology, IT Business, Consulting, Software, Digital Solution 
              And Any Related Services Company Field.</p>
          </div>
        </div>
      </div>

      <div className="container" id="oneRow" >
      <div className="row">
  <div className="col-6" id="swara"><a target="_blank" href="https://www.google.com/maps/dir/28.5463559,77.2520096/swaraj+fabrics/@28.5399488,77.236343,15z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x390ce15e6275c443:0x1cf394392c6eec7c!2m2!1d77.2403559!2d28.5334203"><img src={swara} alt='swara'/></a></div>
  <div className="col-6">
    <div className="inputgroup">
      <input type="text" name='name' placeholder="Name" />
      <input type="email" name='email' placeholder="Email" />
    </div>
    <div className="secondinput">
    <input type='text' name='subject' placeholder='Subject' />
    <textarea className="w3review" name="w3review" rows="5" cols="59" placeholder="Enter Your Query"></textarea> <br/>
    <button className="btn btn-info text-white p-2 mt-3"><h6>Submit Request</h6></button>
    </div>
    
  </div>
</div>
      </div>
    </>
  );
};

export default Contact;
