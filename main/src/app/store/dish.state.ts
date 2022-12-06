export interface Dish {
    id?: number,
    dish_name: string,
    dish_type: string,
    price: number,
    status: boolean,
    dish_image?: string,
    created_at?: string,
    updated_at?: string
}

export interface DishState {
    dish: Dish[]
}

export interface VotedDishes {
    dishes: Dish[],
}

// export interface MenuForToday {
//     id?: string,
//     menu: any[],
//     date_served: string,
// }

