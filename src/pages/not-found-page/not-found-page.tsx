import Header from '../../components/header/header';

function NotFoundPage(): JSX.Element {
  return (
    <>
      <Header />

      <section>
        <h1>404. Page not found</h1>
        <a href="/">Вернуться на главную</a>
      </section>
    </>
  );
}

export default NotFoundPage;
