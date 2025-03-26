"use client"

import { useState } from "react";
import Logo from "../app/img/logo.png";
import { BellRing, ChevronDown, NotebookPen, Plus, TrendingUp } from "lucide-react";
import MenuItem from "./menu-item";
import Image from "next/image";

const menuItems = [
    { icon: TrendingUp, text: "dashboard" },
    { icon: NotebookPen, text: "comandas" },
    { icon: Plus, text: "nova Comanda" },
    { icon: BellRing, text: "notificações" },
  ];

export default function NavBar() {

  // Estado para controlar se o menu está expandido ou minimizado
  const [isMenuCollapsed, setIsMenuCollapsed] = useState(false);

  const toggleMenu = () => {
    setIsMenuCollapsed(!isMenuCollapsed);
  };

  return (
    <>
        <nav className={`flex flex-col gap-2 bg-white max-w-3xs h-screen items-center justify-between p-6 drop-shadow-lg transition-all duration-300 ${
        isMenuCollapsed ? "w-20" : "w-72"}`}>
          <div className="flex flex-col items-center gap-2">
            <div
            className="cursor-pointer"
            onClick={toggleMenu}
            >
            <Image
              src={Logo}
              alt="Logo"
              width={isMenuCollapsed ? 70 : 90}
              height={isMenuCollapsed ? 35 : 40}/>
            </div>
            
            <div className={`bg-gray-400 h-0.5 ${isMenuCollapsed ? "w-20" : "w-62"} m-3`}></div>
          
            <div className="flex flex-col gap-6 mt-4">
            {menuItems.map((item, index) => (
              <MenuItem key={index} icon={item.icon} text={isMenuCollapsed ? "" : item.text}/>
            ))}
            </div>
          </div>
          <div className="flex gap-2 items-center text-slate-950">
          <img className="size-12 rounded-full" src="https://github.com/Laura-Cintra.png" alt="usuário" />
          {!isMenuCollapsed && <p>Laura Cintra</p>} 
          {!isMenuCollapsed && <ChevronDown/>}
          </div>
        </nav>
    </>
  );
}
