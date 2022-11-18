import { Injectable } from '@angular/core';

export interface BadgeItem {
    type: string;
    value: string;
}
export interface Saperator {
    name: string;
    type?: string;
}
export interface SubChildren {
    state: string;
    name: string;
    type?: string;
}
export interface ChildrenItems {
    state: string;
    name: string;
    type?: string;
    child?: SubChildren[];
}

export interface Menu {
    state: string;
    name: string;
    type: string;
    icon: string;
    badge?: BadgeItem[];
    saperator?: Saperator[];
    children?: ChildrenItems[];
}

const MENUITEMS = [
    {
        state: 'dashboard',
        name: 'Dashboard',
        type: 'link',
        icon: 'dashboard',
    },
    {
        state: 'dishes',
        name: 'Dishes',
        type: 'link',
        icon: 'restaurant_menu',
    },
    {
        state: 'users',
        name: 'Users',
        type: 'link',
        icon: 'people',
    },
    {
        state: 'orders',
        name: 'Orders',
        type: 'link',
        icon: 'receipt',
    },
    {
        state: 'report',
        name: 'Reports',
        type: 'sub',
        icon: 'event_note',
        badge: [{ type: 'red', value: '6' }],
        children: [
            { state: 'badge', name: 'Badge', type: 'link' },
            { state: 'button', name: 'Buttons', type: 'link' },
            { state: 'cards', name: 'Cards', type: 'link' },
            { state: 'grid', name: 'Grid List', type: 'link' },
            { state: 'lists', name: 'Lists', type: 'link' },
            { state: 'menu', name: 'Menu', type: 'link' },
        ]
    },
];

@Injectable()
export class MenuItems {
    getMenuitem(): Menu[] {
        return MENUITEMS;
    }
}
