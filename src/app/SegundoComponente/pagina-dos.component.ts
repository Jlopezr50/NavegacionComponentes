import { Component, OnInit } from "@angular/core";
import {RouterExtensions} from "@nativescript/angular";

@Component({
  moduleId: module.id,
  selector: "pagina-dos",
  templateUrl: 'pagina-dos.component.html'
})

export class paginaDosComponent implements OnInit{
  constructor(
      private router: RouterExtensions )
  {  }

  ngOnInit() {

    public onBack(){
      this.router.back();
    }
  }
}
