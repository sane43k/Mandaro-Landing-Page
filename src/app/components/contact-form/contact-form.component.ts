import { Component, OnDestroy, OnInit } from '@angular/core';
import { SimpleInputComponent } from "../ui-kit/form-controls/simple-input/simple-input.component";
import { CheckboxComponent } from '../ui-kit/form-controls/checkbox/checkbox.component';
import { RedTagComponent } from '../ui-kit/red-tag/red-tag.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Subscription } from 'rxjs';
import { WindowService } from '../../services/window.service';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [
    SimpleInputComponent,
    CheckboxComponent,
    RedTagComponent,
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent implements OnDestroy, OnInit {
  form: FormGroup;
  private valueChangesSubscription: Subscription;
  private x: number = 60;

  private correctAnswer: number | null = null;
  expression: string = '';

  _currentStep: number = 1;

  set currentStep(value: number) {
    this._currentStep = value;
  }

  get currentStep(): number {
    return this._currentStep;
  }

  _isStepInvalid: boolean = true;

  set isStepInvalid(value: boolean) {
    this._isStepInvalid = value;
  }

  get isStepInvalid(): boolean {
    return this._isStepInvalid;
  }

  constructor(private fb: FormBuilder, private windowService: WindowService) {
    this.form = this.fb.group({
      step1: this.fb.group({
        name: ['', Validators.required],
        tel: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]]
      }),
      step2: this.fb.group({
        service: ['', Validators.required]
      }),
      step3: this.fb.group({
        comment: [''],
        agreement: [''],
        check: ['', [Validators.required, this.checkValidator.bind(this)]]
      })
    });

    this.valueChangesSubscription = this.form.valueChanges.subscribe({
      next: () => this.checkValidation()
    });
  }

  ngOnInit(): void {
    const win = this.windowService.nativeWindow;
    if (win && win!.innerWidth > 968) {
      this.x = 60;
    } else {
      this.x = 20;
    }
  }

  checkValidation() {
    const stepKey = `step${this.currentStep}`;
    this.isStepInvalid = this.form.get(stepKey)?.invalid || false;
  }

  onChangeStep(key: string) {
    switch (key) {
      case 'next':
        if (this.currentStep < 3) {
          this.currentStep === 2 ? this.generateExpression() : null;
          this.moveMail('next');
          this.currentStep++;
        }
        break;
      case 'prev':
        this.moveMail('prev');
        this.currentStep--;
        break;
    }
    this.checkValidation();
  }

  onSubmit() {
    this.currentStep = 4;
    this.moveMail('next');
    if (this.form.valid) {
      console.log(this.form.value)
    }
    setTimeout(() => {
      this.form.reset();
      this.currentStep = 1;
      this.moveMail('prev');
      this.checkValidation();
    }, 3000);
  }

  generateExpression(): void {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);

    this.expression = `${num1} + ${num2}`;
    this.correctAnswer = num1 + num2;
  }

  checkValidator(control: any) {
    if (control.value !== this.correctAnswer?.toString()) {
      return { incorrect: true }; // Если ответ неверный, возвращаем ошибку
    }
    return null; // Если ответ правильный, валидатор проходит
  }

  moveMail(key: string) {
    const mailIcon = document.querySelector('.mail-icon') as HTMLElement;
    const win = this.windowService.nativeWindow;
    const isWideScreen = win!.innerWidth > 968;
    const step = isWideScreen ? 100 : 60;
  
    if (key === 'next') {
      this.x += step;
    } else if (key === 'prev') {
      this.x -= step;  
      if (this.currentStep === 1) {
        this.x = isWideScreen ? 60 : 20;
      }
    }
  
    mailIcon.style.transform = isWideScreen 
      ? `translateX(${this.x}px)` 
      : `translate(${this.x}px, 30px)`;
  }

  ngOnDestroy(): void {
    if (this.valueChangesSubscription) {
      this.valueChangesSubscription.unsubscribe();
    }
  }
}