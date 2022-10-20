import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HelloWorld';
  imgUrl = "../assets/BLlogo.jpg";
  url = "https://www.bridgelabz.com/";
  userName = "";

  ngOnInit() : void{
    this.title = "Hello World From BridgeLabz";
  }

  onClick($event: any){
    console.log("logo was been Clicked",$event);
    window.open(this.url,"_blank")
  }
}
