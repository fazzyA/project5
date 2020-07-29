import React from "react";
import Aone from "../asset/a-1.svg";
import Atwo from "../asset/a-2.svg";
import Athree from "../asset/a-3.svg";
import Afour from "../asset/a-4.svg";

export default function IconComponent() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col s12 m6'>
          <img className='responsive-img' src={Aone} alt='bg' width='150px' />
          <h5 className='font'>Creative Ideas</h5>
          <p className='para'>
            There are many variations of passages of Lorem Ipsum available,
            <br /> but the majority have suffered alteration in some form, by
            injected humour.
          </p>
          <h6>
            <b>You're inside.</b>
          </h6>
        </div>
        <div className='col s12 m6'>
          <img className='responsive-img' src={Atwo} alt='bg' width='150px' />
          <h5 className='font'>Fast Optimized Solution</h5>
          <p className='para'>
            There are many variations of passages of Lorem Ipsum available,
            <br /> but the majority have suffered alteration in some form, by
            injected humour.
          </p>
          <h6>
            <b>You're inside.</b>
          </h6>
        </div>
        <div className='col s12 m6'>
          <img className='responsive-img' src={Athree} alt='bg' width='150px' />
          <h5 className='font'>Latest Technology</h5>
          <p className='para'>
            There are many variations of passages of Lorem Ipsum available,
            <br /> but the majority have suffered alteration in some form, by
            injected humour.
          </p>
          <h6>
            <b>You're inside.</b>
          </h6>
        </div>
        <div className='col s12 m6'>
          <img className='responsive-img' src={Afour} alt='bg' width='150px' />
          <h5 className='font'>FeedBack From Clients</h5>
          <p className='para'>
            There are many variations of passages of Lorem Ipsum available,
            <br /> but the majority have suffered alteration in some form, by
            injected humour.
          </p>
          <h6>
            <b>You're inside.</b>
          </h6>
        </div>
      </div>
    </div>
  );
}
