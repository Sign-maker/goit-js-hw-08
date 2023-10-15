import throttle from 'lodash.throttle';
import { common } from './common';

const formRef = document.querySelector('.feedback-form');
const formDataObj =
  JSON.parse(localStorage.getItem(common.FEEDBACK_FORM_STATE)) ?? {};

modifyFormDataObj(formDataObj, 'readKeysToForm');
formRef.addEventListener('submit', onSubmit);
formRef.addEventListener('input', throttle(onInput, 500));

function modifyFormDataObj(obj, action) {
  const objKeys = Object.keys(obj);

  if (!objKeys.length) {
    return;
  }

  if (action === 'readKeysToForm') {
    objKeys.forEach(key => {
      formRef.elements[key].value = obj[key];
    });
  }

  if (action === 'removeKeys') {
    objKeys.forEach(key => delete obj[key]);
  }
}

function onInput({ target }) {
  formDataObj[target.name] = target.value;
  localStorage.setItem(common.FEEDBACK_FORM_STATE, JSON.stringify(formDataObj));
}

function onSubmit(evt) {
  evt.preventDefault();
  console.log(formDataObj);

  modifyFormDataObj(formDataObj, 'removeKeys');
  evt.target.reset();
  localStorage.removeItem(common.FEEDBACK_FORM_STATE);
}
