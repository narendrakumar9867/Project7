document.addEventListener('DOMContentLoaded', function() {
    fetch('products.json')
        .then(response => response.json())  
        .then(products => {
            const dataOutput = document.getElementById('data-output');

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
        .catch(error => console.error('Error fetching the JSON file:', error)); 
});

function scrollToProducts() {
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}
