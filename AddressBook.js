
// UC1
class Contact{
    firstName;
    lastName;
    address;
    state;
    city;
    zipCode;
    email;
    phoneNumber;

   //created constructor
    constructor(firstName,lastName,address,state,city,zipCode,email,phoneNumber){
        this.firstName = firstName
        this.lastName = lastName
        this.address = address
        this.state = state
        this.city = city
        this.zipCode = zipCode
        this.email = email
        this.phoneNumber = phoneNumber
    }
}

var addressBook;
// UC2
function contactDetails(firstName,lastName,address,state,city,zipCode,email,phoneNumber){
    
    //checking duplicate
    if (isDuplicate(firstName)) {
        console.log("Contact With Name " + firstName + " Already Present");
        return;
    }
    const firstNamePattern = /^[A-Z][a-zA-Z]{3,}/;
    let firstName_Check = firstNamePattern.test(firstName);

    const lastNamePattern = /^[A-Z][a-zA-Z]{3,}/;
    let lastName_Check = lastNamePattern.test(lastName);

    const addressPattern = /^[A-Za-zA-Z0-9]{3,}/;
    let address_Check = addressPattern.test(address);

    const statePattern = /^[A-Za-zA-Z]{3,}/;
    let state_Check = statePattern.test(state);

    const cityPattern = /^[A-Za-zA-Z]{3,}/;
    let city_Check = cityPattern.test(city);

    const zipCodePattern = /^[0-9]{6}/;
    let zipCode_Check = zipCodePattern.test(zipCode) ;

    const emailPattern = /^[A-Za-z0-9]+(.[A-Za-z0-9]+)@[^\\W]+(.[^\\W]+)?(?=(.[^_\\W]{3,}$|.[a-zA-Z]{2}$)).$/;
    let email_Check = emailPattern.test(email);

    const phoneNumberPattern = /^[0-9]{10}/;
    let phoneNumber_Check = phoneNumberPattern.test(phoneNumber);

        if(firstName_Check == true && lastName_Check == true && address_Check == true && state_Check == true && city_Check == true
                        && zipCode_Check == true && email_Check == true && phoneNumber_Check == true){
           
            addContact(firstName,lastName,address,state,city,zipCode,email,phoneNumber);

        }else{
            throw 'Contact Details Are Invalid';
        }  
}

// UC3
// method for adding contact
function addContact(firstName,lastName,address,state,city,zipCode,email,phoneNumber) {
    if (addressBook == null) {
        addressBook = new Array();
    }
    let newContact = new Contact(firstName,lastName,address,state,city,zipCode,email,phoneNumber);
    console.log("Contact Added Successfully");
    
    addressBook.push(newContact);
    console.log(addressBook);
}

// UC4
// method to find and edit Contacts
function editContact(findName,editedVariable,variableNewValue){
    if(addressBook.length == null){
        console.log("Add Contact In Address Book");
    }else{
        addressBook.forEach(newContact => {
            if(newContact.firstName == findName){
                switch(editedVariable){
                    case "firstName":
                        newContact.firstName = variableNewValue;
                        break;
                    case "lastName":
                        newContact.lastName = variableNewValue;
                        break;
                    case "address":
                        newContact.address = variableNewValue;
                        break;
                    case "state":
                        newContact.state = variableNewValue;
                        break;
                    case "city":
                        newContact.city = variableNewValue;
                        break;
                    case "zipCode":
                        newContact.zipCode = variableNewValue;
                        break;  
                    case "firstName":
                        newContact.firstName = variableNewValue;
                        break;
                    case "lastName":
                        newContact.lastName = variableNewValue;
                        break;      
                }
            }
        })
    }
}

// UC5
// method to delete
function deleteContact(first_Name){
    if(addressBook.length == null){
        console.log("Add Contact In Address Book");
    }else{
        for(let i = 0; i <addressBook.length ; i++){
            if(addressBook[i].firstName == first_Name){
                addressBook.splice(i,1);
                console.log("Contact Deleted Successfully");
            }
        }
    }
}

// UC6
// method to Count Total Number Of Contact 
function countContact(){
    addressBook.reduce(() => {
        count++;
    },count = 0);
    console.log("\nTotal Contacts In Address Book Are: "+count + "\n");
}

// UC7
//method for Duplicate Check Function
function isDuplicate(firstName) {
    // Filter matching names
    let duplicates = addressBook.filter(contact => contact.firstName === firstName);
    // Reduce to count duplicates
    let duplicateCount = duplicates.reduce((count) => count + 1, 0);
    return duplicateCount > 0;
}

// UC8
// method to Search Contact 
function searchByCity_State(choice , name){
    if(choice == "city"){
        person = addressBook.filter(contact => contact.city == name)
        .map(contact => contact.firstName);
        console.log("Contact Found Who Is From "+name);
        console.log(person);
    }else if(choice == "state"){
        person = addressBook.filter(contact => contact.state == name)
        .map(contact => contact.firstName);
        console.log("Contact Found Who Is From "+name);
        console.log(person);
    }else{
        console.log("Provide Right City or State Name");
    }
}

// UC9
// method created to View Contact
function viewByCityOrState(choice , name){
    if(choice == "city"){
        person = addressBook.filter(contact => contact.city == name)
        console.log("Contact Found Who Is From "+name);
        console.log(person);
    }else if(choice == "state"){
        person = addressBook.filter(contact => contact.state == name)
        console.log("Contact Found Who Is From "+name);
        console.log(person);
    }else{
        console.log("Provide Right City or State Name");
    }
}

// UC10
// count contact
function countContactInCity_State(choice , name){
    if(choice == "city"){
        person = addressBook.filter(contact => contact.city == name)
        .reduce(() => { count++;},count = 0);
        console.log("Total Number Of Contact Found Who Is From "+name+" Are " +count);
    }else if(choice == "state"){
        person = addressBook.filter(contact => contact.state == name)
        .reduce(() => { count++;},count = 0);
        console.log("Total Number Of Contact Found Who Is From "+name+" Are " +count);
    }else{
        console.log("Provide Right City or State Name");
    }
}

// UC11
// sorting by name
function sortContactbyName(){
    console.log(addressBook.sort((newContact1,newContact2) => {
        one = newContact1.firstName;
        two = newContact2.firstName;
        if(one < two){
            return -1;
        }else if(one == two){
            return 0;
        }else{
            return 1;
        }
    }));
}

// UC12
// sorting 
function sortContact(choice){
    console.log(addressBook.sort((newContact1,newContact2) => {
        switch(choice){
            case "firstName":
                one = newContact1.firstName;
                two = newContact2.firstName;
                break;
            case "city":
                one = newContact1.city;
                two = newContact2.city;
                break;
            case  "state":
                one = newContact1.state;
                two = newContact2.state;
                break;
            case "zipCode":
                one = newContact1.zipCode;
                two = newContact2.zipCode;
                break;
            default:
                console.log("Provide Valid Input for firstName or city or state or zipCode")
        }
   
        if(one < two){
            return -1;
        }else if(one == two){
            return 0;
        }else{
            return 1;
        }
    }));
}
