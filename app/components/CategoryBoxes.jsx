import '..styles/CategoryBoxSection'; // Import your CSS file for styling

const BoxSection = ({ category, items, image }) => {
  return (
    <div className="box-section" >
      <h2 className="category-title">{category}</h2>
      <div className="box-container">
        {items.map((item, index) => (
          <div key={index} className="box" style={{ backgroundImage: `url(${image})` }}>
            <div className="box-content">
              {/* Render your box content here */}
              <h3 className="box-title">{item.title}</h3>
              {/* You can add more content here */}
            </div>
            <button className="box-button">Learn More</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoxSection;
