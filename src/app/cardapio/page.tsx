"use client";

import { EllipsisVertical, Plus, Search } from "lucide-react";
import React, { useEffect, useState } from "react";
import Loading from "react-loading";

async function getPratos(): Promise<Dishes[]> {
    try {
        const response = await fetch("http://localhost:8080/dishes");
        if (!response.ok) {
            return [];
        }
        return await response.json();
    } catch (error) {
        console.error("Erro ao buscar pratos:", error);
        return [];
    }
}

export default function Cardapio() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<Dishes[]>([]);

    useEffect(() => {
        async function fetchData() {
            const dishes = await getPratos();
            setData(dishes);
            setLoading(false);
        }
        fetchData();
    }, []);

    return (
        <div className="p-4">
            <h1 className="text-3xl font-semibold">Cardápio</h1>
            <p className="text-[#828282] text-lg">
                Aqui você pode ver todos os itens do cardápio de seu restaurante
            </p>
            <div className="flex flex-col gap-4 p-4 rounded-lg bg-white shadow-lg mt-3">
                <div className="flex justify-center items-center">
                    <div className="border border-gray-300 h-9 w-[60%] p-0.5 rounded-lg flex">
                        <input
                            className="w-full border-none text-lg pl-4 focus:outline-none text-[#798593]"
                            type="text"
                            placeholder="Busque por um prato"
                        />
                        <Search size={22} color="#798593" />
                    </div>
                </div>

                <div className="flex flex-col">
                    <section className="grid grid-cols-[0.5fr_repeat(2,1fr)_repeat(2,0.5fr)] text-center items-center gap-2 mb-4 text-sm p-2 px-4 bg-[#EF3C42] text-white font-bold rounded-lg">
                        <span>Nome do prato</span>
                        <span>Descrição</span>
                        <span>Categoria</span>
                        <span>Valor do prato</span>
                        <span></span>
                    </section>

                    <div className="flex flex-col max-h-[320px] overflow-y-scroll pb-2 custom-scrollbar md:max-h-[280px] xl:max-h-[450px] 2xl:max-h-[200px]">
                        {loading ? (
                            <div className="flex justify-center items-center w-[100%] h-[250px]">
                                <Loading color="#4D4D4D" type="bars" height={80} width={80} />
                            </div>
                        ) : data.length === 0 ? (
                            <div className="flex justify-center items-center h-full">
                                <p className="text-gray-500">Nenhum prato encontrado</p>
                            </div>
                        ) : (
                            data.map((item, index) => (
                                <div
                                    key={index}
                                    className="grid grid-cols-[0.5fr_repeat(2,1fr)_repeat(2,0.5fr)] items-center text-center gap-2 border-b border-[#F58488] p-3 md:p-2"
                                >
                                    <strong>{item.name}</strong>
                                    <strong>{item.description}</strong>
                                    <strong>{item.category}</strong>
                                    <strong>R$ {item.price}</strong>
                                    <div className="justify-self-end pr-2">
                                        <EllipsisVertical />
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                    <div className="flex justify-end mt-4">
                        <button className="shadow-lg h-[32px] w-[167px] font-semibold text-white bg-[#F58488] text-[15px] rounded-md flex items-center justify-center gap-2 cursor-pointer">
                            <Plus color="white" />
                            adicionar prato
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
