import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import Room from '../components/Room';
import CanvasLoader from '../components/CanvasLoader';

const Hero = () => {
  return (
    <>
        <section className='min-h-screen w-full flex flex-col relative'>   
            <div className='w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3'>
                <p className='sm:text-3xl text-2xl font-medium text-white text-center font-generalsans'>Hi, I am Anzhelika <span>🍔</span></p>
                <p className='hero_tag text-gray_gradient'>Frontend Developer</p>
            </div>
            <div className='w-full h-full absolute inset-0'>
                <Canvas className='w-full h-full'>
                    <Suspense fallback={<CanvasLoader/>}>
                        <PerspectiveCamera makeDefault position={[0, 0, 30]} />
                        <Room scale={0.05} position={[0, 0, 0]} rotation={[0, -Math.PI / 2, 0]}/>
                        <ambientLight intensity={1}/>
                        <directionalLight position={[10, 10, 10]} intensity={0.5}/>
                    </Suspense>               
                </Canvas>
            </div>
        </section>
    </>
  )
}

export default Hero