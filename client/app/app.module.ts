import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FotoModulo } from './foto/foto.modulo';
import { HttpModule} from '@angular/http';
import 'rxjs/add/operator/map';
import { PainelModulo } from './painel/painel.module';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListagemComponent } from './listagem/listagem.component';
import { rotas } from './app.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BotaoModulo } from './commons/botao.module';
import { ModalModule } from './commons/modal/modal.modulw';

@NgModule({
    imports: [BrowserModule, FotoModulo, HttpModule, PainelModulo, rotas, FormsModule, ReactiveFormsModule, BotaoModulo, ModalModule],
    declarations: [AppComponent, CadastroComponent, ListagemComponent],
    bootstrap: [AppComponent]

})
export class AppModule{}