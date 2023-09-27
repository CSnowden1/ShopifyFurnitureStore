import "../styles/CategoryHeroSection.css"
const CategoryHeroSection = ({ categoryTitle, subtitle, buttonText }) => {
  return (
    <div className="category-hero">
      <h1 className="category-title">{categoryTitle}</h1>
      <p className="category-subtitle">{subtitle}</p>
      <button className="category-button">{buttonText}</button>
    </div>
  );
};

export default CategoryHeroSection;