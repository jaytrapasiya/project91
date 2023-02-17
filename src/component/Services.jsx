import React from "react";
import Service from "../pages/service";
import { BsDisplay,BsDisplayFill,BsPhoneFill,BsFileBreak,BsZoomOut,BsFileEarmarkPostFill } from "react-icons/bs";

const data = [
    {
        icon:<BsDisplay/>,
        course:"Web Design",
        contain:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took",
        button:"Read More"
    },
    {
        icon:<BsDisplayFill/>,
        course:"Web Devlopment",
        contain:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took",
        button:"Read More"
    },
    {
        icon:<BsPhoneFill/>,
        course:"App Design",
        contain:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took",
        button:"Read More"
    },
    {
        icon:<BsFileBreak/>,
        course:"App Devlopment",
        contain:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took",
        button:"Read More"
    },
    {
        icon:<BsZoomOut/>,
        course:"App Disign",
        contain:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took",
        button:"Read More"
    },
    {
        icon:<BsFileEarmarkPostFill/>,
        course:"App Disign",
        contain:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took",
        button:"Read More"
    }
]

const MyServices = () =>{
    
return(
    <div className="container">
        <div className="text-center mt-3 mb-3"><h1>Services</h1></div>
        {
            data.map((item,index)=>(
                <Service
                key={index}
                course={item.course}
                contain={item.contain}
                button={item.button}
                icon={item.icon}/>
                
                ))
        }
    </div>

)
    
}

export default MyServices