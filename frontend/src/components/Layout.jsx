import { Container } from 'reactstrap';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <Container className="min-vh-100 bg-light border">


            <Navbar></Navbar>
            <Outlet></Outlet>
            <body class="text-center">

<div class="cover-container d-flex h-100 p-3 mx-auto flex-column">
  <header class="masthead mb-auto">
    <div class="inner">
      <h3 class="masthead-brand">Desarrolla tus talentos y alcanza tu máximo potencial con nosotros.</h3>
      <nav class="nav nav-masthead justify-content-center">     
      </nav>
    </div>
  </header>

  <main role="main" class="inner cover">
    <h1 class="cover-heading">Tinder de Habilidaes</h1>
    <p class="lead">Cada habilidad es una puerta hacia nuevas oportunidades. ¡Ábrela con nosotros!</p>
    <p class="lead">
      <a href="/about" class="btn btn-lg btn-secondary">¡Contactanos!</a>
    </p>
  </main>
  
</div>
</body>
            <footer class="mastfoot mt-auto">
    <div class="inner">
      <p>Template for <a href="https://6524cf8e67d16b786fed090e--peaceful-dodol-adeffa.netlify.app/">TinderHabilidades</a>, by <a href="https://twitter.com/mdo">SteevenOrtega</a>.</p>
    </div>
  </footer>
        </Container>
    );
};

export default Layout;