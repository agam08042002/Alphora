import React from 'react'
import './styles/Home.css'


        const Range = () => {
          return (
            <div>
               <section className="our-range">
          <h2>Our Range of Products</h2>
          <div className="range-grid">
            <div className="range-item">
              <img src="/images/wheelchair.jpg" alt="Orthopedic Products" />
              <h4>Orthopedic</h4>
              <p>
                Walkers, commode chairs, wheelchairs, walking sticks, and more to support mobility and recovery.
              </p>
            </div>
            <div className="range-item">
              <img src="/images/bp.png" alt="Electric Medical Devices" />
              <h4>Electric</h4>
              <p>
                BP monitors, thermometers, breast pumps, nebulizers, and other essential diagnostic devices.
              </p>
            </div>
            <div className="range-item">
              <img src="/images/wipes.jpg" alt="Sanitation" />
              <h4>Sanitation</h4>
              <p>
                Baby wipes and personal care essentials for safe hygiene and comfort.
              </p>
            </div>
            <div className="range-item">
              <img src="/images/gloves.jpg" alt="Gloves" />
              <h4>Gloves</h4>
              <p>
                High-quality disposable and surgical gloves ensuring safety and protection.
              </p>
            </div>
          </div>
        </section>

            </div>
          )
        }
        
        export default Range
        