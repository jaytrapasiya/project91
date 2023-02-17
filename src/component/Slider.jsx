import React from "react";
import { useState, useEffect } from "react";
import Carousel from 'react-bootstrap/Carousel';


const Slider = () =>{
    let[data, updateSlider] = useState( [] );
    const getSlider = () =>{
        var url = "http://localhost:1234/allslider";
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
        <>
            <Carousel>
        {  
                            data.map((item,index)=>(
                
                    <Carousel.Item interval={1000}>
                        <Carousel.Caption>
                                <div key={index}>
                                   <p>{item.contain}</p>
                                   <div><img src ={item.photo} className="rounded-circle" width="50px"/></div>
                                   <h3>{item.name}</h3> 
                                   <p>{item.skill}</p>

                                </div>
                            </Carousel.Caption> 
                        </Carousel.Item> 
                    
                            ))
                
                        }
                    </Carousel>
        </>
    )

}

export default Slider;