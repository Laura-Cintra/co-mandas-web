import NavBar from "@/components/navbar";

export default function Dashboard(){
    return (
        <>
        <div className="flex">
            <NavBar/>
            <div className="p-4">
            <h1 className="text-3xl font-semibold">Bem-vindo(a), Maria</h1>
            <p className="text-[#828282] text-lg">Verifique o estado e atualizações do seu restaurante </p>
            </div>
        </div>
        </>
    );
}