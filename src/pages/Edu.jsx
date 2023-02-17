import React from "react";

const Edu = (props) =>{
    const {edu,uni,contain,exp,company,containe} = props;
    return(
        <>
        <div className="node">
            <h5>{edu}</h5>
            <h6>{uni}</h6>
            <p>{contain}</p>
            
            <h5>{exp}</h5>
            <h6>{company}</h6>
            <p>{containe}</p>

        </div>
           
    </>
    )

}
export default Edu