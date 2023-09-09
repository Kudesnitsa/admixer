import {Component, Inject, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";


import {FormBuilder, FormsModule, ReactiveFormsModule, UntypedFormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {AdvertiserModel} from "../features/advertisers/models";


@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './advertiser.component.html',
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  styleUrls: ['./advertiser.component.scss']
})
export class AdvertiserComponent implements OnInit {

  public advertiserForm: UntypedFormGroup = this.fb.group({
    name: ['', Validators.required],
    country: ['', [Validators.required, Validators.email]],
    advertiserId: ['', [Validators.required, Validators.email]],
    campaignCount: ['', [Validators.required, Validators.email]],
    impressions: ['', [Validators.required, Validators.email]],
    profit: ['', [Validators.required, Validators.email]],
  });

  constructor(@Inject(MAT_DIALOG_DATA) public data: AdvertiserModel,
              private fb: FormBuilder) {
    this.advertiserForm.patchValue(this.data);
  }

  public ngOnInit() {
  }
}
