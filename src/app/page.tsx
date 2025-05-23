"use client";

import { useState } from "react";
import { useActionState } from "react";
import { login } from "../actions/auth";
import Image from "next/image";
import Logo from "../app/img/logo.png";

export default function LoginPage() {
  // estados para controlar os inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [state, formAction] = useActionState(login, {});

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white shadow-xl rounded-3xl w-full max-w-md p-8">
        <div className="flex justify-center mb-6">
          <div className="relative w-28 h-28">
            <Image
              src={Logo}
              alt="Logo do Restaurante"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        <h2 className="text-2xl font-bold text-center text-[#EF3C42] mb-1">
          Bem-vindo de volta!
        </h2>
        <p className="text-center text-[#828282] mb-6 text-sm">
          Faça login para acessar o painel do restaurante
        </p>

        <form action={formAction} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              E-mail
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full rounded-xl border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#EF3C42]"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Senha
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full rounded-xl border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#EF3C42]"
            />
          </div>

          {state?.error && (
            <p className="text-red-500 text-sm">{state.error}</p>
          )}

          <button
            type="submit"
            className="w-full flex justify-center items-center gap-2 bg-[#EF3C42] text-white py-2 rounded-2xl font-semibold hover:bg-[#d73237] transition cursor-pointer"
          >
            <span>Entrar</span>
          </button>
        </form>
      </div>
    </div>
  );
}
