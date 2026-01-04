import {Link, useLocation} from 'react-router-dom';
import { AppRoute } from '../../const';


function Logo(): JSX.Element {
  const { pathname } = useLocation();

  return (
    pathname as AppRoute === AppRoute.Main ?

      <a className="header__logo-link header__logo-link--active" style={{pointerEvents: 'none'}}>
        <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width={81} height={41} />
      </a>
      :
      <Link to='/' className="header__logo-link">
        <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width={81} height={41} />
      </Link>
  );
}

export default Logo;
