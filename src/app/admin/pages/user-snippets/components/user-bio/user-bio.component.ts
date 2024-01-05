import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {catchError, forkJoin, Subscription, throwError} from "rxjs";
import {BioService} from "../../../../../about/modules/bio/services/bio.service";
import {AlertServices} from "../../../../../shared/services/alert.service";
import {OutputObjectCode, OutputObjectText} from "../../../../../about/modules/bio/types/form-data.interace";

@Component({
  selector: 'app-user-bio',
  templateUrl: './user-bio.component.html',
  styleUrls: ['./user-bio.component.scss']
})
export class UserBioComponent implements OnInit, OnDestroy{
  formSnippet!: FormGroup
  combinedObservable$!: Subscription
  combinedObservableEdit$!: Subscription

  constructor(private bioService: BioService,
              private alertService: AlertServices) {
  }

  ngOnInit() {
    this.initialFormSnippets()
    this.getCurrentSnippetsInfo()
  }

  ngOnDestroy() {
    if (this.combinedObservable$) this.combinedObservable$.unsubscribe()
    if (this.combinedObservableEdit$) this.combinedObservableEdit$.unsubscribe()
  }

  getCurrentSnippetsInfo() {
    this.combinedObservable$ = forkJoin(
      this.bioService.getDescriptionCode(),
      this.bioService.getSnippets()
    ).subscribe(([descriptionCodeRes, snippetsRes]) => {
      const descriptionCodeInitialValues: { [key: string]: string } = {};
      descriptionCodeRes.forEach((snippet, index) => {
        const snippetKey = `snippet_${index + 1}`;
        descriptionCodeInitialValues[snippetKey] = snippet.text;
      });

      const snippetCodeInitialValues: { [key: string]: string } = {};
      snippetsRes.forEach((snippet, index) => {
        const snippetKey = `snippet_code_${index + 1}`;
        snippetCodeInitialValues[snippetKey] = snippet.code;
      });

      const initialValues = {...descriptionCodeInitialValues, ...snippetCodeInitialValues};

      this.formSnippet.patchValue(initialValues);
    });
  }

  initialFormSnippets() {
    this.formSnippet = new FormGroup({
      snippet_1: new FormControl(null),
      snippet_2: new FormControl(null),
      snippet_3: new FormControl(null),
      snippet_4: new FormControl(null),
      snippet_5: new FormControl(null),
      snippet_6: new FormControl(null),
      snippet_7: new FormControl(null),
      snippet_8: new FormControl(null),
      snippet_9: new FormControl(null),
      snippet_code_1: new FormControl(null),
      snippet_code_2: new FormControl(null),
      snippet_code_3: new FormControl(null),
      snippet_code_4: new FormControl(null),
      snippet_code_5: new FormControl(null),
      snippet_code_6: new FormControl(null),
      snippet_code_7: new FormControl(null),
      snippet_code_8: new FormControl(null),
      snippet_code_9: new FormControl(null),
    })
  }

  submitSnippet() {

    if (this.formSnippet.invalid) return

    const snippetControlNames = [
      'snippet_1', 'snippet_2', 'snippet_3',
      'snippet_4', 'snippet_5', 'snippet_6',
      'snippet_7', 'snippet_8', 'snippet_9'
    ];

    const snippetCodeControlNames = [
      'snippet_code_1', 'snippet_code_2', 'snippet_code_3',
      'snippet_code_4', 'snippet_code_5', 'snippet_code_6',
      'snippet_code_7', 'snippet_code_8', 'snippet_code_9'
    ];

    const processControls = (controlNames: string[], formData: FormData | any, formDataRequest: OutputObjectText | OutputObjectCode | any, textKey: string | 'text' | 'code') => {
      controlNames.forEach((controlName, index) => {
        formData[controlName] = this.formSnippet.get(controlName)?.value;
        formDataRequest[index.toString()] = {[textKey]: formData[controlName]};
      });
    };

    const formData: FormData | any = {};
    const formDataRequest: OutputObjectText = {};

    const snippetCodeFormData: FormData | any = {};
    const snippetCodeFormDataRequest: OutputObjectCode = {};

    processControls(snippetControlNames, formData, formDataRequest, 'text');
    processControls(snippetCodeControlNames, snippetCodeFormData, snippetCodeFormDataRequest, 'code');

    const updateSnippetObservable = this.bioService.updateDescriptionCode(formDataRequest);
    const updateSnippetCodeObservable = this.bioService.updateSnippets(snippetCodeFormDataRequest);

    this.combinedObservableEdit$ = forkJoin([updateSnippetObservable, updateSnippetCodeObservable])
      .pipe(
        catchError(error => {
          this.alertService.danger('Failure');
          return throwError(error)
        })
      )
      .subscribe(
        () => {
          this.alertService.success('Success');
        }
      );
  }

}
