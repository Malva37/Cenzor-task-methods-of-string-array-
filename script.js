let getSel = sel => document.querySelector(sel);
const formCenzor = document.forms['formCenzor'];
const enterWords = formCenzor.enterWords;
const add = formCenzor.add;
const reset = formCenzor.reset;
const badWords = getSel('.badWords');
const enterTextCenzor = formCenzor.enterTextCenzor;
const textCenzor = formCenzor.textCenzor;
let badWordsArray = ['Java', ' tottenham'];

enterBadWords = () => badWords.textContent = badWordsArray;
enterBadWords();

add.onclick = () => {
    if (enterWords.value) {
        badWordsArray.push(`${enterWords.value}`);
        enterBadWords();
        enterWords.value = '';
    } else {
        enterWords.classList.add('invalid');
        enterWords.placeholder = 'Please, write a word!';
    }
}
reset.onclick = () => {
    badWordsArray = [];
    enterWords.classList.remove('invalid');
    enterWords.placeholder = 'word here...';
    enterBadWords();
}
textCenzor.onclick = () => {
    if (enterTextCenzor.value) {
        let textCenzorArr = enterTextCenzor.value.split(' ');
        for (const badWord of badWordsArray) {
            textCenzorArr.forEach((value, index
                ) => {
                if (badWord == value) {
                    let newValue = '*'.repeat(value.length);
                    textCenzorArr.splice(index, 1, newValue)
                }
            });
            enterTextCenzor.value = textCenzorArr.join(' ');
        }
        enterTextCenzor.classList.remove('invalid');
        enterTextCenzor.classList.add('valid');
    } else {
        enterTextCenzor.classList.remove('valid');
        enterTextCenzor.classList.add('invalid');
        enterTextCenzor.placeholder = 'Please, write a text!';
    }
}