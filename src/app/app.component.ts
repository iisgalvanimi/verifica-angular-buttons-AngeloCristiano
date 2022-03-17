import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Empty-Project';

  list: string[] = []
  testo1:string= 'Button01';
  testo2:string= 'Button02';
  testo3:string= 'Button03';
  testo4:string= 'Button04';

  onClick1(){
    this.list.push(this.testo1)
  }

  onClick2(){
    this.list.push(this.testo2)
  }

  onClick3(){
    this.list.push(this.testo3)
  }

  onClick4(){
    this.list.push(this.testo4)
  }
  
}
