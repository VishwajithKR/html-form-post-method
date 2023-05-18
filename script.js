
document.getElementById("form").addEventListener("submit", async function (e) {
    e.preventDefault();

    var data = {
        name: document.getElementById("Name").value,
        email: document.getElementById("Email").value,
        educaction: document.getElementById("Qualification").value,
        city: document.getElementById("placeName").value,
        pincode: document.getElementById("Pincode").value,
        state: document.getElementById("state").value,
        country: document.getElementById("country").value,
        phone: document.getElementById("number").value,
        password: document.getElementById("SecretCode").value
    }
    console.log(data)
    try {
        await fetch("https://6360d91767d3b7a0a6b6ba2c.mockapi.io/newdata", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
    } catch (error) {
        console.log(error);
    }
});





