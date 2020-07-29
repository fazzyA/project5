import React, { useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import logo from '../asset/logo.jpg'
import useWebAnimations from "@wellyshen/use-web-animations";

 const NavbarComponent =()=> {
  useEffect(() => {
    let sidenav = document.querySelector("#slide-out");
    M.Sidenav.init(sidenav, {});

  });


    const { ref } = useWebAnimations({
      keyframes: [
        {transform: 'rotate(0deg)'},
        {transform: 'rotate(180deg)'},
        {transform: 'rotate(360deg)'},
      ], 
      timing: {
        // delay: 500, // Start with a 500ms delay
        duration: 2000, // Run for 1000ms
        iterations: Infinity, // Repeat once
        // direction: "alternate", // Run the animation forwards and then backwards
        // easing: "ease-in-out", // Use a fancy timing function
      },
    });
  

    return (
      <div>
        <nav className='nav z-depth-0'>
          <div className='nav-wrapper'>
          <img ref={ref} className='responsive-img' src={logo} alt='bg' width={80} height={60}/>
            <a href='#' className='brand-logo purple-text text-darken-4'>
              Web
              <u><span className='teal-text text-accent-3 i-line'>Axis</span>
              </u>
            </a>
            <ul id='nav-mobile' className='right hide-on-med-and-down'>
              <li>
                <a
                  href='#login'
                  className='btn btn-nav transparent z-depth-0 purple-text text-darken-4'
                >
                  Login
                </a>
              </li>
              <li>
                <a
                  href='#join'
                  className='btn btn-nav transparent z-depth-0 white-text text-darken-4 purple darken-4'
                >
                  Join Now
                </a>
              </li>
            </ul>
            <a href='#menu' data-target='slide-out' className='sidenav-trigger'>
              <i className='purple-text text-darken-4 material-icons'>menu</i>
            </a>
          </div>
        </nav>
        <ul id='slide-out' className='sidenav'>
          <li>
            <a
              href='#login'
              className='btn btn-nav transparent z-depth-0 purple-text text-darken-4'
            >
              Login
            </a>
          </li>
          <li>
            <a
              href='#join'
              className='btn btn-nav transparent z-depth-0 white-text text-darken-4 purple darken-4'
            >
              Join Now
            </a>
          </li>
        </ul>
      </div>
    );
  }
export default NavbarComponent