export interface Student{
    name: string;
    surname: string;
    id: string;
    languages: string[];
    address: Adress;
}

export interface Adress{
    street: string,
    city: string;
}