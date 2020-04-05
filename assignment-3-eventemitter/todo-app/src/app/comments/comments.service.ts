import { Injectable } from '@angular/core'
import {COMMENTTYPE, COMMENT} from '../mock/comment.mock';

@Injectable()
export class CommentService {

  constructor() { }

  getComments(): Array<COMMENTTYPE> {
    return COMMENT;
  }

}