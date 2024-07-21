import React from 'react'
import NavBar from './Nav/Navbar'
import bannerBlog from './../../assets/img/blogBanner.jpg'
import { FaBlogger } from 'react-icons/fa';
import { MdDateRange } from "react-icons/md";
import { FaArrowRight } from 'react-icons/fa';
import Footer from './../components/Footer'
const Blog = () => {
  return (
    <div>
      <NavBar />
      <main className="mt-75">
        <div className="banner-blog">
          <img src={bannerBlog} className='banner-blog' alt="img not found" />
        </div>
        <h2 className="text-center mt-5 mb-4">Blog</h2>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="card p-2">
                <div className="card-img">
                  <FaBlogger className='ms-2' size={50} color="red" />
                </div>
                <div className="card-body">
                  <span className='text-muted'>
                    <MdDateRange /> 21/07/2024, by Rahul
                  </span>
                  <div className="card-title lead fw-bold">
                    Title-1
                  </div>
                  <div className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, repellendus! Suscipit cupiditate vero quisquam, dicta perspiciatis quo mollitia. Doloribus, ut blanditiis! Recusandae corrupti magnam accusamus rerum cumque sed quasi animi!
                  </div>
                  <button className='readmore-btn mt-2'>
                    <p>readmore</p>
                    <FaArrowRight size={24} color="black" />
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card p-2">
                <div className="card-img">
                  <FaBlogger className='ms-2' size={50} color="red" />
                </div>
                <div className="card-body">
                  <span className='text-muted'>
                    <MdDateRange /> 21/07/2024, by Rahul
                  </span>
                  <div className="card-title lead fw-bold">
                    Title-2
                  </div>
                  <div className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, repellendus! Suscipit cupiditate vero quisquam, dicta perspiciatis quo mollitia. Doloribus, ut blanditiis! Recusandae corrupti magnam accusamus rerum cumque sed quasi animi!
                  </div>
                  <button className='readmore-btn mt-2'>
                    <p>readmore</p>
                    <FaArrowRight size={24} color="black" />
                  </button>

                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Blog
