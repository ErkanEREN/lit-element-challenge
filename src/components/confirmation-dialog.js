import { LitElement, html, css } from 'lit';

class ConfirmationDialog extends LitElement {
  static styles = css`
    :host {
      display: flex;
      justify-content: center;
      align-items: center;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
    }
    .dialog {
      background: white;
      padding: 20px;
      border-radius: 8px;
      max-width: 400px;
      text-align: center;
    }
    button {
      margin: 10px;
      padding: 8px 16px;
    }
  `;

  static properties = {
    message: { type: String },
    onConfirm: { type: Function },
  };

  constructor() {
    super();
    this.message = '';
    this.onConfirm = () => {};
  }

  render() {
    return html`
      <div class="dialog">
        <p>${this.message}</p>
        <button @click="${this.confirm}">Confirm</button>
        <button @click="${this.cancel}">Cancel</button>
      </div>
    `;
  }

  confirm() {
    this.onConfirm();
    this.remove();
  }

  cancel() {
    this.remove();
  }
}

customElements.define('confirmation-dialog', ConfirmationDialog);
