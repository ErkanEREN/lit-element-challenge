import { LitElement, html, css } from 'lit';
import { store } from '../state/store.js';
import { localize } from '../utils/locale.js';

import './confirmation-dialog.js';

class EmployeeSinglet extends LitElement {
  static styles = css`
  `;

  static properties = {
    /**
     * 
     * @type {Number}
     */
    id: {type: Number},

    /**
     * 
     * @type {String}
     */
    firstName: {type: String},
    
    /**
     * 
     * @type {String}
     */
    lastName: {type: String},
    
    /**
     * 
     * @type {Date}
     */
    employmentDate: {type: String},
    
    /**
     * 
     * @type {Date}
     */
    birthDate: {type: String},

    /**
     * 
     * @type {number}
     */
    phone: {type: Number},
    
    /**
     * 
     * @type {String}
     */
    email: {type: String},
    
    /**
     * 
     * @type {'Analytics' | 'Tech'}
     */
    department: {type: String},

    /**
     * 
     * @type {'Junior' | 'Medior' | 'Senior'}
     */
    position: {type: String},
  };

  constructor() {
    super();
    this.id = 0;
    this.firstName = '';
    this.lastName = '';
    this.employmentDate = '';
    this.birthDate = '';
    this.phone = 0;
    this.email = '';
    this.department = '';
    this.position = '';
  }

  render() {
    return html`
      <td>${this.firstName}</td>
      <td>${this.lastName}</td>
      <td>${this.employmentDate}</td>
      <td>${this.birthDate}</td>
      <td>${this.phone}</td>
      <td>${this.email}</td>
      <td>${this.department}</td>
      <td>${this.position}</td>
      <td>
        <a href="/edit/${this.id}" data-link>
          ${localize('edit')}
        </a>
        <button type=button @click="${() => this.confirmDelete(this.id)}">
          ${localize('delete')}
        </button>
      </td>
    `;
  }


  confirmDelete(id) {
    const dialog = document.createElement('confirmation-dialog');
    dialog.message = localize('delete_confirm');
    dialog.onConfirm = () => {
      store.deleteEmployee(id);
      dialog.remove();
    };
    document.body.appendChild(dialog);
  }
}

customElements.define('employee-singlet', EmployeeSinglet);
