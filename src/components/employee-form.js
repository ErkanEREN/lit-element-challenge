import { LitElement, html, css } from 'lit';
import { store } from '../state/store.js';
import { localize } from '../utils/locale.js';

class EmployeeForm extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 0px;
    }
    form {
      max-width: 400px;
      margin: auto;
    }
    label {
      display: block;
      margin-bottom: 8px;
    }
    input, select {
      width: 100%;
      padding: 8px;
      margin-bottom: 16px;
    }
  `;

  static properties = {
    params: { type: Object },
    employee: { type: Object },
  };

  constructor() {
    super();
    this.params = { };
    this.employee = { id: null, firstName: '', lastName: '', employmentDate: '', birthDate: '', phone: '', email: '', department: '', position: ''};
  }

  connectedCallback() {
    super.connectedCallback();
    if (this.params?.id) {
      const emp = store.getEmployeeById(this.params.id);
      if (emp) this.employee = { ...emp };
    }
  }

  render() {
    return html`
      <div>
        <h1>${localize(this.employee.id ? localize('edit_employee') : localize('add_employee'))}</h1>
        <form @submit="${this.submitForm}">
          <label for='first_name'>${localize('first_name')}</label>
          <input id='first_name'
            type="text"
            .value="${this.employee.firstName}"
            @input="${e => (this.employee.firstName = e.target.value)}"
            required autocomplete=given-name
          />
          <label for='last_name'>${localize('last_name')}</label>
          <input id='last_name'
            type="text"
            .value="${this.employee.lastName}"
            @input="${e => (this.employee.lastName = e.target.value)}"
            required autocomplete=family-name
          />
          <label for='employment_date'>${localize('employment_date')}</label>
          <input id='employment_date'
            type="date"
            .value="${this.employee.employmentDate}"
            @input="${e => (this.employee.employmentDate = e.target.value)}"
            required
          />
          <label for='birth_date'>${localize('birth_date')}</label>
          <input id='birth_date'
            type="date"
            .value="${this.employee.birthDate}"
            @input="${e => (this.employee.birthDate = e.target.value)}"
            required autocomplete=bday
          />
          <label for='phone'>${localize('phone')}</label>
          <input id='phone'
            type="tel"
            .value="${this.employee.phone}"
            @input="${e => (this.employee.phone = e.target.value)}"
            required autocomplete=tel
          />
          <label for='email'>${localize('email')}</label>
          <input id='email'
            type="email"
            .value="${this.employee.email}"
            @input="${e => (this.employee.email = e.target.value)}"
            required autocomplete=email
          />
          <label for='department'>${localize('department')}</label>
          <select id='department'
            .value="${this.employee.department}"
            @change="${e => (this.employee.department = e.target.value)}"
          >
            <option value="Analytics">${localize('analytics')}</option>
            <option value="Tech">${localize('tech')}</option>
          </select>

          <label for='position'>${localize('position')}</label>
          <select id='position'
            .value="${this.employee.position}"
            @change="${e => (this.employee.position = e.target.value)}"
          >
            <option value="Junior">${localize('junior')}</option>
            <option value="Medior">${localize('medior')}</option>
            <option value="Senior">${localize('senior')}</option>
          </select>
          <button type="submit">${localize('save')}</button>
          <button type="button" @click="${this.cancel}">
            ${localize('cancel')}
          </button>
        </form>
      </div>
    `;
  }

  submitForm(e) {
    e.preventDefault();
    if (this.employee.id) {
      store.updateEmployee(this.employee);
    } else {
      store.addEmployee(this.employee);
    }
    history.pushState(null, '', '/');
    window.dispatchEvent(new Event('popstate'));
  }

  cancel() {
    history.pushState(null, '', '/');
    window.dispatchEvent(new Event('popstate'));
  }
}

customElements.define('employee-form', EmployeeForm);
