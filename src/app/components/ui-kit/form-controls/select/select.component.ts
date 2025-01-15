import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [
    NgFor,
    NgClass
  ],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true
    }
  ]
})

export class SelectComponent implements ControlValueAccessor {
  @Input() options: { value: any; label: string }[] = [];
  @Input() placeholder: string = '';
  @Input() name: string = '';

  selectedOption: { value: any; label: string } | null = null;
  isOpen: boolean = false;

  onChange: (value: any) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(value: any): void {
    this.selectedOption = this.options.find(option => option.value === value) || null;
  }
  registerOnChange(fn: (value: any) => void): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  toggleDropdown(): void {
    this.isOpen = !this.isOpen;
  }

  selectOption(option: { value: any; label: string }, event: MouseEvent): void {
    event.stopPropagation();
    this.selectedOption = option;
    this.isOpen = false;
    this.onChange(option.value);
    this.onTouched();
  }
}