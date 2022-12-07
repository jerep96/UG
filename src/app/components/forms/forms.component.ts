import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
})
export class FormsComponent implements OnInit {
  @Input() formType!: string;

  primeraLecturaForm!: FormGroup;
  vistoriaMensalForm!: FormGroup;
  lecturaIndividualForm!: FormGroup;
  religueFornecimentoForm!: FormGroup;

  listaPrimeraLectura: any = [
    { id: 36, value: 'Sem Medidor Instalado' },
    { id: 35, value: 'Serviço Não Executado' },
    { id: 33, value: 'Sem Responsável pelo Atendimento' },
    { id: 31, value: 'Serviço Executado' },
    { id: 38, value: 'Medidor Embaçado' },
    { id: 39, value: 'Medidor Ilegível' },
    { id: 310, value: 'Medidor Inacessível' },
    { id: 311, value: 'Ligação Direta' },
    { id: 312, value: 'Suspeita de Vazamento' },
    { id: 313, value: 'Dificuldade Técnica' },
    { id: 37, value: 'Sem Lacre' },
    { id: 314, value: 'Visor Desprotegido' },
    { id: 315, value: 'Outro Fornecedor' },
  ];

  listaVistoriaMensal: any = [
    { id: 621, value: 'Sem identificação + SEM medidor' },
    { id: 620, value: 'Sem Identificação + medidor LACRADO' },
    { id: 619, value: 'Sem Identificação + COM medidor' },
    { id: 516, value: 'Troca de Medidor' },
    { id: 518, value: 'Leitura Divergente' },
    { id: 61, value: 'Serviço Executado' },
    { id: 65, value: 'Serviço Não Executado' },
  ];

  listaLecturaIndividual: any = [
    { id: 56, value: 'Sem Medidor Instalado' },
    { id: 52, value: 'Condomínio não Autorizou' },
    { id: 55, value: 'Serviço Não Executado' },
    { id: 53, value: 'Sem Responsável pelo Atendimento' },
    { id: 51, value: 'Serviço Executado' },
    { id: 58, value: 'Medidor Embaçado' },
    { id: 59, value: 'Medidor Ilegível' },
    { id: 510, value: 'Medidor Inacessível' },
    { id: 511, value: 'Ligação Direta' },
    { id: 514, value: 'Visor Desprotegido' },
    { id: 515, value: 'Outro Fornecedor' },
    { id: 516, value: 'Troca de Medidor' },
    { id: 517, value: 'Condômino Não Autorizou' },
    { id: 518, value: 'Leitura Divergente' },
  ];

  listaReligueFornecimento: any = [
    { id: 2217, value: 'Condômino Não Autorizou' },
    { id: 2216, value: 'Troca de Medidor' },
    { id: 223, value: 'Sem Responsável pelo Atendimento' },
    { id: 221, value: 'Serviço Executado' },
    { id: 225, value: 'Serviço Não Executado' },
    { id: 2211, value: 'Ligação Direta' },
    { id: 2212, value: 'Suspeita de Vazamento' },
    { id: 2213, value: 'Dificuldade Técnica' },
    { id: 2210, value: 'Medidor Inacessível' },
    { id: 229, value: 'Medidor Ilegível' },
  ];
  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {
    this.primeraLecturaForm = this.initFormPrimeraLectura();
    this.vistoriaMensalForm = this.initFormVistoriaMensal();
    this.lecturaIndividualForm = this.initFormLecturaIndividual();
    this.religueFornecimentoForm = this.initFormReligueFornecimento();
  }

  onSubmit(): void {
    console.log('Form ->', this.primeraLecturaForm.value);
    console.log('Form ->', this.vistoriaMensalForm.value);
  }

  initFormPrimeraLectura(): any {
    return this.fb.group({
      ul_medidor: [''],
      ul_leitura_inicial: [''],
      ul_ocorrencia: ['', [Validators.required]],
      ul_observacao: [''],
    });
  }

  ocurrenciasValidationPrimeraLectura(): void {
    let servicioNoEjecutado = this.primeraLecturaForm.get('ul_ocorrencia')?.value;

    if (servicioNoEjecutado == 35) {
      this.primeraLecturaForm.controls['ul_medidor'].setValue('');
      this.primeraLecturaForm.controls['ul_medidor'].disable();
      this.primeraLecturaForm.controls['ul_leitura_inicial'].setValue('');
      this.primeraLecturaForm.controls['ul_leitura_inicial'].disable();
    } else {
      this.primeraLecturaForm.controls['ul_medidor'].enable();
      this.primeraLecturaForm.controls['ul_leitura_inicial'].enable();
    }
  }

  initFormVistoriaMensal(): any {
    return this.fb.group({
      ul_sem_identificacao: [''],
      ul_medidor: [''],
      ul_sem_medidor: [''],
      ul_ocorrencia: [''],
      ul_consumo: [''],
      ul_observacao: ['', [Validators.maxLength(500)]],
    });
  }

  identifiedMeter(): void {
    let conMedidor = this.vistoriaMensalForm.get('ul_medidor')?.value;
    if (conMedidor != '') {
      this.vistoriaMensalForm.controls['ul_sem_medidor'].disable();
    } else {
      this.vistoriaMensalForm.controls['ul_sem_medidor'].enable();
    }
  }

  unidentifiedMeter(): void {
    let sinIdentificacion = this.vistoriaMensalForm.get('ul_sem_identificacao')?.value;
    let sinMedidor = this.vistoriaMensalForm.get('ul_sem_medidor')?.value;

    if (sinIdentificacion && sinMedidor) {
      this.vistoriaMensalForm.controls['ul_medidor'].disable();
      this.vistoriaMensalForm.controls['ul_ocorrencia'].setValue(621);
    } else {
      this.vistoriaMensalForm.controls['ul_medidor'].enable();
      this.vistoriaMensalForm.controls['ul_ocorrencia'].setValue('');
    }
  }

  ocurrenciasValidationVistoriaMensal(): void {
    let servicioNoEjecutado = this.vistoriaMensalForm.get('ul_ocorrencia')?.value;

    if (servicioNoEjecutado == 65) {
      this.vistoriaMensalForm.controls['ul_sem_identificacao'].setValue('');
      this.vistoriaMensalForm.controls['ul_sem_identificacao'].disable();
      this.vistoriaMensalForm.controls['ul_medidor'].setValue('');
      this.vistoriaMensalForm.controls['ul_medidor'].disable();
      this.vistoriaMensalForm.controls['ul_sem_medidor'].setValue('');
      this.vistoriaMensalForm.controls['ul_sem_medidor'].disable();
      this.vistoriaMensalForm.controls['ul_consumo'].setValue('');
      this.vistoriaMensalForm.controls['ul_consumo'].disable();
      //this.vistoriaMensalForm.controls['ul_observacao'].addValidators([Validators.required]);
    } else if (servicioNoEjecutado == 621) {
      this.vistoriaMensalForm.controls['ul_sem_identificacao'].setValue(true);
      this.vistoriaMensalForm.controls['ul_sem_medidor'].setValue(true);
      this.vistoriaMensalForm.controls['ul_medidor'].disable();
      this.vistoriaMensalForm.controls['ul_medidor'].setValue('');
      this.vistoriaMensalForm.controls['ul_consumo'].enable();
    } else if (servicioNoEjecutado == 620 || servicioNoEjecutado == 619) {
      this.vistoriaMensalForm.controls['ul_sem_identificacao'].setValue(true);
      this.vistoriaMensalForm.controls['ul_sem_medidor'].disable();
      this.vistoriaMensalForm.controls['ul_sem_medidor'].setValue('');
      this.vistoriaMensalForm.controls['ul_medidor'].enable();
      this.vistoriaMensalForm.controls['ul_consumo'].enable();
    } else {
      this.vistoriaMensalForm.controls['ul_sem_identificacao'].enable();
      this.vistoriaMensalForm.controls['ul_medidor'].enable();
      this.vistoriaMensalForm.controls['ul_sem_medidor'].enable();
      this.vistoriaMensalForm.controls['ul_consumo'].enable();
    }
  }

  initFormLecturaIndividual(): any {
    return this.fb.group({
      ul_consumo: [''],
      ul_ocorrencia: ['', [Validators.required]],
      ul_observacao: [''],
    });
  }

  initFormReligueFornecimento(): any {
    return this.fb.group({
      ul_medidor: [''],
      ul_consumo: [''],
      ul_responsavel: [''],
      ul_funcao_do_responsavel: [''],
      ul_ocorrencia: ['', [Validators.required]],
      ul_observacao: [''],
    });
  }
}
