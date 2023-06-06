import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageInfoComponent } from './pages/page-info.component';

const routes: Routes = [{ path: '', component: PageInfoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageInfoRoutingModule {}
