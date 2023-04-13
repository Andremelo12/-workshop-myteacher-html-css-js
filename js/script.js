let teacherforms = document.getElementsByClassName("teacher-contract")
for (let teacherform  of teacherforms){
    teacherform.addEventListener("submit", function(event){
        event.preventDefault()

        let price = teacherform.price.value
        let hours = teacherform.hours.value
        let total = price * hours 

        alert("o valor total do contrato e de R$ " + total)

         
    })

}