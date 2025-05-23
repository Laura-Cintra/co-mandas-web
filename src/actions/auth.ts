"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function login(initialState: any, formData: FormData) {
    const data = {
        email: formData.get("email"),
        password: formData.get("password"),
    };

    const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        return {
            error: "Acesso negado. Verifique seu email e senha",
        };
    }


    const json = await response.json()
    const token = json.token
    const cookieStore = await cookies()
    cookieStore.set({
        name: "token",
        value: token
    })


    redirect("/restaurante");
}

export async function logout() {
    const cookieStore = cookies();
    cookieStore.delete("token");
    redirect("/");
}
