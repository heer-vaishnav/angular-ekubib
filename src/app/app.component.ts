import { Component, OnInit,OnChanges } from "@angular/core";
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit,OnChanges{

  constructor(){
    console.log("constructor called!!");
  }
  ngOnInit()
  {
    console.log("OnInit called!!");
  }
  ngOnChanges()
  {
    console.log("OnChanges called!!");
  }
  ngAfterViewInit()
  {
    console.log("AfterViewInit called!!");
  }
  ngAfterViewChecked()
  {
    console.log("AfterViewChecked called!!");
  }
  ngOnDestroy()
  {
    console.log("OnDestroy called!!");
  }
}