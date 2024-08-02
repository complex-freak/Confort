import { Link } from 'react-router-dom';
import mainImg from './assets/main.jpg'

const Hero = () => {
    return ( 
        <div className="section">
            <div className="hero-section">
              <div className="hero-content">
                <h2>
                  We design and build better chairs, for a better life
                </h2>
                <p>
                  In a small shop in the heart of Lisbon, we spend our days
                  relentlessly perfecting the chair. The result is a perfect blend of
                  beauty and comfort that will have a lasting impact on your health.
                </p>
                <Link to='' className="btn">SHOP CHAIRS</Link>
              </div>
              <div className="hero-image">
                <img
                  src={mainImg}
                  alt="Hero-image"
                />
              </div>
            </div>
        </div>
     );
}
 
export default Hero;