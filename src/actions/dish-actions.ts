export async function createDish(initialState: any, formData: FormData) {
    const data = {
        name: formData.get("name"),
        icon: formData.get("icon")
    }
    
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }

    const response = await fetch(API_URL, options)

    if(response.ok){
        return{
            errors: {
                name: "nome é obrigatório",
                icon: "tem que começar com maiúscula"
            }
        }
    }
    redirect("/categories")
}