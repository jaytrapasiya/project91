import React from "react";
import Edu from "../pages/Edu";

const data =
    [
    {
        edu:"S.S.C",
        uni:"g.s.e.b (Gujarat)/ 2017",
        contain:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a diohiosdkl galley of  type and scrambled it to make a type"
    },
    {
        edu:"H.S.C",
        uni:"g.s.e.b (Gujarat)/ 2020",
        contain:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of  type and scrambled it to make a type"
    },
    {
        edu:"B.com",
        uni:"Narsinh Mehta University",
        contain:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of  type and scrambled it to make a type"
    },
   
]
const education =[
    {
        exp:"React Training",
        company:"Info Cumpus",
        containe:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of  type and scrambled it to make a type"
    },
    {
        exp:"Web Designer",
        company:"Info Cumpus",
        containe:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of  type and scrambled it to make a type"
    },
    {
        exp:"React Front-End Developer",
        company:"Info Cumpus",
        containe:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of  type and scrambled it to make a type"
    }
]

const Education = () =>{
    return(
        <div className="container">
        <div className="col-lg-6 col-md-6 myedu">
            <div className="mt-3 mb-3"><h4>My Education</h4></div>
                <div className="stepper-wrapper-vertical">
                    <div>
                        {
                            data.map((item,index)=>(
                                <Edu
                                key={index}
                                edu={item.edu}
                                uni={item.uni}
                                contain={item.contain}/>
                            ))
                        }
                </div>
            </div>
        </div>
        <div className="col-lg-6 col-md-6 myedu">
            <div className="mt-3 mb-3"><h4>My Experience</h4></div>
                <div className="stepper-wrapper-vertical">
                    <div>
                        {
                            education.map((item,index)=>(
                                <Edu
                                key={index}
                                exp={item.exp}
                                company={item.company}
                                containe={item.containe}/>
                            ))
                        }
                </div>
            </div>
        </div>
     </div>   
    )
}
export default Education;