import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import OfferPage from '../../pages/offer-page/offer-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';
import { AppRoute, AuthorizationStatus } from '../../const';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

type AppProps = {
  offersAmount: number;
}

function App({ offersAmount }: AppProps) {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Main}>
            <Route index element={<MainPage offersAmount={offersAmount} />} />
            <Route path={AppRoute.Login} element={<LoginPage authorizationStatus={AuthorizationStatus.NotAuth}/>}/>
            <Route path={AppRoute.Favorites} element={<PrivateRoute authorizationStatus={AuthorizationStatus.NotAuth}><FavoritesPage /></PrivateRoute>} />
            <Route path={AppRoute.Offer} element={<OfferPage authorizationStatus={AuthorizationStatus.NotAuth} />} />
          </Route>
          <Route path={AppRoute.NotFound} element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter >
    </HelmetProvider >
  );
}

export default App;
