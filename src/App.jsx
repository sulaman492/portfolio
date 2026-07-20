// src/App.jsx
import React from 'react';
import Layout from './components/Layout';
import RightContent from './components/RightContent';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Navbar/>
    <Layout>
      <RightContent />
    </Layout>
    </>
  );
}

export default App;