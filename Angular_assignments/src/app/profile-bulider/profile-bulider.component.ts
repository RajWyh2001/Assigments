import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-bulider',
  templateUrl: './profile-bulider.component.html',
  styleUrls: ['./profile-bulider.component.css']
})
export class ProfileBuliderComponent {
  Persons2:any={Fname:'',Lname:'',Emailid:"",Mobno:"",Address:"",Gender:""};


  fnamechange(newObj: any){
    this.Persons2.Fname =newObj
  }
  Lnamechange(newObj: any){
    this.Persons2.Lname =newObj
  }
  Emialchange(newObj: any){
    this.Persons2.Emailid =newObj
  }
  Mobnochange(newObj: any){
    this.Persons2.Mobno =newObj
  }
  Addresschange(newObj: any){
    this.Persons2.Address =newObj
  }
  Genderchange(newObj: any){
    this.Persons2.Gender =newObj
  }
}

