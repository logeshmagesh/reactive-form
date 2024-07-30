import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls:['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
userform:FormBuilder|any

val: { firstname: any; lastname: any; username: any; city:any; state:any; Zipcode:any }[] = [];
 
add:[]=[];
constructor(private fb:FormBuilder,private userdata:WeatherService){}
ngOnInit() {
    this.userform=this.fb.group({
      firstname:["",[Validators.required]],
      lastname:["",[Validators.required,Validators.minLength(6)]],
      username:["",[Validators.required,Validators.email]],
      city:[""],
      state:[""],
      Zipcode:[""],
      isagree:false
    })
}

get firstname(){
  return this.userform.get('firstname');
}
get lastname(){
  return this.userform.get('lastname');
}
get username(){
  return this.userform.get('username')
}
onSubmit(form:FormGroup){
  let firstname=this.userform.get('firstname').value;
  let lastname=this.userform.get('lastname').value;
  let username=this.userform.get('username').value;
  let city=this.userform.get('city').value;
  let state=this.userform.get('state').value;
  let Zipcode=this.userform.get('Zipcode').value

  this.val.push({
  firstname:firstname,
    lastname:lastname,
    username:username,
    city:city,
    state:state,
    Zipcode:Zipcode

  })
  form.reset();
}

update(){
 this.userdata.save(this.val)
 .subscribe(put=>{
  console.log(put)
 },
 (err)=>{
  console.log('error')
 })
}
}
