import React from 'react';

const Banner = () => {
    return (
        <div className='carousel-container'>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="carousel-img d-block w-100" src="https://via.placeholder.com/800x400" alt="First slide" />
                        <div className="carousel-caption">
                            <h5>First Slide Label</h5>
                            <p>Some description for the first slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="carousel-img d-block w-100" src="https://via.placeholder.com/800x400" alt="Second slide" />
                        <div className="carousel-caption">
                            <h5>Second Slide Label</h5>
                            <p>Some description for the second slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="carousel-img d-block w-100" src="https://via.placeholder.com/800x400" alt="Third slide" />
                        <div className="carousel-caption">
                            <h5>Third Slide Label</h5>
                            <p>Some description for the third slide.</p>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    {/* <span className="sr-only">Previous</span> */}
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    {/* <span className="sr-only">Next</span> */}
                </a>
            </div>
        </div>
    );
};

export default Banner;
