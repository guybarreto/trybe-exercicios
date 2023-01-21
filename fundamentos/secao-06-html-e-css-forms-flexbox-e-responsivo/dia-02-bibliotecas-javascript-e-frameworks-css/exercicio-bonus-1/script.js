var picker = new Pikaday({ field: document.getElementById('datepicker') });

var picker = new Pikaday({
  field: document.getElementById('datepicker'),
  format: 'D MMM YYYY',

  onSelect: function() {
    document.getElementById('datepicker').value = this.getMoment().format('DD/MM/YYYY');
  },
});

const validate = new window.JustValidate(
  '#form', 
  {
    errorFieldCssClass: 'is-invalid',
    errorFieldStyle: {
      border: '1px solid red',
    },
    errorLabelCssClass: 'is-label-invalid',
    errorLabelStyle: {
      color: 'red',
      textDecoration: 'underlined',
    },
    focusInvalidField: true,
    lockForm: true,
    tooltip: {
      position: 'top',
    },
  },
);

validate
  .addField('#name', [
    {
      rule: 'minLength',
      value: 10,
    },
    {
      rule: 'maxLength',
      value: 40,
    },
    {
      rule: 'required',
      errorMessage: 'Digite seu nome'
    }
  ])
  .addField('#email', [
    {
      rule: 'minLength',
      value: 10,
    },
    {
      rule: 'maxLength',
      value: 50,
    },
    {
      rule: 'required',
      errorMessage: 'Digite seu e-mail',
    },
    {
      rule: 'email',
      errorMessage: 'E-mail inválido',
    },
  ])
  .addField('#answer', [
    {
      rule: 'maxLength',
      value: 500,
    }
  ])
  .addField('#datepicker', [
    {
      rule: 'required',
      errorMessage: 'Informe uma data'
    }
  ])
  .addField('#agree2', [
        {
      rule: 'required',
      errorMessage: 'Campo obrigatório'
    },
  ]);
