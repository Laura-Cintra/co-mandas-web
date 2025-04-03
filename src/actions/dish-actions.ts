import { redirect } from "next/navigation";

const API_URL = "http://localhost:8080/dishes";


export async function getPratos(): Promise<Dishes[]> {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            return [];
        }
        return await response.json();
    } catch (error) {
        console.error("Erro ao buscar pratos:", error);
        return [];
    }
}


export async function createDish(initialState: any, formData: FormData) {
    const data = {
        name: formData.get("name"),
        description: formData.get("description"),
        category: formData.get("category"),
        price: formData.get("price")
    };

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    };

    const response = await fetch(API_URL, options);

    if (!response.ok) {
        return {
            errors: {
                name: "O nome é obrigatório",
                description: "A descrição é obrigatória",
                category: "A categoria é obrigatória",
                price: "O preço é obrigatório, e deve ser positivo"
            }
        };
    }

    redirect("/cardapio"); 
}
