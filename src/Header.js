import React, { Component } from "react";

class Header extends Component
{
    render()
    {
        return(
<div>
<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <a class="navbar-brand">Welcome</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <p class="nav-item nav-link active">Home</p>
      <p class="nav-item nav-link" >Features</p>
      <p class="nav-item nav-link" >Gallery</p>
      <p class="nav-item nav-link">About</p>
      
    </div>
  </div>
</nav>

</div>

        );
    }
}

export default Header;