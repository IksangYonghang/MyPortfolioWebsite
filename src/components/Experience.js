import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
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
          {position}&nbsp;
          <a
            href={companyLink}
            target={"_blank"}
            className="text-primary capitalize dark:text-primaryDark"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm text-justify">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-center text-8xl mb-32 md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] mg:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] bg-dark h-full origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Full Stack Developer"
            company="Premium Technologies Pvt. Ltd."
            companyLink="https://premiumtech.com.np/"
            time="2023-Present"
            address="Kathmandu, Nepal"
            work="
            Having transitioned from the role of Customer Support Coordinator to Full Stack Developer within the same company, 
            I've expanded my skill set to encompass a broader range of technical competencies. Now proficient in C#, React, 
            TypeScript, and Next.js, I contribute to the development of dynamic and responsive web applications. 
            Leveraging my background in customer support, I bring a unique perspective to my development work, 
            prioritizing user experience and ensuring that our solutions meet both technical requirements and end-user needs. 
            This transition has allowed me to deepen my understanding of software development processes 
            while continuing to deliver value to our clients through innovative and robust solutions."
          />
          <Details
            position="Customer Support Coordinator"
            company="Premium Technologies Pvt. Ltd."
            companyLink="https://premiumtech.com.np/"
            time="2022-2023"
            address="Kathmandu, Nepal"
            work="
            As a Customer Support Coordinator, my primary responsibility was to ensure seamless communication and 
            assistance between clients and the technical team. This involved resolving customer queries, 
            troubleshooting technical issues, and providing timely updates on ongoing projects. Proficiency in Quality 
            Assurance (QA) ensured the delivery of high-quality products or services, while monitoring Data Migration 
            checked guaranteed smooth transitions and minimized data loss or corruption. Additionally, familiarity with 
            PostgreSQL enhanced my ability to understand and address database-related concerns efficiently."
          />
          <Details
            position="Customer Support Lead"
            company="Planet Earth Solutions"
            companyLink="https://planetearthsolution.com/"
            time="2008-2010"
            address="Kathmandu, Nepal"
            work="
            As the customer support lead for an accounting software company specializing in cooperatives,
            my responsibilities included overseeing a team of support agents, ensuring prompt and effective 
            resolution of customer inquiries and issues. I had to develop and implement training programs 
            to enhance the team's product knowledge and customer service skills. Additionally, I collaborated 
            with other departments to address recurring problems and improve product usability. Monitoring customer 
            feedback and implementing strategies for continuous improvement were also crucial aspects of my role. Ultimately,
            I served as the primary liaison between customers and the company, 
            striving to maintain high levels of satisfaction and retention within the cooperative community."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
