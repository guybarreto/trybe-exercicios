var picker = new Pikaday({ field: document.getElementById('datepicker') });

var picker = new Pikaday({
  field: document.getElementById('datepicker'),
  format: 'D MMM YYYY',
  onSelect: function () {
    console.log(this.getMoment().format('Do MMMM YYYY'));
  },
});

const validate = new window.JustValidate('#form');
const validation = new JustValidate('#form');

validation
  .addField('#name', [
    {
      rule: 'minLength',
      value: 3,
    },
    {
      rule: 'maxLength',
      value: 30,
    },
  ])
  .addField('#email', [
    {
      rule: 'required',
      errorMessage: 'Email is required',
    },
    {
      rule: 'email',
      errorMessage: 'Email is invalid!',
    },
  ]);
console.log(moment().format('DD/MM/YYYY'));
