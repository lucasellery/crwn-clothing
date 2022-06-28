import Category from "../../components/categories/categories.component";
import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Category />
      <Outlet />
    </div>
  );
}

export default Home;
