import React from 'react'
import FeatureImg1 from '../assets/feature-img-1.png';
import FeatureImg2 from '../assets/feature-img-2.png';
import FeatureImg3 from '../assets/feature-img-3.png';
import '../Css/Features.css';
import UserViewList from './UserViewList';

const Features=()=> {
  return (
   <>
   <section>
       <UserViewList/>
<div class="features" id="features">

<h1 class="heading"> Our <span>Features</span> </h1><br></br>

<div class="box-container">

    <div class="box">
        <img src={FeatureImg1} alt=""/>
        <h3>Fresh and Delicious</h3>
        
    </div>

    <div class="box">
        <img src={FeatureImg2} alt=""/>
        <h3>Free Delivery</h3>
        
    </div>

    <div class="box">
        <img src={FeatureImg3} alt=""/>
        <h3>Easy Payments</h3>
        
    </div>

</div>

</div>
</section>

   </>
  )
}

export default Features
