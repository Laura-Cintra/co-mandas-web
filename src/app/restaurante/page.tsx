import Image from "next/image";
import restaurante from "../img/restaurante.png";
import mapa from "../img/mapa.png";
import { MapPin, Pencil } from "lucide-react";
import HorarioFuncionamento from "@/components/horario-funcionamento";
import BasePage from "@/components/base-page";

export default function Restaurante() {
  return (
    <BasePage>

      <h1 className="text-3xl font-semibold">Restaurante</h1>
      <p className="text-[#828282] text-lg mb-4">
        Aqui você pode ver as informações cadastradas sobre seu restaurante
      </p>

      <div className="flex gap-6">
        <Image
          src={restaurante}
          alt="Foto do restaurante"
          className="rounded-tl-[120px] rounded-br-[120px] w-[300px] h-auto object-cover"
        />

        <div className="flex flex-col gap-6 w-full max-w-[600px]">
          <div className="flex justify-between items-center">
            <p className="text-2xl font-extrabold text-[#EF3C42]">LE CONSULAT</p>
            <button className="bg-[#EF3C42] rounded-2xl w-8 h-8 flex items-center justify-center cursor-pointer">
              <Pencil color="white" size={18} />
            </button>
          </div>

          <p className="text-[#828282] text-lg">
            É um restaurante de comida italiana tradicional e inovadora.
          </p>

          <HorarioFuncionamento />

          <hr className="border-t border-[#828282]" />

          <div>
            <p className="font-semibold">Endereço</p>
            <div className="flex items-start text-[#828282] gap-2 mb-2">
              <MapPin />
              <p>na Vila Medeiros, zona norte de São Paulo.</p>
            </div>
            <Image src={mapa} alt="Mapa da localização" />
          </div>

          <hr className="border-t border-[#828282]" />

          <div>
            <p className="font-semibold">Outras informações</p>
            <p className="text-[#828282]">CNPJ: 46.179.149/0004-23</p>
          </div>
        </div>
      </div>
    </BasePage>


  );
}
