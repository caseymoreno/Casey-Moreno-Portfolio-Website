import React from 'react'
import './portfolio.css'
import WORDLY from '../../assets/Wordly Guess.png'
import JC from '../../assets/J&C-Pools.png'
import YELPCAMP from '../../assets/YelpCamp.png'
import FLPRICE from "../../assets/FloridaHomePricePrediction.png"

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
      <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={YELPCAMP} alt="YelpCamp Web App" />
          </div>
          <h3>YelpCamp</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/caseymoreno/YelpCamp" className='btn'>Github</a>
            <a href="https://boiling-bastion-71782.herokuapp.com/" className='btn btn-primary'>Live Site</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={WORDLY} alt="Wordly Guess Web App" />
          </div>
          <h3>Wordly Guess</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/caseymoreno/Wordly-Guesss.git" className='btn'>Github</a>
            <a href="https://wordlyguess.netlify.app/" className='btn btn-primary'>Live Site</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={FLPRICE} alt="Wordly Guess Web App" />
          </div>
          <h3>Florida Home Price Prediction</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/caseymoreno/FloridaHomePricePrediction" className='btn'>Github</a>
            <a href="https://www.jandcfiberglasspool.com" className='btn btn-primary'>Live Site</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={JC} alt="Wordly Guess Web App" />
          </div>
          <h3>J &amp; C Pools</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/caseymoreno/J-C-Pools" className='btn'>Github</a>
            <a href="https://www.jandcfiberglasspool.com" className='btn btn-primary'>Live Site</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio