import { Component, OnInit } from '@angular/core';
import { Konyv } from './konyv';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  ngOnInit(): void {
    this.import();
  }

  konyv: Array<Konyv> = new Array<Konyv>();
  actualKonyv: Konyv = new Konyv();

  save(){
    let copy: Konyv = this.actualKonyv.getCopy();
    this.konyv.push(copy);
    this.actualKonyv = new Konyv();
    this.export();
  }

  export(){
    localStorage.setItem('konyv', JSON.stringify(this.konyv));
  }

  import(){
    this.konyv = JSON.parse(localStorage.getItem('konyv') as string);
  }
}

