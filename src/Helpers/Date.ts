export function getToday(): string{


    const currentDate= new Date();
    return `${currentDate.getDay()}/${currentDate.getMonth()}/${currentDate.getFullYear()}}`

}