import React from "react";

const MyNavbar= () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <div className="container-fluid">
  <div className="col-sm-2 display-none"></div> 
    <a className="navbar-brand text-light" href="#">Start Bootstrap</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      </ul>
      <div className="col-sm-4 display-none"></div> 
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light text-muted" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light text-muted" href="#">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light text-muted" href="#">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>)
}
export default MyNavbar