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

export interface MenuForToday {
    survey_date?: string,
    menu: any[],
}

export interface VotedDishes {
    survey_date?: string,
    voted_dishes: any[],
}







