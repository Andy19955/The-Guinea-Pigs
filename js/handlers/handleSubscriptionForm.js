import { displayMessage } from "../ui/shared/displayMessage.js";
import { validateEmail } from "../helpers/validateEmail.js";

export function handleSubscriptionForm() {
  const sendButton = document.querySelector("#send-btn");

  sendButton.addEventListener("click", (event) => {
    event.preventDefault();

    const email = document.querySelector("#email");

    if (validateEmail(email.value)) {
      email.classList.remove("error");
    } else {
      displayMessage("#message-container-newsletter", "The e-mail must be a valid e-mail address.", "error");
      email.classList.add("error");
      return;
    }

    displayMessage("#message-container-newsletter", "Thank you for subscribing to our newsletters! You will receive an e-mail as soon as we publish a new post.", "success");

    email.value = "";
  });
}
