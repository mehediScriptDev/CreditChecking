import { Outlet } from 'react-router';
import FooterLayout from './FooterLayout';

const PublicLayout = () => {
  return (
    <div className='min-h-screen flex flex-col bg-gray-50'>
      {/* Main Content */}
      <main className='flex-1'>
        <Outlet />
      </main>

      {/* Footer */}
      <FooterLayout />
    </div>
  );
};

export default PublicLayout;
