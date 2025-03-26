"use client"

import { useState } from "react";
import Logo from "../app/img/logo.png";
import { BookOpenText, ChevronDown, IdCard, Store, TrendingUp } from "lucide-react";
import MenuItem from "./menu-item";
import Image from "next/image";

/*
Menu garçom

const menuItems = [
    { icon: TrendingUp, text: "dashboard", href: "/" },
    { icon: NotebookPen, text: "comandas", href: "/"},
    { icon: Plus, text: "nova comanda", href: "/" },
    { icon: BellRing, text: "notificações", href: "/"},
  ];
*/

const menuItems = [
    { icon: TrendingUp, text: "dashboard", href: "/dashboard" },
    { icon: Store, text: "restaurante", href: "/restaurante"},
    { icon: BookOpenText, text: "cardápio", href: "/cardapio" },
    { icon: IdCard, text: "funcionários", href: "/funcionarios"},
  ];

export default function NavBar() {

  // Estado para controlar se o menu está expandido ou minimizado
  const [isMenuCollapsed, setIsMenuCollapsed] = useState(false);

  const toggleMenu = () => {
    setIsMenuCollapsed(!isMenuCollapsed);
  };

  return (
    <nav className={`flex flex-col gap-2 bg-white h-screen items-center justify-between p-6 drop-shadow-lg transition-all duration-200 ease-linear fixed ${
      isMenuCollapsed ? "w-20" : "w-72"}`}>
      <div className="flex flex-col items-center gap-2">
        <div
        className="cursor-pointer"
        onClick={toggleMenu}
        >
        <Image
          src={Logo}
          alt="Logo"
          width={isMenuCollapsed ? 65 : 90}
          height={isMenuCollapsed ? 35 : 40}/>
        </div>
        
        <div className={`bg-gray-400 h-0.5 ${isMenuCollapsed ? "w-20" : "w-72"} m-3 transition-all duration-200 ease-linear`}></div>
      
        <div className="flex flex-col gap-6 mt-4">
        {menuItems.map((item, index) => (
          <MenuItem key={index} icon={item.icon} text={isMenuCollapsed ? "" : item.text} href={item.href}/>
        ))}
        </div>
      </div>
      <div className="flex gap-2 items-center text-slate-950">
      <img className="size-12 rounded-full" src="https://github.com/Laura-Cintra.png" alt="usuário" />
      {!isMenuCollapsed && <p>Laura Cintra</p>} 
      {!isMenuCollapsed && <ChevronDown/>}
      </div>
    </nav>
  );
}
