import Header from '../../components/header/header';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { AuthorizationStatus } from '../../const';

function NotFoundPage(): JSX.Element {
  return (
    <div className="page page--gray">
      <Helmet>
        <title>6 Cities. Страница не найдена</title>
      </Helmet>
      <Header authorizationStatus={AuthorizationStatus.NotAuth} />

      <main className="page__main page__main--not-found">
        <section className="not-found container">
          <h1>404. Page not found</h1>
          <Link to="/">Вернуться на главную</Link>
        </section>
      </main>
    </div>
  );
}

export default NotFoundPage;
