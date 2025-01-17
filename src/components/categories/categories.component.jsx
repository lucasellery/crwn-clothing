import { categories } from '../../utils/categories';
import CategoryItem from '../category-item/category-item.component';
import './categories.styles.scss';

const Categories = () => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  )
}

export default Categories;
