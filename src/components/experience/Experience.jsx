import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
      {/* front end */}
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
          <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
              <h4>HTML</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
              <h4>CSS</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
              <h4>JavaScript</h4>
              <small className='text-light'>Mid-level</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
              <h4>React</h4>
              <small className='text-light'>Entry-Level</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
              <h4>C++</h4>
              <small className='text-light'>Entry-level</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
              <h4>Bootstrap</h4>
              <small className='text-light'>Mid-level</small>
              </div>
            </article>
          </div>
        </div>
        {/* Back end */}
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
          <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
              <h4>Node.js</h4>
              <small className='text-light'>Entry-level</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
              <h4>Postgres</h4>
              <small className='text-light'>Entry-level</small>
              </div>
            </article>
        </div>
      </div>
      </div>
    </section>
  )
}

export default Experience