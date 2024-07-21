import React from 'react'
import NavBar from './Nav/Navbar'
import './../../App.css'
import Footer from './Footer'
const Contact = () => {
  return (
    <>
    <div>
      <NavBar />
      <main className='mt-75 d-flex justify-content-center align-items-center' style={{height:'80vh'}}>
          <div className="card p-3 pb-5 mt-5" style={{width:'400px'}}>
            <div className="card-title">
              <h2 className="fw-bold text-center mt-4">Contact Us</h2>
            </div>
            <label>Name</label>
            <input type="text" className="form-control" />
            <label htmlFor="" className='mt-2'>Email</label>
            <input type="text" className="form-control" />
            <label htmlFor="" className='mt-2'>Message</label>
            <textarea name="" rows={3} id="" className='form-control'></textarea>
            <button className="btn btn-success mt-3">Submit</button>
          </div>
      </main>
    </div>
    <Footer />
    </>
  )
}

export default Contact
