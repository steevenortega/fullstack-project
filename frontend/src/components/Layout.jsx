import { Container } from 'reactstrap';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <Container className="bg-light border">
            <Navbar></Navbar>
            <Outlet></Outlet>
            {/* <Footer> */}
        </Container>
    );
};

export default Layout;