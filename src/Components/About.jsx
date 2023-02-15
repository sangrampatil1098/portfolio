import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-width-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          <span>
            Hi! I'm Sangram Patil. I was born and brought up in Belgaum,
            Karnataka. I have completed my engineering in Computer Science from
            S. G. Balekundri Institute of technology, Belgaum with CGPA 8.3.
            I've 1.6 years of experience on web development technologies like
            HTML, CSS, Javascript, ReactJS, Redux. Currently I'm seeking a web
            developer job in a reputed company where I can utilise my skills.
            I'm interested to work on front end technologies, mainly React. I
            love to develop and style different user interfaces which can make
            users life easy
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
