
import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { DatabaseService } from 'src/app/shared/services/firebase/database.service';
import { AuthService, User } from 'src/app/shared/services/firebase/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Post { post: string; userId: string, name: string, date?: {}, edit?: boolean, complete?: boolean };
export interface PostId extends Post { id?: string };
// import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
// import { Observable } from 'rxjs';
// import { AngularFireAuth } from '@angular/fire/auth';
// import {q42020Item} from 'src/models/q42020-item';
// import { finalize, map } from 'rxjs/operators';
// import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-newsletter-q3',
  templateUrl: './newsletter-q3.component.html',
  styleUrls: ['./newsletter-q3.component.scss']
})
export class NewsletterQ3Component {

  // private postsCollection: AngularFirestoreCollection<PostId>;
  //   posts: Observable<PostId[]>;
    private postsCollection: AngularFirestoreCollection<PostId>;
  posts: Observable<PostId[]>;
    currentUser: User;
    email = '';

    public _isLoggedIn: boolean;
constructor(public afs: AngularFirestore, public afAuth: AngularFireAuth) {
  this.afAuth.auth.onAuthStateChanged(user => {
    if (user) {
      // show email in welcome message
      this.email = user.email;
      // call method that selects all items when user is authenticated
console.log(this.email)   
 }
  });
  this.postsCollection = this.afs.collection<Post>('posts');
    
  this.posts = this.afs.collection<Post>('posts').snapshotChanges().pipe(
    map(actions => actions.map(a => {
      const data = a.payload.doc.data() as Post;
      const id = a.payload.doc.id;
      const edit = false;//Used to create a status for whether the item is being edited that isn't stored on the database.
      return { id, edit, ...data };
    }))
  );
  
}
}
