let currentImageIndex = 0;
let productImages = [];

document.addEventListener('DOMContentLoaded', function() {
    // Lấy ID sản phẩm từ URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    
    if (productId) {
        // Lấy thông tin sản phẩm
        const product = getProductById(productId);
        
        if (product) {
            // Hiển thị tên sản phẩm
            document.getElementById('product-name').textContent = product.name;
            document.title = product.name + ' - Phụ kiện Trung Thu';
            
            // Cập nhật meta tags
            updateMetaTags(product);
            
            // Hiển thị thông tin giá và mô tả
            displayProductInfo(product);
            
            // Lấy container hình ảnh
            const imagesContainer = document.getElementById('product-images');
            
            // Hiển thị hình ảnh cho sản phẩm
            loadProductImages(product, imagesContainer);
            
            // Hiển thị video nếu có
            if (product.videos && product.videos.length > 0) {
                const videoContainer = document.getElementById('product-videos');
                if (videoContainer) {
                    displayProductVideos(product, videoContainer);
                }
            }
            
            // Thiết lập sự kiện cho các nút điều hướng gallery
            setupGalleryNavigation();
        } else {
            // Không tìm thấy sản phẩm
            document.getElementById('product-name').textContent = 'Không tìm thấy sản phẩm';
            document.getElementById('product-images').innerHTML = '<p>Không tìm thấy thông tin sản phẩm.</p>';
        }
    }
});

// Hiển thị thông tin chi tiết sản phẩm
function displayProductInfo(product) {
    const productInfoElement = document.getElementById('product-info');
    if (productInfoElement) {
        productInfoElement.innerHTML = `
            <div class="product-detail-image">
                <img src="${product.thumbnail}" alt="${product.name}" class="product-image">
            </div>
            <div class="product-info">
                <h3 class="price-title">Giá:</h3>
                <p class="price">${product.price}</p>
                <h3 class="description-title">Mô tả:</h3>
                <p class="description">${product.description}</p>
                <div class="buy-buttons">
                    <a href="https://shopee.vn/shop/169541002" target="_blank" class="buy-button shopee-button">
                        <svg class="w-5 h-5 mr-2" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24 4C12.96 4 4 12.96 4 24C4 35.04 12.96 44 24 44C35.04 44 44 35.04 44 24C44 12.96 35.04 4 24 4Z" fill="#EE4D2D"/>
                            <path d="M36.01 16.52C35.41 15.92 34.26 15.92 33.66 16.52L33.66 16.52C33.06 17.12 31.91 17.12 31.31 16.52L31.31 16.52C30.71 15.92 29.56 15.92 28.96 16.52C28.36 17.12 28.36 18.27 28.96 18.87C29.56 19.47 29.56 20.62 28.96 21.22C28.36 21.82 27.21 21.82 26.61 21.22L26.61 21.22C26.01 20.62 24.86 20.62 24.26 21.22C23.66 21.82 23.66 22.97 24.26 23.57C24.86 24.17 24.86 25.32 24.26 25.92C23.66 26.52 22.51 26.52 21.91 25.92L21.91 25.92C21.31 25.32 20.16 25.32 19.56 25.92C18.96 26.52 18.96 27.67 19.56 28.27C20.16 28.87 20.16 30.02 19.56 30.62C18.96 31.22 17.81 31.22 17.21 30.62L17.21 30.62C16.61 30.02 15.46 30.02 14.86 30.62C14.26 31.22 14.26 32.37 14.86 32.97C15.46 33.57 15.46 34.72 14.86 35.32C14.26 35.92 13.11 35.92 12.51 35.32L12.51 35.32C11.91 34.72 10.76 34.72 10.16 35.32" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                            <path d="M27.73 27.46L27.73 27.46C27.13 26.86 25.98 26.86 25.38 27.46L25.37 27.46C24.77 28.06 23.62 28.06 23.02 27.46C22.42 26.86 22.42 25.71 23.02 25.11C23.62 24.51 23.62 23.36 23.02 22.76C22.42 22.16 21.27 22.16 20.67 22.76L20.67 22.76C20.07 23.36 18.92 23.36 18.32 22.76C17.72 22.16 17.72 21.01 18.32 20.41C18.92 19.81 18.92 18.66 18.32 18.06C17.72 17.46 16.57 17.46 15.97 18.06L15.97 18.06C15.37 18.66 14.22 18.66 13.62 18.06C13.02 17.46 13.02 16.31 13.62 15.71L14.5 14.83C15.1 14.23 16.25 14.23 16.85 14.83L16.85 14.83C17.45 15.43 18.6 15.43 19.2 14.83C19.8 14.23 19.8 13.08 19.2 12.48C18.6 11.88 18.6 10.73 19.2 10.13C19.8 9.53 20.95 9.53 21.55 10.13L21.55 10.13C22.15 10.73 23.3 10.73 23.9 10.13C24.5 9.53 24.5 8.38 23.9 7.78C23.3 7.18 23.3 6.03 23.9 5.43C24.5 4.83 25.65 4.83 26.25 5.43L26.25 5.43C26.85 6.03 28 6.03 28.6 5.43C29.2 4.83 29.2 3.68 28.6 3.08" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                        </svg>
                        Mua qua Shopee
                    </a>
                    <a href="https://zalo.me/0965671689" target="_blank" class="buy-button zalo-button">
                        <img src="./image/zalo-hd-logo.png" alt="Zalo" class="w-5 h-5 mr-2">
                        Liên hệ Zalo
                    </a>
                </div>
            </div>
        `;
    }
}

// Cập nhật meta tags cho SEO
function updateMetaTags(product) {
    // Cập nhật Open Graph meta tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDesc = document.querySelector('meta[property="og:description"]');
    const ogImage = document.querySelector('meta[property="og:image"]');
    const ogUrl = document.querySelector('meta[property="og:url"]');
    
    if (ogTitle) ogTitle.setAttribute('content', product.name);
    if (ogDesc) ogDesc.setAttribute('content', product.description);
    if (ogImage) ogImage.setAttribute('content', product.thumbnail);
    if (ogUrl) ogUrl.setAttribute('content', window.location.href);
    
    // Cập nhật Twitter Card meta tags
    const twTitle = document.querySelector('meta[name="twitter:title"]');
    const twDesc = document.querySelector('meta[name="twitter:description"]');
    const twImage = document.querySelector('meta[name="twitter:image"]');
    
    if (twTitle) twTitle.setAttribute('content', product.name);
    if (twDesc) twDesc.setAttribute('content', product.description);
    if (twImage) twImage.setAttribute('content', product.thumbnail);
    
    // Cập nhật JSON-LD
    const jsonLdScript = document.querySelector('script[type="application/ld+json"]');
    if (jsonLdScript) {
        try {
            const jsonLd = JSON.parse(jsonLdScript.textContent);
            jsonLd.name = product.name;
            jsonLd.description = product.description;
            jsonLd.image = product.thumbnail;
            jsonLd.url = window.location.href;
            jsonLdScript.textContent = JSON.stringify(jsonLd, null, 2);
        } catch (e) {
            console.error('Lỗi khi cập nhật JSON-LD:', e);
        }
    }
}

// Hàm tải hình ảnh sản phẩm
function loadProductImages(product, container) {
    // Reset mảng hình ảnh
    productImages = [];
    currentImageIndex = 0;
    
    // Xóa nội dung cũ
    container.innerHTML = '';
    
    // Xóa chỉ báo cũ
    const indicatorsContainer = document.getElementById('gallery-indicators');
    if (indicatorsContainer) {
        indicatorsContainer.innerHTML = '';
    }
    
    // Trường hợp đặc biệt cho sản phẩm túi đựng bánh trung thu
    if (product.id === 'tui-dung-banh-trung-thu-sz-9-10-11') {
        // Danh sách các file ảnh có sẵn
        const imageNumbers = [3, 4, 5, 6, 12, 13, 14, 15, 16, 17, 18];
        
        imageNumbers.forEach(number => {
            // Tạo đường dẫn đến hình ảnh với định dạng đúng
            const imagePath = `image/${product.folder}/tui-dung-banh-trung-thu-sz-91011-${number}.jpg`;
            productImages.push(imagePath);
        });
    }
    // Trường hợp đặc biệt cho sản phẩm hoa viên đỏ
    else if (product.id === 'hoa-vien-do-4-banh-re') {
        const imageNumbers = [1, 2, 3, 4];
        
        imageNumbers.forEach(number => {
            const imagePath = `image/${product.folder}/hoa-vien-do-4-banh-re-${number}.jpg`;
            productImages.push(imagePath);
        });
    } 
    // Mặc định cho các sản phẩm khác
    else {
        // Giả định có tối đa 5 hình ảnh cho mỗi sản phẩm
        const maxImages = 5;
        
        // Đường dẫn cơ bản đến thư mục hình ảnh
        const imageFolderPath = `image/${product.folder}`;
        const productNameSlug = product.id;
        
        for (let i = 1; i <= maxImages; i++) {
            // Tạo đường dẫn đến hình ảnh với định dạng: product-id-number.jpg
            const imagePath = `${imageFolderPath}/${productNameSlug}-${i}.jpg`;
            productImages.push(imagePath);
        }
    }
    
    // Hiển thị ảnh đầu tiên
    if (productImages.length > 0) {
        displayImage(0);
    }
    
    // Tạo chỉ báo ảnh
    createGalleryIndicators();
}

// Hiển thị một ảnh cụ thể
function displayImage(index) {
    if (index < 0 || index >= productImages.length) {
        return;
    }
    
    currentImageIndex = index;
    
    const imagesContainer = document.getElementById('product-images');
    if (imagesContainer) {
        const img = document.createElement('img');
        img.src = productImages[index];
        img.alt = `Sản phẩm - Hình ${index + 1}`;
        img.className = 'product-image';
        
        // Xử lý lỗi nếu ảnh không tồn tại
        img.onerror = function() {
            // Xóa ảnh này khỏi mảng
            productImages.splice(index, 1);
            
            // Nếu còn ảnh khác, hiển thị ảnh tiếp theo
            if (productImages.length > 0) {
                const newIndex = index % productImages.length;
                displayImage(newIndex);
                createGalleryIndicators(); // Tạo lại chỉ báo
            } else {
                imagesContainer.innerHTML = '<p>Không có hình ảnh.</p>';
            }
        };
        
        // Xử lý sự kiện khi ảnh tải thành công
        img.onload = function() {
            // Tạo lightbox khi click vào ảnh
            img.addEventListener('click', function() {
                openLightbox(productImages[index], `Sản phẩm - Hình ${index + 1}`);
            });
        };
        
        // Xóa nội dung cũ và thêm ảnh mới
        imagesContainer.innerHTML = '';
        imagesContainer.appendChild(img);
        
        // Cập nhật chỉ báo
        updateGalleryIndicators(index);
    }
}

// Tạo các chỉ báo cho gallery
function createGalleryIndicators() {
    const indicatorsContainer = document.getElementById('gallery-indicators');
    if (!indicatorsContainer) return;
    
    indicatorsContainer.innerHTML = '';
    productImages.forEach((src, index) => {
        const thumb = document.createElement('img');
        thumb.src = src;
        thumb.alt = `Thumbnail ${index + 1}`;
        if (index === currentImageIndex) thumb.classList.add('active');
        thumb.addEventListener('click', () => displayImage(index));
        indicatorsContainer.appendChild(thumb);
    });
}

// Cập nhật trạng thái active của các chỉ báo
function updateGalleryIndicators(activeIndex) {
    const thumbs = document.querySelectorAll('.gallery-indicators img');
    thumbs.forEach((thumb, index) => {
        if (index === activeIndex) {
            thumb.classList.add('active');
        } else {
            thumb.classList.remove('active');
        }
    });
}

// Thiết lập các sự kiện cho nút điều hướng gallery
function setupGalleryNavigation() {
    const prevButton = document.getElementById('gallery-prev');
    const nextButton = document.getElementById('gallery-next');
    
    if (prevButton) {
        prevButton.addEventListener('click', navigatePrevImage);
    }
    
    if (nextButton) {
        nextButton.addEventListener('click', navigateNextImage);
    }
    
    // Thêm điều hướng bằng bàn phím
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            navigatePrevImage();
        } else if (e.key === 'ArrowRight') {
            navigateNextImage();
        }
    });
}

// Chuyển đến ảnh trước
function navigatePrevImage() {
    let newIndex = currentImageIndex - 1;
    if (newIndex < 0) {
        newIndex = productImages.length - 1;
    }
    displayImage(newIndex);
}

// Chuyển đến ảnh tiếp theo
function navigateNextImage() {
    let newIndex = currentImageIndex + 1;
    if (newIndex >= productImages.length) {
        newIndex = 0;
    }
    displayImage(newIndex);
}

// Hàm hiển thị video sản phẩm
function displayProductVideos(product, container) {
    // Xóa nội dung cũ
    container.innerHTML = '';
    
    // Nếu không có video, ẩn container
    if (!product.videos || product.videos.length === 0) {
        container.style.display = 'none';
        return;
    }
    
    // Hiển thị container nếu có video
    container.style.display = 'block';
    
    // Hiển thị từng video
    product.videos.forEach((videoPath, index) => {
        const videoDiv = document.createElement('div');
        videoDiv.className = 'product-video';
        
        const video = document.createElement('video');
        video.controls = true;
        video.preload = 'metadata';
        video.className = 'video-player';
        
        // Xử lý lỗi nếu video không tồn tại
        video.onerror = function() {
            videoDiv.remove();
        };
        
        // Thêm nguồn video
        const source = document.createElement('source');
        source.src = videoPath;
        source.type = 'video/mp4';
        
        video.appendChild(source);
        
        // Thêm thông báo nếu trình duyệt không hỗ trợ video
        const fallback = document.createElement('p');
        fallback.textContent = 'Trình duyệt của bạn không hỗ trợ xem video.';
        video.appendChild(fallback);
        
        videoDiv.appendChild(video);
        container.appendChild(videoDiv);
    });
}

// Hàm mở lightbox khi click vào ảnh
function openLightbox(imageSrc, imageAlt) {
    // Tạo overlay lightbox
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    
    lightbox.innerHTML = `
        <div class="lightbox-content">
            <span class="close-lightbox">&times;</span>
            <img src="${imageSrc}" alt="${imageAlt}">
        </div>
    `;
    
    // Thêm lightbox vào body
    document.body.appendChild(lightbox);
    
    // Hiển thị lightbox
    setTimeout(() => {
        lightbox.style.opacity = '1';
    }, 50);
    
    // Xử lý sự kiện đóng lightbox
    const closeLightbox = lightbox.querySelector('.close-lightbox');
    closeLightbox.addEventListener('click', function() {
        lightbox.style.opacity = '0';
        setTimeout(() => {
            lightbox.remove();
        }, 300);
    });
    
    // Đóng lightbox khi click ra ngoài
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            lightbox.style.opacity = '0';
            setTimeout(() => {
                lightbox.remove();
            }, 300);
        }
    });
} 