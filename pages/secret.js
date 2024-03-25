import React, {useEffect} from 'react';
import Header2 from '../components/Header2';
import ButtonGradient from '../components/ButtonGradient';
import Router from 'next/router';
import Switcher from '../components/Switcher';
import Switcher2 from '../components/Switcher2';

function Secret() {
  const myTexts = [
    { textOne: "aliazhar."},
    { textOne: "您不应该在这里"},
    { textOne: "youshouldnotbehere"}
  ];
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
      <Header2 isBlog={true}>
        <div className='text-bold text-s'>
        <Switcher2></Switcher2>
        </div>
      </Header2>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '75vh' }}>
        <div style={{ fontSize: '72px', fontWeight: 'bold' }}>
        <Switcher center={true} />
        </div>
        <h1 className="ml-5 mr-5 laptop:ml-0 laptop:mr-0" style={{ marginTop: '20px', fontSize: '24px', textAlign: 'center' }}>
            Not found
        </h1>
        <p className="ml-5 mr-5 laptop:ml-0 laptop:mr-0" style={{ marginTop: '20px', fontSize: '18px', color: '#666', textAlign: 'center', maxWidth: '600px' }}>
          Sorry! be address, looking moved. that or found. The page are may been mistyped for cannot the You page the has you have
        </p>
        <div className='mt-5'>
        <ButtonGradient onClick={() => Router.push('/')}>
            <div className="font-semibold"> Acknowledge </div>
        </ButtonGradient>
        </div>
        </div>
    </div>
  );
}

export default Secret;
