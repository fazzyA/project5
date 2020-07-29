import React from "react";
import Lottie from "react-lottie";

// import Left from "../asset/left-img.png";
// import Right from "../asset/right-img.png";
import animationData2 from '../asset/17809-contact-us.json'
import animationData from '../asset/16565-contact-us.json'

export default function FooterComponent() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    }
    };
    const defaultOptions2 = {
      loop: true,
      autoplay: true,
      animationData: animationData2,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      }
      };
  

  return (
    <footer className='page-footer grey lighten-2'>
      <div className='row'>
        <h3 className='center title black-text'>
          Contact <u>Us</u> <i className='i-line'>Subscribe.</i>
        </h3>
        
        <h6 className='font center black-text'>
          <b>Build your digital presence</b>
        </h6>

        <div className='col m4 s12'>
          {/* <img className='responsive-img' src={Left} alt='bg' /> */}
          <Lottie options={defaultOptions2} height={180} width={400} />

        </div>

        <div className='col m4 s12'>
          <div className='card'>
            <div className='card-content'>
              {/* <div className='input-field one'>
                <i className='material-icons prefix teal-text text-accent-3'>
                  account_circle
                </i>
                <input id='user_name' type='text' className='validate' />
                <label htmlFor='user_name'>Username</label>
              </div> */}
              <div className='input-field'>
                <i className='material-icons prefix teal-text text-accent-3'>
                  mail
                </i>
                <input id='last_name' type='text' className='validate' />
                <label htmlFor='last_name'>Email ID</label>
              </div>
            </div>
            <div className='card-action'>
              <a
                href='#subscribe'
                className='btn btn-header white-text text-darken-4 teal accent-3'
              >
                {" "}
                Subscribe To Newsletter
              </a>
            </div>
          </div>
        </div>

        <div className='col m4 s12'>
          {/* <img className='responsive-img' src={Right} alt='bg' /> */}
          {/* <Lottie options={defaultOptions} height={180} width={400} /> */}

        </div>
      </div>
      <div className='footer-copyright purple darken-4'>
        <div className='container'>
          © <b className='font'>2020 Bootcamp</b>
          <a className='grey-text text-lighten-4 right' href='#!'>
            <b>Faiza Aziz Khan</b>
          </a>
        </div>
      </div>
    </footer>
  );
}
