import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  {
    path: 'settings',
    loadChildren: 'app/settings/settings.module#SettingsModule'
  },
  {
    path: 'profile',
    loadChildren: 'app/profile/profile.module#ProfileModule'
  },
  {
    path: 'editor',
    loadChildren: 'app/editor/editor.module#EditorModule'
  },
  {
    path: 'article',
    loadChildren: 'app/article/article.module#ArticleModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
