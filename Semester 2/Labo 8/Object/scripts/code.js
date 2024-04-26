const setup = () => {
    let student = {}; //een leeg object
    student.firstName = "Joe";
    student.lastName = "Mama";
    student.age = new Date(2000,1,1);
    student.eyeColor = "blue";

    console.log(student.firstName);

    let student1 = {
        firstName : "John",
        lastName : "Doe",
        age : new Date(2005,1,1, 0, 10, 30),
        eyeColor : "yellow"
    };
    console.log(student1.firstName);
    console.log(student1.age);

    let text = JSON.stringify(student1);
    console.log(text);

    // uitbreiding
    let student2 = {
        firstName: "Jerry",
        lastName: "Can",
        address : {
            zipCode : 8500,
            city : "Kortrijk"
        }
    };
    console.log(student2.address.zipCode);

    let tekst = JSON.stringify(student);
    console.log (tekst);

    tekst = JSON.stringify(student2);
    console.log (tekst);

    let students = [
        {
            firstName: "Jerry",
            lastName: "Can",
            address: {
                zipCode: 8500,
                city: "Kortrijk"
            }
        },
        {
            firstName: "Tom",
            lastName: "Can't",
            address: {
                zipCode: 8500,
                city: "Kortrijk"
            }
        }
    ];
// omzetten script-object naar een JSON-object
    tekst = JSON.stringify(students);

    console.log (tekst);
// omzetten JSON-object naar script-object
    tekstJS = JSON.parse(tekst);
    console.log ("JsonParse " + tekstJS[0].firstName);


    tekst = JSON.stringify(students[1]);
    console.log (tekst);
}
window.addEventListener("load", setup);