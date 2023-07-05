import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ProfileImageComponent } from './components/profile-image/profile-image.component';
import { ChipComponent } from './components/chip/chip.component';
import { HomeComponent } from './components/home/home.component';
import { RepositoriesComponent } from './components/repositories/repositories.component';
import { RepositoryComponent } from './components/repository/repository.component';
import { AppService } from './services/app.service';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { GithubComponent } from './components/github/github.component';
import { reducers } from './store/reducers';
import { GithubProfileComponent } from './components/github-profile/github-profile.component';
import { GithubEffect } from './store/effects/github.effect';
import { RepositoryFilterPipe } from './pipes/repository-filter.pipe';
import { TopBarComponent } from './components/topbar/top-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ProfileImageComponent,
    ChipComponent,
    HomeComponent,
    RepositoriesComponent,
    RepositoryComponent,
    GithubComponent,
    GithubProfileComponent,
    RepositoryFilterPipe,
    TopBarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({app: reducers}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([
      GithubEffect
    ])
  ],
  providers: [
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
