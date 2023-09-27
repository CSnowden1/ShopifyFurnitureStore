import '../styles/hero.css'



export default function Hero() {
    return (
      <div className="hero" >
          <div className="h1-box">
              <h1>Martin Tracey's</h1>
          </div>
          <div className="h2-box">
              <h2>Furniture</h2>
          </div>
          <div className="h3-box">
              <h3 className="sub-title">Affordable Designer Furniture</h3>
          </div>
          <div className="hero-btn-box">
              <div className="hero-btn">Shop Indoor</div>
              <div className="hero-btn">Shop Outdoor</div>
          </div>
          <div className="move-btn">
              {/* Add content for the "move-btn" here if needed */}
          </div>
      </div>
    )
  }
  