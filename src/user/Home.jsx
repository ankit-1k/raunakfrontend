import React from 'react'
import NavBar from './components/Nav/Navbar'
import Banner from './components/Banner'
import Footer from './components/Footer'
import { FaChalkboardTeacher, FaLaptop, FaMoneyBillWave, FaBook } from 'react-icons/fa';
import Happy from './components/Happy';

const Home = () => {
    const cardData = [
        {
            title: "Experienced Instructors",
            text: "Learn from industry experts with years of experience.",
            icon: <FaChalkboardTeacher />
        },
        {
            title: "Flexible Learning",
            text: "Study at your own pace with our flexible online courses.",
            icon: <FaLaptop />
        },
        {
            title: "Affordable Prices",
            text: "Get high-quality education at an affordable cost.",
            icon: <FaMoneyBillWave />
        },
        {
            title: "Vast Resources",
            text: "Access a wide range of study materials.",
            icon: <FaBook />
        }
    ];
    // YouTube videos data
    const ytData = [
        {
            title: "Vdo 1",
            link: `<iframe width='100%' src="https://www.youtube.com/embed/yxG9yIa5np8?si=saqxGeKVKkmT46wn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
        },
        {
            title: "Vdo 2",
            link: `<iframe width='100%' src="https://www.youtube.com/embed/yxG9yIa5np8?si=saqxGeKVKkmT46wn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
        },
        {
            title: "Vdo 3",
            link: `<iframe width='100%' src="https://www.youtube.com/embed/yxG9yIa5np8?si=saqxGeKVKkmT46wn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
        },
        {
            title: "Vdo 4",
            link: `<iframe width='100%' src="https://www.youtube.com/embed/yxG9yIa5np8?si=saqxGeKVKkmT46wn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
        },
    ];

    return (
        <div>
            <NavBar />
            <main className="mt-75">
                <Banner />
                <h2 className='mt-5 mb-2 text-center'>Why Choose Us</h2>
                <div className="container">
                    <div className="row g-4">
                        {cardData.map((card, index) => (
                            <div className="col-md-3" key={index}>
                                <div className="card h-100 text-center mb-4">
                                    <div className="card-body">
                                        <div className="mb-4 card-icon" style={{ fontSize: '2rem' }}>
                                            {card.icon}
                                        </div>
                                        <h5 className="card-title">{card.title}</h5>
                                        <p className="card-text">{card.text}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <h3 className='text-center mb-2 mt-5'>Featured YouTube Videos</h3>
                    <div className="row g-4">
                        {ytData.map((video, index) => (
                            <div className="col-md-3" key={index}>
                                <div className="card h-100 text-center">
                                    <div className="card-body">
                                        <div dangerouslySetInnerHTML={{ __html: video.link }}></div>
                                        <h5 className="text-center">{video.title}</h5>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <Happy />
            </main>
            <Footer />
        </div>
    )
}

export default Home
