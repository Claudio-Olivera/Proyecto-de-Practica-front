import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Educaciones, ONEComponent } from './one/one.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[AuthService]
})
export class AppComponent {

  
}
