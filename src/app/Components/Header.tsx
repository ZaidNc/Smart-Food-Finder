import React from "react";

const Header = () => (
  <header className="bg-background text-foreground">
    <nav className="bg-black text-white flex justify-between items-center p-4">
      <div>
        <img
          src="https://openui.fly.dev/openui/24x24.svg?text=🪄"
          alt="logo"
          className="h-6 w-6"
        />
      </div>
      <div className="flex space-x-4">
        <a href="#" className="hover:text-zinc-400">
          Menu
        </a>
        <a href="#" className="hover:text-zinc-400">
          About
        </a>
        <a href="#" className="hover:text-zinc-400">
          Order
        </a>
        <a href="#" className="hover:text-zinc-400">
          Contact
        </a>
      </div>
    </nav>
  </header>
);
export default Header;
