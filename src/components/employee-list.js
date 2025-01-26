import { LitElement, html, css } from 'lit';
import { store } from '../state/store.js';
import { localize } from '../utils/locale.js';
import "./employee-singlet.js";

class EmployeeList extends LitElement {
  static styles = css`
    :host {
      display: block;
      text-align: center;
      width: 100%;
      &>div.table {
        display: table;
        border-collapse: collapse;
        padding: 0px;
        width: 100%;
        min-width: 850px;
        &>div {
          display: table-row;
          &>div{
            display: table-cell;
          }
        }
        &>employee-singlet.table{
          display: table-row;
          &>div{
            display: table-cell;
          }
        }
      }
      &>div.grid {
        display: grid;
        justify-content: space-evenly;
        padding: 0px;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        grid-row-gap: 16px;
        &>div {
          display: none;
        }
        &>employee-singlet.grid{
          display: grid;
          grid-auto-flow: row;
        }
      }
    }
  `;

  static properties = {
    employees: { type: Array },
    search: { type: String },
    view: { type: String },
  };

  constructor() {
    super();
    this.employees = store.getEmployees();
    this.search = '';
    this.view = 'table';
    store.subscribe(() => (this.employees = store.getEmployees()));
  }

  render() {
    const filteredEmployees = this.employees.filter(emp =>
      `${emp.firstName} ${emp.lastName}`.toLowerCase().includes(this.search.toLowerCase())
    );
    return html`
    <div class=${this.view}>
    <div>
      <div>${localize('first_name')}</div>
      <div>${localize('last_name')}</div>
      <div>${localize('employment_date')}</div>
      <div>${localize('birth_date')}</div>
      <div>${localize('phone')}</div>
      <div>${localize('email')}</div>
      <div>${localize('department')}</div>
      <div>${localize('position')}</div>        
      <div>${localize('actions')}</div>
    </div>
    ${filteredEmployees.map( emp => html`
      <employee-singlet 
        id=${emp.id}
        firstName=${emp.firstName}
        lastName=${emp.lastName}
        employmentDate=${emp.employmentDate}
        birthDate=${emp.birthDate}
        phone=${emp.phone}
        email=${emp.email}
        department=${emp.department}
        position=${emp.position}
        class=${this.view}
      ></employee-singlet>`
    )}</div>`;
  }

  addEmployee() {
    history.pushState(null, '', '/add');
    window.dispatchEvent(new Event('popstate'));
  }

}

customElements.define('employee-list', EmployeeList);
