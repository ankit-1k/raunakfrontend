import React from 'react'
import NavBar from './Nav/Navbar'
import aboutside from './../../assets/img/aboutside.jpg'
import Footer from './../components/Footer'
const About = () => {
  const aboutCard = [
    {
      title: 'Our Vision',
      text: 'To revolutionize education by making high-quality learning resources accessible and affordable to everyone, empowering individuals to achieve their full potential through flexible, engaging, and innovative online education.'
    },
    {
      title: 'Our Mission',
      text: 'To provide world-class education and training to students and professionals around the globe, creating a vibrant learning community that supports and nurtures the intellectual and personal growth of each learner.'
    },
    {
      title: 'Our Values',
      text: 'To foster a culture of continuous improvement, integrity, and collaboration, ensuring that every learner is supported and encouraged to reach their highest potential.'
    },
  ]
  return (
    <>
      <div>
        <NavBar />
        <p className="mt-75">
          <div className="banner-about">
            <img className='about-img' src="https://media1.tenor.com/images/3a7a4b0d445c7b4a4b2bc55477a33c26/tenor.gif?itemid=19512437" alt="https://media1.tenor.com/images/3a7a4b0d445c7b4a4b2bc55477a33c26/tenor.gif?itemid=19512437" />
          </div>
        </p>
      </div>
      <div className="container">
        <h3 className="text-center mt-5 mb-4">
          About Us
        </h3>
        <div className="row">
          <div className="col-md-5">
            <img src={aboutside} className='about-side-img rounded' alt="" />
          </div>
          <div className="col-md-7">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate cumque odio, non totam est qui quis optio, soluta at ipsum ad voluptas nisi dolorum sed minus magnam iusto hic inventore cupiditate assumenda! Similique consectetur, enim voluptates ex recusandae rerum cum labore, ea, ipsam corporis consequatur. Recusandae ea debitis quas fugit blanditiis officiis placeat totam, alias veritatis sed natus, qui eaque possimus eos nulla vel laborum nostrum corporis perspiciatis omnis tenetur commodi labore ab ipsam? Cumque eligendi, dolor reprehenderit magnam maiores eius earum nisi repellendus error, facere fuga sequi laboriosam ipsum, enim voluptatem ratione eos laudantium? Impedit doloremque placeat cum nisi.
          </div>
        </div>
        <div className="row justify-content-between mt-5 mb-4">
        {
          aboutCard.map((item, id) => (
            <div class="notification col-md-4 m-1">
              <div class="notiglow"></div>
              <div class="notiborderglow"></div>
              <div class="notititle lead">{item.title}</div>
              <div class="notibody">
                {item.text}
              </div>
            </div>
          ))
        }
        </div>
      </div>
      <Footer />
    </>
  )
}

export default About
