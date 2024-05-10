import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    // Componentes, directivas, y pipes
  ],
  imports: [
    BrowserModule,
    // Provee la aplicación Firebase utilizando la configuración de environment.ts
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    // Provee Firestore utilizando la instancia de la aplicación Firebase
    provideFirestore(() => getFirestore())
  ],
  providers: [],
})
export class AppModule { }
