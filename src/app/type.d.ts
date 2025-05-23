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

interface Pageable{
    content: Dishes[];
    last: boolean;
    first: boolean;
    page: number
}
interface PageableProps{
    last: boolean;
    first: boolean;
    page: number
}

interface DishFormData {
  name: string;
  description: string;
  category: string;
  price: string; 
}