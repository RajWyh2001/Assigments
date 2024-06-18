import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  Persons:any[] =[
    {
      "Fname":"Rajesh",
      "Lname":"Randive" 
    },
    {
      "Fname":"Pranay",
      "Lname":"kadam" 
    }
  ]
  Persons2:any={Fname:'',Lname:''};
  filterText:any='';
  AddnewItem() :void{
    console.log(this.Persons2)
    console.log(this.Persons);
    this.Persons.push(this.Persons2);
    this.Persons2={};
    console.log(this.Persons);
  }
  OnSortFname():void{
    this.Persons.sort((a,b)=>{
      var n1=a.Fname.toLowerCase();
      var n2=b.Fname.toLowerCase();
      console.log(n1);
      console.log(n2);
      if(n1<n2)
       return -1
      else if(n1>n2)
       return 1
      else
       return 0
  });
  }

  
  OnSortLname():void{
    this.Persons.sort((a,b)=>{
      var n1=a.Fname.toLowerCase();
      var n2=b.Fname.toLowerCase();
      console.log(n1);
      console.log(n2);
      if(n1<n2)
       return 1
      else if(n1>n2)
       return -1
      else
       return 0
  });
  }
  RemoveItem(a:number):void{
    this.Persons.splice(a,1);
  }
  filter(){

  }
  

  
}
