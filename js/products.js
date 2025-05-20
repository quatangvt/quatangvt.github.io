// Danh sách sản phẩm
const products = [
    {
        id: 'ngoc-hoa-cam-4-banh',
        name: 'Ngọc hoa cam 4 bánh',
        folder: 'ngoc-hoa-cam-4-banh',
        thumbnail: 'image/ngoc-hoa-cam-4-banh/ngoc-hoa-cam-4-banh-1.jpg',
        price: 'Từ 27.000đ đến 31.000đ',
        description: 'Bộ vỏ hộp ngọc hoa cam 4 bánh đẹp mắt.',
        videos: []
    },
    {
        id: 'hoa-vien-do-4-banh-re',
        name: 'Hoa viên đỏ 4 bánh rẻ',
        folder: 'hoa-vien-do-4-banh-re',
        thumbnail: 'image/hoa-vien-do-4-banh-re/hoa-vien-do-4-banh-re-3.jpg"',
        price: 'Từ 16.000đ đến 20.000đ',
        description: 'Bộ vỏ hộp hoa viên đỏ đẹp mắt.',
        videos: ['image/hoa-vien-do-4-banh-re/hoa-vien-do-4-banh-re-1.mp4']
    },
    {
        id: 'song-nguyet-4-6-banh',
        name: 'Song Nguyệt 4 bánh, 6 bánh',
        folder: 'song-nguyet-4-6-banh',
        thumbnail: 'image/song-nguyet-4-6-banh/song-nguyet-4-6-banh-1.jpg',
        price: 'Từ 25.000đ đến 33.000đ',
        description: 'Bộ vỏ hộp song nguyệt đẹp mắt.',
        videos: []
    },
    {
        id: 'dao-nia-mau-trang-hong-xanh-duong',
        name: 'Dao nĩa màu trắng, hồng, xanh dương',
        folder: 'dao-nia-mau-trang-hong-xanh-duong',
        thumbnail: 'image/dao-nia-mau-trang-hong-xanh-duong/dao-nia-mau-trang-hong-xanh-duong-1.jpg',
        price: '900đ - 1.500đ',
        description: 'Bộ dao nĩa nhựa cao cấp với nhiều màu sắc trang nhã, phù hợp để dùng kèm với bánh trung thu.',
        videos: []
    },
    {
        id: 'hop-1-banh',
        name: 'Hộp 1 bánh',
        folder: 'hop-1-banh',
        thumbnail: 'image/hop-1-banh/hop-1-banh-1.jpg',
        price: 'Từ 4.000đ đến 8.000đ',
        description: 'Hộp đựng 1 bánh trung thu đơn giản, sang trọng, phù hợp làm quà tặng hoặc sử dụng trong gia đình.',
        videos: []
    },
    {
        id: 'hop-2-banh-re',
        name: 'Hộp 2 bánh rẻ',
        folder: 'hop-2-banh-re',
        thumbnail: 'image/hop-2-banh-re/hop-2-banh-re-1.jpg',
        price: '3.500đ - 7.000đ',
        description: 'Hộp đựng 2 bánh trung thu giá rẻ nhưng vẫn đảm bảo chất lượng và tính thẩm mỹ.',
        videos: []
    },
    {
        id: 'hop-6-banh-mini-tho-ngoc-do',
        name: 'Hộp 6 bánh mini thỏ ngọc đỏ',
        folder: 'hop-6-banh-mini-tho-ngoc-do',
        thumbnail: 'image/hop-6-banh-mini-tho-ngoc-do/hop-6-banh-mini-tho-ngoc-do-1.jpg',
        price: 'Từ 15.000đ đến 18.500đ',
        description: 'Hộp đựng 6 bánh mini với họa tiết thỏ ngọc màu đỏ sang trọng, phù hợp cho các dịp lễ tết.',
        videos: []
    },
    {
        id: 'hop-6-banh-mini-tho-ngoc-vang',
        name: 'Hộp 6 bánh mini thỏ ngọc vàng',
        folder: 'hop-6-banh-mini-tho-ngoc-vang',
        thumbnail: 'image/hop-6-banh-mini-tho-ngoc-vang/hop-6-banh-mini-tho-ngoc-vang-1.jpg',
        price: 'Từ 21.000đ đến 24.500đ',
        description: 'Hộp đựng 6 bánh mini với họa tiết thỏ ngọc màu vàng sang trọng, biểu tượng của sự may mắn và thịnh vượng.',
        videos: []
    },
    {
        id: 'hop-lam-cuc-4-6-banh',
        name: 'Hộp lam cúc 4-6 bánh',
        folder: 'hop-lam-cuc-4-6-banh',
        thumbnail: 'image/hop-lam-cuc-4-6-banh/hop-lam-cuc-4-6-banh-1.jpg',
        price: 'Từ 35.000đ đến 38.000đ',
        description: 'Hộp bánh trung thu có họa tiết hoa cúc tinh tế, có thể đựng 4-6 bánh tùy kích thước.',
        videos: []
    },
    {
        id: 'hop-lan-vu-4-banh',
        name: 'Hộp lân vũ 4 bánh',
        folder: 'hop-lan-vu-4-banh',
        thumbnail: 'image/hop-lan-vu-4-banh/hop-lan-vu-4-banh-1.jpg',
        price: 'Từ 29.000đ đến 34.000đ',
        description: 'Hộp bánh trung thu với họa tiết lan vũ sang trọng, đựng được 4 bánh cỡ vừa.',
        videos: []
    },
    {
        id: 'hop-lien-ngu-4-banh',
        name: 'Hộp liên ngư 4 bánh',
        folder: 'hop-lien-ngu-4-banh',
        thumbnail: 'image/hop-lien-ngu-4-banh/hop-lien-ngu-4-banh-1.jpg',
        price: 'Từ 26.500đ đến 30.000đ',
        description: 'Hộp bánh liên ngũ đựng được 4 bánh, thiết kế sang trọng phù hợp biếu tặng.',
        videos: []
    },
    {
        id: 'hop-ngu-long-nguyet-hoi-4-banh-hinh-bat-giac',
        name: 'Hộp ngũ long nguyệt hội 4 bánh hình bát giác',
        folder: 'hop-ngu-long-nguyet-hoi-4-banh-hinh-bat-giac',
        thumbnail: 'image/hop-ngu-long-nguyet-hoi-4-banh-hinh-bat-giac/hop-ngu-long-nguyet-hoi-4-banh-hinh-bat-giac-1.jpg',
        price: 'Từ 36.000đ đến 39.000đ',
        description: 'Hộp bánh hình bát giác độc đáo với họa tiết ngũ long nguyệt hội, đựng được 4 bánh cỡ lớn.',
        videos: []
    },
    {
        id: 'hop-qua-16-cho-be',
        name: 'Hộp quà 1.6 cho bé',
        folder: 'hop-qua-16-cho-be',
        thumbnail: 'image/hop-qua-16-cho-be/hop-qua-16-cho-be-1.jpg',
        price: 'Từ 4.000đ đến 6.000đ',
        description: 'Hộp quà trung thu đặc biệt thiết kế cho trẻ em, với họa tiết vui nhộn và màu sắc bắt mắt.',
        videos: []
    },
    {
        id: 'hop-sen-phu-quy-4-banh-re',
        name: 'Hộp sen phú quý 4 bánh rẻ',
        folder: 'hop-sen-phu-quy-4-banh-re',
        thumbnail: 'image/hop-sen-phu-quy-4-banh-re/hop-sen-phu-quy-4-banh-re-1.jpg',
        price: 'Từ 15.000đ đến 18.000đ',
        description: 'Hộp bánh trung thu với họa tiết hoa sen - biểu tượng của sự phú quý, đựng được 4 bánh với giá thành hợp lý.',
        videos: []
    },
    {
        id: 'hop-song-hac-6-banh',
        name: 'Hộp song hạc 6 bánh',
        folder: 'hop-song-hac-6-banh',
        thumbnail: 'image/hop-song-hac-6-banh/hop-song-hac-6-banh-1.jpg',
        price: 'Từ 32.000đ đến 35.000đ',
        description: 'Hộp bánh họa tiết song hạc - biểu tượng của sự trường thọ, đựng được 6 bánh các loại.',
        videos: []
    },
    {
        id: 'hop-song-nguyet-4-6-banh',
        name: 'Hộp song nguyệt 4-6 bánh',
        folder: 'hop-song-nguyet-4-6-banh',
        thumbnail: 'image/hop-song-nguyet-4-6-banh/hop-song-nguyet-4-6-banh-1.jpg',
        price: 'Từ 32.000đ đến 35.000đ',
        description: 'Hộp bánh trung thu họa tiết song nguyệt tinh tế, có thể đựng 4-6 bánh tùy kích thước.',
        videos: []
    },
    {
        id: 'khay-trong-sz-9-10-11',
        name: 'Khay trong size 9, 10, 11',
        folder: 'khay-trong-sz-9-10-11',
        thumbnail: 'image/khay-trong-sz-9-10-11/khay-trong-sz-9-10-11-1.jpg',
        price: '200đ - 400đ',
        description: 'Khay trong suốt đựng bánh trung thu với nhiều kích cỡ phù hợp với bánh size 9, 10, 11.',
        videos: []
    },
    {
        id: 'tui-dung-banh-trung-thu-sz-9-10-11',
        name: 'Túi đựng bánh trung thu size 9, 10, 11',
        folder: 'tui-dung-banh-trung-thu-sz-9-10-11',
        thumbnail: 'image/tui-dung-banh-trung-thu-sz-9-10-11/tui-dung-banh-trung-thu-sz-91011-3.jpg',
        price: '350đ - 450đ',
        description: 'Túi đựng bánh trung thu đa dạng kích cỡ, phù hợp với bánh size 9, 10, 11, thiết kế đẹp mắt.',
        videos: [
            'image/tui-dung-banh-trung-thu-sz-9-10-11/tui-dung-banh-trung-thu-sz-91011-2.mp4'
        ]
    }
];

// Hàm lấy sản phẩm theo ID
function getProductById(productId) {
    return products.find(product => product.id === productId);
}

// Hàm tạo slug từ một chuỗi tiếng Việt có dấu
function createSlug(str) {
    // Chuyển chuỗi sang chữ thường và bỏ dấu
    str = str.toLowerCase();
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    
    // Thay khoảng trắng bằng dấu gạch ngang
    str = str.replace(/\s+/g, "-");
    
    // Xóa các ký tự đặc biệt
    str = str.replace(/[^a-z0-9-]/g, "");
    
    return str;
}

// Hàm lấy một ảnh ngẫu nhiên từ thư mục sản phẩm
function getRandomProductImage(product) {
    // Số lượng ảnh tối đa (giả định là 5 ảnh)
    const maxImages = 5;
    
    // Trường hợp đặc biệt cho tui-dung-banh-trung-thu-sz-9-10-11
    if (product.id === 'tui-dung-banh-trung-thu-sz-9-10-11') {
        // Chọn số ngẫu nhiên từ các ảnh có sẵn (3-6 là ảnh đẹp nhất)
        const validIndices = [3, 4, 5, 6];
        const randomIndex = validIndices[Math.floor(Math.random() * validIndices.length)];
        return `image/${product.folder}/tui-dung-banh-trung-thu-sz-91011-${randomIndex}.jpg`;
    }
    
    // Xử lý cho các sản phẩm khác
    // Chọn một số ngẫu nhiên từ 1 đến maxImages
    const randomIndex = Math.floor(Math.random() * maxImages) + 1;
    // Tạo đường dẫn đến ảnh
    return `image/${product.folder}/${product.id}-${randomIndex}.jpg`;
} 