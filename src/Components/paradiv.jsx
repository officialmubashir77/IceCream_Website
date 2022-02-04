import React from "react";
import ReactDOM from "react";
import './paradiv.css' ;
import paraImg from '../images/yogurt.jpg'


const Para = () => {

return(

<section className="mainParaDiv">
    <div className="para">
        <p className="allcont">new product</p>
        <h2 className="allcont heading">the twist of healthy product</h2>
        <p className="allcont">lorem ipsumis simply dummy text of the printing and typesetting industry. Lorem Ipsum has been </p>
        <p className="allcont">lorem the printing and typesetting industry. </p>
    </div>

    <div className="paraImage">
        <img src={paraImg} />
    </div>

</section>




)

}

export default Para