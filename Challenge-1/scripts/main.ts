import { encrypted, decrypted } from "./decoder";

const encryptBtn = document.querySelector('button#encrypt') as HTMLButtonElement;
const decryptBtn = document.querySelector('button#decrypt') as HTMLButtonElement;

const textInput = document.querySelector('textarea#textInput') as HTMLTextAreaElement;
const textOutput = document.querySelector('textarea#textOutput') as HTMLTextAreaElement;

const insertTextOutput = (
    inputText: string,
    decoder: (textTransform: string) => string
) => textOutput.value = decoder(inputText)

encryptBtn.onclick = () => insertTextOutput(textInput.value ,encrypted)
decryptBtn.onclick = () => insertTextOutput(textInput.value ,decrypted)
