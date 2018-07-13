import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

	constructor( private _http: HttpClient ) {
		this.getPokemon();
	}
	getPokemon(){
		const bagon = this._http.get('https://pokeapi.co/api/v2/pokemon/371/')
		bagon.subscribe(bagon => {
			console.log(bagon['name'].charAt(0).toUpperCase() + bagon['name'].substr(1).toLowerCase() + " has a hidden ability called " + bagon['abilities'][0]['ability']['name']);
			for(var i = 252; i <= 300; i++){
				var pokemon = this._http.get('https://pokeapi.co/api/v2/pokemon/' + i + '/');
				pokemon.subscribe( pokemon => {
					for(var ability of pokemon['abilities']){
						if(ability['ability']['name'] == bagon['abilities'][0]['ability']['name']){
							console.log(pokemon['name'].charAt(0).toUpperCase() + pokemon['name'].substr(1).toLowerCase() + " has the same ability as Bagon!")
						}
					}
				})
			}
		})
	}
}
