import { LitElement, html } from 'lit';

const tagName = 'lit-content';

export class LitContent extends LitElement {

    static get properties() {
        return {
          heading: {type: String},
          p: {type: String}
        };
      }

  render() {
    return html`<h1>${this.heading}</h1>
    <p>${this.p}</p>`;
  }
}

customElements.define(tagName, LitContent);