import { Component, OnInit,ViewChild ,Directive, Output, EventEmitter} from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import{NgForm}from '@angular/forms';
import{SongService}from 'src/app/services/song.service';
import { Song } from 'src/app/models/Song';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {FormControl, Validators} from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  
  //songs:Song[]=[];
  songs2:any;
  songs=[]
  existelist=false;
  //search = "";
  //girdlist:MatGridListModule;
  @ViewChild('grid') grid!: MatGridListModule;
  constructor(private observableMedia: MediaObserver,public service:SongService,
    private _http:HttpClient
    ) {}
  handleSearch(value:string){
    this.service.getSongs(value)
      .subscribe((res) => {
        this.songs2 = JSON.parse(JSON.stringify(res)).results;
      });
  }
  
  ngOnInit(): void {
    //this._http.get('https://jsonplaceholder.typicode.com/users').subscribe((data:any) => this.songs=data)
  }
 
}
