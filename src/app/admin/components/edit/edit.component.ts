import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {forkJoin, Observable, Subscription} from "rxjs";
import {UserDataInterface} from "../../types/user-data.interface";
import {select, Store} from "@ngrx/store";
import {currentUserSelector} from "../../../shared/store/selectors";
import {updateCurrentUserAction} from "../../../shared/store/action/update-current-user.action";
import {BioService} from "../../../about/modules/bio/services/bio.service";
import {AlertServices} from "../../../shared/services/alert.service";
import {OutputObjectCode, OutputObjectText} from "../../../about/modules/bio/types/form-data.interace";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})




export class EditComponent implements OnInit, OnDestroy{
  formUser!: FormGroup
  formSnippet!: FormGroup
  currentUser$!: Observable<UserDataInterface | null>
  updateUserDataSub$!: Subscription
  updateSnippetSub$!: Subscription
  updateSnippetCodeSub$!: Subscription

  combinedObservable$!: Subscription




  constructor(private store: Store,
              private bioService: BioService,
              private alertService: AlertServices) {
  }

  ngOnInit() {
    this.currentUser$ = this.store.pipe(select(currentUserSelector))
    this.initialFormUser()
    this.initialFormPersonalInfo()
    this.currentUser$.subscribe(userData => {
      if(userData) this.formUser.patchValue(userData)
    })

    this.getCurrentSnippetsInfo()



  }

  ngOnDestroy() {
    if(this.updateUserDataSub$) this.updateUserDataSub$.unsubscribe()
    if(this.updateSnippetSub$) this.updateSnippetSub$.unsubscribe()


    if(this.combinedObservable$) this.combinedObservable$.unsubscribe()
  }

  getCurrentSnippetsInfo(){
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

      const initialValues = { ...descriptionCodeInitialValues, ...snippetCodeInitialValues };

      this.formSnippet.patchValue(initialValues);
    });
  }

  initialFormUser(){
    this.formUser = new FormGroup({
      user: new FormControl(null),
      github: new FormControl(null),
      profession: new FormControl(null),
      gitHubLinkUser: new FormControl(null),
      telegramLinkUser: new FormControl(null),
      instagramLinkUser: new FormControl(null),
      linkedinLinkUser: new FormControl(null),
      mailLinkUser: new FormControl(null),
    })
  }

  initialFormPersonalInfo(){
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

  submitUser() {
    if(this.formUser.invalid) return
    const updateUserData = {...this.formUser.value}
    this.store.dispatch(updateCurrentUserAction({currentUserInput: updateUserData}))
  }

  submitSnippet() {
    if(this.formSnippet.invalid) return
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

    const formData: FormData | any = {};

    snippetControlNames.forEach(controlName => {
      formData[controlName] = this.formSnippet.get(controlName)?.value;
    });

    const outputObject: OutputObjectText = {};
    snippetControlNames.forEach((controlName, index) => {
      outputObject[index.toString()] = { text: formData[controlName] };
    });

    this.updateSnippetSub$ = this.bioService.updateDescriptionCode(outputObject).subscribe(
      () => {
        this.alertService.success('Success');
      },
      () => {
        this.alertService.danger('Failure');
      }
    );

    const snippetCodeFormData: FormData | any = {};

    snippetCodeControlNames.forEach(controlName => {
      snippetCodeFormData[controlName] = this.formSnippet.get(controlName)?.value;
    });

    const codeOutputObject: OutputObjectCode = {};
    snippetCodeControlNames.forEach((controlName, index) => {
      codeOutputObject[index.toString()] = { code: snippetCodeFormData[controlName] };
    });

    this.updateSnippetCodeSub$ = this.bioService.updateSnippets(codeOutputObject).subscribe(
      () => {
        this.alertService.success('Code Success');
      },
      () => {
        this.alertService.danger('Code Failure');
      }
    );


  }
}
