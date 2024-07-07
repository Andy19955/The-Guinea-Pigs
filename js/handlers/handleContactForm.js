import { displayMessage } from "../ui/shared/displayMessage.js";
import { checkLength } from "../helpers/checkLength.js";
import { validateEmail } from "../helpers/validateEmail.js";

export function handleContactForm() {
  const sendButton = document.querySelector("#send-btn");

  sendButton.addEventListener("click", (event) => {
    event.preventDefault();
    // Test

    const name = document.querySelector("#name");
    const email = document.querySelector("#email");
    const subject = document.querySelector("#subject");
    const message = document.querySelector("#message");

    if (checkLength(name.value, 5) === true) {
      name.classList.remove("error");
    } else {
      displayMessage(".message-container", "The name must be minimum 6 characters long", "error");
      name.classList.add("error");
      return;
    }

    if (validateEmail(email.value)) {
      email.classList.remove("error");
    } else {
      displayMessage(".message-container", "The e-mail must be a valid e-mail address.", "error");
      email.classList.add("error");
      return;
    }

    if (checkLength(subject.value, 15) === true) {
      subject.classList.remove("error");
    } else {
      displayMessage(".message-container", "The subject must be minimum 16 characters long", "error");
      subject.classList.add("error");
      return;
    }

    if (checkLength(message.value, 25) === true) {
      message.classList.remove("error");
    } else {
      displayMessage(".message-container", "The message must be minimum 26 characters long", "error");
      message.classList.add("error");
      return;
    }

    displayMessage(".message-container", "Thank you for the message! We will respond as soon as possible.", "success");

    name.value = "";
    email.value = "";
    subject.value = "";
    message.value = "";
  });
}
