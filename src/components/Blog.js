import React from 'react'
import img1 from '../assets/images/blog-item-01.png';
import img2 from '../assets/images/blog-item-02.png';
import img3 from '../assets/images/blog-item-03.png';
import { Post } from './Post';

export const Blog = () => {
    return (
        <section className="section" id="blog">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="center-heading">
                            <h2 className="section-title">Blog Entries</h2>
                        </div>
                    </div>
                    <div className="offset-lg-3 col-lg-6">
                        <div className="center-text">
                            <p>Integer molestie aliquam gravida. Nullam nec arcu finibus, imperdiet nulla vitae, placerat nibh. Cras maximus venenatis molestie.</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <Post title="Vivamus ac vehicula dui" content="Cras aliquet ligula dui, vitae fermentum velit tincidunt id. Praesent eu finibus nunc. Nulla in sagittis eros. Aliquam egestas augue." img={img1} />
                    <Post title="Phasellus convallis augue" content="Aliquam commodo ornare nisl, et scelerisque nisl dignissim ac. Vestibulum finibus urna ut velit venenatis, vel ultrices sapien mattis." img={img2} />
                    <Post title="Nam gravida purus non" content="Maecenas eu erat vitae dui convallis consequat vel gravida nulla. Vestibulum finibus euismod odio, ut tempus enim varius eu." img={img3} />
                </div>
            </div>
        </section>
    )
}
