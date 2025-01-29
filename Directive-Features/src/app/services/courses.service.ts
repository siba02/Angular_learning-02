import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '../../model/Course';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http:HttpClient) { 
    console.log("CoursesService is working")
  }


  loadcourses(): Observable<Course[]>{
  const params=new HttpParams()
        .set("page","1")
        .set("limit","10");

  // this.http.get<Course[]>('http://localhost:8282/courseapi/courses',{params}).subscribe(
  //   val=>this.courseData=courses //('values from backend API:',val)
  // )

  // this.courseData$=this.http.get<Course[]>('http://localhost:8282/courseapi/courses',{params});
  // console.log(this.courseService)

  return this.http.get<Course[]>('http://localhost:8282/courseapi/courses',{params});

  }
}
