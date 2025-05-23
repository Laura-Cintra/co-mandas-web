'use server'

import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { getFirstRestaurantId } from "./restaurant-actions";

const API_URL = "http://localhost:8080/dishes";

export async function getPratos(query?: string, page: number = 0): Promise<Pageable> {
  try {
    const cookieStore = cookies();
    const token = cookieStore.get("token")?.value;

    const params = new URLSearchParams();
    if (query) params.append("name", query);
    params.append("page", page.toString());

    const response = await fetch(`${API_URL}?${params.toString()}`, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    });

    if (!response.ok) {
      return { content: [], last: false, first: false, page: 0 };
    }

    const data = await response.json();
    return {
      content: data.content,
      last: data.last,
      first: data.first,
      page: data.pageable.pageNumber
    };
  } catch (error) {
    console.error("Erro ao buscar pratos:", error);
    return { content: [], last: false, first: false, page: 0 };
  }
}

export async function createDish(initialState: any, formData: FormData) {
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;

  const restaurantId = await getFirstRestaurantId();

  if (!restaurantId) {
    throw new Error("Nenhum restaurante cadastrado para associar o prato");
  }

  const data = {
    name: formData.get("name"),
    description: formData.get("description"),
    category: formData.get("category"),
    price: formData.get("price"),
    restaurant: {
      id: restaurantId
    }
  };


  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    },
    body: JSON.stringify(data)
  };

  const response = await fetch(API_URL, options);

  if (!response.ok) {
    const errors = await response.json();

    return {
      values: data,
      errors: {
        name: errors.find((e: any) => e.field === "name")?.message,
        description: errors.find((e: any) => e.field === "description")?.message,
        category: errors.find((e: any) => e.field === "category")?.message,
        price: errors.find((e: any) => e.field === "price")?.message
      }
    };
  }

  redirect("/cardapio");
}
