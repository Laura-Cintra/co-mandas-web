import { LucideIcon } from "lucide-react";

interface MenuItemProps {
  icon: LucideIcon;
  text: string;
}

export default function MenuItem({ icon: Icon, text }: MenuItemProps){
  return (
    <div className="flex items-center gap-3 p-3 text-slate-950 hover:bg-gray-100 rounded-lg">
      <Icon className="text-xl" />
      <p className="text-sm">{text}</p>
    </div>
  );
};