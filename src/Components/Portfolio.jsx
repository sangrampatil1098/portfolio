import React from "react";
import portfolio from "../assets/portfolio.png";
import ecart from "../assets/ecart.png";
import investmentCalculator from "../assets/investmentCalculator.png";
import adminDashboard from "../assets/adminDashboard.png";
import foodCart from "../assets/foodCart.png";
const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: portfolio,
      demo: "https://main--peaceful-entremet-34d073.netlify.app/",
      code: "https://github.com/sangrampatil1098/portfolio",
    },
    {
      id: 2,
      src: ecart,
      demo: "https://bespoke-mermaid-c700cf.netlify.app/",
      code: "https://github.com/sangrampatil1098/ecommerce-cart",
    },
    {
      id: 3,
      src: foodCart,
      demo: "https://imaginative-youtiao-de7960.netlify.app/",
      code: "https://github.com/sangrampatil1098/food-order-app",
    },
    {
      id: 4,
      src: investmentCalculator,
      demo: "https://tranquil-eclair-1f6531.netlify.app/",
      code: "https://github.com/sangrampatil1098/investment-calculator",
    },
    {
      id: 5,
      src: adminDashboard,
      demo: "https://mellifluous-manatee-3af908.netlify.app/",
      code: "https://github.com/sangrampatil1098/admin-dashboard",
    },
  ];
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
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
