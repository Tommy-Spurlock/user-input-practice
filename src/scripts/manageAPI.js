const createEmployee = (newObject) => {
    return fetch("http://localhost:8088/employees", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newObject)
        })
}


const getAllEmployees = () => {
    return fetch("http://localhost:8088/employees")
    .then(response => response.json())
}