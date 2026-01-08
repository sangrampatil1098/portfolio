import React from "react";
import portfolio from "../assets/portfolio.png";
import ecart from "../assets/ecart.png";
import investmentCalculator from "../assets/investmentCalculator.png";
import adminDashboard from "../assets/adminDashboard.png";
import foodCart from "../assets/foodCart.png";
import ecommerce from "../assets/ecommerce.png";
import countDownGame from "../assets/countdownGame.png";
import expenceTracker from "../assets/expenceTracker.png";
import employeeManagementSystem from "../assets/employeeManagementSystem.png";
import tikTakToe from "../assets/tik-tak-toe.png";
const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: ecommerce,
      demo: "https://illustrious-tapioca-84c4ca.netlify.app/",
      code: "https://github.com/sangrampatil1098/ecommerce-frontend",
    },
    {
      id: 2,
      src: countDownGame,
      demo: "https://mellifluous-haupia-de64f2.netlify.app/",
      code: "https://github.com/sangrampatil1098/countdown",
    },
    {
      id: 3,
      src: expenceTracker,
      demo: "https://melodious-cocada-2aa00a.netlify.app/",
      code: "https://github.com/sangrampatil1098/Expenses-Tracker",
    },
    {
      id: 4,
      src: employeeManagementSystem,
      demo: "https://exquisite-bubblegum-6580dc.netlify.app/",
      code: "https://github.com/sangrampatil1098/employee-management-system-UI",
    },
    {
      id: 5,
      src: tikTakToe,
      demo: "https://super-empanada-86268b.netlify.app/",
      code: "https://github.com/sangrampatil1098/tic-tac-toe",
    },
    {
      id: 6,
      src: ecart,
      demo: "https://stellar-pasca-ea2b11.netlify.app/",
      code: "https://github.com/sangrampatil1098/ecommerce-cart",
    },
    {
      id: 7,
      src: foodCart,
      demo: "https://velvety-queijadas-7516b0.netlify.app/",
      code: "https://github.com/sangrampatil1098/food-order-app",
    },
    {
      id: 8,
      src: investmentCalculator,
      demo: "https://tranquil-eclair-1f6531.netlify.app/",
      code: "https://github.com/sangrampatil1098/investment-calculator",
    },
    {
      id: 9,
      src: adminDashboard,
      demo: "https://mellifluous-manatee-3af908.netlify.app/",
      code: "https://github.com/sangrampatil1098/admin-dashboard",
    },
    {
      id: 10,
      src: portfolio,
      demo: "https://main--peaceful-entremet-34d073.netlify.app/",
      code: "https://github.com/sangrampatil1098/portfolio",
    },
  ];
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:min-h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demo, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a href={demo} target="_blank" rel="noreferrer">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Demo
                  </button>
                </a>
                <a href={code} target="_blank" rel="noreferrer">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
