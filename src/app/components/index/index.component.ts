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
  
  songs:Song[]=[];
  songs2:any;
  //songs=[]
  page = 0;
  size = 4;
  breakpoint: number = 4;
  length: number = 0;
  pageSize: number = 3;
  existelist=false;
  //girdlist:MatGridListModule;
  @ViewChild('grid') grid!: MatGridListModule;
  constructor(private observableMedia: MediaObserver,public service:SongService,
    private _http:HttpClient
    ) {}
  handleSearch(value:string){
    this.service.getSongs(value)
      .subscribe((res) => {
        this.songs = JSON.parse(JSON.stringify(res)).results;
      });
      this.songs.sort((a, b) => (a.trackName < b.trackName ? -1 : 1));
  } 
  
 
  ngOnInit(): void {
    this.getData({pageIndex: this.page, pageSize: this.size});
  }

  getData(obj:any) {
    let index=0,
        startingIndex=obj.pageIndex * obj.pageSize,
        endingIndex=startingIndex + obj.pageSize;

    this.songs = this.songs.filter(() => {
      index++;
      return (index > startingIndex && index <= endingIndex) ? true : false;
    });
  }
}
