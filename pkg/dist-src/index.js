import { LitElement, html } from "lit-element";
export class MyElement extends LitElement {
  render() {
    return html`
      This is working!
    `;
  }

}
customElements.define("my-element", MyElement);