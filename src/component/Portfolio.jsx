import React from "react";
import { useState, useEffect } from "react";

const Myportfolio = () =>{


        let[data, updateSlider] = useState( [] );
        const getSlider = () =>{
            var url = "http://localhost:1234/allportfolio";
            fetch(url)
            .then(response=>response.json())
            .then(sliderArray=>{
                updateSlider(sliderArray);
            })
        }
    
        useEffect(()=>{
            getSlider();
        },[1]);
        
  
   
    return(    
               <div className="contavtus">
                    <div className="container">
                        <div className="row">
                            <div className="mt-3">
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">All</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Design</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Devlopment</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#marketing" type="button" role="tab" aria-controls="marketing" aria-selected="false">Marketing</button>
                                </li>
                            </ul>
                            </div>
                            
                            <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <div className="row">
                                    
                                        {  
                                            data.map((item,index)=>(
                                                <div className="col-lg-4 col-md-6">
                                                    <div className="mt-3 pfolio-images"> 
                                                        <div key={index}>
                                                            <div><img src={item.photo}/></div>
                                                            <div className="text">{item.contain}</div>
                                                            <div className="overlay"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                
                                        }
                                       
                                    
                                </div>
                            </div>
                            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                <div className="row">
                                
                                </div>

                            </div>
                            <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                                <div className="row">
                                
                                </div>
                            </div>
                            <div class="tab-pane fade" id="marketing" role="tabpanel" aria-labelledby="marketing-tab">
                                <div className="row">
                                
                                </div>

                            </div>
                        </div>
                        </div>
                    </div>
                    <div>    
              </div>
        </div>
    )
}
export default Myportfolio;