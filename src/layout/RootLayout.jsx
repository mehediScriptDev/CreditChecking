import { Outlet } from 'react-router';
import NavbarLayout from './NavbarLayout';
import SmoothScroll from '../Components/utility/SmoothScroll';

const RootLayout = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      <NavbarLayout />
      <main className='flex-1 pt-20'>
        <SmoothScroll>
          <Outlet />
        </SmoothScroll>
      </main>
    </div>
  );
};

export default RootLayout;
