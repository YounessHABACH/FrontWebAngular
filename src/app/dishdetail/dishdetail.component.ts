// import {Input} from '@angular/core';
import {Component, Inject, OnInit, ViewChild} from '@angular/core';
// import { trigger, state, style, animate, transition } from '@angular/animations';
import {Dish} from "../models/dish";
import {Comment} from "../models/comment";
import {ActivatedRoute, Params} from "@angular/router";
import {Location} from "@angular/common";
import {DishService} from "../services/dish.service";
import {switchMap} from "rxjs/operators";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {expand, flyInOut, visibility} from "../animations/app.animations";

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.css'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  },
  animations: [
    flyInOut(),
    visibility(),
    expand()
  ]
})

export class DishdetailComponent implements OnInit {

  // @Input()
  dish!: Dish;
  dishCopy!: Dish
  errMsg!: string;
  dishIds!: string[];
  prev!: string;
  next!: string;
  @ViewChild('fform') commentFormDirective: any;
  commentForm!: FormGroup;
  comment!: { author: string; rating: number; comment: string };

  formErrors = {
    author: '',
    comment: ''
  };

  validationMessages = {
    author: {
      'required': 'Name is required !!',
      'minlength': 'Name must be at least 2 chars long !!',
    },
    comment: {
      'required': 'Comment is required !!'
    }
  };

  // animation
  visibility = 'shown'

  constructor(private route: ActivatedRoute,
              private dishService: DishService,
              private location: Location,
              private fb: FormBuilder,
              // @ts-ignore
              @Inject('BaseUrl') public baseUrl) {
    this.createForm();
  }

  ngOnInit(): void {
    this.getAllDishIds();
    this.getDishByParam();
  }

  private createForm() {
    this.commentForm = this.fb.group({
      author: ['', [Validators.required, Validators.minLength(2)]],
      rating: 0,
      comment: ['', [Validators.required]]
    })
    this.commentForm.valueChanges.subscribe( () => {
       this.onValueChanged()
    })
    this.onValueChanged(); // resetFormValisation Message
  }

  goBack(): void {
    this.location.back();
  }

  getAllDishIds(): void {
    this.dishService.getDishIds().subscribe(dishIds => {
      this.dishIds = dishIds;
    })
  }

  getDishByParam(): void {
    this.route.params
      .pipe(
        // @ts-ignore
        switchMap((params: Params) => {
          this.visibility = "hidden";
          return this.dishService.getDish(params['id'])
        })
      ).subscribe(dish => {
        this.dish = dish;
        this.dishCopy = dish;
        this.setPreviousNext(dish.id!);
        this.visibility = 'shown'
      }, error => {
        this.errMsg = <any> error
    });
  }

  setPreviousNext(dishId: string){
    const index = this.dishIds.indexOf(dishId);
    this.prev = this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length];
    this.next = this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length];
  }

  onSubmit() {
    const comment: Comment = this.commentForm.value
    // adding date
    comment.date = new Date().toString();
    if (comment.rating == 0)
      comment.rating = 1;
    // push to comments
    this.dishCopy.comments?.push(comment);
    this.dishService.putDish(this.dishCopy).subscribe(
      dish => {
        this.dish = dish;
        this.dishCopy = dish;
      }, error => {
        this.dish = null as any;
        this.dishCopy = null as any;
        this.errMsg = error;
      }
    )
    this.resetForm()
  }

  onValueChanged() {
    if (!this.commentForm) { return; }
    if (this.commentForm) this.comment = this.commentForm.value
    const form = this.commentForm;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        // clear previous error message (if any)
        // @ts-ignore
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          // @ts-ignore
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              // @ts-ignore
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }

  private resetForm() {
    this.commentFormDirective.resetForm()
    this.commentForm?.reset({
      author: '',
      rating: 0,
      comment: ''
    })
  }
}
