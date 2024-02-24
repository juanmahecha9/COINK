import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full",
  },
  {
    path: "home",
    loadComponent: () =>
      import("src/app/project/home/home.page").then((m) => m.HomePage),
  },
  {
    path: "ingreso",
    loadComponent: () =>
      import("./project/ingreso/ingreso.page").then((m) => m.IngresoPage),
  },
  {
    path: "numero-celular",
    loadComponent: () =>
      import("./project/numero-celular/numero-celular.page").then(
        (m) => m.NumeroCelularPage
      ),
  },
  {
    path: "informacion-uno",
    loadComponent: () =>
      import("./project/informacion-uno/informacion-uno.page").then(
        (m) => m.InformacionUnoPage
      ),
  },
  {
    path: 'contrato',
    loadComponent: () => import('./project/contrato/contrato.page').then( m => m.ContratoPage)
  },
  {
    path: 'exito',
    loadComponent: () => import('./project/exito/exito.page').then( m => m.ExitoPage)
  },
];
