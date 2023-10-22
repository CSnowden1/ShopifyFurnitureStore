import React from 'react';
import '../styles/BlogSection.css';

const InspirationSection = () => {
  return (
    <section className="blog-section">
      <h2 className="section-title">Latest Blogs</h2>
      <div className="blog-cards">
        {/* Blog Card 1 */}
        <div className="blog-card">
          <img
            src="https://cdn.shopify.com/s/files/1/0758/9101/6001/files/Group_103.jpg?v=1697681203"
            alt="Blog 1"
          />
          <h3 className="blog-title">Luxury Living Room Decor</h3>
          <p className="blog-date">Published: September 15, 2023</p>
          <p className="blog-excerpt">
            Discover the latest trends in luxury living room decor. From
            exquisite furniture to elegant lighting, we have you covered.
          </p>
          <a href="/blog/1" className="read-more-link">
            Read More
          </a>
        </div>

        {/* Blog Card 2 */}
        <div className="blog-card">
          <img
            src="https://cdn.shopify.com/s/files/1/0758/9101/6001/products/6b95c4708b90ff78ad4ca70a65e72f16.jpg?v=1695823412"
            alt="Blog 2"
          />
          <h3 className="blog-title">The Art of Furniture Placement</h3>
          <p className="blog-date">Published: August 28, 2023</p>
          <p className="blog-excerpt">
            Learn how to arrange your furniture like a professional interior
            designer. Tips, tricks, and inspiration await you.
          </p>
          <a href="/blog/2" className="read-more-link">
            Read More
          </a>
        </div>

        {/* Blog Card 3 */}
        <div className="blog-card">
          <img
            src="https://cdn.shopify.com/s/files/1/0758/9101/6001/products/a468959bd96b48ee15ef2353e66f5528.jpg?v=1695823412"
            alt="Blog 3"
          />
          <h3 className="blog-title">Creating Cozy Bedrooms</h3>
          <p className="blog-date">Published: August 5, 2023</p>
          <p className="blog-excerpt">
            Explore the secrets to making your bedroom a cozy haven. From soft
            textiles to warm colors, it's time for comfort.
          </p>
          <a href="/blog/3" className="read-more-link">
            Read More
          </a>
        </div>
      </div>
    </section>
  );
};

export default InspirationSection;
