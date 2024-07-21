import React from 'react'

const Happy = () => {
    return (
        <div>
            <main>
                <section id="counter" className="sec-padding mt-5 mb-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 ">
                                <div className="count"> <span className="fa fa-smile-o"></span>
                                    <p className="number">6</p>
                                    <h4>Total Courses</h4> </div>
                            </div>
                            <div className="col-md-3 ">
                                <div className="count"> <span className="fa fa-smile-o"></span>
                                    <p className="number">535</p>
                                    <h4>Students</h4> </div>
                            </div>
                            <div className="col-md-3 ">
                                <div className="count"> <span className="fa fa-smile-o"></span>
                                    <p className="number">896</p>
                                    <h4>Total Hours</h4> </div>
                            </div>
                            <div className="col-md-3 ">
                                <div className="count"> <span className="fa fa-smile-o"></span>
                                    <p className="number">777</p>
                                    <h4>Happy Clients</h4> </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Happy
