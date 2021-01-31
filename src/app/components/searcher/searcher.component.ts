import { Component, OnInit,ViewChild ,Directive, Output, EventEmitter} from '@angular/core';
import{NgForm}from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {FormControl} from '@angular/forms';
import {debounceTime}from'rxjs/operators';
@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.css']
})
export class SearcherComponent implements OnInit {
  search = new FormControl('')
  constructor() { }
  ngOnInit(): void {
    this.search.valueChanges
    .pipe(
      debounceTime(300)
    )
    .subscribe(value=> this.searchEmitter.emit(value))
    console.log(this.searchEmitter)
  }
  @Output('search') searchEmitter = new EventEmitter<string>();
}
