import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import Post from '../../../models/post.model';
import AppState from '../../../models/app-state.model';
import { GetPostsAction } from '../../../actions/posts.actions';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts$!: Observable<Array<any>>;
  loading$!: Observable<Boolean>;
  error$!: Observable<Error>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.posts$ = this.store.select(store => store.post.posts);
    this.posts$.subscribe(res=>{
      console.log('posts1',res);
    })
    
    this.error$ = this.store.select(store => store.post.error);
    this.store.dispatch(new GetPostsAction());
    this.posts$.subscribe(res=>{
      console.log('posts2',res);
    })
  }

}
