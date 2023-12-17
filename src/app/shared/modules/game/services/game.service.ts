import {Injectable} from "@angular/core";

@Injectable()
export class GameService {

  private ngxSnake: string = 'ngx_snake';

  public store(score: number) {
    localStorage.setItem(this.ngxSnake, JSON.stringify({ 'best_score': score }));
  }

  public retrieve() {
    let storage = this.parse();
    if (!storage) {
      this.store(0);
      storage = this.parse();
    }

    return storage.best_score;
  }

  private parse() {
    const item = localStorage.getItem(this.ngxSnake);
    if (item !== null) {
      return JSON.parse(item);
    } else {
      return this.ngxSnake;
    }
  }
}
