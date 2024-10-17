common/: Chứa các tệp tin có thể tái sử dụng như interceptors, filters, pipes, decorators, constants
Ví dụ: logging.interceptor.ts, http-exception.filter.ts, validation.pipe.ts

config/: Chứa các thiết lập cấu hình cho ứng dụng, như cấu hình cơ sở dữ liệu, môi trường, cấu hình cache, API keys.
Ví dụ: config.service.ts, database.config.ts.

modules/: Chứa các module con của ứng dụng, mỗi module nên được tổ chức như một module độc lập để dễ dàng quản lý và phát triển.
Mỗi module sẽ chứa:
controller: Xử lý các request.
service: Chứa logic nghiệp vụ.
module: Định nghĩa các thành phần và cung cấp dependencies.

repositories/: Repository là nơi quản lý việc truy xuất dữ liệu và thực hiện các thao tác với cơ sở dữ liệu.
Khi sử dụng Repository Pattern, các repository được tổ chức rõ ràng và có thể dễ dàng mở rộng cho các yêu cầu khác nhau mà không làm thay đổi cấu trúc tổng thể.

entities/: Chứa các Entity liên quan đến cơ sở dữ liệu. Mỗi entity sẽ phản ánh một bảng trong cơ sở dữ liệu, và thường được sử dụng bởi các repository.
Ví dụ: user.entity.ts, product.entity.ts.


environments/: Chứa các file cấu hình cho từng môi trường khác nhau như development, staging, và production.
Ví dụ: environment.dev.ts, environment.prod.ts.

utils/: Chứa các hàm tiện ích hoặc helper function.
Ví dụ: hash.util.ts, date.util.ts.

guards/: Chứa các guards để kiểm soát quyền truy cập, xác thực trong ứng dụng.
Ví dụ: auth.guard.ts, roles.guard.ts.