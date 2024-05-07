import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataSourceExampleComponent } from './data-source-example/data-source-example.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DataSourceExampleComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ng-select-height-example';
}
