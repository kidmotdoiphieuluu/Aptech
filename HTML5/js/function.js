/* 
 * Các hàm chức năng trong web
 * Tác giả: Trần Đức Anh
 * MSSV: A16028
 * Ngày cập nhật: 2016-12-16 22:27
 */


$(window).on('load', function(){
	if (typeof(Storage) !== "undefined") {
		// Code for localStorage/sessionStorage.
		if (sessionStorage.lang == 'en' || sessionStorage.lang == 'vi') {
			changeLang(sessionStorage.lang);
		} else {
			sessionStorage.lang = 'en';
		}
	} else {
		// Sorry! No Web Storage support..
	}
	
});

function changeLang(lang) {
	$('html').attr('lang', lang);
	
	var src;
	if (lang == 'en') {
		src = 'img/flag-en.png';
	} else {
		src = 'img/flag-vi.png';
	}
	
	$('#btn-lang > img').attr('src', src);
	changeFormContact(lang);
	sessionStorage.lang = lang;
}

function changeFormContact(lang) {
	switch (lang) {
		case 'en':
			$('#fname').attr('placeholder', 'First name *');
			$('#lname').attr('placeholder', 'Last name *');
			$('#address').attr('placeholder', 'Address');
			$('#phone').attr('placeholder', 'Phone');
			$('#email').attr('placeholder', 'E-mail *');
			$('#message').attr('placeholder', 'Your message *');
			$('#submit').attr('value', 'Submit');
			break;
		case 'vi':
			$('#fname').attr('placeholder', 'Tên *');
			$('#lname').attr('placeholder', 'Họ *');
			$('#address').attr('placeholder', 'Địa chỉ');
			$('#phone').attr('placeholder', 'Điện thoại');
			$('#email').attr('placeholder', 'E-mail *');
			$('#message').attr('placeholder', 'Nội dung tin nhắn *');
			$('#submit').attr('value', 'Gửi');
			break;
	}
}