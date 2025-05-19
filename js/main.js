document.addEventListener('DOMContentLoaded', function() {
    // Hiển thị danh sách sản phẩm trên trang chủ
    const productListElement = document.getElementById('product-list');
    
    // Kiểm tra nếu đang ở trang chủ
    if (productListElement) {
        displayProducts(productListElement);
    }
});

// Hàm hiển thị danh sách sản phẩm
function displayProducts(container) {
    products.forEach(product => {
        // Lấy ảnh ngẫu nhiên cho sản phẩm
        const randomImage = getRandomProductImage(product);
        
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        productCard.innerHTML = `
            <a href="product.html?id=${product.id}">
                <img src="${randomImage}" alt="${product.name}" onerror="this.src='${product.thumbnail}'">
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p class="product-price">${product.price}</p>
                    <p class="product-short-desc">${product.description.substring(0, 80)}${product.description.length > 80 ? '...' : ''}</p>
                </div>
            </a>
        `;
        
        container.appendChild(productCard);
    });
} 