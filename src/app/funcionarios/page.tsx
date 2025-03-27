import NavBar from "@/components/navbar";

export default function Funcionarios(){
    return (
        <>
        <div className="flex">
            <NavBar/>
            <div className="p-4">
                <h1 className="text-3xl font-semibold">Funcionários</h1>
                <p className="text-[#828282] text-lg">Gerencie os usuários de seu restaurante </p>
            </div>
        </div>
        </>
    );
}