import NavBar from "@/components/navbar";
import { IoIosSearch, IoMdMore } from "react-icons/io";

export default function Cardapio(){
    return(
        <>
        <NavBar/>
        <div className="p-4">
        <h1 className="text-3xl font-semibold">Cardápio</h1>
        <p className="text-[#828282] text-lg">Aqui você pode ver todos os itens do cardápio de seu restaurante</p>
        <div className="flex flex-col gap-4 p-4 rounded-lg bg-white shadow-lg mt-3">
            <div className=" flex justify-center align-center items-center">
            <div className="border border-solid border-gray-300 border-[0.2px] h-9 w-[60%] p-0.5 rounded-lg flex">
               <input className="w-[100%] border-none text-lg pl-4 focus:outline-none text-[#798593]" type="text" placeholder="Busque por um prato"/>
                <IoIosSearch size={24} color="#798593"/>
            </div>
            </div>
            <div className="flex flex-col">
                <section className="grid grid-cols-[0.5fr_repeat(2,1fr)_repeat(2,0.5fr)] text-center items-center gap-2 mb-4 text-sm p-2 px-4 bg-[#EF3C42] text-white font-bold rounded-lg">
                <span >Nome do prato</span>
                <span >Descrição</span>
                <span >Categoria</span>
                <span >Valor do prato</span>
                <span ></span>
                </section>
                <div className="flex flex-col max-h-[320px] overflow-y-scroll pb-2 custom-scrollbar 
                    md:max-h-[280px] xl:max-h-[450px] 2xl:max-h-[550px]">

        <li className="list-none flex flex-col gap-6 p-3 border-b border-[#F58488] md:p-2">
          <div className="grid grid-cols-[0.5fr_repeat(2,1fr)_repeat(2,0.5fr)] items-center text-center gap-2">
            <strong>Risoto de camarão</strong>
            <strong>alérgicos: frutos do mar</strong>
            <strong>Prato principal</strong>
            <strong>R$ 65,98</strong>
            <IoMdMore/>
          </div>
        </li>
    
    </div>
            </div>
        </div>
        </div>
        </>
    )
}