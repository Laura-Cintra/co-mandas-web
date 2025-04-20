interface Dishes {
    name: string;
    description: string;
    category: string;
    price: number;
}

interface BasePageProps {
    children: ReactNode;
}

interface SearchProps{
    onChange: (value: string) => void;
}