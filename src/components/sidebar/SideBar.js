import React, { useState } from "react";
import MenuItem from "./MenuItem";
import "./SideBar.css";

export default function SideBar() {
  // changing theme
  const [theme, setTheme] = useState(() => "default");

//   function switchTheme() {
//     window.alert("click")
//     let root = document.querySelector(":root");
//     root.style.setProperty("--color-accent", "red");
//     root.style.setProperty("--color-accent-sec", "green");
//     setTheme(() => {
//       return "light";
//     });
//   }

  const menu_items_data = [
    {
      id: 0,
      title: "Home",
      ionicon: "home-outline",
      boxicon: "",
      color: "white",
      classNames: [],
    },
    {
      id: 1,
      title: "Repo",
      ionicon: "git-branch-outline",
      boxicon: "",
      color: "white",
      classNames: [],
    },
    {
      id: 2,
      title: "Tech",
      ionicon: "build-outline",
      boxicon: "",
      color: "white",
      classNames: [],
    },
    {
      id: 3,
      title: "Contact",
      ionicon: "help-outline",
      boxicon: "",
      color: "white",
      classNames: [],
    },
  ];

  const menu_items = menu_items_data.map((item) => {
    return (
      <MenuItem
        key={item.id}
        ionicon={item.ionicon}
        title={item.title}
      ></MenuItem>
    );
  });

  function toggleMenu() {
    document.querySelector(".main .sb").classList.toggle("sb-active");
    document.querySelector(".main .sb").classList.toggle("sb-passive");
  }

  return (
    <div className="sb sb-passive">
        {/* <button onClick={switchTheme}>Click me</button> */}
      <div className="sb-header">
        <div className="sb-header-menu-button" onClick={toggleMenu}>
          <ion-icon
            name="chevron-forward-outline"
            id="menu-btn"
            color="white"
          ></ion-icon>
        </div>
      </div>

      <ul className="sb-menu">
        {/* <li>
                <div className='sb-search-box'>
                    <div className="sb-search-box-icon">
                    <ion-icon name='search' className="sb-search-box-icon" color="solid"></ion-icon>
                    </div>
                    <input placeholder='Search'></input>
                </div>
            </li> */}
        {menu_items}
      </ul>
    </div>
  );
}