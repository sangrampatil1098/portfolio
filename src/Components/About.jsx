import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full min-h-20 bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl">
          <span>
            Hi, I’m a Full Stack Developer with 4.5+ years of professional
            experience working across frontend and backend technologies,
            primarily React, Java, and Spring Boot. I enjoy building complete
            web applications—from crafting intuitive user interfaces to
            developing robust backend services and APIs. My approach emphasizes
            clean architecture, code quality, performance, and scalability. Over
            the years, I’ve collaborated with cross-functional teams,
            contributed to production-grade applications, and taken ownership of
            features from design to deployment. I’m passionate about learning
            new technologies, improving existing systems, and building software
            that is simple, reliable, and effective.
          </span>
        </p>
        <br />
        <p className="text-xl">
          {" "}
          I love playing cricket, listening music, cooking, gymming. In my free
          time you can find me going out with friends on adventures, playing
          different sports, reading.
        </p>
      </div>
    </div>
  );
};

export default About;
