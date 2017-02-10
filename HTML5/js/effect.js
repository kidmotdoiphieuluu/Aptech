/* 
 * Các hiệu ứng trong web
 * Tác giả: Trần Đức Anh
 * MSSV: A16028
 * Ngày cập nhật: 2016-12-16 22:27
 */

$(window).on('load', function(){
	
	// Hiệu ứng giữ chuột phía trên ava NVIDIA hoặc AMD ngoài trang chủ
	// NVIDIA
	$('#nvidia-ava').mouseenter(function() {
		$('#amd').css({
			'transition': '',
			'-webkit-transition': '',
			'-moz-transition': '',
			'-ms-transition': '',
			'-o-transition': ''
		});
		$('#amd').css('z-index', 0);
		$('#vga-effect').css('background-color', 'rgba(0, 0, 0, 0.8)');
	});
	$('#nvidia-ava').mouseleave(function() {
		$('#amd').css({
			'transition': 'z-index 2s',
			'-webkit-transition': 'z-index 2s',
			'-moz-transition': 'z-index 2s',
			'-ms-transition': 'z-index 2s',
			'-o-transition': 'z-index 2s'
		});
		$('#amd').css('z-index', '');
		$('#vga-effect').css('background-color', 'rgba(0, 0, 0, 0.25)');
	});
	
	// AMD
	$('#amd-ava').mouseenter(function() {
		$('#nvidia').css({
			'transition': '',
			'-webkit-transition': '',
			'-moz-transition': '',
			'-ms-transition': '',
			'-o-transition': ''
		});
		$('#nvidia').css('z-index', 0);
		$('#vga-effect').css('background-color', 'rgba(0, 0, 0, 0.8)');
	});
	$('#amd-ava').mouseleave(function() {
		$('#nvidia').css({
			'transition': 'z-index 2s',
			'-webkit-transition': 'z-index 2s',
			'-moz-transition': 'z-index 2s',
			'-ms-transition': 'z-index 2s',
			'-o-transition': 'z-index 2s'
		});
		$('#nvidia').css('z-index', '');
		$('#vga-effect').css('background-color', 'rgba(0, 0, 0, 0.25)');
	});
	// -------
	
	
});

