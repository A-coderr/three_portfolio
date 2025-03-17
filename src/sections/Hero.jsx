import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import Room from "../components/Room";
import CanvasLoader from "../components/CanvasLoader";
import { Leva, useControls } from "leva";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants/data";
import Target from "../components/Target";

import { LinearGradient } from "react-text-gradients";
import { SocialIcon } from "react-social-icons/component";
import "react-social-icons/instagram";
import "react-social-icons/github";
import "react-social-icons/linkedin";
import "react-social-icons/facebook";

// const Hero = () => {
//   return (
//     <>
//       <section className="flex flex-row max-w-7xl bg-slate-500">
//         <div className="flex flex-col gap-2 justify-center font-medium text-white">
//           <h1 className="hello">Hello,</h1>
//           <span className="heroText">
//             I'm{" "}
//             <span className="heroName">
//               <LinearGradient gradient={["to left", "#ff9720 ,#fc0865"]}>
//                 Anzhelika
//               </LinearGradient>
//             </span>
//             <br /> Software Developer
//           </span>
//           <p className="heroDesc">
//             Specializing in C#, Unity, and web technologies. Passionate about
//             creating
//             <br /> interactive web solutions and immersive Unity experiences.
//           </p>

//         </div>
//         <div className="heroImage">
//           <img src={avatar} alt="Profile" className="heroBg" />
//         </div>
//       </section>
//     </>
//   );
// };

// export default Hero;

const Hero = () => {
  return (
    <>
      <section className="min-h-screen w-full flex flex-col relative items-center justify-center">
        <div className="max-w-7xl mx-auto flex flex-col c-space gap-3 items-center">
          <p className="sm:text-3xl text-2xl font-medium text-white text-center">
            Hi, I am{" "}
            <LinearGradient gradient={["to left", "#ff9720 ,#fc0865"]}>
              Anzhelika
            </LinearGradient>
          </p>
          <p className="text-center text-white xl:text-6xl md:text-5xl sm:text-4xl text-3xl font-generalsans font-black !leading-normal">
            Software Developer
          </p>
          <p className="max-w-4xl text-center justify-center text-white">
            I'm a passionate software developer with expertise in web and game
            development using JavaScript, TypeScript, C#, and Unity. I build
            interactive experiences and web applications, leveraging both
            front-end and back-end technologies. With a strong focus on clean
            code, collaboration, and continuous learning, I strive to create
            innovative solutions that enhance user experiences.
          </p>
        </div>
        <div className="flex flex-row gap-2 justify-center mt-5 max-w-7xl">
          <SocialIcon
            className="heroIcon"
            url="https://www.instagram.com/a_akcio/?hl=en"
          />
          <SocialIcon className="heroIcon" url="https://github.com/A-coderr" />
          <SocialIcon
            className="heroIcon"
            url="https://www.facebook.com/profile.php?id=100011369881132"
          />
          <SocialIcon
            className="heroIcon"
            url="http://www.linkedin.com/in/anzhelika-kostyuk-a2b388194"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
