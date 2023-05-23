import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { Post } from 'src/app/components/home-page/model/post';


@Injectable({
  providedIn: 'root',
})
export class RedditService {
  constructor(private http: HttpClient) {}
  getRedditPosts(argument: string): Observable<Post[]> {
    return this.http
      .get<any>('https://www.reddit.com/r/' + argument + '/hot.json?limit=100').pipe(
        // map((obj) => {
        //   const data = obj.data;
        //   const children = data.children;
        //   const childrenData = children.map((child:any) => child.data);
        //   return childrenData;
        // })
        // map(obj => this.parseData(obj))
        tap((obj) => console.log('sono dentro il primo tap', obj)),
        map((obj) => obj.data),
        tap((data) => console.log('sono dentro il secondo tap', data)),
        map((data) => data.children),
        tap((children) => console.log('sono dentro il terzo tap', children)),
        map((children)=> children.map((child: any) => child.data)),
        tap((childrenData) => console.log('sono dentro il quarto tap', childrenData)),
      );
  }

  // parseData(obj:any){
  //   const data = obj.data;
  //   const children = data.children;
  //   const childrenData = children.map((child: any) => child.data);
  //   return childrenData;
  // }
}



