import { Component, OnInit } from '@angular/core';
import { RegistroService } from '../../services/registro.service';
import { UsuarioService } from '../../services/usuario.service';
import { TipoLlamadaService } from '../../services/tipo-llamada.service';
import { TelefonoUsuarioService } from '../../services/telefono-usuario.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  registro: any = {};
  usuarios: any[] = [];
  tiposLlamada: any[] = [];
  telefonosUsuario: any[] = [];
  registrosLlamadas: any[] = [];
  editando: boolean = false;
  filtro: any = {};
  searchText: string = ''; // Añade esta línea
  registrosLlamadasFiltrados: any[] = [];

  constructor(
    private registroService: RegistroService,
    private usuarioService: UsuarioService,
    private tipoLlamadaService: TipoLlamadaService,
    private telefonoUsuarioService: TelefonoUsuarioService
  ) {}

  ngOnInit(): void {
    this.usuarioService.getUsuarios().subscribe(data => {
      this.usuarios = data;
    });

    this.tipoLlamadaService.getTiposLlamada().subscribe(data => {
      this.tiposLlamada = data;
    });

    this.obtenerRegistros();
  }

  onUsuarioChange(claveU: string): void {
    this.telefonoUsuarioService.getTelefonosByUsuario(claveU).subscribe(data => {
      this.telefonosUsuario = data;
      if (this.telefonosUsuario.length > 0) {
        this.registro.numeroTel = this.telefonosUsuario[0].numeroTel;
      }
    });
  }

  submitForm(): void {
    if (this.editando) {
      this.registroService.actualizarRegistroLlamada(this.registro.numeroRegistro, this.registro).subscribe(
        response => {
          console.log('Llamada actualizada exitosamente:', response);
          this.obtenerRegistros();
          this.registro = {};
          this.editando = false;
        },
        error => {
          console.error('Error al actualizar la llamada:', error);
        }
      );
    } else {
      this.registroService.crearRegistroLlamada(this.registro).subscribe(
        response => {
          console.log('Llamada registrada exitosamente:', response);
          this.obtenerRegistros();
          this.registro = {};
        },
        error => {
          console.error('Error al registrar la llamada:', error);
        }
      );
    }
  }

  obtenerRegistros(): void {
    this.registroService.getRegistros().subscribe(data => {
      this.registrosLlamadas = data;
      this.registrosLlamadasFiltrados = [...this.registrosLlamadas];
    });
  }

  editarRegistro(registro: any): void {
    this.registro = { ...registro };
    this.editando = true;
  }

  eliminarRegistro(numeroRegistro: number): void {
    if (numeroRegistro) {
      this.registroService.eliminarRegistroLlamada(numeroRegistro).subscribe(
        response => {
          console.log('Llamada eliminada exitosamente:', response);
          this.obtenerRegistros();
        },
        error => {
          console.error('Error al eliminar la llamada:', error);
        }
      );
    } else {
      console.error('Número de registro inválido para eliminar la llamada');
    }
  }

  aplicarFiltro(): void {
    console.log(this.registrosLlamadas);
    console.log(this.filtro);
  
    if (this.filtro && Object.values(this.filtro).some(val => val !== null && val !== '')) {
      this.registrosLlamadasFiltrados = this.registrosLlamadas.filter(registro => {
        return (
          (!this.filtro.numeroRegistro || registro.numeroRegistro.toString().includes(this.filtro.numeroRegistro)) &&
          (!this.filtro.claveU || registro.claveU.toLowerCase().includes(this.filtro.claveU.toLowerCase())) &&
          (!this.filtro.numeroTel || registro.numeroTel.toString().includes(this.filtro.numeroTel)) &&
          (!this.filtro.fechaLlamada || registro.fechaLlamada.includes(this.filtro.fechaLlamada)) &&
          (!this.filtro.minutosUtilizados || registro.minutosUtilizados.toString().includes(this.filtro.minutosUtilizados)) &&
          (!this.filtro.numeroMarcado || registro.numeroMarcado.toLowerCase().includes(this.filtro.numeroMarcado.toLowerCase())) &&
          (!this.filtro.claveTipoLlamada || registro.claveTipoLlamada.toString().includes(this.filtro.claveTipoLlamada))
        );
      });
    } else {
      this.registrosLlamadasFiltrados = [...this.registrosLlamadas];
    }
  }
  
  restablecerFiltro(): void {
    this.filtro = {};
    this.registrosLlamadasFiltrados = [...this.registrosLlamadas];
  }
}
