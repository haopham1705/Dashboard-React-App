import Tippy from '@tippyjs/react';
import React from 'react';
import PhotoList from '../components/PhotoList';

function HomePage() {
    console.log("HOME PAGE COMPONENT")
  return (
    <>
        <h2>Photo List fetch from API</h2>
        
        <PhotoList />
        <Tippy content="Show list photos">
          <button>Show Photos</button>
        </Tippy>
    </>
  )
}

export default HomePage