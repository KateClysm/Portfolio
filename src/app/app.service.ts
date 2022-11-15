import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AppService {
  constructor() {}

  private bgInit =
    '\src\assets\images\cozydesk.jpg';

  bgPath: BehaviorSubject<string> = new BehaviorSubject(this.bgInit);
}
