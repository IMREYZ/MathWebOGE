import { input } from "./App.js"


const allRules = {
    1: {
        title: 'Длина пароля должна быть больше трёх символов',
        check: input.lenght > 3
    },

    2: {
        title: 'В пароле должна быть @',
        check: input.lenght
    }
}

console.log(allRules)


