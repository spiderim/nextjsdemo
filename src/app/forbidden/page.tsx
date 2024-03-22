'use client'

import { useEffect } from 'react';
import Router from 'next/router';

const MyComponent = () => {

    useEffect(() => {
        console.log('MyComponent mounted');
    }, []);
    function buttonhandler(): void {
        console.log('button clicked');
    }

  return (
    <div>
        <button onClick={() => buttonhandler()}>Go to MyPage</button>
      My COntent
    </div>
  );
};


 

export default MyComponent;