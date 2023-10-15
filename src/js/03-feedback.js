import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');
const FEEDBACK_FORM_STATE = 'feedback-form-state';

const formData = JSON.parse(localStorage.getItem(FEEDBACK_FORM_STATE)) ?? {};

Object.keys(formData).forEach(key => {
  if (key) {
    formRef.elements[key].value = formData[key];
  }
});

formRef.addEventListener('input', throttle(onInput, 500));

function onInput({ target }) {
  formData[target.name] = target.value;
  localStorage.setItem(FEEDBACK_FORM_STATE, JSON.stringify(formData));
}

formRef.addEventListener('submit', onSubmit);

function onSubmit(evt) {
  evt.preventDefault();
  console.log(formData);
  Object.keys(formData).forEach(key => delete formData[key]);
  evt.target.reset();
  localStorage.removeItem(FEEDBACK_FORM_STATE);
}
