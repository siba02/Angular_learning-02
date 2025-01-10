import { AfterContentInit, AfterViewInit, Component, ContentChild, ContentChildren, contentChildren, ElementRef, EventEmitter, Input, Output, QueryList, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
//import { Course } from '../model/Course';
import { NgClass, NgIf, NgTemplateOutlet } from '@angular/common';
import { CourseImageComponent } from '../course-image/course-image.component';
import { Course } from '../../model/Course';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [NgIf, NgClass, NgTemplateOutlet],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css',
})
export class CourseCardComponent implements AfterViewInit, AfterContentInit {

  @Input({
    required: true
  }) courseDetail!: Course;

 // @Input({required: true}) index!: number;

 @Input()
 noImageTpl!: TemplateRef<any>;

  @Output('courseSelected') 
  eventEmitter = new EventEmitter<Course>();

  // @ViewChild('courseImage')
  // image!: ElementRef;

  // @ContentChild('container')
  // image!: ElementRef;

  // @ContentChild('IMMMG')
  // images!: CourseImageComponent;

  // @ContentChild('IMMMG2')
  // images2!: CourseImageComponent;

  // @ContentChild('IMMMG3')
  // images3!: CourseImageComponent;

  // @ContentChildren(CourseImageComponent, {read: ElementRef})
  // images4!: QueryList<ElementRef>;


ngAfterViewInit(){
	// console.log('Image-> ', this.images);
  // console.log('Image2-> ', this.images2);
  // console.log('Image3-> ', this.images3);
  // console.log('Image4-> ', this.images4);
}

ngAfterContentInit(): void {
  // console.log('Image-> ', this.images);
  // console.log('Image2-> ', this.images2);
  // console.log('Image3-> ', this.images3);
  // console.log('Image4-> ', this.images4);
}


constructor(){

}
  

ngOnInit(){

}

onCourseViewed(){
  console.log("course viwed...")
  this.eventEmitter.emit(this.courseDetail)
}

isImageVisible(){
  return this.courseDetail.iconUrl;
}

cardClasses() {
  if (this.courseDetail.category == 'BEGINNER') {
    //return ['beginner'];
    //return 'beginner';
    return { 'beginner': false }
  } else {
    return ''
  }
}

}
