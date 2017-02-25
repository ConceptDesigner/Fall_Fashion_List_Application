import {Component} from '@angular/core';
import {NavController, AlertController} from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from 'angularfire2';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    books:FirebaseListObservable<any>;

    constructor(public navCtrl:NavController, public alertCtrl:AlertController, angFire:AngularFire) {
        this.books = angFire.database.list('/Books');
    }

    addBook():void {
        let prompt = this.alertCtrl.create({
            title: 'My Favorite Fall Trend',
            message: 'Give Your Trend a Nickname',
            inputs: [
                {
                    name: 'title',
                    placeholder: "Name of Trend"
                },
                {
                    name: 'author',
                    placeholder: "Who Should Wear it?"
                },
                {
                    name: 'image',
                    placeholder: "image URL"
                }
            ],
            buttons: [
                {
                    text: "Cancel",
                    handler: data => {
                        console.log('cancel clicked');

                    }
                },
                {
                    text: "Upload Trend",
                    handler: data => {
                        this.books.push({
                            title: data.title,
                            author: data.author,
                            image: data.image
                        })
                    }
                }
            ]
        });

        prompt.present();
    }

    removeBook(bookID):void {
        let prompt = this.alertCtrl.create({
            title: 'Delete Trend',
            buttons: [
                {
                    text: "Cancel",
                    handler: data => {
                        console.log('cancel clicked');

                    }
                },
                {
                    text: "Delete Trend",
                    handler: data => {
                        this.books.remove(bookID)
                    }
                }
            ]
        });

        prompt.present();
    }

    editBook(book):void {
        let prompt = this.alertCtrl.create({
            title: 'Edit Book',
            message: 'Edit the books title and author',
            inputs: [
                {
                    name: 'title',
                    placeholder: book.title
                },
                {
                    name: 'author',
                    placeholder: book.author
                }
            ],
            buttons: [
                {
                    text: "Cancel",
                    handler: data => {
                        console.log('cancel clicked');

                    }
                },
                {
                    text: "Save Book",
                    handler: data => {
                        let newTitle:String = book.title;
                        let newAuthor:String = book.author;

                        if (data.title != '') {
                            newTitle = data.title;
                        }
                        if (data.author != '') {
                            newAuthor = data.author;
                        }
                        this.books.update(book.$key, {
                            title: newTitle,
                            author: newAuthor
                        })
                    }

                }
            ]
        });

        prompt.present();
    }

}
