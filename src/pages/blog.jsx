import React from 'react';

const Details = (props) =>{
    const {photo,text} = props;
    return(             
                    <div className="col-lg-4 col-md-4 latestBlog mt-5">
                        <div className="container">
                            <div>
                                <img src={photo} />
                                {text}
                                
                            </div>
                            <div><button>Redmore</button></div> 
                            </div>
                        </div>      
                                 
               
    )
}
export default Details;
