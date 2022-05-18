import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '';
   name = "Adeshina"
   count =0;
   contain = ''
   submitValue = ''
   containForSubmit =''
   onClick (e : any){
    this.count= this.count+1;
    console.log(e)
   }

   onWritting(e : any){
    this.contain = e.target.value
   }
   onSubmit (){
this.submitValue = this.containForSubmit
   }
   onWrittingForSubmit (e : any){
    this.containForSubmit =e.target.value

   }
}
