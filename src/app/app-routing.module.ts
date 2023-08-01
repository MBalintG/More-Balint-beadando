import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodDetailsComponent } from './food-details.component';

import { AllFoodsComponent } from './all-foods.component';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAC5q94aBEj5AE7xJ4zGPFzBJ5kXaz3abg",
  authDomain: "mb-beadando.firebaseapp.com",
  projectId: "mb-beadando",
  storageBucket: "mb-beadando.appspot.com",
  messagingSenderId: "176123193718",
  appId: "1:176123193718:web:3fe8ca7d208a56229f3257"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const routes: Routes = [
  { path: 'food/:id', component: FoodDetailsComponent },
  { path: 'all-foods', component: AllFoodsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
