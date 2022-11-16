import React from 'react'
import item from '../assets/images/featured-item-01.png'
import left from '../assets/images/left-image.png'
import right from '../assets/images/right-image.png'

export const Features = () => {
    return (
        <>
            <section className="section home-feature">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-sm-6 col-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.2s">
                                    <div className="features-small-item">
                                        <div className="icon">
                                            <i><img src={item} alt="" /></i>
                                        </div>
                                        <h5 className="features-title">Modern Strategy</h5>
                                        <p>Customize anything in this template to fit your website needs</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 col-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.4s">
                                    <div className="features-small-item">
                                        <div className="icon">
                                            <i><img src={item} alt="" /></i>
                                        </div>
                                        <h5 className="features-title">Best Relationship</h5>
                                        <p>Contact us immediately if you have a question in mind</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 col-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.6s">
                                    <div className="features-small-item">
                                        <div className="icon">
                                            <i><img src={item} alt="" /></i>
                                        </div>
                                        <h5 className="features-title">Ultimate Marketing</h5>
                                        <p>You just need to tell your friends about our free templates</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section padding-top-70 padding-bottom-0" id="features">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-12 col-sm-12 align-self-center" data-scroll-reveal="enter left move 30px over 0.6s after 0.4s">
                            <img src={left} className="rounded img-fluid d-block mx-auto" alt="App" />
                        </div>
                        <div className="col-lg-1"></div>
                        <div className="col-lg-6 col-md-12 col-sm-12 align-self-center mobile-top-fix">
                            <div className="left-heading">
                                <h2 className="section-title">Let's discuss about you project</h2>
                            </div>
                            <div className="left-text">
                                <p>Nullam sit amet purus libero. Etiam ullamcorper nisl ut augue blandit, at finibus leo efficitur. Nam gravida purus non sapien auctor, ut aliquam magna ullamcorper.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="hr"></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section padding-bottom-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12 align-self-center mobile-bottom-fix">
                            <div className="left-heading">
                                <h2 className="section-title">We can help you to grow your business</h2>
                            </div>
                            <div className="left-text">
                                <p>Aenean pretium, ipsum et porttitor auctor, metus ipsum iaculis nisi, a bibendum lectus libero vitae urna. Sed id leo eu dolor luctus congue sed eget ipsum. Nunc nec luctus libero. Etiam quis dolor elit.</p>
                            </div>
                        </div>
                        <div className="col-lg-1"></div>
                        <div className="col-lg-5 col-md-12 col-sm-12 align-self-center mobile-bottom-fix-big" data-scroll-reveal="enter right move 30px over 0.6s after 0.4s">
                            <img src={right} className="rounded img-fluid d-block mx-auto" alt="App" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
