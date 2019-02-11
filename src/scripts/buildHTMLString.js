// Function to build Dom String


const buildHTMLString = (objectInput) => {
    return  `<ul><h3>${objectInput.firstName} ${objectInput.lastName}</h3><li>${objectInput.email}</li><li>${objectInput.phoneNumber}</li><li>${objectInput.birthday}</li><li>${objectInput.department}</li>
    </ul>`
}