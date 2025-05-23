'use server'

import { cookies } from "next/headers";

const API_URL = "http://localhost:8080/restaurants";

export async function getRestaurants() {
  try {
    const cookieStore = cookies();
    const token = cookieStore.get("token")?.value;

    const response = await fetch(API_URL, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    });

    if (!response.ok) return [];

    return await response.json();
    
  } catch (error) {
    console.error("Erro ao buscar o restaurante:", error);
    return [];
  }
}

export async function getFirstRestaurantId(): Promise<number | null> {
  const restaurants = await getRestaurants();
  if (restaurants.length === 0) return null;
  return restaurants[0].id;
}
