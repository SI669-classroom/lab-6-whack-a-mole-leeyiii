import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { DataProvider } from '../../provider/data/data';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the LeaderboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-leaderboard',
    templateUrl: 'leaderboard.html',
})
export class LeaderboardPage {

    score: number;
    scoreList: any[] = [];

<<<<<<< HEAD


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public dataService: DataProvider,
    public storage: Storage,
    public platform: Platform){
      this.score = this.navParams.get('score');
=======
    constructor(public navCtrl: NavController,
        public navParams: NavParams,
        public dataService: DataProvider,
        public storage: Storage,
        public platform: Platform) {
        this.score = this.navParams.get('score');
>>>>>>> 068595252ae9a756663f64c90ee0d292f528cad2
    }

    // ionViewDidLoad() {
    //     console.log('ionViewDidLoad LeaderboardPage');
    // Platform.ready isn't required in the new Ionic

<<<<<<< HEAD
  ngOnInit(){

    this.platform.ready().then(() => {  //this.platform.ready().then
        /*Storage get*/this.storage.get('leaderboard').then((result) => {
            let res;
            if(!result) {
            res = []

            } else {
              res = JSON.parse(result)
            }

            res.push({
              score: this.score,
              time: Date.now()

            })
=======
    ngOnInit() {
        this.platform.ready().then(() => {  //this.platform.ready().then
            this.storage.get('leaderboard').then((result) => {
                console.log(
                    'from storage got result', result
                );
                let res;
                if (!result) {
                    res = []
                } else {
                    res = JSON.parse(result)
                }

                res.push({
                    score: this.score,
                    time: Date.now()
                })
>>>>>>> 068595252ae9a756663f64c90ee0d292f528cad2

                console.log('after pushed new score, res is', res);

<<<<<<< HEAD
            this.scoreList = res.sort(function(a, b) {
            if(a.score > b.score) {
              return -1;
            } else {
              return 1;
            }
            //console.log(res);

          })
=======
                this.scoreList = res.sort(function (a, b) {
                    if (a.score > b.score) {
                        return -1;
                    } else {
                        return 1;
                    }
                })
>>>>>>> 068595252ae9a756663f64c90ee0d292f528cad2

                this.storage.set('leaderboard', JSON.stringify(res));
            })
        })
    }
}
