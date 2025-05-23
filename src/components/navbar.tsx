"use client"

import { useState } from "react";
import Logo from "../app/img/logo.png";
import { BookOpenText, ChevronDown, IdCard, Store, TrendingUp, LogOut } from "lucide-react";
import MenuItem from "./menu-item";
import Image from "next/image";
import { logout } from "@/actions/auth";

const menuItems = [
    { icon: TrendingUp, text: "dashboard", href: "/dashboard" },
    { icon: Store, text: "restaurante", href: "/restaurante"},
    { icon: BookOpenText, text: "cardápio", href: "/cardapio" },
    { icon: IdCard, text: "funcionários", href: "/funcionarios"},
];

export default function NavBar() {

  const [isMenuCollapsed, setIsMenuCollapsed] = useState(false);

  const toggleMenu = () => {
    setIsMenuCollapsed(!isMenuCollapsed);
  };

  return (
    <nav className={`flex flex-col gap-2 bg-white h-screen items-center justify-between p-6 drop-shadow-lg transition-all duration-200 ease-linear ${
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
            height={isMenuCollapsed ? 35 : 40}
          />
        </div>
        
        <div className={`bg-gray-400 h-0.5 ${isMenuCollapsed ? "w-20" : "w-72"} m-3 transition-all duration-200 ease-linear`}></div>
      
        <div className="flex flex-col gap-6 mt-4">
          {menuItems.map((item, index) => (
            <MenuItem key={index} icon={item.icon} text={isMenuCollapsed ? "" : item.text} href={item.href}/>
          ))}
        </div>
      </div>
      
      <div className="flex flex-col items-center gap-3">
        <div className="flex gap-2 items-center text-slate-950">
          <img className="w-12 h-12 rounded-full" src="https://github.com/Laura-Cintra.png" alt="usuário" />
          {!isMenuCollapsed && <p>Laura Cintra</p>}
          {!isMenuCollapsed && <ChevronDown />}
        </div>

        {!isMenuCollapsed && (
          <button
            onClick={logout}
            className="flex items-end gap-2 text-red-600 hover:text-red-800 transition-colors font-semibold cursor-pointer"
          >
            <LogOut size={20} />
            Sair
          </button>
        )}
      </div>

    </nav>
  );
}
