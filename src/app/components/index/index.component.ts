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
  gridByBreakpoint = {
    xl: 8,
    lg: 6,
    md: 4,
    sm: 2,
    xs: 1
  }
  constructor(private observableMedia: MediaObserver,public service:SongService,
    private _http:HttpClient
    ) {}
  handleSearch(value:string){
    this.service.search(value)
      .subscribe((res) => {
        this.songs2 = JSON.parse(JSON.stringify(res)).results;
      });
      //console.log('songs2'+this.songs2)
  }
  /*
  ngAfterContentInit() {
    this.observableMedia.asObservable().subscribe((change: MediaChange) => {
      this.grid.cols = this.gridByBreakpoint[change.mqAlias];
    });
  }*/
  ngOnInit(): void {
    //this._http.get('https://jsonplaceholder.typicode.com/users').subscribe((data:any) => this.songs=data)
  }
 /* onSubmit(form:NgForm){
    
    this.service.getSongs(form.value).subscribe(data =>{
      this.historiasHVT = data;
      console.log("thos is"+data + "o"+ form.value)
      if(this.historiasHVT[0]!=null){
       this.existelist=true;
     }
     
  
    })
  
  
  }
*/
}
