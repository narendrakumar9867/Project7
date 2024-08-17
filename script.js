document.addEventListener('DOMContentLoaded', function() {
    // Fetch the JSON file
    fetch('products.json')
        .then(response => response.json())  // Parse the JSON file
        .then(products => {
            const dataOutput = document.getElementById('data-output');

            // Iterate over the products array and create table rows
            products.forEach(product => {
                const row = document.createElement('tr');

                row.innerHTML = `
                    <td><img src="${product.image}" alt="${product.name}" style="width: 100px; height: auto;"></td>
                    <td>${product.name}</td>
                    <td>$${product.price}</td>
                    <td>${product.inventory}</td>
                    <td>${product.productCode}</td>
                `;

                dataOutput.appendChild(row);
            });
        })
        .catch(error => console.error('Error fetching the JSON file:', error)); // Handle errors
});

function scrollToProducts() {
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}
