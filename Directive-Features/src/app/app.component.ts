import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { courses } from '../db-data';
import { CourseCardComponent } from './course-card/course-card.component';
import { CourseImageComponent } from './course-image/course-image.component';
import { NgIf } from '@angular/common';
import { Course } from '../model/Course';
import { HighlightedDirective } from './directives/highlighted.directive';

@Component({
  selector: 'app-root',
  imports: [CourseCardComponent,CourseImageComponent,NgIf,HighlightedDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Directive-Features';

  courseData=courses;

  viewedCourse: Course={};




  
  onClickCourseCard(courseDetail:Course){
    // console.log(coursedetail)
    this.viewedCourse=courseDetail;
    // console.log('card:',this.card1.coursedetail.description);
    // console.log('card:',this.card2.coursedetail.description);
    // console.log('containerDiv:',this.containerDiv);

  }

}
