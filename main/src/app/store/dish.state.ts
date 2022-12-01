export interface Dish {
    id?: string,
    dishName: string,
    dishType: string,
    price: number,
    status: string,
    image?: string,
    created_at?: string,
    updated_at?: string
}

export interface VotedDishes {
    id?: any,
    user_id: string,
    dishes: Dish[],
    date_served: string
}

export interface MenuForToday {
    id?: any,
    menu: any[],
    date_served: string,
}