import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "@/components/Icons";
import project1 from "../../public/images/projects/InventoryManagement.png";
import project2 from "../../public/images/projects/PortfolioWebsite.png";
import project3 from "../../public/images/projects/InvMgmt1.png";
import project4 from "../../public/images/projects/InvMgmt2.png";
import project5 from "../../public/images/projects/Portfolio1.png";
import project6 from "../../public/images/projects/Portfolio2.png";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="w-full flex items-center justify-between rounded-3xl border border-sloid
     border-dark bg-light shadow-2xl p-12 relative rounded-br-2xl dark:bg-dark dark:border-light
     lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4"
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem]  dark:bg-light bg-dark
         rounded-br-3xl xs:-right-2    sm:h-[102%] xs:w-full xs:rounded-[1.5rem]"
      />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cusror-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
          priority
          sizes="(max-width:768px) 100vw,
          (max-width:1200px) 50vw, 50vw"
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark
            sm:px-4 sm:text-base"
          >
            Visit the Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <article
      className="w-full flex flex-col items-center justify-center rounded-2xl border 
    border-solid border-dark bg-light p-6 relative  dark:bg-dark dark:border-light xs:p-4"
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light 
      md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]"
      />
      <Link
        href={link}
        target="_blank"
        className="w-full cusror-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4 ">
        <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">
            {title}
          </h2>
        </Link>

        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="px-6 text-lg font-semibold underline md:text-base"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8 md:w-6">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};
const projects = () => {
  return (
    <>
      <Head>
        <title>BishalYonghang | Project Page</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className="w-full mt-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Projects that reflect talent!"
            className="sm:mb-8 mb-16 text-6xl text-center xl:text-5xl lg:text-center lg:text-4xl md:text-3xl sm:text-2xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-y-0">
            <div className="col-span-12">
              <FeaturedProject
                title="Inventory Management System"
                img={project1}
                summary="  A feature-rich Inventory Management System using React, .Net, CSS, Context API, and React Router. 
            It contains almost all features needed to handle stock management. You can easily get the report you want."
                link="https://github.com/IksangYonghang/StockManagement"
                github="https://github.com/IksangYonghang/StockManagement "
                type="Featured Project"
              />
            </div>
            <div className="col-span-6">
              {" "}
              <Project
                title="Inventory Management System"
                img={project3}
                link="https://github.com/IksangYonghang/StockManagement"
                github="https://github.com/IksangYonghang/StockManagement "
                type="Featured Project"
              />
            </div>
            <div className="col-span-6">
              {" "}
              <Project
                title="Inventory Management System"
                img={project4}
                link="https://github.com/IksangYonghang/StockManagement"
                github="https://github.com/IksangYonghang/StockManagement "
                type="Featured Project"
              />
            </div>
            <div className="col-span-12">
              {" "}
              <FeaturedProject
                title="Portfolio Website"
                img={project2}
                summary="The website, crafted with Next.js, presents my portfolio and services in a sleek and 
                responsive manner. Utilizing Next.js, tailwindcss and framer-motion it offers dynamic routing and optimized performance for a seamless browsing 
                experience, even without server-side rendering or a backend database."
                link="https://github.com/IksangYonghang/MyPortfolioWebsite"
                github="https://github.com/IksangYonghang/MyPortfolioWebsite "
                type="Featured Project"
              />
            </div>
            <div className="col-span-6">
              {" "}
              <Project
                title="Portfolio Website"
                img={project5}
                link="https://github.com/IksangYonghang/MyPortfolioWebsite"
                github="https://github.com/IksangYonghang/MyPortfolioWebsite "
                type="Featured Project"
              />
            </div>
            <div className="col-span-6">
              {" "}
              <Project
                title="Portfolio Website"
                img={project6}
                link="https://github.com/IksangYonghang/MyPortfolioWebsite"
                github="https://github.com/IksangYonghang/MyPortfolioWebsite "
                type="Featured Project"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
