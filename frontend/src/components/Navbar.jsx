import { Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <Nav
                className="my-2"
            >
                <NavItem className="m-2">
                    <Link to="/">Principal</Link>
                </NavItem>
                <NavItem className="m-2">
                    <Link to="/about">Sobre Nosotros</Link>

                </NavItem>
                <NavItem className="m-2">
                    <Link to="/client">Clientes</Link>

                </NavItem>
                <NavItem className="m-2">
                    <Link to="/company">Empresas</Link>
                </NavItem>
                <NavItem className="m-2">
                    <Link to="/contract">Contratos</Link>
                    </NavItem>
                <NavItem className="m-2">
                    <Link to="/payment">Pagos</Link>

                </NavItem>
                <NavItem className="m-2">
                    <Link to="/rating">Calificacion</Link>

                </NavItem>
                <NavItem className="m-2">
                    <Link to="/skill">Habilidades</Link>

                </NavItem>
                <NavItem className="m-2">
                    <Link to="/contact">¡Contáctanos!</Link>

                </NavItem>
            </Nav>
        </>
    );
};

export default Navbar;