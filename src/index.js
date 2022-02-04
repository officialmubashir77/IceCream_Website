import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './Components/header';
import Image from './Components/imgcomponents' ;
import Para from './Components/paradiv' ;
import SectionDiv from './Components/storysection';
import Footer from './Components/footer'


ReactDOM.render(
 <>

<Header/>
<Image/>
<Para/>
<SectionDiv/>
<Footer/>



 </>,
  document.getElementById('root')
);




// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
