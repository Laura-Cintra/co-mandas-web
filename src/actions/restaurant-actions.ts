const API_URL = "http://localhost:8080/restaurants";
 
export async function getRestaurants() {
  try {
    const response = await fetch(API_URL);
 
    if (!response.ok) return [];
 
    return await response.json();
    
  }catch(error){
    console.error("Erro ao buscar o restaurante:", error);
    return [];
  }
}