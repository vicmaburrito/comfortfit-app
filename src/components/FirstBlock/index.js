import React, { useEffect, useState, useRef } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import HALO from 'vanta/dist/vanta.halo.min';
// eslint-disable-next-line import/no-extraneous-dependencies
import * as THREE from 'three';

function FirstBlock() {
  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        HALO({
          el: myRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          amplitudeFactor: 1.70,
          size: 2.00,
        }),
      );
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center relative px-4" ref={myRef}>
      <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-30" />
      <h1 className="text-5xl md:text-7xl text-white font-bold mb-8 z-10">Comforfit, muy pronto</h1>
      <p className="text-white text-xl md:text-2xl">
        Estamos trabajando duro para traerte algo increíble. ¡Manténganse al tanto!
      </p>
    </div>
  );
}

export default FirstBlock;
