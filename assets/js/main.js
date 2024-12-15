$(document).ready(function () {

    /**
    * NAVBAR
    */

    $('#toggle-navbar').click(function () {
        $('#navbar-wrapper').toggleClass('active')
    })

    $('#toggle-nav-mb').click(function () {
        $('#navbar-wrapper').toggleClass('active-mb')
        $('.header').toggleClass('active')
    })

    if ($(window).width() < 576) {
        $('#navbar-wrapper').addClass('active')
        $('#navbar-wrapper').addClass('active-mb')
    }

    /**
    * ALERT
    */

    $('.alert .close').click(function () {
        $(this).parent().fadeToggle()
    })

    /**
    * PROGESS 
    */

    function updateLoadingBar(percent, title) {
        // Cập nhật nội dung của span tiêu đề
        if (title) {
            $("#title_loadingbar").text(title);
        }

        // Đảm bảo giá trị phần trăm nằm trong khoảng 0-100
        percent = Math.max(0, Math.min(100, percent));

        // Cập nhật nội dung phần trăm
        $("#percent_loadingbar").text(percent + "%");

        // Cập nhật chiều rộng và thuộc tính aria-valuenow
        $("#style_loadingbar").css("width", percent + "%").attr("aria-valuenow", percent);
    }

    $(".btn-getlink").click(function () {
        // Hiển thị loading bar
        $("#loadingbar").show();

        // Bắt đầu cập nhật loading bar
        let currentPercent = 0;
        const interval = setInterval(function () {
            if (currentPercent >= 100) {
                clearInterval(interval); // Dừng lại khi đạt 100%
                updateLoadingBar(100, "Hoàn tất!");
                $("#loadingbar").hide();
                $('.alert-warning').fadeToggle()
                $('.alert-danger').fadeToggle()
                $('#downloadFile').fadeToggle()
            } else {
                currentPercent += 10; // Tăng 10%
                updateLoadingBar(currentPercent, "Đang xử lý...");
            }
        }, 300);
    });

    // Ẩn loading bar khi khởi tạo
    $("#loadingbar").hide();

    /**
    * MOMO 
    */

    $('#btn-upgrade-momo').click(function () {
        $('#thongbao').fadeToggle()
    })

    $('#btn-coupon').click(function () {
        $('#thongbao-coupon').fadeToggle()
    })

    /**
    * DATATABLE 
    */

    $('#thanh-toan-table').DataTable({
        language: {
            url: 'https://cdn.datatables.net/plug-ins/1.13.5/i18n/vi.json'
        }
    });

    $('#download-table').DataTable({
        language: {
            url: 'https://cdn.datatables.net/plug-ins/1.13.5/i18n/vi.json'
        }
    });
});
