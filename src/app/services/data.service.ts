import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  dataJson: any;
  constructor() {
    this.dataJson = [
      {
    'ul_blocco':'2701998034',
    'ordenServicio':[{
      'activityType':'leitura_individual',
      'prioridade': 'ALTA',
      'duration':60,
      'ul_nro_orden':'76001968267117',
      'ul_unidade':'1B',
      'ul_uc':'640414794095',
      'ul_status_uc':'',
      'ul_sla_start':'2022-01-19 00:00:00',
      'ul_sla_end':'2022-01-20 00:00:00',
      'ul_morador':'Joao',
      'ul_celular_morador':'1122334455',
      'ul_email_morador':null,
      'ul_medidor_registrado':'1111',
      'ul_leitura_anterior':'540',
      'ul_media_consumo_m3':'100',
      'ul_factor_conversao':null,
      'ul_responsavel':'Joao',
      'ul_funcao_do_responsavel':'porteiro',
      'ul_celular_responsavel':'1122334455',
      'ul_email_responsavel':'abc@morador.com',
      'ul_origem_suspensao':'',
      'ul_motivo_suspensao':'',
      'ul_boletos_json':[]},
      {'activityType':'vistoria_mensal',
      'prioridade': 'ALTA',
      'duration':60,
      'ul_nro_orden':'76001968267118',
      'ul_unidade':'1C',
      'ul_uc':'640414794096',
      'ul_status_uc':'',
      'ul_sla_start':'2022-01-19 00:00:00',
      'ul_sla_end':'2022-01-20 00:00:00',
      'ul_morador':'Joao',
      'ul_celular_morador':'1122334455',
      'ul_email_morador':null,
      'ul_medidor_registrado':'2222',
      'ul_leitura_anterior':'540',
      'ul_media_consumo_m3':'100',
      'ul_factor_conversao':null,
      'ul_responsavel':'Joao',
      'ul_funcao_do_responsavel':'porteiro',
      'ul_celular_responsavel':'1122334455',
      'ul_email_responsavel':'abc@morador.com',
      'ul_origem_suspensao':'',
      'ul_motivo_suspensao':'',
      'ul_boletos_json':[]},
      {'activityType':'primeira_leitura',
      'prioridade': 'BAJA',
      'duration':60,
      'ul_nro_orden':'76001968267119',
      'ul_unidade':'2A',
      'ul_uc':'640414794097',
      'ul_status_uc':'',
      'ul_sla_start':'2022-01-19 00:00:00',
      'ul_sla_end':'2022-01-20 00:00:00',
      'ul_morador':'Joao',
      'ul_celular_morador':'1122334455',
      'ul_email_morador':null,
      'ul_medidor_registrado':'3333',
      'ul_leitura_anterior':'540',
      'ul_media_consumo_m3':'100',
      'ul_factor_conversao':null,
      'ul_responsavel':'Joao',
      'ul_funcao_do_responsavel':'porteiro',
      'ul_celular_responsavel':'1122334455',
      'ul_email_responsavel':'abc@morador.com',
      'ul_origem_suspensao':'',
      'ul_motivo_suspensao':'',
      'ul_boletos_json':[]},
      {'activityType':'religue_de_fornecimento',
      'prioridade': 'BAJA',
      'duration':60,
      'ul_nro_orden':'76001968267120',
      'ul_unidade':'2B',
      'ul_uc':'640414794098',
      'ul_status_uc':'',
      'ul_sla_start':'2022-01-19 00:00:00',
      'ul_sla_end':'2022-01-20 00:00:00',
      'ul_morador':'Joao',
      'ul_celular_morador':'1122334455',
      'ul_email_morador':null,
      'ul_medidor_registrado':'4444',
      'ul_leitura_anterior':'540',
      'ul_media_consumo_m3':'100',
      'ul_factor_conversao':null,
      'ul_responsavel':'Joao',
      'ul_funcao_do_responsavel':'porteiro',
      'ul_celular_responsavel':'1122334455',
      'ul_email_responsavel':'abc@morador.com',
      'ul_origem_suspensao':'',
      'ul_motivo_suspensao':'',
      'ul_boletos_json':[]},
      {'activityType':'religue_emergencial',
      'prioridade': 'BAJA',
      'duration':60,
      'ul_nro_orden':'76001968267120',
      'ul_unidade':'2C',
      'ul_uc':'640414794098',
      'ul_status_uc':'',
      'ul_sla_start':'2022-01-19 00:00:00',
      'ul_sla_end':'2022-01-20 00:00:00',
      'ul_morador':'Joao',
      'ul_celular_morador':'1122334455',
      'ul_email_morador':null,
      'ul_medidor_registrado':'5555',
      'ul_leitura_anterior':'540',
      'ul_media_consumo_m3':'100',
      'ul_factor_conversao':null,
      'ul_responsavel':'Joao',
      'ul_funcao_do_responsavel':'porteiro',
      'ul_celular_responsavel':'1122334455',
      'ul_email_responsavel':'abc@morador.com',
      'ul_origem_suspensao':'',
      'ul_motivo_suspensao':'',
      'ul_boletos_json':[]},
      {'activityType':'leitura_individual',
      'prioridade': 'BAJA',
      'duration':60,
      'ul_nro_orden':'76001968267121',
      'ul_unidade':'3A',
      'ul_uc':'640414794099',
      'ul_status_uc':'',
      'ul_sla_start':'2022-01-19 00:00:00',
      'ul_sla_end':'2022-01-20 00:00:00',
      'ul_morador':'Joao',
      'ul_celular_morador':'1122334455',
      'ul_email_morador':null,
      'ul_medidor_registrado':'6666',
      'ul_leitura_anterior':'540',
      'ul_media_consumo_m3':'100',
      'ul_factor_conversao':null,
      'ul_responsavel':'Joao',
      'ul_funcao_do_responsavel':'porteiro',
      'ul_celular_responsavel':'1122334455',
      'ul_email_responsavel':'abc@morador.com',
      'ul_origem_suspensao':'',
      'ul_motivo_suspensao':'',
      'ul_boletos_json':[]},
      {'activityType':'leitura_individual',
      'prioridade': 'BAJA',
      'duration':60,
      'ul_nro_orden':'76001968267122',
      'ul_unidade':'3B',
      'ul_uc':'640414794100',
      'ul_status_uc':'',
      'ul_sla_start':'2022-01-19 00:00:00',
      'ul_sla_end':'2022-01-20 00:00:00',
      'ul_morador':'Joao',
      'ul_celular_morador':'1122334455',
      'ul_email_morador':null,
      'ul_medidor_registrado':'7777',
      'ul_leitura_anterior':'540',
      'ul_media_consumo_m3':'100',
      'ul_factor_conversao':null,
      'ul_responsavel':'Joao',
      'ul_funcao_do_responsavel':'porteiro',
      'ul_celular_responsavel':'1122334455',
      'ul_email_responsavel':'abc@morador.com',
      'ul_origem_suspensao':'','ul_motivo_suspensao':'',
      'ul_boletos_json':[]},
      {'activityType':'leitura_individual',
      'prioridade': 'BAJA',
      'duration':60,
      'ul_nro_orden':'76001968267123',
      'ul_unidade':'3C',
      'ul_uc':'640414794101',
      'ul_status_uc':'',
      'ul_sla_start':'2022-01-19 00:00:00',
      'ul_sla_end':'2022-01-20 00:00:00',
      'ul_morador':'Joao',
      'ul_celular_morador':'1122334455',
      'ul_email_morador':null,
      'ul_medidor_registrado':'8888',
      'ul_leitura_anterior':'540',
      'ul_media_consumo_m3':'100',
      'ul_factor_conversao':null,
      'ul_responsavel':'Joao',
      'ul_funcao_do_responsavel':'porteiro',
      'ul_celular_responsavel':'1122334455',
      'ul_email_responsavel':'abc@morador.com',
      'ul_origem_suspensao':'',
      'ul_motivo_suspensao':'',
      'ul_boletos_json':[]}
    ]},
    {
      'ul_blocco':'2701950161',
      'ordenServicio':[
        {'activityType':'leitura_individual',
        'prioridade': 'ALTA',
        'duration':60,
        'ul_nro_orden':'76001968267118',
        'ul_unidade':'1C',
        'ul_uc':'640414794096',
        'ul_status_uc':'',
        'ul_sla_start':'2022-01-19 00:00:00',
        'ul_sla_end':'2022-01-20 00:00:00',
        'ul_morador':'Joao',
        'ul_celular_morador':'1122334455',
        'ul_email_morador':null,
        'ul_medidor_registrado':'2222',
        'ul_leitura_anterior':'540',
        'ul_media_consumo_m3':'100',
        'ul_factor_conversao':null,
        'ul_responsavel':'Joao',
        'ul_funcao_do_responsavel':'porteiro',
        'ul_celular_responsavel':'1122334455',
        'ul_email_responsavel':'abc@morador.com',
        'ul_origem_suspensao':'',
        'ul_motivo_suspensao':'',
        'ul_boletos_json':[]},
        {'activityType':'leitura_individual',
        'prioridade': 'ALTA',
        'duration':60,
        'ul_nro_orden':'76001968267119',
        'ul_unidade':'2A',
        'ul_uc':'640414794097',
        'ul_status_uc':'',
        'ul_sla_start':'2022-01-19 00:00:00',
        'ul_sla_end':'2022-01-20 00:00:00',
        'ul_morador':'Joao',
        'ul_celular_morador':'1122334455',
        'ul_email_morador':null,
        'ul_medidor_registrado':'3333',
        'ul_leitura_anterior':'540',
        'ul_media_consumo_m3':'100',
        'ul_factor_conversao':null,
        'ul_responsavel':'Joao',
        'ul_funcao_do_responsavel':'porteiro',
        'ul_celular_responsavel':'1122334455',
        'ul_email_responsavel':'abc@morador.com',
        'ul_origem_suspensao':'',
        'ul_motivo_suspensao':'',
        'ul_boletos_json':[]},
        {'activityType':'leitura_individual',
        'prioridade': 'ALTA',
        'duration':60,
        'ul_nro_orden':'76001968267120',
        'ul_unidade':'2B',
        'ul_uc':'640414794098',
        'ul_status_uc':'',
        'ul_sla_start':'2022-01-19 00:00:00',
        'ul_sla_end':'2022-01-20 00:00:00',
        'ul_morador':'Joao',
        'ul_celular_morador':'1122334455',
        'ul_email_morador':null,
        'ul_medidor_registrado':'4444',
        'ul_leitura_anterior':'540',
        'ul_media_consumo_m3':'100',
        'ul_factor_conversao':null,
        'ul_responsavel':'Joao',
        'ul_funcao_do_responsavel':'porteiro',
        'ul_celular_responsavel':'1122334455',
        'ul_email_responsavel':'abc@morador.com',
        'ul_origem_suspensao':'',
        'ul_motivo_suspensao':'',
        'ul_boletos_json':[]},
        {'activityType':'leitura_individual',
        'prioridade': 'ALTA',
        'duration':60,
        'ul_nro_orden':'76001968267120',
        'ul_unidade':'2C',
        'ul_uc':'640414794098',
        'ul_status_uc':'',
        'ul_sla_start':'2022-01-19 00:00:00',
        'ul_sla_end':'2022-01-20 00:00:00',
        'ul_morador':'Joao',
        'ul_celular_morador':'1122334455',
        'ul_email_morador':null,
        'ul_medidor_registrado':'5555',
        'ul_leitura_anterior':'540',
        'ul_media_consumo_m3':'100',
        'ul_factor_conversao':null,
        'ul_responsavel':'Joao',
        'ul_funcao_do_responsavel':'porteiro',
        'ul_celular_responsavel':'1122334455',
        'ul_email_responsavel':'abc@morador.com',
        'ul_origem_suspensao':'',
        'ul_motivo_suspensao':'',
        'ul_boletos_json':[]},
        {'activityType':'leitura_individual',
        'prioridade': 'ALTA',
        'duration':60,
        'ul_nro_orden':'76001968267121',
        'ul_unidade':'3A',
        'ul_uc':'640414794099',
        'ul_status_uc':'',
        'ul_sla_start':'2022-01-19 00:00:00',
        'ul_sla_end':'2022-01-20 00:00:00',
        'ul_morador':'Joao',
        'ul_celular_morador':'1122334455',
        'ul_email_morador':null,
        'ul_medidor_registrado':'6666',
        'ul_leitura_anterior':'540',
        'ul_media_consumo_m3':'100',
        'ul_factor_conversao':null,
        'ul_responsavel':'Joao',
        'ul_funcao_do_responsavel':'porteiro',
        'ul_celular_responsavel':'1122334455',
        'ul_email_responsavel':'abc@morador.com',
        'ul_origem_suspensao':'',
        'ul_motivo_suspensao':'',
        'ul_boletos_json':[]},
        {'activityType':'leitura_individual',
        'prioridade': 'ALTA',
        'duration':60,
        'ul_nro_orden':'76001968267122',
        'ul_unidade':'3B',
        'ul_uc':'640414794100',
        'ul_status_uc':'',
        'ul_sla_start':'2022-01-19 00:00:00',
        'ul_sla_end':'2022-01-20 00:00:00',
        'ul_morador':'Joao',
        'ul_celular_morador':'1122334455',
        'ul_email_morador':null,
        'ul_medidor_registrado':'7777',
        'ul_leitura_anterior':'540',
        'ul_media_consumo_m3':'100',
        'ul_factor_conversao':null,
        'ul_responsavel':'Joao',
        'ul_funcao_do_responsavel':'porteiro',
        'ul_celular_responsavel':'1122334455',
        'ul_email_responsavel':'abc@morador.com',
        'ul_origem_suspensao':'','ul_motivo_suspensao':'',
        'ul_boletos_json':[]},
        {'activityType':'leitura_individual',
        'prioridade': 'ALTA',
        'duration':60,
        'ul_nro_orden':'76001968267123',
        'ul_unidade':'3C',
        'ul_uc':'640414794101',
        'ul_status_uc':'',
        'ul_sla_start':'2022-01-19 00:00:00',
        'ul_sla_end':'2022-01-20 00:00:00',
        'ul_morador':'Joao',
        'ul_celular_morador':'1122334455',
        'ul_email_morador':null,
        'ul_medidor_registrado':'8888',
        'ul_leitura_anterior':'540',
        'ul_media_consumo_m3':'100',
        'ul_factor_conversao':null,
        'ul_responsavel':'Joao',
        'ul_funcao_do_responsavel':'porteiro',
        'ul_celular_responsavel':'1122334455',
        'ul_email_responsavel':'abc@morador.com',
        'ul_origem_suspensao':'',
        'ul_motivo_suspensao':'',
        'ul_boletos_json':[]}
      ]}
  ]
}

loadData(){
  return this.dataJson
}
}
