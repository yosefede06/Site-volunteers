import {CanActivateFn} from '@angular/router';

export const adminGuard: CanActivateFn = (route, state) => {
  const isPasswordCorrect = window.prompt('Enter admin password:') === 'admin123'; // Hardcoded password

  if (isPasswordCorrect) {
    return true;
  } else {
    alert('Invalid password. Access denied.');
    return false;
  }
};
