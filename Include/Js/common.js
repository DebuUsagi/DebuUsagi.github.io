function CheckAll(boxName, objName) {
	var pobj = document.getElementsByName(boxName);
	var obj = document.getElementsByName(objName);

	for(i=0;i<obj.length;i++) {
		if(pobj[0].checked==true)
			obj[i].checked=true;
		else
			obj[i].checked=false;
	}
}
	

function InputOnlyNumber(obj) {
	
	num = "0123456789";
	
	for(i=0;i<obj.value.length;i++) {
		if (num.indexOf(obj.value.charAt(i))==-1) {
			alert("숫자만 입력 가능한 필드입니다.");
			obj.value="";
		}
	}
}

function IsNumber(obj) {
	
	num = "0123456789-";
	
	for(i=0;i<obj.length;i++) {
		if (num.indexOf(obj.charAt(i))==-1) {
			return false;
		}
	}
	
	return true;
}

function leadingZeros(n, digits) {
  var zero = '';
  n = n.toString();

  if (n.length < digits) {
    for (i = 0; i < digits - n.length; i++)
      zero += '0';
  }
  return zero + n;
}

function ChangeDate(curDate, changeDay) {
	curDate.value = Dateadd(curDate.value,changeDay);
}

function Dateadd(curDate, changeDay) {
	
	yy = parseInt(curDate.substr(0,4),10);
	mm = parseInt(curDate.substr(6,2),10);
	dd = parseInt(curDate.substr(8),10);

	day = new Date(yy,mm-1,dd + changeDay);

	return day.getFullYear() +"-"+ leadingZeros(day.getMonth() + 1,2) + "-"+ leadingZeros(day.getDate(),2) ;	
}


	function array_sum() {
		var a = [];
		
		
		for (i=0;i<arguments.length;i++) {

			for(j=0;j<arguments[i].length;j++) {
				
				var blnExists = false;

				for (k=0;k<a.length;k++) {
					if (a[k][0] == arguments[i][j][0]) {
						a[k][1]+=arguments[i][j][1];
						blnExists = true;
						break;
					}
				}

				if (blnExists == false) a.push([arguments[i][j][0],arguments[i][j][1]]);

			}
			
		}
		return a.sort(
			function(b,c) { 
				return b[0] - c[0]; 
			}
		);
	}



function
salesdata_android_upload()
{
	var fm = document.frm;

	if(fm.os_country.value == ""){
		alert("국가별 통계 파일을 첨부해주세요.");
		fm.os_country.focus();
		return;
	}else{
		var arrVal = fm.os_country.value.split("\\");
		if(arrVal[arrVal.length-1]!="com.hilowa.android_country_installs.csv"){
			alert("[com.hilowa_country_installs.csv]\n\n올바르지 않은 파일입니다.\n파일명을 확인하여 주시기 바랍니다.");
			fm.os_country.focus();
			return;
		}
	}

	if(fm.os_device.value == ""){
		alert("기종별 통계 파일을 첨부해주세요.");
		fm.os_device.focus();
		return;
	}else{
		var arrVal = fm.os_device.value.split("\\");
		if(arrVal[arrVal.length-1]!="com.hilowa.android_device_installs.csv"){
			alert("[com.hilowa_device_installs.csv]\n\n올바르지 않은 파일입니다.\n파일명을 확인하여 주시기 바랍니다.");
			fm.os_device.focus();
			return;
		}
	}

	if(fm.os_version.value == ""){
		alert("OS 버전별 통계 파일을 첨부해주세요.");
		fm.os_version.focus();
		return;
	}else{
		var arrVal = fm.os_version.value.split("\\");
		if(arrVal[arrVal.length-1]!="com.hilowa.android_os_version_installs.csv"){
			alert("[com.hilowa_os_version_installs.csv]\n\n올바르지 않은 파일입니다.\n파일명을 확인하여 주시기 바랍니다.");
			fm.os_version.focus();
			return;
		}
	}

	document.frm.submit();
}

function
popup_android_upload()
{
	window.open('/BoStat/SalesDataUpload.php','AndroidSalesPopup','width=700px, height=300px, toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no');
}

function
term_select(val)
{
	// 검색조건.
	var obj = document.getElementById("search_gbn");
	var obj1 = document.getElementById("select_day1");
	var obj2 = document.getElementById("select_day2");
	var obj3 = document.getElementById("select_year");
	var obj4 = document.getElementById("select_month");	

	// 일자 통계
	if(val=="day"){
		obj.disabled = true;
		// 일별
		if(document.getElementsByName('date')[0].checked) {		
			obj1.style.display = "table-row";
			obj3.style.display = "none";
			obj4.style.display = "none";

		// 월별
		}else if(document.getElementsByName('date')[1].checked){
			obj1.style.display = "none";
			obj3.style.display = "table-row";
			obj4.style.display = "table-row";
		}
		obj2.style.display = "none";

	// 항목별 통계
	}else{
		obj.disabled = false;
		// 일별
		if(document.getElementsByName('date')[0].checked) {		
			obj2.style.display = "table-row";
			obj3.style.display = "none";

		// 월별
		}else if(document.getElementsByName('date')[1].checked){
			obj2.style.display = "none";
			obj3.style.display = "table-row";
		}
		obj1.style.display = "none";
		obj4.style.display = "none";
	}
}

function
android_date_select(val) 
{
	// 검색기간.
	var obj = document.getElementById("search_gbn");
	var obj1 = document.getElementById("select_day1");
	var obj2 = document.getElementById("select_day2");
	var obj3 = document.getElementById("select_year");
	var obj4 = document.getElementById("select_month");		

	// 일별
	if(val=="day"){	
		// 일자 통계 
		if(document.getElementsByName('search_radio')[0].checked) {
			obj.disabled = true;
			obj1.style.display	= "table-row"; 
			obj2.style.display	= "none"; 
			obj3.style.display	= "none";

		// 항목별 통계
		}else if(document.getElementsByName('search_radio')[1].checked){
			obj.disabled = false;
			obj1.style.display	= "none"; 
			obj2.style.display = "table-row";
			obj3.style.display = "none";
		}
		obj4.style.display = "none";

	// 월별
	}else{	
		// 일자 통계 
		if(document.getElementsByName('search_radio')[0].checked) {
			obj.disabled = true;
			obj1.style.display	= "none"; 
			obj2.style.display	= "none"; 
			obj3.style.display	= "table-row";
			obj4.style.display = "table-row";

		// 항목별 통계
		}else if(document.getElementsByName('search_radio')[1].checked){
			obj.disabled = false;
			obj1.style.display	= "none"; 
			obj2.style.display = "none";
			obj3.style.display = "table-row";
			obj4.style.display = "none";
		}
	}
}

function 
android_appdown_search()
{
	var obj = document.getElementById("sendEndDate");

	if(document.getElementsByName('search_radio')[0].checked) {
		obj.value = document.getElementById("e_date1").value;

	}else if(document.getElementsByName('search_radio')[1].checked){
		obj.value = document.getElementById("e_date").value;

		if(document.getElementsByName('date')[0].checked){
			// 날짜 체크.
			var start_date = document.getElementById("s_date").value.split("-");
			var end_date = document.getElementById("e_date").value.split("-");

			var startDate = new Date(start_date[0],start_date[1],start_date[2]).valueOf();
			var endDate = new Date(end_date[0],end_date[1],end_date[2]).valueOf();

			if( (startDate - endDate)>0 ){
				alert("시작날짜는 종료날짜보다 이전이여야 합니다.");
				return;
			// 밀리초 단위인듯.
			}else if( (endDate - startDate)>60*60*24*6*1000 ){
				alert("일주일치만 조회할 수 있습니다.");
				return;
			}
		}
	}
	document.frm.submit();
}


function
visitant_search() //Satatics/Users/Visitant/visitant.php의 검색 버튼에서 호출
{
	var start_date	= document.frm.s_date.value;
	var end_date	= document.frm.e_date.value;

	if(event.keyCode == 13 || event.keyCode == 0) {

		event.returnValue = false;

			if(check_period(start_date, end_date)) {
				
				frm.submit();
				
				return true;
			}

			return false;

	}

	return false;
	
}


function 
check_period(start_date,end_date) 
{
	var start_year	= start_date.substr(0,4);
	var start_month	= start_date.substr(5,2);
	var start_day	= start_date.substr(8,2);

	var end_year	= end_date.substr(0,4);
	var end_month	= end_date.substr(5,2);
	var end_day		= end_date.substr(8,2);
	
	if(start_year > end_year) {
	alert("유효하지 않은 기간입니다.");
	return false;
	}

	if((end_year-start_year) >= 2) {

			alert("최대 3개월 기간만 검색 가능합니다.");
			return false;

	}

	if((end_year-start_year) == 1) {
			
			if((start_month >= 1) && (start_month <= 9)) {
			alert("최대 3개월 기간만 검색 가능합니다.");
			return false;
			}

			if((start_month - end_month) <= 9) {
			alert("최대 3개월 기간만 검색 가능합니다.");
			return false;
			}

	}

	if(start_year == end_year) {
		
		if(start_month > end_month) {
			alert("유효하지 않은 기간입니다.");
			return false;
		}
		
		if(start_month == end_month) {
			if(start_day > end_day) {
				alert("유효하지 않은 기간입니다.");
				return false;
			}
		}

		if((end_month-start_month) >= 3) {
			alert("최대 3개월 기간만 검색 가능합니다.");
			return false;
		}
	}

	return true;

}

function
date_select() //Satatics/이하의 파일에서 월별 라디오 버튼 에서 호출
{
	var select_day		= document.getElementById('select_day');
	var select_year		= document.getElementById('select_year');

		if(document.getElementsByName('date')[0].checked) {

			
			select_day.style.display	= "table-row"; 
			select_year.style.display	= "none";

		}

		if(document.getElementsByName('date')[1].checked) {

			select_day.style.display	= "none"; 
			select_year.style.display	= "table-row";

		}
			
		return true;
}

function openWindow(url){
	window.open(url, openWindow, "");
}

function moveLocation(url){
	document.location.href = url;
}