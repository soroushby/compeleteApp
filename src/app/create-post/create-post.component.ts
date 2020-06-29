import { post } from './../models/post.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss'],
})
export class CreatePostComponent implements OnInit {
  postForm: any;
  form;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.postForm = this.fb.group({
      name: [''],
      lastName: [''],
    });
  }

  save() {
    const form = new post(
      this.postForm.get('name').value,
      this.postForm.get('lastname').value
    );
  }
}
