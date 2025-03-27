"use client"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { EllipsisVertical, Pencil, Trash } from "lucide-react"

export default function CrudDropDown() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="cursor-pointer"><EllipsisVertical/></DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem>
                    <Pencil/>
                    editar
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Trash/>
                    apagar
                </DropdownMenuItem>
               
            </DropdownMenuContent>
        </DropdownMenu>

    )
}

