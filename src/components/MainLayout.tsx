import { Outlet } from 'react-router-dom';
import Navigation from '../components/navigation/Navigation.tsx';
import Footer from '../components/footer/Footer.tsx';

function MainLayout() {
  return (
    <div>
      <Navigation /> 
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;