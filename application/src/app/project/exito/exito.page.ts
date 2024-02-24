import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-exito',
  templateUrl: './exito.page.html',
  styleUrls: ['./exito.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ExitoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
