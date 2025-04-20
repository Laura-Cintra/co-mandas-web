import { useState } from "react"
import { SearchIcon } from "lucide-react";

export default function Search({ onChange }: SearchProps) {
    const [input, setInput] = useState("")

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInput(value) // atualiza o input interno
        onChange(value) //dispara direto pro pai
    }

    return (
        <div className="border border-gray-300 h-9 w-[60%] p-0.5 rounded-lg flex">
            <input
                className="w-full border-none text-lg pl-4 focus:outline-none text-[#798593]"
                type="text"
                placeholder="Busque por um prato"
                value={input}
                onChange={handleChange}
            />
            <SearchIcon size={22} color="#798593" />
        </div>
    )
}