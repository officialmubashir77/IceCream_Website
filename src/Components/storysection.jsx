import react from "react";
import reactDom from "react-dom";
import './storysection.css' ;


const SectionDiv = () => {

return (

    <section className="mainDiv">

        <div className="subdiv">

        <div className="product">
            <i class="fas fa-ice-cream icons"></i>
            <p className="icon-text">Products</p>
        </div>
        <div className="product">
            <i class="fas fa-handshake icons ourstory"></i>
            <p className="icon-text ourstory">story</p>
        </div>
        <div className="product">
            <i class="fas fa-hamburger icons"></i>
            <p className="icon-text">flavours</p>
        </div>
        <div className="product">
            <i class="fal fa-location icons"></i>
            <p className="icon-text">location</p>
        </div>


        </div>

    </section>

)

}


export default SectionDiv