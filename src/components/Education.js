import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mt-0 flex flex-col mx-auto w-[60%] items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 2, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {type}
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75  xs:text-sm">
          {time} | {place}
        </span>
        <p className="font-medium w-full md:text-sm  text-justify">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-center text-8xl mb-32 md:text-6xl xs:text-4xl md:mb-16">
        Education
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] mg:w-full">
        <motion.div
          style={{ scale: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] bg-dark h-full origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            type="Bachelor Of Computer Application"
            time="2023-Present"
            place="Manipal University, Japipur, India"
            info="
            The Bachelor of Computer Applications (BCA) program focuses on providing students with a strong foundation in 
            computer science principles, programming languages, and information technology. Through a blend of theoretical 
            knowledge and practical application, students develop skills in software development, database management, and 
            system analysis, preparing them for roles in the rapidly evolving field of technology."
          />
          <Details
            type="Bacholer of Business Studies"
            time="2009-2011"
            place="Intensive International College, Kathmandu, Nepal"
            info="
            The Bachelor of Business Studies program offers a broad curriculum encompassing various aspects of business, 
            including management, marketing, finance, and entrepreneurship. Students gain a comprehensive understanding of 
            business theories and practices, along with practical skills to navigate the complexities of the modern business 
            world and pursue diverse career opportunities."
          />
          <Details
            type="Intermediate of Commerce"
            time="2007-2008"
            place="Balmiki Providence Higher Secondary School,Birtamode, Jhapa, Nepal"
            info="
            The course typically covers foundational principles of accounting, economics, business studies, 
            and commercial law, providing students with a comprehensive understanding of business operations and 
            financial management. Through a blend of theoretical knowledge and practical application, students develop
            analytical skills and business acumen essential for pursuing careers in finance, commerce, and related fields."
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
