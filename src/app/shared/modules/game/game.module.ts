import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import { GameComponent } from './components/game/game.component';
import {GameService} from "./services/game.service";

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    GameComponent

  ],
  declarations: [
    GameComponent
  ],
  providers: [
    GameService
  ]
})

export class GameModule{}

