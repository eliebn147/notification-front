import {
  Component,
  inject,
  Injector,
  input,
  model,
  output,
} from '@angular/core';
import { InputGroupModule } from 'primeng/inputgroup';
import { NgClass } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { SafeHtml } from '@angular/platform-browser';
import { ButtonDirective } from 'primeng/button';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [InputGroupModule, NgClass, InputTextModule, FormsModule, ButtonDirective],
  templateUrl: './app-input.component.html',
  styleUrl: './app-input.component.scss',
  providers: [
  ],
})
export class AppInputComponent {
  private readonly injector = inject(Injector);

  value = model<string | number | SafeHtml>('');
  disabled = model(false);
  placeholder = input<string>('');
  maxLength = input<number>(50);
  icon = input<string>('');
  type = input<'number' | 'text'>('text');
  onClearClicked = output();
  onInputChange = output<Event>();
  onBlur = output<FocusEvent>();
  onKeyUp = output<KeyboardEvent>();

  protected clearClicked() {
    this.value.set('');
    this.onClearClicked.emit();
  }

  protected _onInputChange(event: Event) {
    this.onInputChange.emit(event);
  }
}
