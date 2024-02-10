import React from 'react';
import Header from 'remoteApp/Header';
import Footer from 'remoteApp/Footer';

const HomeScreen = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex-1 p-4">
        <>Home screen</>
      </div>
      <Footer />
    </div>
  );
};

export default HomeScreen;
