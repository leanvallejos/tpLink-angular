import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Promocion } from '../entities/promocion';

@Component({
  selector: 'app-promocion',
  templateUrl: './promocion.component.html',
  styleUrls: ['./promocion.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PromocionComponent implements OnInit {

  @Input()
  promocion: Promocion | null | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
