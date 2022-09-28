import React from 'react';
import PhotoList from '../components/PhotoList';

function HomePage() {
    console.log("HOME PAGE COMPONENT")
  return (
    <>
        <h2>Photo List fetch from API</h2>
        <h3>Show List Photos</h3>
        <PhotoList />
    </>
  )
}

export default HomePage