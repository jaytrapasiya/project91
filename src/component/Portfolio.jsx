import React from "react";
import { useState, useEffect } from "react";

const Myportfolio = () => {

    const [filterData, setFilterData] = useState([])
    const [filteringData, setFilteringData] = useState("")

    const getPortfolio = () => {
        var url = "http://localhost:1234/allportfolio";
        fetch(url)
            .then(response => response.json())
            .then(portfolioArray => {
                setFilterData(portfolioArray);
            })
    }

    
    const setfilter = (item) => {
        setFilteringData(item);
     
    }

    useEffect(() => {
        getPortfolio();
    }, []);



    return (
        <div className="contavtus">
            <div className="container">
                <div className="row">
                    <div className="mt-3">
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="home" aria-selected="false" onClick={() => setfilter("")}>All</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false" onClick={() => setfilter("Design")}>Design</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false" onClick={() => setfilter("Devlopment")}>Devlopment</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#marketing" type="button" role="tab" aria-controls="marketing" aria-selected="false" onClick={() => setfilter("Marketing")}>Marketing</button>
                            </li>
                        </ul>
                    </div>

                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                            <div className="row">

                                {
                                    filterData?.filter(filterItem =>  filteringData ? filterItem.contain === filteringData : true).map((items, index) => (
                                        <div className="col-lg-4 col-md-6">
                                            <div className="mt-3 pfolio-images">
                                                <div key={index}>
                                                    <div><img src={items.photo} /></div>
                                                    <div className="text">{items.contain}</div>
                                                    <div className="overlay"></div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }



                                {/* <div className="col-lg-4 col-md-6">
                                    <div className="mt-3 pfolio-images">
                                        <div key={index}>
                                            <div><img src={item.photo} /></div>
                                            <div className="text">{item.contain}</div>
                                            <div className="overlay"></div>
                                        </div>
                                    </div>
                                </div> */}



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