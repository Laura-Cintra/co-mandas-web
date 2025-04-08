"use client"

import { createDish } from "@/actions/dish-actions";
// import NavBar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useActionState, useEffect } from "react";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

const initialState = {
    values: {
        name: "",
        price: "",
        category: "",
        description: ""
    },
    errors: {
        name: "",
        price: "",
        category: "",
        description: ""
    }
}

export default function DishRegisters(){
    const[state, formAction] = useActionState(createDish, initialState) // state - mudança do estado que vai sinalizar o erro
    
    return(
    <>     
    <main className="flex justify-center">
        <div className="p-6 w-[100%]"> 
            <h1 className="text-3xl font-semibold">Adicionar prato</h1>
            <p className="text-[#828282] text-lg mt-2">Insira um novo prato no cardápio do restaurante</p>

            <form action={formAction} className="space-y-4 mt-6">
                <div>
                    <Input name="name" placeholder="Nome do prato" aria-invalid={!!state?.errors.name} defaultValue={state?.values.name} className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-900" />
                    <span className="text-sm text-red-500">{state?.errors.name}</span>
                </div>

                <div>
                    <Input type="number" name="price" step="0.01" min="0" placeholder="Preço (R$)" aria-invalid={!!state?.errors.price} defaultValue={state?.values.price} className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-900" />
                    <span className="text-sm text-red-500">{state?.errors.price}</span>
                </div>

                <div>
                    <Select name="category" aria-invalid={!!state?.errors.category} defaultValue={state?.values.category}>
                        <SelectTrigger id="category">
                            <SelectValue placeholder="Selecione uma categoria" />
                        </SelectTrigger>
                        <SelectContent>
                            {/* <SelectItem value="PRATO_PRINCIPAL">Prato Principal</SelectItem>
                            <SelectItem value="SOBREMESA">Sobremesa</SelectItem>
                            <SelectItem value="ENTRADA">Entrada</SelectItem> */}
                            <SelectItem value="Prato principal">Prato Principal</SelectItem> 
                            <SelectItem value="Sobremesa">Sobremesa</SelectItem>
                            <SelectItem value="Entrada">Entrada</SelectItem>
                        </SelectContent>
                    </Select>
                    <span className="text-sm text-red-500">{state?.errors.category}</span>
                </div>

                <div>
                    <textarea
                        name="description"
                        placeholder="Descreva o prato e os ingredientes possivelmente alérgicos..."
                        className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-900 min-h-[120px] resize-y"
                        defaultValue={state?.values.description}
                    ></textarea>
                    <span className="text-sm text-red-500">{state?.errors.description}</span>
                </div>

                <div className="flex justify-start">
                    <Button className="cursor-pointer" variant="outline" asChild>
                        <Link href="/cardapio">Cancelar</Link>
                    </Button>
                    <Button type="submit" className="ml-5 bg-[#EF3C42] cursor-pointer">Salvar</Button>
                </div>
            </form>
        </div>
    </main>
    </>
    )
}
