import { Notyf } from "notyf";
import "notyf/notyf.min.css";

const notyf = new Notyf();

export class Validation {
  constructor() {
    this.reg = {
      email: {
        pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
      }, 
    };
  }
  validate(target) {
    if (!target.dataset.valid && target.value.trim() != "") {
      return true;
    }
    if (target.dataset.valid == "email" && this.reg.email.pattern.test(target.value)) {
      return true;
    } else {
      notyf.error(`Поле ${target.dataset.label || ""} заполнено не корректно`);
      return false;
    }
  }
}
