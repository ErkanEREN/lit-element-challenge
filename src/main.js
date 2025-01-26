import { initializeRouter } from './router.js';
import { LitElement, html, css } from 'lit';
import { localize } from './utils/locale.js';

initializeRouter();


import './components/employee-list.js';
import './components/employee-form.js';

class App extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 16px;

    }
  `;

  static properties = {
    search: { type: String },
    view: { type: String },
  };

  constructor() {
    super();
    this.search = '';
    this.view = 'table';
  }

  render() {
    return html`
      <div>
        <h1>${localize('employee_list')}</h1>
        <input
          type="text"
          name="search_employees"
          placeholder="${localize('search_employees')}"
          @input="${e => (this.search = e.target.value)}"
        />
        <button type=button @click="${this.addEmployee}">${localize('add_new')}</button>
        <label for=view-list>${localize('view_list')}
            <input type="radio" id=view-list name=view value=table @change=${e => this.view = e.target.value} checked>
        </label>
        <label for=view-grid>${localize('view_grid')}
            <input type="radio" id=view-grid name=view value=grid @change=${e => this.view = e.target.value}>
        </label>
        <employee-list search=${this.search} view=${this.view} style=${this.view=='table'&&"overflow-x:auto"}></employee-list>
      </div>
    `;
  }

  addEmployee() {
    history.pushState(null, '', '/add');
    window.dispatchEvent(new Event('popstate'));
  }
}

customElements.define('x-app', App);
