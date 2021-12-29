import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}
  info=[
    {
      country:"china",
      url:"https://en.wikipedia.org/wiki/China"
    },
    {
      country:"india",
      url:"https://en.wikipedia.org/wiki/India"
    },
    {
      country:"japan",
      url:"https://en.wikipedia.org/wiki/Japan"
    },
    {
      country:"indonesia",
      url:"https://en.wikipedia.org/wiki/indonesia"
    },
    {
      country:"pakistan",
      url:"https://en.wikipedia.org/wiki/pakistan"
    },
    {
      country:"uae",
      url:"https://en.wikipedia.org/wiki/United_Arab_Emirates"
    }
  ]

  click(data:any){
  // window.open("https://en.wikipedia.org/wiki/China");
  console.log(data);
  
    this.info.forEach((val)=>{
console.log(val);

      if (val.country==data) {
        window.open(val.url);
      }
    })
  }


}
