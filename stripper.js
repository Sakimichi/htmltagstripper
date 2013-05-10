
$('#convert').on('click',function()
{
	
		$('#convert img').css({'-webkit-animation':'converting 1s linear','animation':'converting 1s linear','-o-animation':'converting 1s linear','-moz-animation':'converting 1s linear','-ms-animation':'converting 1s linear'});
		setTimeout(reset,1300);
		
		var tags_exclude_list=$(".tag");
		
		var tags_exclude_regEx='';
		$.each( tags_exclude_list, function(index, item){
				tags_exclude_regEx=(index==0)?$(item).html():tags_exclude_regEx+'|'+$(item).html();
		});
		
		$('#Output').val('');

		//$('#test').css({'display':'block','opacity':'0'});	
//		$('#test').html($('#Input').val());
		//var divv = document.createElement('div');
		//divv.innerHTML=$('#Input').val();
//		$('#test').find('style').remove();
//		$('#test').find('iframe').remove();
//		$('#test').find('style').remove();

		//$('#test').css({'display':'block','opacity':'1'});
		//$('#test + .shadow').css({'display':'block','margin':'0'});
		

		var regex_final=/<(?!\s*\/?(a|b|c)\b)[^>]+>/ig;
		
		var regex =new RegExp("<(?!\\s*\\/?("+tags_exclude_regEx+")\\b)[^>]+>","gi");
		console.log(regex);
		console.log(regex_final);
//		var regex =(\<)(?!br(\s|\/|\>))(.*?\>);
//		var body = $('#test').html();
		 //var regex = /(?!a|br|/a)[^>]+;
		var body =$('#Input').val();// divv.innerHTML;
		if(tags_exclude_list.length==0)
		{
			regex=/(<([^>]+)>)/ig;
		}
		//regex=/(<([^>]+)>)/ig;
			var result = body.replace(regex, "");

		$('#Output').val(result);

		if($('#Output').val()=='')
		{
			$('#Output').css({'display':'none','opacity':'0'});
			$('#Output').fadeOut("10000");

 		}
		else
		{
			$('#Output').css({'display':'block','opacity':'1'});
			$('#Output').fadeIn("10000");
		}
		
	

});

function reset()
{
		$('#convert img').css({'-webkit-animation':'none','animation':'none','-o-animation':'none','-moz-animation':'none','-ms-animation':'none'});

}
