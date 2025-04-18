import React, {useEffect} from 'react';
import Header from '../components/Header';
import ButtonGradient from '../components/ButtonGradient';
import Router from 'next/router';

function NotFoundTitle() {
    useEffect(() => {
      // Prevent scrolling
      document.body.style.overflow = 'hidden';
      return () => {
        // Re-enable scrolling when the component unmounts
        document.body.style.overflow = '';
      };
    }, []);

  return (
    <div>
      <title>
        404 | Page Not Found
      </title>
    <Header isBlog={true}></Header>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '75vh' }}>
        <div style={{ fontSize: '72px', fontWeight: 'bold' }}>
            404
        </div>
        <h1 className="ml-5 mr-5 laptop:ml-0 laptop:mr-0" style={{ marginTop: '20px', fontSize: '24px', textAlign: 'center' }}>
            Page not found
        </h1>
        <p className="ml-5 mr-5 laptop:ml-0 laptop:mr-0" style={{ marginTop: '20px', fontSize: '18px', color: '#666', textAlign: 'center', maxWidth: '600px' }}>
            Sorry! The page that you are looking for cannot be found. You may have mistyped the address, or the page has been moved.
        </p>
        <div className='mt-5'>
        <ButtonGradient onClick={() => Router.push('/')}>
            Take me home!
        </ButtonGradient>
        </div>
        </div>
    </div>
  );
}

export default NotFoundTitle;
