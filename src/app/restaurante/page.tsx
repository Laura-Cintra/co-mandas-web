import NavBar from "@/components/navbar";

export default function Restaurante(){
    return (
        <>
        <NavBar/>
        <div className="p-4">
        <h1 className="text-3xl font-semibold">Restaurante</h1>
        <p className="text-[#828282] text-lg">Visualize e gerencie pedidos </p>
        </div>
        </>
    );
}