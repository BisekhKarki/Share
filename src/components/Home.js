import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { card } from '../Card/Card'
import "../Card/Card.css"
import "../components/Home.css"
import { newsNav } from '../Data'


const Home = () => {

  const [activeIndex,setActiveIndex] = useState(null)

 


  return (
    <div className=''>
      <Navbar />
      <div>
        <div className='title'>
        <h1>wwww.MyStockNepal.com</h1>

        </div>
        <div className='importantTopic'>
          <h1 className='topic'>Important Topics</h1>
          <div className='topic_underline'></div>
          <div className='topic_cards'>
              {
                card.map((c)=>{
                  return(
                    <>
                    <div className='topicDetails'>
                    <img src={c.img} alt={c.p} className='topicImg'  />
                    <p>{c.p}</p>
                    </div>
                    
                    </>
                  )
                })
              }
          </div>
        </div>
        <div className='latestNews'>
            <h1 className='Lnews'>Latest News</h1>
            <div className='news_underline'></div>
              <div className='news_navbar'>
              {
                newsNav.map((n,index)=>{
                  return(
                    <>
                    <div className={activeIndex ===index ? "newsActive" : "newsNav" } onClick={()=>setActiveIndex(index)} >
                    <p>{n.name}</p>
                    </div>
                    </>
                  )
                })

              }
              </div>
              <div className='news_headlines'>

              </div>
        </div>

      </div>
      <Footer />
    </div>
  )
}

export default Home
