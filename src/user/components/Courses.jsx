import React from 'react'
import NavBar from './Nav/Navbar'
import courseBannerImg from './../../assets/img/course-banner.jpg'
import Footer from './../components/Footer'
const Courses = () => {
  const courses = [
    {
      id: 1,
      title: 'Math',
      price: '1299',
      description: 'Explore Course by Rahul sir',
      features: [
        'Easy Notes',
        'Daily Assignment',
        'Personal Guidance'
      ],
      link:'www.google.com'
    },
    {
      id: 2,
      title: 'English',
      price: '1299',
      description: 'Explore Course by Rahul sir',
      features: [
        'Easy Notes',
        'Daily Assignment',
        'Personal Guidance'
      ],
      link:'www.google.com'
    },
    {
      id: 3,
      title: 'Hindi',
      price: '1199',
      description: 'Explore Course by Rahul sir',
      features: [
        'Easy Notes',
        'Daily Assignment',
        'Personal Guidance'
      ],
      link:'www.google.com'
    },
  ];
  return (
    <div>
      <NavBar />
      <main className="mt-75">
        <div className="banner-course">
          <img src={courseBannerImg} className='banner-courses' alt="" />
        </div>
        <div className="container">
          <h2 className='text-center mt-5 mb-4'>Courses</h2>
          <div className="row justify-content-between">
            {courses.map((course) => (
              <div key={course.id} className="card-course">
                <div className="header-course">
                  <span className="title-course">{course.title}</span>
                  <span className="price">&#8377;{course.price}</span>
                </div>
                <p className="desc">{course.description}</p>
                <ul className="lists">
                  {course.features.map((feature, index) => (
                    <li key={index} className="list">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button type="button" className="action" onClick={()=>window.open('')}>Buy Now</button>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Courses
