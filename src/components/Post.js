import React from 'react'

export const Post = (props) => {
    return (
        <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="blog-post-thumb">
                <div className="img">
                    <img src={props.img} alt={props.title} />
                </div>
                <div className="blog-content">
                    <h3>
                        <a href="#">{props.title}</a>
                    </h3>
                    <div className="text">
                        {props.content}
                    </div>
                    <a href="#" className="main-button">Read More</a>
                </div>
            </div>
        </div>
    )
}
