import { Component, OnInit } from '@angular/core';
import { ProgrammesService } from './programmes.service';

@Component({
  selector: 'app-programmes',
  templateUrl: './programmes.component.html',
  styleUrls: ['./programmes.component.scss']
})
export class ProgrammesComponent implements OnInit {

  programmes: any;
  cardWidth: string;

  constructor(private programmesService: ProgrammesService) { }

  ngOnInit() {
    this.programmes = this.programmesService.getProgrammeDetails();
    this.cardWidth = 100 / this.programmes.length + '';
  }

}
