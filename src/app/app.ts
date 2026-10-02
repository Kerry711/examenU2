import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';

import { Main } from './components/main/main';
import { Aside } from './components/aside/aside';

@Component({
  imports: [RouterOutlet, Header, Footer, Main, Aside],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('examenU2');
}
