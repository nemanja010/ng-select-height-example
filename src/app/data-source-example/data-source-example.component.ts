import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Person, DataService } from '../data.service';
import { NgSelectModule } from '@ng-select/ng-select';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-source-example',
  standalone: true,
  imports: [NgSelectModule, FormsModule, CommonModule],
  templateUrl: './data-source-example.component.html',
  styleUrl: './data-source-example.component.scss',
})
export class DataSourceExampleComponent implements OnInit {
  people$!: Observable<Person[]>;
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.people$ = this.dataService.getPeople();
  }
}
