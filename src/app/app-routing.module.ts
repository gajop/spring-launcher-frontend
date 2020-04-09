import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AuthComponent} from './auth/auth.component';
import {GameAddComponent} from './game/game-add/game-add.component';
import {GameListComponent} from './game/game-list/game-list.component';
import {GameComponent} from './game/game/game.component';
import {RepoListComponent} from './repo/repo-list/repo-list.component';
import {RepoComponent} from './repo/repo/repo.component';
import { GithubAppLinkComponent } from './github-app-link/github-app-link.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/repo'}, {
    path: 'game',
    children: [
      {path: '', component: GameListComponent, pathMatch: 'full'},
      {path: ':user/:game', component: GameComponent},
    ]
  },
  {path: 'game/add', component: GameAddComponent},
  {path: 'auth', component: AuthComponent}, {
    path: 'repo',
    children: [
      {path: '', component: RepoListComponent, pathMatch: 'full'},
      {path: ':user/:repo', component: RepoComponent},
    ]
  },
  {path: 'auth/github/callback', component: AuthComponent},
  {path: 'github-app', component: GithubAppLinkComponent},
  // { path: 'auth/github', component: GithubAuthComponent },
];

@NgModule({imports: [RouterModule.forRoot(routes)], exports: [RouterModule]})

export class AppRoutingModule {
}
