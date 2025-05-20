# Website Hộp quà tặng Vân Thắng

Website giới thiệu và bán các phụ kiện bánh trung thu như hộp đựng bánh, dao nĩa, túi đựng bánh, v.v.

## Cấu trúc website

- **Trang chủ**: Hiển thị danh sách tất cả sản phẩm phụ kiện.
- **Trang chi tiết sản phẩm**: Hiển thị thông tin chi tiết và tất cả hình ảnh của một sản phẩm cụ thể.
- **Ảnh thu nhỏ**: Hiển thị ba ảnh thu nhỏ dưới mỗi sản phẩm trên trang chủ để xem trước.

## Cấu trúc thư mục

```
/
├── index.html             # Trang chủ
├── product.html           # Trang chi tiết sản phẩm
├── css/
│   └── styles.css         # CSS cho website
├── js/
│   ├── main.js            # JavaScript cho trang chủ
│   ├── product-detail.js  # JavaScript cho trang chi tiết sản phẩm
│   └── products.js        # Dữ liệu sản phẩm
└── [các thư mục sản phẩm]/  # Thư mục chứa hình ảnh sản phẩm
```

## Cách sử dụng

1. Mở file `index.html` để xem trang chủ.
2. Click vào một sản phẩm để xem chi tiết và hình ảnh sản phẩm đó.

## Thêm sản phẩm mới

Để thêm sản phẩm mới:

1. Tạo thư mục mới cho sản phẩm.
2. Đặt hình ảnh sản phẩm vào thư mục đó với định dạng tên: `tên-sản-phẩm (số).jpg`
3. Thêm thông tin sản phẩm vào mảng `products` trong file `js/products.js`.

```javascript
{
    id: 'ten-san-pham',
    name: 'Tên sản phẩm',
    folder: 'tên-thư-mục-sản-phẩm',
    thumbnail: 'tên-thư-mục-sản-phẩm/ten-san-pham (1).jpg'
}
```

## Hosting website

Website này có thể được host trên GitHub Pages, Netlify, Vercel hoặc bất kỳ dịch vụ hosting website tĩnh nào khác.

### Cách host trên GitHub Pages

1. Upload code lên repository GitHub của bạn.
2. Vào Settings > Pages.
3. Chọn branch main và thư mục root (/).
4. Nhấn Save để GitHub Pages tự động deploy website của bạn.

## Liên hệ

Email: info@phukientrungthy.vn 