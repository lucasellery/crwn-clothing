import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import { UserContext } from "../../components/contexts/user.context";
import './navigation.styles.scss';

import { signOutUser } from '../../utils/firebase.utils';

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const handleSignOut = async() => {
    await signOutUser();
    setCurrentUser(null);
  }

  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <div>
            <CrownLogo />
          </div>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={handleSignOut}>SIGN OUT</span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default Navigation;

// Observer: onAuthStateChange