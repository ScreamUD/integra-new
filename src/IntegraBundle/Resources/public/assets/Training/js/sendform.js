$(document).ready(function(){
	var popupExist = false;
	var options = {
		beforeSubmit: validate,
		url: 'sendform.php',
		success: function(result){
			//console.log(result);
			if(result){
				showMessage('Ваша заявка принята. Спасибо, что Вы с нами!');
			}else{
				console.log('Что-то пошло не так');
			}
			$('.form-subscribe2').clearForm();
		},
		error: function (xhr, ajaxOptions, thrownError) {
			console.log(xhr.status);
			console.log(thrownError);
		}
	}

	var autoCheckOptions = {
		url: 'auto-check.php',
		success: function(result){
			//console.log(result);
			if(result === 'true'){
				showMessage('Поздравляем.<br/>За покупку ДИ-1 Вам доступна покупка ДИ-1.3.<br/>На месте формы увидите блок с кнопками оплаты');
				$('.form-subscribe').fadeOut(0);
				$('.form-subscribe2').fadeIn(0);
			}else{
				showMessage('Для участия в ДИ-1.3 необходимо пройти ДИ-1<br/><a style="color:#fff;text-decoration:underline;" href="http://integra.dowlatow.ru/" target="_blank">приобрести и пройти курс ДИ-1</a>');
			}
			$('.form-subscribe').clearForm();

		},
		error: function (xhr, ajaxOptions, thrownError) {
			alert(xhr.status);
			alert(thrownError);
		}
	}

	$('.form-subscribe2').ajaxForm(options);

	$('.form-subscribe').ajaxForm(autoCheckOptions);

	function showMessage(text){
		if(!popupExist){
			var popupContainer = $('\
				<div class="popup-container">\
		            <div class="popup-message">\
		                <p></p>\
		            </div>\
		        </div>\
			').prependTo('body');
			popupContainer.find('p').html(text);
			popupContainer.fadeIn(250);
			popupExist = true;
			//$.scrollTo('html', 2000);
			setTimeout(function(){
				popupContainer.fadeOut(250, function(){
					popupContainer.remove();
					popupExist = false;
				});
			}, 5000);
		}
	}

	function validate(formData, jqForm, options) {
		//console.log(formData, jqForm, options);
		if(!$("#di-1-1").prop("checked") && !$("#di-1-2").prop("checked")){
			showMessage('Выберите один или несколько тренингов!');
		}

		// formData is an array of objects representing the name and value of each field
		// that will be sent to the server;  it takes the following form:
		//
		// [
		//     { name:  username, value: valueOfUsernameInput },
		//     { name:  password, value: valueOfPasswordInput }
		// ]
		//
		// To validate, we can examine the contents of this array to see if the
		// username and password fields have values.  If either value evaluates
		// to false then we return false from this method.

		/*for (var i=0; i < formData.length; i++) {
			if (!formData[i].value) {
				alert('Please enter a value for both Username and Password');
				return false;
			}
		}
		alert('Both fields contain values.');*/
	}
});


