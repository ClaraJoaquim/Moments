import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comment } from '../Comments';
import { Response } from '../Response';

@Injectable({
  providedIn: 'root'
})

export class CommentService {

  comment?: Comment;

  private baseApiUrl = "http://localhost:3333/";
  private ApiUrl = `${this.baseApiUrl}api/moments`;
  

  constructor(private http:HttpClient) { }

  createComment(data: Comment): Observable<Response<Comment>>  {
    const url = `${this.ApiUrl}/${data.momentId}/comments`
    return this.http.post<Response<Comment>>(url, data);
  }

  remove(momentId: number, commentId: number): Observable<void> {
    const url = `${this.ApiUrl}/${momentId}/comments`;
    return this.http.delete<void>(url, {
      body: { commentId: commentId },
    });
  }
  
}
