import { Component } from '@angular/core'
import { NativeAudio } from '@ionic-native/native-audio';
import { NavController, NavParams, ActionSheetController} from 'ionic-angular'

@Component({
  selector: 'page-test',
  templateUrl: 'test.html'
})
export class TestPage {

  constructor(
      public navCtrl: NavController,
      public actionSheetCtrl: ActionSheetController,
      private nativeAudio: NativeAudio,
      public navParams: NavParams) {
  }
  playmusic($event){
    console.log($event)
    // let audio = document.getElementById('music')
    // console.dir(audio)
    // audio.play()
    // console.dir(audio)
    // if(audio!==null){             
    //   //检测播放是否已暂停.audio.paused 在播放器播放时返回false.
    //    alert(audio.paused)
    // if(audio.paused)                     {                 
    //     audio.play()//audio.play()// 这个就是播放  
    // }else{
    //  audio.pause()// 这个就是暂停
    // }
   // } 
  }
  playnative($event){
    const path = "../assets/data/wei.mp3"
    this.nativeAudio.preloadSimple('uniqueId1', path).then(this.onSuccess, this.onError);
    this.nativeAudio.play('uniqueId1', () => console.log('uniqueId1 is done playing'));
  }
  onSuccess(){
    console.log('success')
  }
  onError(e){
    console.log(e)
  }
}
