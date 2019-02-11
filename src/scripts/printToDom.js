// function that prints results to DOM

const printAllTasks = () => {
    getAllEmployees().then(employees => {
        document.querySelector(".print-here").innerHTML = ""
        employees.forEach(employee => {
            document.querySelector(".print-here").innerHTML += buildHTMLString(employee)

        })
    })
}