const API_URL = "http://localhost:8080/restaurants";

export async function getRestaurants() {
  const response = await fetch(API_URL);

  if (!response.ok) throw new Error("Erro ao buscar restaurantes");

  return await response.json();
}