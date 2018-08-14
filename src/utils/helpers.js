export const containsNullValue = (obj) => {
    const objArr = Object.values(obj)
    const containNull = objArr.some(val => val === null)

    return containNull
}