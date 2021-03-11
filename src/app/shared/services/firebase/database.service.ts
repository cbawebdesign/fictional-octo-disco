import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Post { post: string[], name: string, userId: string, id: string}

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private postsCollection: AngularFirestoreCollection<any>;


  constructor(private afs: AngularFirestore) { }

  getComments(){
    console.log('Retrieving comments!');
    console.log(this.afs.collection<Post>('posts'))
    return this.afs.collection<Post>('posts').valueChanges()
    // this.commentsCollection.orderBy("name").limit(3);
    
  }

  getCommentIds(){
    return this.postsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Comment;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  updatePost(id, inputText) {
    // console.log(comment); 
    this.afs.collection('posts').doc(`${id}`).update({
      comment: `${inputText}`
    })
    .then(()=> {
      console.log('Comment successfully updated!');
    }).catch((error) => {
      console.log('Error writing document: ', error);
    });
  }

  completePost(post) {
    let completeFlag = !post.complete
    this.afs.collection('posts').doc(`${post.id}`).update({
      complete: completeFlag
    }).then(()=> {
      console.log('Comment successfully updated!');
    }).catch((error) => {
      console.log('Error writing document: ', error);
    });
  }
}
