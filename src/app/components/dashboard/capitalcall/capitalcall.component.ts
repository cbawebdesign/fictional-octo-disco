// // 

// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-capitalcall',
//   templateUrl: './capitalcall.component.html',
//   styleUrls: ['./capitalcall.component.scss']
// })
// export class CapitalcallComponent implements OnInit {


//   constructor() { }

//   ngOnInit(): void {
//   }

// }



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
export interface CommentUser extends Comment { userId: string };

@Component({
  selector: 'app-capitalcall',
  templateUrl: './capitalcall.component.html',
  styleUrls: ['./capitalcall.component.scss']
})
export class CapitalcallComponent  {
  private postsCollection: AngularFirestoreCollection<PostId>;
  posts: Observable<PostId[]>;
  currentUser: User;
  public _isLoggedIn: boolean;
  email = '';
  authService: any;
  displayName: string;


  constructor(public afs: AngularFirestore, public afAuth: AngularFireAuth) {
    this.afAuth.auth.onAuthStateChanged(user => {
      if (user) {
        // show email in welcome message
        this.email = user.email;
        this.displayName = user.displayName;
                  console.log(user.displayName);

        // call method that selects all items when user is authenticated
      }
    });
  }
}
    // this.postsCollection = this.afs.collection<Post>('posts');
    // this.comments = this.commentsCollection.valueChanges();
  



  

       /* Will figure this out after I get users to add their ids to comments they make */
    /* Step 1: Check if users are logged in or not and retrieve data from that user */
    // firebase.auth().onAuthStateChanged((user) => {
    //    if (user !== null) {
    //       console.log(user);
    //       this.currentUser = {email: user.email,
    //         displayName: user.displayName,
    //         uid: user.uid,
    //         photoURL: user.photoURL || 'assets/dashboeard/boy-2.png',
    //         emailVerified: user.emailVerified};

    //     this.currentUser = this.authService.getCurrentUser(user);

    //     /* Toogle boolean based on whether user is present or not */
    //      this._isLoggedIn = true; 
        
    //     return;
    //    } else {
    //      this._isLoggedIn = false;
    //      // console.log('not currently signed in!');
    //    }
    //  })

    // console.log(this.db.getComments())
//     // this.commentsCollection = afs.collection<Comment>('comments')
//     // this.commentsCollection.orderBy("name").limit(3);
    
//     this.posts = this.afs.collection<Post>('posts').snapshotChanges().pipe(
//       map(actions => actions.map(a => {
//         const data = a.payload.doc.data() as Post;
//         const id = a.payload.doc.id;
//         const edit = false;//Used to create a status for whether the item is being edited that isn't stored on the database.
//         return { id, edit, ...data };
//       }))
//     );
    
//   }
// }
    /* Create a way to add edit boolean for comment items */
    
    
//     // this.comments.subscribe(data => console.log(data));
//   }

    
  


//   addPost(e) {
//     /* This is just to take the place of the user name which might have to be set up after the account is created */
//     let userName = this.currentUser.email.substring(0,5);
//     console.log(userName);
//     /* Get date the item was created */
//     /* Solution https://stackoverflow.com/questions/12409299/how-to-get-current-formatted-date-dd-mm-yyyy-in-javascript-and-append-it-to-an-i*/

//     const today = new Date();
//     let dd = today.getDate();
//     let mm = today.getMonth() + 1;
//     let yyyy = today.getFullYear();
//     let hour = today.getUTCHours();
//     let minutes = today.getUTCMinutes().toString();
//     let timeOfDay;

//     if (dd < 10) {
//       dd = 0 + dd;
//     } 

//     if (mm < 10) {
//       mm = 0 + mm;
//     } 
    
//     if (today.getUTCMinutes() < 10) {
//       minutes = "0" + minutes;
//     }

//     if (hour < 12) {
//       timeOfDay = "AM";
//     } else {
//       timeOfDay = "PM";
//     }

//     let currentDate = `${mm}/${dd}/${yyyy} at ${hour}:${minutes} ${timeOfDay} UTC`;//stores it in month/day/year format

//     let post: Post = { post: e.target.value, userId: this.currentUser.id, name: userName, date: currentDate, complete: false }; 
//     this.postsCollection.add(post);
//     // this.comments.subscribe(data => console.log(data));
//     e.target.value = "";
//   
