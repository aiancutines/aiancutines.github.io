// Wait for the DOM content to be fully loaded before executing JavaScript
document.addEventListener("DOMContentLoaded", function () {
    // Get reference to the submit button
    const submitButton = document.getElementById("submit");

    // Add event listener for submit button click
    submitButton.addEventListener("click", function () {
        // Get values from form inputs and trim whitespace
        const fname = document.getElementById("fname").value.trim();
        const fdes = document.getElementById("fdes").value.trim();
        const url = document.getElementById("url").value.trim();
        const rank = document.getElementById("rank").value.trim();

        // Check if any input field is empty or rank is not a number
        if (!fname || !fdes || !url || !rank || isNaN(rank)) {
            alert("Please fill all fields correctly!");
            return;
        }

        // Create a new food card element
        const foodCard = createFoodCard(fname, fdes, url, parseInt(rank, 10));
        const foodCardsContainer = document.getElementById("foodCards");

        // Get existing food cards
        const existingCards = foodCardsContainer.getElementsByClassName("food-card");

        // Insert the new food card into the correct position based on rank
        let inserted = false;
        for (let i = 0; i < existingCards.length; i++) {
            const existingRank = parseInt(existingCards[i].getAttribute("data-rank"), 10);
            if (rank < existingRank) {
                foodCardsContainer.insertBefore(foodCard, existingCards[i]);
                inserted = true;
                break;
            }
        }

        // If the new card was not inserted, append it to the end
        if (!inserted) {
            foodCardsContainer.appendChild(foodCard);
        }

        // Reset form inputs after submission
        document.getElementById("fname").value = "";
        document.getElementById("fdes").value = "";
        document.getElementById("url").value = "";
        document.getElementById("rank").value = "";
    });

    // Function to create a new food card element
    function createFoodCard(name, description, imageUrl, rank) {
        const card = document.createElement("div");
        card.classList.add("food-card");
        card.setAttribute("data-rank", rank);

        // Generate HTML content for the food card
        const cardContent = `
            <h3>Rank: ${rank}</h3>
            <p>Food Name: ${name}</p>
            <p>Description: ${description}</p>
            <img src="${imageUrl}" alt="${name}">
            <br>
            <button class="delete-btn">Delete</button>
        `;
        card.innerHTML = cardContent;

        // Add event listener to delete button to remove the card
        const deleteButton = card.querySelector(".delete-btn");
        deleteButton.addEventListener("click", function () {
            card.remove();
        });

        return card; // Return the created card element
    }
});