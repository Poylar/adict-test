// Не знаю зачем я это написал, наверное чтобы показать что я могу наговнодить

import { Validation } from "./Validation";
import { Notyf } from "notyf";
import "notyf/notyf.min.css";

const notyf = new Notyf();
const API_URL = "https://jsonplaceholder.typicode.com/posts";

export default class Form extends Validation {
  constructor(form, label = ".js-label-input") {
    super();
    this.form = form;
    this.label = label;
    this.formStatus = false;
    this.listener();
  }
  validation(target) {
    return this.validate(target);
  }
  data(e) {
    const inputs = e.target.querySelectorAll(`${this.label} input, ${this.label} textarea`);
    const inputsValues = [...inputs].map((elem) => {
      return {
        [elem.dataset.label || "Поле"]: elem.value,
      };
    });
    return inputsValues;
  }
  submit(e) {
    const inputsValues = this.data(e);
    fetch(API_URL, {
      method: "POST",
      body: JSON.stringify([...inputsValues]),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        notyf.success("Форма отправлена");
        console.log(json);
      })
      .catch(()=> {
        notyf.error("Ошибка на стороне сервера");
      });
  }
  async response(e) {
    const inputs = e.target.querySelectorAll(`${this.label} input, ${this.label} textarea`);
    const promise = () =>
      new Promise((resolve, reject) => {
        inputs.forEach((elem) => {
          if (this.validation(elem)) {
            e.target.classList.add("success");
            elem.classList.remove("validate-error");
            setTimeout(() => {
              e.target.classList.remove("success");
            }, 3000);
          } else {
            elem.classList.add("validate-error");
            reject();
          }
        });
        resolve(e);
      });
    await promise()
      .then((e) => {
        this.submit(e);
        inputs.forEach((elem) => {
          elem.value = "";
          elem.classList.remove("validate-error");
        });
      })
      .catch(() => {
        return false;
      });
  }
  listener() {
    document.addEventListener("submit", (e) => {
      if (e.target.closest(this.form)) {
        e.preventDefault();
        this.response(e);
      }
    });
  }
}
