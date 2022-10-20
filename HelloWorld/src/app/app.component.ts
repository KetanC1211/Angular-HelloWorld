import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HelloWorld';
  imgUrl = "../assets/BLlogo.jpg";

  ngOnInit() : void{
    this.title = "Hello World From BridgeLabz";
  }
}
