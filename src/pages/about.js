import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React, { useEffect, useRef } from "react";
import profilePic from "../../public/images/profile/asian-developer-pic-2.jpeg";
import Image from "next/image";
import { useMotionValue, useSpring, useInView } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";
import PersonalInformation from "@/components/PersonalInformation";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);
  return <span ref={ref}></span>;
};

const About = () => {
  return (
    <>
      <Head>
        <title>BishalYonghang | About Page</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Passion Fuels Purpose! "
            className="sm:mb-8 mb-16 text-6xl text-center xl:text-5xl lg:text-center lg:text-4xl md:text-3xl sm:text-2xl"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                About me
              </h2>
              <p className="font-medium text-justify">
                As a seasoned professional with a diverse background spanning
                customer support management and software development, I bring a
                dynamic blend of skills and experiences to the table. My journey
                began at Premium Technologies Private Limited, where I excelled
                as a Customer Support Manager before seamlessly transitioning
                into the role of a .Net Developer. Throughout my career, I've
                demonstrated a knack for delivering exceptional service while
                maintaining composure in demanding situations, a testament to my
                unwavering commitment to excellence.
              </p>
              <p className="font-medium my-4 text-justify">
                With a solid foundation in customer relations and a proficiency
                in technical tools such as .Net Core, C#, and React Typescript,
                I've navigated complex challenges with ease, orchestrating
                strategic support activities and ensuring seamless software
                testing and quality assurance. My passion for innovation and
                continuous learning has been a driving force, propelling me to
                pursue opportunities that foster personal and professional
                growth. Armed with a Bachelor of Computer Applications (BCA)
                from Manipal University and prior education in commerce and
                business studies, I possess a unique blend of technical
                expertise and business acumen, making me well-equipped to thrive
                in dynamic and fast-paced environments.
              </p>
              <p className="font-medium mb-4 text-justify">
                I am actively seeking roles within organizations that not only
                value innovation and flexibility but also prioritize employee
                development and empowerment. My strong communication skills,
                coupled with my ability to adapt to evolving challenges and
                requirements, make me a valuable asset poised to drive
                organizational success. Whether it's leading training
                initiatives, orchestrating support activities, or contributing
                to software development projects, I am committed to making a
                positive impact and contributing to the achievement of the
                company's mission and objectives.
              </p>
            </div>
            <div
              className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark
            dark:border-light xl:col-span-4 md:order-1 md:col-span-8"
            >
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
              <Image
                src={profilePic}
                alt="BishalYonghang"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width:768px) 100vw,
                (max-width:1200px) 50vw, 33vw"
              />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
              <div className="flex flex-col justify-center items-end xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={500} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  satisfied clients
                </h2>
              </div>
              <div className="flex flex-col justify-center items-end xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={10} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  projects completed
                </h2>
              </div>
              <div className="flex flex-col justify-center items-end xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={5} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  years of experience
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
          <PersonalInformation />
        </Layout>
      </main>
    </>
  );
};

export default About;
