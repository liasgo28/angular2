import { Pipe, PipeTransform } from "@angular/core";
import { FotoComponent } from "./foto.component";

@Pipe({
    name: 'filtroPorTitulo'
})
export class FIltroPorTitulo implements PipeTransform{
    transform(fotos : FotoComponent[], textoDigitado : string) : FotoComponent[]{
        textoDigitado = textoDigitado.toLowerCase();
        return fotos.filter(foto => foto.titulo.toLowerCase().includes(textoDigitado));
    }
}