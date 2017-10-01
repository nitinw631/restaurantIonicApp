import { Component } from '@angular/core';

@Component({
    selector:'page-menu',
    templateUrl:'menu.html'
})
export class MenuPage {
    menuList1:any = [
    {
        'photo':'assets/img/gallery/1.jpg',
        'title':'Chicken Kabab',
        'price':'7.50',
        'description':'Minced chicken with marinated with traditional spices prepared in the Tandoor'
    },
    {
        'photo':'assets/img/gallery/2.jpg',
        'title':'Beef Kabab',
        'price':'7.50',
        'description':'Minced beef with marinated with traditional spices prepared in the Tandoor'
    },
    {
        'photo':'assets/img/gallery/2.jpg',
        'title':'Calimari Pakoras',
        'price':'9.50',
        'description':'Deep fried Calimari in traditional batter'
    },
    {
        'photo':'assets/img/gallery/2.jpg',
        'title':'Punjabi Fish Pakoras',
        'price':'8.50',
        'description':'Deep fried Fish in traditional batter'
    },
    {
        'photo':'assets/img/gallery/2.jpg',
        'title':'Paneer Tikka',
        'price':'9.50',
        'description':'Marinated cubes of Paneer (Indian Cheese) prepared in the Tandoor'
    },
    {
        'photo':'assets/img/gallery/2.jpg',
        'title':'Chicken Tikka',
        'price':'9.50',
        'description':'Marinated cubes of Chicken prepared in the Tandoor'
    },
    {
        'photo':'assets/img/gallery/2.jpg',
        'title':'Chicken Pakora',
        'price':'7.50',
        'description':'Deep fried Chicken in traditional batter'
    },
    {
        'photo':'assets/img/gallery/2.jpg',
        'title':'Paneer Pakora',
        'price':'7.00',
        'description':'Deep fried Indian Cheese (Feta) in traditional batter'
    },
    {
        'photo':'assets/img/gallery/2.jpg',
        'title':'Vegetable Pakora',
        'price':'3.50',
        'description':'Deep fried vegetables in traditional batter (6 pieces)'
    },
    {
        'photo':'assets/img/gallery/2.jpg',
        'title':'Vegetable Pakora',
        'price':'4.50',
        'description':'Deep fried vegetables in traditional batter (9 pieces)'
    },
    {
        'photo':'assets/img/gallery/2.jpg',
        'title':'Vegetable Samosas',
        'price':'2.50',
        'description':'Traditional Indian stuffed snack with vegetables & sauce (2 pieces)'
    },
    {
        'photo':'assets/img/gallery/2.jpg',
        'title':'Vegetable Samosas',
        'price':'5.00',
        'description':'Traditional Indian stuffed snack with chicken & sauce (2 pieces)'
    }
    ]
    constructor(){}
}