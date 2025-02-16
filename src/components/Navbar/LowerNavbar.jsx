import React from "react";

const LowerNavbar = () => {
  const Menu = [
    {
      id: 0,
      name: "Home",
      Link: "#",
    },
    {
      id: 1,
      name: "Top Rated",
      Link: "#",
    },
    {
      id: 2,
      name: "Kids Wear",
      Link: "#",
    },
    {
      id: 3,
      name: "Men's Wear",
      Link: "#",
    },
    {
      id: 4,
      name: "Electronics",
      Link: "#",
    },
    {
      id: 5,
      name: "Trending",
      Link: "#",
    },
  ];
  return (
    <div className=" z-50 py-4">
      <ul className="flex space-x-8 items-center justify-center">
        {Menu.map((item) => {
          return (
            <li key={item.id} href={item.link} className="text-lg">
              {item.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LowerNavbar;
