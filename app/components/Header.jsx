import logo from '../../public/MT.jpg'


export default function Header() {
  return (
      <header className='header'>
        <div className='shopping-network-box'>
        </div>
        <div className='affiliate-box'>
        </div>
        <div className='header__search-logo'>
          <div className='header__search'>
            <input type="text" placeholder="Search for products" />
            <button>Search</button>
          </div>
          <div className='header__logo'>
            <img src={logo} alt="Your Furniture Store" />
          </div>
          <div className='header__user'>
            <a href="#">Login</a>
            <a href="#">Shopping Cart</a>
          </div>
        </div>
        <nav className='header__main-nav'>
          <ul>
            <li><a href="bedding">Bedding</a></li>
            <li><a href="livingroom">Livingroom</a></li>
            <li><a href="dining">Dining</a></li>
            <li><a href="office">Office</a></li>
            <li><a href="outdoor">Outdoor</a></li>
          </ul>
        </nav>
        <nav className='header__detailed-nav'>
          <ul>
            <li><a href="furniture">Furniture</a></li>
            <li><a href="bedding">Bedding</a></li>
            <li><a href="bath">Bath</a></li>
            <li><a href="rugs">Rugs</a></li>
            <li><a href="lighting">Lighting</a></li>
            <li><a href="chairs">Chairs</a></li>
            <li><a href="dining">Dining</a></li>
            <li><a href="pillowsdecor">Pillows & Decor</a></li>
            <li><a href="storage">Storage</a></li>
            <li><a href="holidaySeasonal">Holiday Seasonal</a></li>
            <li><a href="clearance">Clearance</a></li>
          </ul>
        </nav>
        <div className='header__promos'>
          <div className='promo-box'>
            <h3>Up to 20% off Select Living Room Furniture</h3>
            <p>Shop Now</p>
          </div>
          <div className='promo-box'>
            <h3>Free 3 Day Shipping for Members</h3>
            <p>Learn More</p>
          </div>
          <div className='promo-box'>
            <h3>Buy One Get One Bedding Sets</h3>
            <p>Shop Now</p>
          </div>
        </div>
  </header>
  )
}


