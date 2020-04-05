import { Component, OnInit } from '@angular/core'
import { CommentService } from './comments.service';


@Component({
  selector: 'comments',
  templateUrl: './comments.component.html'
})

export class CommentsComponent implements OnInit {
  comments: any[];

  constructor(private commentService: CommentService) {}

  ngOnInit() {
    this.comments = this.commentService.getComments();
  }

  
}