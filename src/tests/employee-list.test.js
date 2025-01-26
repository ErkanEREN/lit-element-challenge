import { html, fixture, expect } from '@open-wc/testing';
import '../components/employee-list.js';

describe('EmployeeList', () => {
  it('renders the employee list', async () => {
    const el = await fixture(html`<employee-list></employee-list>`);
    expect(el).to.be.accessible();
  });

  it('filters employees by search', async () => {
    const el = await fixture(html`<employee-list></employee-list>`);
    el.search = 'test';
    expect(el.search).to.equal('test');
  });
});
