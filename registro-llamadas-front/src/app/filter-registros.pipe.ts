import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterRegistros',
  standalone: true
})
export class FilterRegistrosPipe implements PipeTransform {
  transform(registros: any[], filtro: any): any[] {
    if (!registros || !filtro) {
      return registros;
    }

    return registros.filter(registro => {
      return registro.numeroRegistro.toString().includes(filtro.numeroRegistro) &&
             registro.claveU.toLowerCase().includes(filtro.claveU.toLowerCase()) &&
             registro.numeroTel.toString().includes(filtro.numeroTel) &&
             registro.fechaLlamada.includes(filtro.fechaLlamada) &&
             registro.minutosUtilizados.toString().includes(filtro.minutosUtilizados) &&
             registro.numeroMarcado.toLowerCase().includes(filtro.numeroMarcado.toLowerCase()) &&
             registro.claveTipoLlamada.toString().includes(filtro.claveTipoLlamada);
    });
  }
}
