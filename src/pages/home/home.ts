import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  menuList:any = "about";
  galleryList:any = [
    {'photo':'assets/img/gallery/1.jpg'},
    {'photo':'assets/img/gallery/2.jpg'},
    {'photo':'assets/img/gallery/3.jpg'},
    {'photo':'assets/img/gallery/4.jpg'},
    {'photo':'assets/img/gallery/5.jpg'},
    {'photo':'assets/img/gallery/6.jpg'},
    {'photo':'assets/img/gallery/7.jpg'},
    {'photo':'assets/img/gallery/8.jpg'},
    {'photo':'assets/img/gallery/9.jpg'},
    {'photo':'assets/img/gallery/10.jpg'},
    ]
  constructor(public navCtrl: NavController) {
    console.log(this.galleryList);
  }

}
