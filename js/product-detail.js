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
            
            // Hiển thị thông tin giá và mô tả
            const productInfoElement = document.getElementById('product-info');
            if (productInfoElement) {
                productInfoElement.innerHTML = `
                    <div class="product-price">${product.price}</div>
                    <div class="product-description">${product.description}</div>
                `;
            }
            
            // Lấy container hình ảnh
            const imagesContainer = document.getElementById('product-images');
            
            // Hiển thị hình ảnh cho sản phẩm
            displayProductImages(product, imagesContainer);
            
            // Hiển thị video nếu có
            if (product.videos && product.videos.length > 0) {
                const videoContainer = document.getElementById('product-videos');
                if (videoContainer) {
                    displayProductVideos(product, videoContainer);
                }
            }
        } else {
            // Không tìm thấy sản phẩm
            document.getElementById('product-name').textContent = 'Không tìm thấy sản phẩm';
            document.getElementById('product-images').innerHTML = '<p>Không tìm thấy thông tin sản phẩm.</p>';
        }
    }
});

// Hàm hiển thị hình ảnh sản phẩm
function displayProductImages(product, container) {
    // Trường hợp đặc biệt cho sản phẩm túi đựng bánh trung thu
    if (product.id === 'tui-dung-banh-trung-thu-sz-9-10-11') {
        // Danh sách các file ảnh có sẵn
        const imageNumbers = [3, 4, 5, 6, 12, 13, 14, 15, 16, 17, 18];
        
        imageNumbers.forEach(number => {
            // Tạo đường dẫn đến hình ảnh với định dạng đúng
            const imagePath = `image/${product.folder}/tui-dung-banh-trung-thu-sz-91011-${number}.jpg`;
            
            // Tạo phần tử hiển thị hình ảnh
            const imageDiv = document.createElement('div');
            imageDiv.className = 'product-image';
            
            const img = document.createElement('img');
            img.src = imagePath;
            img.alt = `${product.name} - Hình ${number}`;
            
            // Xử lý sự kiện khi ảnh không tồn tại
            img.onerror = function() {
                imageDiv.remove(); // Xóa div chứa ảnh lỗi
            };
            
            // Xử lý sự kiện khi ảnh tải thành công
            img.onload = function() {
                // Tạo lightbox khi click vào ảnh
                img.addEventListener('click', function() {
                    openLightbox(imagePath, product.name);
                });
            };
            
            imageDiv.appendChild(img);
            container.appendChild(imageDiv);
        });
        
        return; // Thoát khỏi hàm vì đã xử lý trường hợp đặc biệt
    }
    
    // Giả định có tối đa 20 hình ảnh cho mỗi sản phẩm khác
    const maxImages = 20;
    
    // Đường dẫn cơ bản đến thư mục hình ảnh
    const imageFolderPath = `image/${product.folder}`;
    const productNameSlug = product.id;
    
    // Biến đếm số lượng ảnh đã hiển thị thành công
    let loadedImages = 0;
    
    for (let i = 1; i <= maxImages; i++) {
        // Tạo đường dẫn đến hình ảnh với định dạng mới: product-id-number.jpg
        const imagePath = `${imageFolderPath}/${productNameSlug}-${i}.jpg`;
        
        // Tạo phần tử hiển thị hình ảnh
        const imageDiv = document.createElement('div');
        imageDiv.className = 'product-image';
        
        const img = document.createElement('img');
        img.src = imagePath;
        img.alt = `${product.name} - Hình ${i}`;
        
        // Xử lý sự kiện khi ảnh không tồn tại
        img.onerror = function() {
            imageDiv.remove(); // Xóa div chứa ảnh lỗi
        };
        
        // Xử lý sự kiện khi ảnh tải thành công
        img.onload = function() {
            loadedImages++;
            
            // Tạo lightbox khi click vào ảnh
            img.addEventListener('click', function() {
                openLightbox(imagePath, product.name);
            });
        };
        
        imageDiv.appendChild(img);
        container.appendChild(imageDiv);
    }
}

// Hàm hiển thị video sản phẩm
function displayProductVideos(product, container) {
    // Hiển thị tiêu đề phần video nếu có video
    if (product.videos.length > 0) {
        const videoTitle = document.createElement('h3');
        videoTitle.className = 'gallery-title';
        videoTitle.textContent = 'Video sản phẩm';
        container.appendChild(videoTitle);
    }
    
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