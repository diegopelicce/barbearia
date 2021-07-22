import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpConnection } from 'src/services/htpp-connection.service';

@Component({
  selector: 'app-agenda-horario',
  templateUrl: './agenda-horario.component.html',
  styleUrls: ['./agenda-horario.component.less']
})
export class AgendaHorarioComponent implements OnInit {

  public estruturaBarbeiros = [];
  public listaBarbeiro: Array<any> = [];
  public dataFiltrada: Array<any> = [];
  public horarioFiltrada: Array<any> = [];

  public form: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpConnection) {
    this.form = this.fb.group({
      nome: new FormControl(''),
      email: new FormControl('', [Validators.required, Validators.email]),
      cpf: new FormControl('', Validators.minLength(11)),
      datePickerform: new FormControl('', [Validators.required]),
      idAgendaBarbeiro: new FormControl('', [Validators.required]),
      horarioControl: new FormControl('', [Validators.required])
    });
  }

  onSubmit(): void {
    //Regras
  };

  ngOnInit(): void {
    this.http.getBarbeiros().subscribe(res => {
      this.estruturaBarbeiros = res;
      this.getNomeBarbeiros();
    });
  }

  filtrarDataBarbeiro(event: any){
    this.http.getHorarioDisponivel().subscribe((res: any) => {
      this.dataFiltrada = res.filter((estrutura: any) => estrutura.id_barbeiro == event.value);
    });
  }

  filtrarHorarioBarbeiro(event: any){
    this.horarioFiltrada = this.dataFiltrada.filter((estrutura: any) => estrutura.data = event.value)
  }

  getNomeBarbeiros(){
    this.listaBarbeiro = this.estruturaBarbeiros.reduce((unique, o) => {
      if(!unique.some(obj => obj['nome_user'] === o['nome_user'])) {
        unique.push(o);
      }
      return unique;
    },[]);
  }

  getErrorMessageCpf(){
    return 'Quantidade de números inválida'
    //return this.cpf.hasError('minLength') ? 'Quantidade de números inválida' : '';
  }

}
