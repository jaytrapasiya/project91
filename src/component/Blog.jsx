import React from 'react'
import Details from "../pages/blog"

const data = [
    {
        photo: "176_E39A2335.jpg",
        text: "I'm baby meggings twee health goth blebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
        photo: "6697_wide_250x141_2x.jpg",
        text: "I'm baby meggings twee health goth blebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
        photo: "5-book-reading.jpg",
        text: "I'm baby meggings twee health goth blebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    }
]

const Blog = () => {
    return (
        <div className="container">
        {
            data.map((item,idx)=>(

                <Details 
                text={item.text} 
                photo={item.photo} 
                key={idx}/>
            ))
        }
           
        </div>
    )
}

export default Blog;

