import { NgModule } from '@angular/core'
import { NativeScriptRouterModule } from '@nativescript/angular'
import { Routes } from '@angular/router'
import { paginaUnoComponent } from './PrimerComponente/pagina-uno.component';
import { paginaDosComponent } from './SegundoComponente/pagina-dos.component';

const routes: Routes = [
  { path: '', redirectTo: '/pagina-uno', pathMatch: 'full' },
  { path: 'pagina-uno', component: paginaUnoComponent },
  { path: 'pagina-dos', component: paginaDosComponent },
]

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
