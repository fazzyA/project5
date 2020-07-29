import React, { useEffect } from "react";
import bg from "../asset/bg.png";
import bg2 from "../asset/bg2.jpg";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import useWebAnimations, { fadeIn } from "@wellyshen/use-web-animations";

const HeaderComponent = () => {
  // useEffect(()=>{
  //      M.Modal.init(props.Modal);
  // })
  const { keyframes, timing } = fadeIn;
  const { ref } = useWebAnimations({
    keyframes,
    timing: {
      ...timing,
      iterations: Infinity,
      duration:1500,
    },
  });
  return (
      <div className='row'><br /><br />
        <div className='col s12 m6'>
          <img className='responsive-img' src={bg2} alt='bg' />
        </div>
        <div className='col s12 m6'>
          <h4 className='font' ref={ref}>
            <b>Now Build your Own Presence</b>
          </h4>
          <h1 className='title purple-text text-darken-4'>
 Web 
            <u>
              <span className='teal-text text-accent-3 i-line'>Axis</span>
            </u>{" "}
          </h1>
          <p className='para'>
            There are many variations of passages of Lorem Ipsum available,
            <br /> but the majority have suffered alteration in some form, by
            injected humour.
          </p>
          <h6 className='font'>
            <b>Join Us Today</b>
          </h6>
          <p className='para'>
            There are many variations of passages of Lorem Ipsum available.
          </p>
          <a
            href='#get'
            className='btn btn-header white-text text-darken-4 teal accent-3 modal-trigger'
            data-target='modal1'
          >
            Get A Quotation
          </a>
        </div>

        <div>
          <div
            // ref={(Modal) => {
            //   this.Modal = Modal;
            // }}
            id='modal1'
            className='modal'
          >
            <div className='modal-content'>
              <h4 className='font'>The Offer Is Coming Soon!</h4>
              <p className='para'>
                Thanks For You Concern, but we're under development!
              </p>
            </div>
            <div className='modal-footer'>
              <a
                href='#close'
                className='btn btn-header modal-close white-text teal accent-3'
              >
                Close
              </a>
            </div>
          </div>
        </div>
        <hr />
      </div>
    );
  }
export default HeaderComponent