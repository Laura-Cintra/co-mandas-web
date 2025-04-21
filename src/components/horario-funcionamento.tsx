"use client";

import { useState } from "react";
import { ChevronDown, Clock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Horario = {
  dia: string;
  horario: string;
};

// const horarios = [
//   { dia: "Segunda-feira", horario: "13:00 - 22:00" },
//   { dia: "Terça-feira", horario: "13:00 - 22:00" },
//   { dia: "Quarta-feira", horario: "13:00 - 22:00" },
//   { dia: "Quinta-feira", horario: "13:00 - 22:00" },
//   { dia: "Sexta-feira", horario: "13:00 - 23:00" },
//   { dia: "Sábado", horario: "12:00 - 23:00" },
//   { dia: "Domingo", horario: "12:00 - 22:00" },
// ];

export default function HorarioFuncionamento({ horarios }: { horarios: Horario[] }) {
  const [expandir, setExpandir] = useState(false);

  if (!horarios || horarios.length === 0) {
    return <p className="text-[#828282]">Horários não disponíveis.</p>;
  }

  return (
    <div className="mt-[20px] w-[300px] flex flex-col">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setExpandir(!expandir)}
      >
        <p className="text-[17px]">Aberto</p>
        <motion.div
          animate={{ rotate: expandir ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown size={15} />
        </motion.div>
      </div>

      {/* Segunda-feira sempre visível */}
      <div className="mt-[8px] flex justify-between items-center text-[#828282] text-[15px] mb-1.5">
        <p>{horarios[0].dia}</p>
        <div className="flex items-center gap-[5px]">
          <Clock size={15} />
          <p>{horarios[0].horario}</p>
        </div>
      </div>

      {/* Demais dias com animação */}
      <AnimatePresence>
        {expandir && (
          <motion.div
            className="flex flex-col gap-[6px] overflow-hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {horarios.slice(1).map((dia, index) => (
              <div
                key={index}
                className="flex justify-between items-center text-[#828282] text-[15px]"
              >
                <p>{dia.dia}</p>
                <div className="flex items-center gap-[5px]">
                  <Clock size={15} />
                  <p>{dia.horario}</p>
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
