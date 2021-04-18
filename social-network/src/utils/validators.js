export const required = (value) => {
    if(!value) return 'Field is empty!'
    else return undefined
}

export const maxLengthCreator = (maxLength) => (value) => {
    if(value.length > maxLength) return `Maximum length is ${maxLength}!`
    else return undefined
}