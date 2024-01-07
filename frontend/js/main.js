// Backend url
const BACKEND_URL = "http://127.0.0.1:3000/api";

// Define the button
const Button = document.getElementById("btn"),
  Response = document.getElementById("response");

// Add click event to button
Button.addEventListener("click", async (event) => {
  event.preventDefault();

  try {
    // Start request to backend
    const response = await axios.get(BACKEND_URL);

    // Set the response to #response as text
    Response.innerHTML = `API Response: <strong>${response.data}</strong>`;
  } catch (error) {
    console.error(error);
  }
});
