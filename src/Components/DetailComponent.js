import React from "react";
import Detail from "../asset/details.jpg";
import Lottie from "react-lottie";
import animationData from '../asset/27620-contact-us.json'

export default function DetailComponent() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    }
    };

  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col s12 m6'>
            <h2 className='font'>
              Connect Y<u>o</u>urself.
            </h2>
            <p className='para'>
              Website build your digital presence all ober the world
              <br /> in social media adn every aspect of life.
            </p>
            <a
              href='#'
              className='btn btn-header white-text text-darken-4 teal accent-3'
            >
              Download App
            </a>
          </div>
          <div className='col s12 m6'>
            {/* <img className='responsive-img' src={Detail} /> */}
            <Lottie options={defaultOptions} className='responsive-img'  />
          </div>
        </div>
      </div>
    </div>
  );
}
