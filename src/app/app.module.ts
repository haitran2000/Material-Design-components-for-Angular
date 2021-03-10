import { Input, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularMaterialModule } from './angular-material.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BadgeComponent } from './badge/badge.component';
import { RouterModule, Routes } from '@angular/router';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';
import { BottomSheetExampleComponent } from './bottom-sheet/bottom-sheet.component';
import { ButtonComponent } from './button/button.component';
import { ButtontoggleComponent } from './buttontoggle/buttontoggle.component';
import { CardComponent } from './card/card.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { ChipsComponent } from './chips/chips.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { DialogComponent } from './dialog/dialog.component';
import { DialogContentExampleComponent } from './dialog/dialog.component';
import { DividerComponent } from './divider/divider.component';
import { ExpansionpanelComponent } from './expansionpanel/expansionpanel.component';
import { FormfieldComponent } from './formfield/formfield.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { GirdlistComponent } from './girdlist/girdlist.component';
import { IconComponent } from './icon/icon.component';
import { InputComponent } from './input/input.component';
import { ListComponent } from './list/list.component';
import { MenuComponent } from './menu/menu.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { ProgressspinnerComponent } from './progressspinner/progressspinner.component';
import { RadiobuttonComponent } from './radiobutton/radiobutton.component';
import { RipplesComponent } from './ripples/ripples.component';
import { SelectComponent } from './select/select.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SlidetoggleComponent } from './slidetoggle/slidetoggle.component';
import { SliderComponent } from './slider/slider.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { PizzaPartyComponent } from './snackbar/snackbar.component';
import { SortheaderComponent } from './sortheader/sortheader.component';
import { StepperComponent } from './stepper/stepper.component';


const appRoutes: Routes = [
  { path: 'badge', component: BadgeComponent },
  { path: 'bottomsheet', component: BottomSheetComponent },
  { path: 'button', component: ButtonComponent },
  { path: 'buttontoggle', component: ButtontoggleComponent },
  {path:'card',component:CardComponent},
  {path:'checkbox',component:CheckboxComponent},
  {path:'chips',component:ChipsComponent},
  {path:'datapicker',component:DatepickerComponent},
  {path:'dialog',component:DialogComponent},
  {path:'divider',component:DividerComponent},
  {path:'expansionpanel',component:ExpansionpanelComponent},
  {path:'formfield',component:FormfieldComponent},
  {path:'autocomplete',component:AutocompleteComponent},
  {path:'girdlist',component:GirdlistComponent},
  {path:'icon',component:IconComponent},
  {path:'input',component:InputComponent},
  {path:'list',component:ListComponent},
  {path:'menu',component:MenuComponent},
  {path:'paginator',component:PaginatorComponent},
  {path:'progressbar',component:ProgressbarComponent},
  {path:'progressspinner',component:ProgressspinnerComponent},
  {path:'radiobutton',component:RadiobuttonComponent},
  {path:'ripples',component:RipplesComponent},
  {path:'select',component:SelectComponent},
  {path:'sidenav',component:SidenavComponent},
  {path:'slidetoggle',component:SlidetoggleComponent},
  {path:'slider',component:SliderComponent},
  {path:'snackbar',component:SnackbarComponent},
  {path:'sortheader',component:SortheaderComponent},

];
@NgModule({
  declarations: [
    AppComponent,
    BadgeComponent,
    BottomSheetComponent,
    BottomSheetExampleComponent,
    ButtonComponent,
    PizzaPartyComponent,
    ButtontoggleComponent,
    CardComponent,
    CheckboxComponent,
    ChipsComponent,
    DatepickerComponent,
    DialogComponent,
    DialogContentExampleComponent,
    DividerComponent,
    ExpansionpanelComponent,
    FormfieldComponent,
    AutocompleteComponent,
    GirdlistComponent,
    IconComponent,
    InputComponent,
    ListComponent,
    MenuComponent,
    PaginatorComponent,
    ProgressbarComponent,
    ProgressspinnerComponent,
    RadiobuttonComponent,
    RipplesComponent,
    SelectComponent,
    SidenavComponent,
    SlidetoggleComponent,
    SliderComponent,
    SnackbarComponent,
    SortheaderComponent,
    StepperComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
