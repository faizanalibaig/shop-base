'use client';
import {useRef, useEffect} from 'react';
import {gsap} from 'gsap';

import Navigation from '@/components/HeaderSection/Navigation/Navigation';
import AuthenticationButton from '@/components/HeaderSection/Authentication/AuthenticationButton';

function Header() {
  const ref = useRef(null);
  const originalOffset = useRef(0);

  useEffect(() => {
    const header = ref.current;
    originalOffset.current = header.offsetTop;

    const handleScroll = () => {
      if (window.scrollY > originalOffset.current) {
        gsap.to(header, {y: 0, position: 'fixed', top: 0, duration: 0.3});
      } else {
        gsap.to(header, {y: 0, position: 'relative', duration: 0.3});
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      ref={ref}
      style={{
        zIndex: 1000,
        transition: 'all 0.3s ease',
      }}
      className="fixed flex h-20 w-full items-center justify-between overflow-hidden px-20 font-newsreader"
    >
      <h1 className="text-xl font-semibold">ShopBase</h1>
      <Navigation />
      <AuthenticationButton />
    </header>
  );
}

export default Header;
