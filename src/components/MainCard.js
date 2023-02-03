import React from 'react'
import  '../App.css'


const MainCard = () => {
  return (
    <div>
    <div id="carouselExampleDark" className="carousel slide carousel-fade " data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="2000">
      <img src="https://images.unsplash.com/photo-1549082984-1323b94df9a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29uJTIwYXQlMjBkZXNrfGVufDB8fDB8fA%3D%3D&w=1000&q=80" className="d-block w-100 filt" alt="image"/>
      <div id="first" className="carousel-caption d-none d-md-block text-white display-1">
        <h3>Successfull Projects</h3>
        <p>Excelent <span className='text-primary' >IT Services</span> for Your Success</p>
      </div>
    </div>
    <div  className="carousel-item" data-bs-interval="2000">
      <img src="https://images.unsplash.com/photo-1589987607627-616cac5c2c5a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d29ya2luZyUyMGNvbXB1dGVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80" className="d-block w-100 filt" alt="image"/>
      <div id='second' className="carousel-caption d-none d-md-block text-white display-1">
        <h3>International Reach</h3>
        <p >Leading <span className='text-primary'>Global Provider</span> for IT Solutions</p>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src="https://images.unsplash.com/photo-1558698972-c50e325e6799?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNvbXB1dGVyJTIwc3R1ZHl8ZW58MHx8MHx8&w=1000&q=80" className="d-block w-100 filt" alt="image"/>
      <div id='third' className="carousel-caption d-none d-md-block text-white display-1">
        <h3>Established Brands</h3>
        <p>We Believe in <span className='text-primary'>Building Strong</span> Brands</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

<div className="container my-5" id='fourId'>
  <div className="row" id='fourIcon'>
    <div className="col"><i className="fa-solid fa-magnifying-glass-arrow-right fa-2x"></i> <h5>Analysis & Assesment</h5></div>
    <div className="col"><i className="fa-solid fa-people-group fa-2x"></i><h5>Planning & Scope</h5></div>
    <div className="col"><i className="fa-solid fa-laptop-file fa-2x"></i><h5>Migration Process</h5></div>
    <div className="col"><i className="fa-solid fa-hand-holding-hand fa-2x"></i><h5>Managed Services</h5></div>
  </div>
  </div>

<div className='container' id='infow'>
<div className="row" id='imgcontainer'>
    <div className="col-6 shadow-sm p-3 mb-5 bg-white rounded"><img src='https://images.unsplash.com/photo-1580894908361-967195033215?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'  /></div>
    <div className="col-6">
      <h6>Innovative IT Solution & Technology</h6>
      <h1>We Design, Deploy, Migrate & Manage Results Driven</h1>
      <p>ABC inc IT Solutions & Technology Services Provider Institutions. Suitable For IT Solutions, IT Technology, IT Business, Consulting, Software, Digital Solution And Any Related Services Company Field.</p>
      <div className='root'>
        <div className='sub'>
          <h4>Trusted Services</h4>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry simply.</p>
        </div>
        <div className='sub'>
          <h4>Quality Products</h4>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry simply.</p>
        </div>
      </div>
    </div>
  </div>
</div>





<div className='container text-center py-5'>
  <h1 className='text-center mb-4'>Working with ABC inc</h1>
  <div className="row py-2" id = "fourbox">
  <div className="col py-4">
    <img src='https://adsiunited.com/wp-content/uploads/bb-plugin/cache/corporaterelocations-square.jpg' alt='ofc' ></img>
    <h3 className='py-3'>Experience Led & Outcome Focused</h3>
    <p>We help brands understand the role digital can play in realizing strategic opportunities and solving real world business problems, always keeping the focus on the customer's experience and the results generated.</p>
  </div>
  <div className="col py-4"><img src='https://images.hired.com/company_photos/31688/pictures/1538589330/square.jpg' alt='ofc' ></img>
    <h3 className='py-3'>Reliable, Rapid & Renowned Delivery</h3>
    <p>Using agile methodology, always keeping you in the loop. Streamlined delivery, cost effective engagements, designed to match your goals, your timeline and your budget.</p></div>
  <div className="w-100"></div>
  <div className="col py-4"><img src='https://c8.alamy.com/comp/2BJ4NKX/computer-code-software-concept-programmer-working-with-a-laptop-programming-code-on-the-screen-office-background-developing-coding-technologies-2BJ4NKX.jpg' alt='ofc' ></img>
    <h3 className='py-3'>Expert Web Designers & Developers</h3>
    <p>We have been designing and developing websites and web applications since 2007. Our experts are trained, certified and experienced across a variety of website platforms.</p></div>
  <div className="col py-4"><img src='https://ourownstartup.com/wp-content/uploads/2020/01/importance-of-a-positive-work-culture-c-534x450.jpg' alt='ofc' ></img>
    <h3 className='py-3'>Transparent & Communicative</h3>
    <p>Complete project visibility and multiple open lines of communication from day one. We are available when you need us and continually updating you on your project’s status.</p></div>
</div>
</div>


<hr/>



<div className='container' id='paragraph'>
<div className="row">
  <div className="col-4">
   <h1 className='mb-5'>Why Brands Choose <span>ABC inc</span> for Web Development</h1> 
   <img src='https://d24chjhol3kq77.cloudfront.net/trbusiness.com/wp-content/uploads/2019/10/Brands-top-100-2001.jpg' alt='brands' />
    
    </div>
  <div className="col-8">
    <h4>Here are just some of the ways that we stand out as a company when it comes to what our experience is with websites and creating digital experiences.</h4>
    <div className='para'><p>✔  Award winning web solutions and sites</p>
    <p>✔  Competitive rates for web design and development talent</p>
    <p>✔  Cross-functional team of 300+ experts based in the Americas, Europe & Asia</p>
    <p>✔  In-house, front-end experts: Business Analysts, UX/UI Specialists & Designers</p>
    <p>✔  Friendly, open, communicative and collaborative way of working with clients</p>
    <p>✔  Proven track record of successful web design and development project delivery</p>
    </div>
    </div>
</div>
</div>



<div className='container py-3'>
<div className="row" id='smallsec'>
    <div className="col-4"><h6>Technology & IT Services</h6>
    <h2>ABC inc Named Best Web Services Provider</h2></div>
    <div className="col-8" ><p>GateData Are A IT Solutions & Technology Services Provider Institutions. Suitable For IT Solutions, IT Technology, IT Business, Consulting, Software, Digital Solution And Any Related Services Company Field.</p></div>
  </div>
  </div>

    
    </div>
  )
}

export default MainCard