export const getWrongLetters = (word, inputs) => {
    const newArr = inputs.filter(letter => word.indexOf(letter) == -1)
    return newArr
}
export const getRightLetters = (word, inputs) => {
    const arrWord = word.split('')
    return arrWord.filter(letter => inputs.includes(letter))
}
