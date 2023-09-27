// CategoryPanel.jsx
import '../styles/categoryPanel.css'; 

const CategoryPanel = ({ title, categories }) => {
  return (
    <div className="category-panel">
      <h2>{title}</h2>
      <ul className="category-list">
        {categories.map((category, index) => (
          <li key={index}>
            <a href="#">{category}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryPanel;
