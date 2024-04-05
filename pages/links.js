import React, {useEffect} from 'react';
import Header from '../components/Header';
import ButtonGradientBG from '../components/ButtonGradientBG';
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
        Links
      </title>
    <Header isBlog={true}></Header>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '12vh' }}>
        <div style={{ fontSize: '50px', fontWeight: 'bold' }}>
            Links
        </div>
        <h1 className="ml-5 mr-5 laptop:ml-0 laptop:mr-0" style={{ marginTop: '20px', fontSize: '16px', textAlign: 'center' }}>
            Page not found
        </h1>
        <div className='mt-5'>
        <ButtonGradientBG
          type="primary"
          onClick={() => window.open("https://www.youtube.com", '_blank')}
          classes="additional-classes"
          gradientFrom="#FF0000"
          gradientTo="#C50000"
        >
          YouTube
        </ButtonGradientBG>
        <ButtonGradientBG
          type="primary"
          onClick={() => window.open("https://www.youtube.com", '_blank')}
          classes="additional-classes"
          gradientFrom="#FF0000"
          gradientTo="#C50000"
        >
          Github
        </ButtonGradientBG>
        </div>
        </div>
    </div>
  );
}

export default NotFoundTitle;
