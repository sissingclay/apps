import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-submit-interest',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './submit-interest.component.html',
  styleUrl: './submit-interest.component.scss',
})
export class SubmitInterestComponent {
  // Replace with your deployed Google Apps Script Web App URL.
  private readonly googleScriptUrl =
    'https://script.google.com/macros/s/REPLACE_WITH_WEB_APP_ID/exec';

  public isSubmitting = false;
  public submitError = '';
  public submitSuccess = false;

  private readonly http = inject(HttpClient);
  private readonly fb = inject(FormBuilder);
  private readonly route = inject(ActivatedRoute);

  public readonly interestForm = this.fb.nonNullable.group({
    fullName: ['', [Validators.required, Validators.minLength(2)]],
    emailAddress: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.pattern(/^[0-9+()\-\s]{7,20}$/)]],
    kidsDateOfBirth: ['', [Validators.required]],
  });

  submitInterest(): void {
    if (this.interestForm.invalid || this.isSubmitting) {
      this.interestForm.markAllAsTouched();
      return;
    }

    if (this.googleScriptUrl.includes('REPLACE_WITH_WEB_APP_ID')) {
      this.submitError =
        'Google endpoint is not configured yet. Add your Apps Script URL in submit-interest.component.ts.';
      return;
    }

    this.isSubmitting = true;
    this.submitError = '';
    this.submitSuccess = false;

    const payload = {
      ...this.interestForm.getRawValue(),
      under: this.route.parent?.parent?.snapshot.params['under'] ?? '',
      team: this.route.parent?.snapshot.params['team'] ?? '',
      submittedAt: new Date().toISOString(),
    };

    this.http.post(this.googleScriptUrl, payload).subscribe({
      next: () => {
        this.submitSuccess = true;
        this.interestForm.reset();
        this.isSubmitting = false;
      },
      error: () => {
        this.submitError = 'Unable to submit right now. Please try again later.';
        this.isSubmitting = false;
      },
    });
  }
}
