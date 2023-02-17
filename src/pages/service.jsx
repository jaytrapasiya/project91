import React from "react";

const Service = (props) =>{
    const {icon,course,contain,button} = props;
    return(
        <>
                            <div className="col-lg-4 col-md-4 text-center mt-4 servicebox">
                                <div className="container">
                                    <div>
                                        <div className="rounded-circle webdesign mb-3">{icon}</div>
                                        <h3>{course}</h3>
                                        <p>{contain}</p>
                                            <a href="">{button}</a>
                                    </div>
                                </div>
                            </div>
        </>
    )
} 
export default Service;