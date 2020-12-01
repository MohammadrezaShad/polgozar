import React from 'react';
import Footer from 'components/footer';
import Header from 'components/header';
import { useLocation } from 'react-router-dom';

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const location = useLocation();
  const lightView = location.pathname === '/';
  return (
    <div>
      <Header light={lightView} />
      {children}
      <Footer />
    </div>
  );
}
