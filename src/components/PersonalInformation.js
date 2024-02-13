import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";

const PersonalInformation = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <motion.div
      initial={{ y: 50 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 2, type: "spring" }}
      style={{ scale: scrollYProgress }}
    >
      <h2 className="font-bold text-center text-8xl mb-32 md:text-6xl xs:text-4xl md:mb-16">
        Personal Details
      </h2>
      <ul className="my-4 first:mt-0 last:mt-0 mx-auto w-[60%] items-center  md:w-[80%]">
        <li className="my-4 first:mt-0 last:mt-0 mx-auto w-[60%] items-center  md:w-[80%]">
          <strong>Full Name:</strong> Bishal Yonghang LImbu
        </li>
        <li className="my-4 first:mt-0 last:mt-0  mx-auto w-[60%] items-center  md:w-[80%]">
          <strong>Date of Birth:</strong> 17th August, 1987
        </li>
        <li className="my-4 first:mt-0 last:mt-0  mx-auto w-[60%] items-center  md:w-[80%]">
          <strong>Father’s Name:</strong> Banbir Yonghang Limbu
        </li>
        <li className="my-4 first:mt-0 last:mt-0  mx-auto w-[60%] items-center  md:w-[80%]">
          <strong>Mother's Name:</strong> Khagu Maya Yonghang
        </li>
        <li className="my-4 first:mt-0 last:mt-0  mx-auto w-[60%] items-center  md:w-[80%]">
          <strong>Nationality:</strong> Nepali
        </li>
        <li className="my-4 first:mt-0 last:mt-0  mx-auto w-[60%] items-center  md:w-[80%]">
          <strong>Address:</strong> Nagarjun-6, Ramkot, Kathmandu, Nepal
        </li>
        <li className="my-4 first:mt-0 last:mt-0  mx-auto w-[60%] items-center  md:w-[80%]">
          <strong>Permanent Address:</strong> Arjundhara-6, Jhapa, Nepal
        </li>
        <li className="my-4 first:mt-0 last:mt-0  mx-auto w-[60%] items-center justify-between md:w-[80%]">
          <strong>Phone:</strong> 9849192066
        </li>
      </ul>
    </motion.div>
  );
};

export default PersonalInformation;
