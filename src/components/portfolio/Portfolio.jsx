import React from 'react'
import './portfolio.css'
import WORDLY from '../../assets/Wordly Guess.png'
import IMG2 from '../../assets/portfolio1.jpg'
import IMG3 from '../../assets/portfolio2.jpg'
import IMG4 from '../../assets/portfolio3.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={WORDLY} alt="Wordly Guess Web App" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn' target='_blank'>Github</a>
            <a href="https://wordlyguess.netlify.app/" className='btn btn-primary' target='_blank'>Live Site</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="Wordly Guess Web App" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn' target='_blank'>Github</a>
            <a href="https://wordlyguess.netlify.app/" className='btn btn-primary' target='_blank'>Live Site</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="Wordly Guess Web App" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn' target='_blank'>Github</a>
            <a href="https://wordlyguess.netlify.app/" className='btn btn-primary' target='_blank'>Live Site</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG4} alt="Wordly Guess Web App" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn' target='_blank'>Github</a>
            <a href="https://wordlyguess.netlify.app/" className='btn btn-primary' target='_blank'>Live Site</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio