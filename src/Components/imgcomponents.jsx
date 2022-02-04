import React from "react";
import  ReactDOM  from "react";
import './imgcomponents.css';
import backimage from '../images/bg-home.png'




const Image = () => {

return(
<div className="bacImagediv">

<img src={backimage} className="backImage img-fluid"  />

</div>



)

} 

export default Image