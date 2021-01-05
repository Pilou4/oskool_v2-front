import { useToasts } from 'react-toast-notifications';

export const errorMessage = (message, submitElement) => {
  const buttonSubmit = document.querySelector(submitElement);
  const errorMessageElt = document.querySelector('.errorMessage');
  if (errorMessageElt === null) {
    const createDiv = document.createElement('div');
    createDiv.className = 'errorMessage';
    createDiv.textContent = message;
    buttonSubmit.prepend(createDiv);
  }
  else {
    errorMessageElt.innerHTML = message;
  }
};

export const toastNotification = (addToast, history, response, message, destination) => {
  if (response === 'Error') {
    addToast('Une erreur s\'est produite. Veuillez réessayer plus tard', {
      appearance: 'error',
      autoDismiss: true,
    });
  }
  else if (response === 'Success') {
    addToast(message, {
      appearance: 'success',
      autoDismiss: true,
      autoDismissTimeout: '3000',
    });
    history.push(destination);
    // location.reload();
  }
};