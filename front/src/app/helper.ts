class Person {
    key!: string;
    firstName!: string;
    lastName!: string;
    cellPhone!: string;
    active!: boolean;
    statusChange!: string;
}

export class Helper extends Person {
    availability!: string;
    experience!: string;
    languages!: string;
    linkedin!: string;
    moreInfo!: string;
}

export class  Suggestion extends Person{
    moreInfo!: string;
}