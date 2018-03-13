import { NgModule } from "@angular/core";
import { FotoComponent } from "./foto.component";
import { FIltroPorTitulo } from "./foto.pipes";
import { FotoService } from './foto.service';

@NgModule({
    declarations: [ FotoComponent, FIltroPorTitulo ],
    exports: [ FotoComponent, FIltroPorTitulo ],
    providers: [ FotoService ]
})
export class FotoModulo{}