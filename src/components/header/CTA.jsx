import React from 'react'
import Resume from '../../assets/Casey Moreno Resume 2022.pdf'

const CTA = () => {
  return (
    <div className="cta">
        <a href={Resume} download className="btn">Download Resume</a>
        <a href="#contact" className="btn btn-primary" target='_blank'>Let's Talk</a>
    </div>
  )
}

export default CTA