import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '[app-filaheroes]',
  templateUrl: './filaheroes.component.html',
  styleUrls: ['./filaheroes.component.css']
})
export class FilaheroesComponent implements OnInit {
  @Input() objeto : object;
  constructor() { }

  ngOnInit() {
  }

}
