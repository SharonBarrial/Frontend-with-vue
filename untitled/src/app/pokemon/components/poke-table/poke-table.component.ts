import {Component, OnInit, ViewChild} from '@angular/core';
import {MatFormField} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatTableDataSource, MatTableModule} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {HttpClientModule} from "@angular/common/http";
import {PokemonService} from "../../services/pokemon.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-poke-table',
  standalone: true,
  imports: [
    MatFormField,
    MatInputModule,
    MatTableModule,
    MatPaginator, HttpClientModule,
  ],
  templateUrl: './poke-table.component.html',
  styleUrl: './poke-table.component.css'
})
export class PokeTableComponent implements OnInit {
  //array de strings para definir las ccolumnas que se mostraran en la tabla
  displayedColumns: string[] = ['position', 'image', 'name'];

  //array vacio para definir las columnas que se mostrara en la tabla
  data: any[] = [];

  //Creacion de una instancia de MatTableDataSource con los datos de pokemon
  dataSource = new MatTableDataSource<any>(this.data);

  //para acceder al paginator de la tabla desde la plantilla
  @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator;

  //Array para almacenar los datos de los pokemos recuperados
  pokemons = [];

  //constructor del componente donde se inyecta el servicio de Pokemon y el router
  constructor(private pokemonServices: PokemonService, private router: Router) {

  }

  //Metodo que se ejecuta al iniciar al componente
  ngOnInit() {
    this.getPokemons();
  }

  getPokemons() {

    let pokemonData;

    for (let i = 1; i <= 150; i++) {

      this.pokemonServices.getPokemons(i).subscribe(
        res => {

          //Crear y llenar un objeto con datos relevantes de cada Pókemon

          pokemonData = {

            position: i,

            image: res.sprites.front_default,

            name: res.name

          };

          //Añadir cada objeto de Pokémon al array de datos y actualizar el dataSource

          this.data.push(pokemonData);

          this.dataSource = new MatTableDataSource<any>(this.data);

          this.dataSource.paginator = this.paginator;

        },

        error => {
          console.log(error);
        }
      );
    }
  }

  //Metodo para aplicar un filtro a la tabla basado en un evento de entrada
  applyFilter(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const filteredValue = inputElement.value.replace(/[^a-zA-Z ]/g, '');//Remueve caracteres no deseados
    inputElement.value = filteredValue; //Establece el valor filtrado

    this.dataSource.filter = filteredValue.trim().toLowerCase();

    //Regresar al inicio del paginator si se aplica un filtro
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  //Método para navegar a una URL específica cuando se selecciona una fila
  getRow(row: any){
    this.router.navigateByUrl(`/pokeDetail/${row.position}`);
  }

}
