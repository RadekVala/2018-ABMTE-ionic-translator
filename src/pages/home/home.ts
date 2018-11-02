import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TranslationProvider } from '../../providers/translation/translation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private userInput:string;
  public result:string;
  public matches: Array<any>;

  constructor(
    public navCtrl: NavController,
    private translationProvider: TranslationProvider
    ) {

  }

  public btnTranslateClicked(userInput:string): void{
    //console.log(userInput);
    this.userInput = userInput;

    this.translationProvider.getTranslation(userInput).subscribe(
      (response) => {
        // API response event handler
        console.log(response);
        this.result = response.responseData.translatedText;
        this.matches = response.matches;
      }
    );
  }

}
