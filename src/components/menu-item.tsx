import { LucideIcon } from "lucide-react";

interface MenuItemProps {
  icon: LucideIcon;
  text: string;
}

export default function MenuItem({ icon: Icon, text }: MenuItemProps){
  return (
    <div className="flex items-center text-slate-950 hover:bg-gray-100 rounded-lg p-2">
      <Icon className="text-2xl mx-4" />
      <p className="text-2sm">{text}</p>
    </div>
  );
};