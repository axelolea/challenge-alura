import { dictionary } from "./dictionary";

export function encrypted (value: string) :string {
    let newString = value;
    Object.keys(dictionary).forEach(letter => {
        newString = newString.replace(letter, dictionary[letter])
    });
    return newString;
}

export function decrypted (value: string) :string {
    let newString = value;
    Object.keys(dictionary).forEach(letter => {
        newString = newString.replace(letter, dictionary[letter])
    });
    return newString;
}