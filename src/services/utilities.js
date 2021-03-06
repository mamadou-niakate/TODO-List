export const isDeadlineReached = (date) => {
    const today = new Date();
    const dateWithDashReplacedBySlash = replaceCaractere(date,'-','/')

    const dateStringToArray = dateWithDashReplacedBySlash.toString().split("/");
    const dateStringToDateObject = new Date(dateStringToArray[0],dateStringToArray[1]-1,dateStringToArray[2]);

    const isDeadlineReached = today.getTime() > dateStringToDateObject.getTime();
    return isDeadlineReached;
}

const replaceCaractere = (stringValue,old_char,new_char) => {
    const newString = stringValue.toString().replace(old_char,new_char);
    if(newString.includes(old_char)) {
        return replaceCaractere(newString,old_char,new_char)
    }
    return stringValue
}