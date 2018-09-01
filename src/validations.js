const isValid = (input) => {
    return !input.some(isNaN) && !input.some(v => v < 0);
}

export default isValid;