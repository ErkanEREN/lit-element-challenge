import { LitElement, html, css } from 'lit';
import { store } from '../state/store.js';
import { localize } from '../utils/locale.js';

import './confirmation-dialog.js';

class EmployeeSinglet extends LitElement {
  static styles = css`
    div {
      &.table{
        label{
          display:none
        }
        display: table-cell;
      }
      &.grid{
        padding-left: 6px;
        label{
          font-size: smaller;
          display:block;
          text-align: left;
          color: #888;
          & + span {
          display:block;
          text-align: left;
            padding-left: 12px
          }
        }
      }
    }
  `;

  static properties = {
    /**
     * 
     * @type {Number}
     */
    id: { type: Number },

    /**
     * 
     * @type {String}
     */
    firstName: { type: String },

    /**
     * 
     * @type {String}
     */
    lastName: { type: String },

    /**
     * 
     * @type {Date}
     */
    employmentDate: { type: String },

    /**
     * 
     * @type {Date}
     */
    birthDate: { type: String },

    /**
     * 
     * @type {number}
     */
    phone: { type: Number },

    /**
     * 
     * @type {String}
     */
    email: { type: String },

    /**
     * 
     * @type {'Analytics' | 'Tech'}
     */
    department: { type: String },

    /**
     * 
     * @type {'Junior' | 'Medior' | 'Senior'}
     */
    position: { type: String },
    view: { type: String },
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
    this.view = 'table';
  }

  render() {
    return html`
      <div class=${this.view}>
        <label for="first_name">${localize('first_name')}</label>
        <span id="first_name">${this.firstName}</span>
      </div>
      <div class=${this.view}>
        <label for="last_name">${localize('last_name')}</label>
        <span id="last_name">${this.lastName}</span>
      </div>
      <div class=${this.view}>
        <label for="employment_date">${localize('employment_date')}</label>
        <span id="employment_date">${this.employmentDate}</span>
      </div>
      <div class=${this.view}>
        <label for="birth_date">${localize('birth_date')}</label>
        <span id="birth_date">${this.birthDate}</span>
      </div>
      <div class=${this.view}>
        <label for="phone">${localize('phone')}</label>
        <span id="phone">${this.phone}</span>
      </div>
      <div class=${this.view}>
        <label for="email">${localize('email')}</label>
        <span id="email">${this.email}</span>
      </div>
      <div class=${this.view}>
        <label for="department">${localize('department')}</label>
        <span id="department">${this.department}</span>
      </div>
      <div class=${this.view}>
        <label for="position">${localize('position')}</label>
        <span id="position">${this.position}</span>
      </div>
      <div id="actions">
        <a href="/edit/${this.id}" data-link>
          ${localize('edit')}
        </a>
        <button type=button @click="${() => this.confirmDelete(this.id)}">
          ${localize('delete')}
        </button>
      </div>
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
