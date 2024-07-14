import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import "../components/Contact.css"
import contact from "../components/Contact/Contact.gif"

const Contact = () => {

  const [email,setEmail] = useState("")
  const [phone,setPhone] = useState("")
  const [password,setPassword] = useState("")
  const [subject,setSubject] = useState("")
  const [message,setMessage] = useState("")



  return (
    <div>
      <Navbar />
      <div className='contact'>
          <div className='contactImages'>
            <img src={contact} alt='contact.gif' />
          </div>
          <div className='contactForm'>
              <h1>Contact Us</h1>
              <form className="contactDetails">
                  <div className="form-group">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" 
                    className="form-control"
                     id="exampleInputEmail1" 
                    aria-describedby="emailHelp"
                     value={email} onChange={(e)=>setEmail(e.target.value)}  />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                  </div>
                  <div className="form-group">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"
                    value={password} onChange={(e)=>setPassword(e.target.value)} 
                    />
                  </div>
                  <div className="form-group">
                    <label for="exampleInputPhone" className="form-label">Phone Number</label>
                    <input type="tel" className="form-control" id="exampleInputPhone"
                    value={phone} onChange={(e)=>setPhone(e.target.value)} 
                    />
                  </div>
                  <div className="form-group">
                    <label for="exampleInputSubject" className="form-label">Subject</label>
                    <input type="text" className="form-control" id="exampleInputSubject"
                    value={subject} onChange={(e)=>setSubject(e.target.value)} 
                    />
                  </div>
                  <div className="form-group">
                    <label for="exampleInputMessage" className="form-label">Message</label>
                    <textarea className="form-control" id="exampleInputMessage" rows="4"  
                    value={message} onChange={(e)=>setMessage(e.target.value)} 
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">Submit</button>
             </form>





          </div>

      </div>
      <Footer />
    </div>
  )
}

export default Contact
