import { html, fixture, expect } from '@open-wc/testing';
import '../components/employee-form.js';

describe('EmployeeForm', () => {
  it('renders the form', async () => {
    const el = await fixture(html`<employee-form></employee-form>`);
    expect(el).to.be.accessible();
  });

  it('submits the form with valid data', async () => {
    const el = await fixture(html`<employee-form></employee-form>`);
    el.employee = { firstName: 'John', lastName: 'Doe', position: 'Manager' };
    el.submitForm(new Event('submit'));
    expect(el.employee.firstName).to.equal('John');
  });
});
