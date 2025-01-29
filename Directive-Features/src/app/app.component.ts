import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { courses } from '../db-data';
import { CourseCardComponent } from './course-card/course-card.component';
import { CourseImageComponent } from './course-image/course-image.component';
import { NgIf } from '@angular/common';
import { Course } from '../model/Course';
import { HighlightedDirective } from './directives/highlighted.directive';
import { NgxUnlessDirective } from './directives/ngx-unless.directive';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [CourseCardComponent,CourseImageComponent,NgIf,HighlightedDirective,NgxUnlessDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit{
 
  title = 'Directive-Features';

  // courseData=courses;
  courseData!:Course[];


constructor(private http:HttpClient){}
  

ngOnInit(){

const params=new HttpParams()
.set("page","1")
 .set("limit","10");

  this.http.get<Course[]>('http://localhost:8282/courseapi/courses',{params}).subscribe(
    val=>this.courseData=courses //('values from backend API:',val)
  )}











  viewedCourse: Course={};




  
  onClickCourseCard(courseDetail:Course){
    // console.log(coursedetail)
    this.viewedCourse=courseDetail;
    // console.log('card:',this.card1.coursedetail.description);
    // console.log('card:',this.card2.coursedetail.description);
    // console.log('containerDiv:',this.containerDiv);

  }

// @ViewChild(HighlightedDirective)
// highlighted!:HighlightedDirective;

@ViewChild(CourseCardComponent, {read: HighlightedDirective})
  highlighted!: HighlightedDirective;


ngAfterViewInit(): void {
  console.log(this.highlighted)
}


  onToggle(Highlighted:boolean){
    // console.log(Highlighted)


  }






}
