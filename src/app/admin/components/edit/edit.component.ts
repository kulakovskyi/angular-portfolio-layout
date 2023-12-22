import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Observable, Subscription} from "rxjs";
import {UserDataInterface} from "../../types/user-data.interface";
import {select, Store} from "@ngrx/store";
import {currentUserSelector} from "../../../shared/store/selectors";
import {updateCurrentUserAction} from "../../../shared/store/action/update-current-user.action";
import {EditService} from "../../services/edit.service";
import {BioService} from "../../../about/modules/bio/services/bio.service";

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
  getSnippetSub$!: Subscription

  constructor(private store: Store,
              private editService: EditService,
              private bioService: BioService) {
  }

  ngOnInit() {
    this.currentUser$ = this.store.pipe(select(currentUserSelector))
    this.initialFormUser()
    this.initialFormPersonalInfo()
    this.currentUser$.subscribe(userData => {
      if(userData) this.formUser.patchValue(userData)
    })
    this.getSnippetSub$ = this.bioService.getDescriptionCode().subscribe(res => {
      const initialValues: { [key: string]: string } = {}
      console.log(res)
      res.forEach((snippet, index) => {
        const snippetKey = `snippet_${index + 1}`;
        initialValues[snippetKey] = snippet.text;
        this.formSnippet.patchValue(initialValues);
      });
    })

  }

  ngOnDestroy() {
    if(this.updateUserDataSub$) this.updateUserDataSub$.unsubscribe()
    if(this.getSnippetSub$) this.getSnippetSub$.unsubscribe()
    if(this.updateSnippetSub$) this.updateSnippetSub$.unsubscribe()
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
    })
  }

  submitUser() {
    if(this.formUser.invalid) return
    const updateUserData = {...this.formUser.value}
    this.store.dispatch(updateCurrentUserAction({currentUserInput: updateUserData}))
  }

  submitSnippet() {
    if(this.formSnippet.invalid) return
    const updateUserData = {...this.formSnippet.value}
    const outputObject: Record<string, { text: string }> = {};
    Object.keys(updateUserData).forEach((key, index) => {
      outputObject[index.toString()] = { text: updateUserData[key] };
    });
    this.updateSnippetSub$ = this.bioService.updateDescriptionCode(outputObject).subscribe()
  }
}
