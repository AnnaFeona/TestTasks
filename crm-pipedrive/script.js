const API_KEY = "1c69385fcccbd50aadfc2c77a0f66e88dc6e7d53"; // Замени на твой API ключ
const API_URL = `https://api.pipedrive.com/v1/deals?api_token=${API_KEY}`;

async function createDeal(data) {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    if (response.ok) {
      console.log("Deal created successfully:", result);
      alert("Deal created successfully!");
    } else {
      console.error("Error creating deal:", result);
      alert("Failed to create deal");
    }
  } catch (error) {
    console.error("Request failed:", error);
    alert("An error occurred");
  }
}

document.getElementById("deal-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = {
    title: document.getElementById("name").value,
    value: parseFloat(document.getElementById("deal-value").value) || 0,
    currency: "USD",
    status: "open",
  };

  createDeal(formData);
});
