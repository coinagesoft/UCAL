import styles from './Manufacturing.module.css'

export default function Manufacturing() {
    return (
        <div className={`container ${styles.section}`}>
            <div className='row '>
                
                    <div className={`col-md-6   ${styles.leftColumn}`}>
                </div>
                <div className={`col-md-6  ${styles.rightSection}`}>
                    <p className='gHeading'>/ Manufacturing</p>
                    <h2 className='main-heading'>World-Class Indian <br/> Manufacturing, Global <br/> Standards.</h2>
                    <p className='sub-heading'>Eight plants. Hundreds of specialised machines. One uncompromising approach to quality — built into every process, every part, every delivery.</p>
                    <p className={`para ${styles.description}`}>UCAL operates advanced manufacturing facilities across India and the USA, tailored for processes like high-pressure die casting and clean-room electronics assembly, with in-house capabilities spanning design, die casting, metal injection moulding, precision machining, surface treatments, welding, composites, and plastics.</p>
                    <button className='custom-btn'>Explore Our Journey</button>
                </div>
            </div>
          
        </div>

    )
}
