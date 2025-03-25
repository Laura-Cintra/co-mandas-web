"use client"

// import { useState } from "react";
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

  return (
    <>
        <nav className="flex flex-col gap-2 bg-white max-w-3xs h-screen items-center justify-between p-6">
          <div className="flex flex-col items-center gap-2">
          <Image src={Logo} alt="" width="100" height="50" />
          <hr />
          <div className="justify-start">
          {menuItems.map((item, index) => (
            <MenuItem key={index} icon={item.icon} text={item.text}/>
          ))}
          </div>
          </div>
          <div className="flex gap-2 items-center text-slate-950">
          <img className="size-12 rounded-full" src="https://github.com/Laura-Cintra.png" alt="" />
          <p>Laura Cintra</p>
          <ChevronDown/>
          </div>
        </nav>
    </>
  );
}
