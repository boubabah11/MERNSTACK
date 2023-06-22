import React from "react";

// Using functional Component
let Footer = (props)=>
{
    let age = props.age; // To be READ ONLY 
    return(
         <div className="footer">
        © Copyright 2023 All rights reserved. &nbsp;|&nbsp; <a href="https://www.synergisticit.com/" target="_blank">SynergisticIT</a> &nbsp;|&nbsp; <a href="http://www.synergisticit.com/sitemap.xml" target="_blank">Sitemap</a>
        </div>

         )
}
           {/* <h1> This is Footer Component</h1>
            <b> Passed From Application Component {age}</b>
    <h3> Below are the other properties </h3> */}
            
            {/*props.children[0]}
            {props.children[1]*/} 
            
        
    


export default Footer;