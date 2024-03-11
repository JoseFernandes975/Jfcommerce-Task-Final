export type ProductDTO = {
    id: number,
    name: string,
    description: string,
    price: number,
    imgUrl: string,
    categories: CategoryDTO[]
}

export type CategoryDTO = {
   id: number,
   name: string 
}