//��ȡurl�Ĳ�����Ϣ
function getQueryString() {
	var str = location.href;
	var num = str.indexOf("/p/");
	str = str.substr(num + 3);
	return str;
}
//ʹ�÷�����
var num = parseInt(getQueryString());
if (parseInt(num) > 500000000) {
	window.location.href = "./p/418971438.html";//�Ŷ���
} else {
	window.location.href = "./p/418962396.html";//������
}