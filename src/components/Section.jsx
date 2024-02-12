import React from "react";
import final from '../images/final.png';


const Section = () => {
    return(
     <div style={{backgroundColor: '#F7FDFF', paddingTop: '20px'}}>
        <h1 style={{margin: '40px'}}>Your <span style={{color: '#8064a2'}}>Hobby</span>, Your <span style={{color: '#0096C8'}}>Community</span>...</h1>
        <button className="btn btn-primary" style={{marginLeft: '40px', backgroundColor: '#8064a2', borderColor: '#8064a2'}}>Get started</button>
        <img src={final} alt="" style={{width: "100%"}}/>
     </div>
    );
};

export default Section;