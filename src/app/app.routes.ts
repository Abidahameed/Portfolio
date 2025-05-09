import { Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectComponent } from './project/project.component';

export const routes: Routes = [
  
  { path: 'profile', 
    component: ProfileComponent ,
},
    {
        path: 'about',
        component:AboutComponent,

    },
    {
        path: 'contact',
        component:ContactComponent,
   
    },
    {
        path: 'project',
        component:ProjectComponent,

        
    },
    { path: '', redirectTo: '/profile', pathMatch: 'full' },
];
