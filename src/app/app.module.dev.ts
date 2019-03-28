
import {NgModule, NgModuleFactoryLoader} from '@angular/core';

import {routes} from './app-routing.module';
import {AppComponent} from './app.component';
import {AppModule} from './app.module';
import {ArticleModuleNgFactory} from './article/article.module.ngfactory';
import {EditorModuleNgFactory} from './editor/editor.module.ngfactory';
import {SettingsModuleNgFactory} from './settings/settings.module.ngfactory';
import {ProfileModuleNgFactory} from './profile/profile.module.ngfactory';

const routeModule = {
  article: ArticleModuleNgFactory,
  editor: EditorModuleNgFactory,
  settings: SettingsModuleNgFactory,
  profile: ProfileModuleNgFactory
};

const map = routes.reduce((a, r) => {
  a[r.loadChildren as string] = routeModule[r.path];
  return a;
}, {})


export class MyLoader extends NgModuleFactoryLoader {
  load(id: string) {
    const res = map[id];
    if (!res) {
      throw new Error(`Unrecognized route id ${id}`);
    }
    return Promise.resolve(res);
  }
}

@NgModule({
  imports: [AppModule],
  bootstrap: [AppComponent],
  providers: [{provide: NgModuleFactoryLoader, useClass: MyLoader}]
})
export class AppModuleDev {}
