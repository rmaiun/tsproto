type Age = number | Date

type Cat = {
    name: string,
    age: Age
}

type  CatEntity =  {
    id: number,
    name: string,
    age: number
}

export {
    Cat,
    CatEntity
}