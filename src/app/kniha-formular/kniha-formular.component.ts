import { Component, OnInit } from '@angular/core';
import {Kniha} from "../models/kniha.model";

@Component({
  selector: 'app-kniha-formular',
  templateUrl: './kniha-formular.component.html',
  styleUrls: ['./kniha-formular.component.css']
})
export class KnihaFormularComponent {

  kniha: Kniha = {nazov: 'aaa', autor: 'bbb'}

  constructor() { }

}