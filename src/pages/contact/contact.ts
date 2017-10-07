import { Component } from '@angular/core';
import { PopoverController } from 'ionic-angular';
@Component({
    selector : 'page-contact',
    templateUrl : 'contact.html'
})

export class ContactPage {
    contactList:any = 'vipList';
    vipForm:any = {
        'first':'',
        'last':'',
        'phone':'',
        'email':'',
        'street':'',
        'city':'',
        'postal':'',
        'province':'',
        'dob':'',
        'anniversary':''
    }
    constructor(private popOver : PopoverController){}
    
    popOverPresent(myEvent){
        let popOver = this.popOver.create(PopOverPage);
        popOver.present({
            ev:myEvent
        });
    }
    submitForm(){
        console.log(this.vipForm);
    }
}
@Component({
    template:`
        <p style="padding:10px;">
            Please take a moment to fill out our VIP Newsletter Member form below. VIP Newsletter Members receive access to a wide range of exclusive benefits which include automatic entry into all of our contests, compliments from Calao on your birthday and/or anniversary, invitations to cocktail evenings, periodical newsletters and other special promotions from Calao. Please note that your privacy is important to us and your information will not be passed on to any third parties. View our Privacy Policy.
        </p>
        `
})
export class PopOverPage{
    constructor(){}
}