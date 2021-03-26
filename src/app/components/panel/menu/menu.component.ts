import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  currentMenu="anasayfa"
  currentSubMenu="";
  constructor() { }

  ngOnInit(): void {
  }

  setMenuActive(item:string){
    this.currentMenu = item;
  }

  getMenuActive(item:string){
    if(item == this.currentMenu){
      if(item !="anasayfa"){
        return "nav-link submenu-toggle active"
      }
      return "nav-link active"
    }
    else{
      if(item !="anasayfa"){
        return "nav-link submenu-toggle"
      }
      return "nav-link"
    }
  }

  setSubMenuActive(item:string){
    this.currentSubMenu = item;
  }

  getSubMenuActive(item:string){
    if(item == this.currentSubMenu){
      
      return "submenu-link active"
    }
    else{
      
      return "submenu-link"
    }
  }

}
