const btnSend = document.getElementById("send-petition")
const btnClear = document.getElementById("clean-all")

btnClear?.addEventListener("click", () => {
    console.log("Borrando texto...");
    const petitionInput = document.getElementById("petition")
    const questionInput = document.getElementById("question")

    petitionInput.value = ""
    questionInput.value = ""
    console.log("Borrado");
})

btnSend?.addEventListener("click", async () => {
    console.log("enviando petición...");
    const petitionInput = document.getElementById("petition")
    const questionInput = document.getElementById("question")

    if (petitionInput.value === "" || questionInput.value === "") {
        alert("Ambos campos deben estar llenos")
        return
    }

    // enviar la petición
    const dataToSend = {
        answer: "",
        client: "web", 
        language: "es", 
        number: 1, 
        petition: petitionInput.value, 
        question: petitionInput.value
    }
    console.log(dataToSend);

    try {
        const response = await fetch("https://peter-answers.appspot.com/_ah/api/paApi/v1/questions?alt=json", {
            method: "POST", 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataToSend)
        })
        const data = await response.json()
        console.log(data.answer);
        const answer = document.getElementById("answer")
        answer.textContent = data.answer
    } catch (error) {
        alert(error)
        console.error(error);
    }
});