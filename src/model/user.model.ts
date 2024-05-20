export interface User {
    id: number;
    // datos personales
    username: string;
    firstSurname: string;
    secondSurname: string;
    nif: string;
    gender: string;
    // direccion
    adrress: string;
    number: string;
    door: string;
    postalCode: string;
    city: string;
    //estudios
    nameSchool: string;
    studies: string;
    dateStudies: string;
}