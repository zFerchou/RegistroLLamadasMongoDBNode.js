import { Routes } from '@angular/router';
import { RegistroComponent } from './components/registro/registro.component';

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

export const routes: Routes = [
    { path: 'registros' , component: RegistroComponent},

];  
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  
  export class AppRoutingModule {}