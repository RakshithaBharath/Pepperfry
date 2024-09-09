document.addEventListener('DOMContentLoaded', function() {
    // List of categories
    const categories = [
        "Furniture", "Sofas & Seating", "Mattresses", "Home Decor", "Furnishings", 
        "Lamps & Lighting", "Kitchen & Dining", "Modular", "Sofas", "Beds", 
        "Dining Sets", "Study Tables", "Centre Tables", "Recliners", 
        "Sectional Sofas", "Wardrobes", "Luxury Furniture", "Office Furniture",
        "Shoe Racks", "Cabinets & Sideboards", "Sofa Cum Beds", "Bedside Tables", 
        "Crockery Units", "Book Shelves", "Side Tables", "Ottomans", "Chaise Loungers", 
        "Dressing Tables", "Dining Chairs", "Book Cases", "TV & Media Units", 
        "Futons", "Sofa Chairs", "Chest of Drawers", "Dining Tables", "Gaming Chairs", 
        "Bean Bags", "Furniture Care", "Chairs", "Linen Trunks", "Settees & Benches", 
        "Stools & Pouffes", "Outdoor", "Kids and Teens", "Massagers", "Bar Furniture"
    ];

    const searchInput = document.getElementById('categorySearch');
    const suggestionsList = document.getElementById('suggestions');

    if (searchInput && suggestionsList) {
        searchInput.addEventListener('input', function() {
            const input = this.value.toLowerCase();
            const filteredCategories = categories.filter(category => 
                category.toLowerCase().includes(input)
            );

            suggestionsList.innerHTML = '';

            if (input === '' || filteredCategories.length === 0) {
                suggestionsList.style.display = 'none';
                return;
            }

            filteredCategories.forEach(category => {
                const li = document.createElement('li');
                li.textContent = category;

                li.addEventListener('click', function() {
                    searchInput.value = category;
                    suggestionsList.innerHTML = '';
                    suggestionsList.style.display = 'none';
                });

                suggestionsList.appendChild(li);
            });

            suggestionsList.style.display = 'block';
        });

        document.addEventListener('click', function(event) {
            if (!searchInput.contains(event.target) && !suggestionsList.contains(event.target)) {
                suggestionsList.style.display = 'none';
            }
        });
    }
});
