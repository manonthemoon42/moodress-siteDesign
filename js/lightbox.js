function	zoomIn(elem)
{
    if (document.getElementById("zoom-block").className == "lightbox")
    {
	document.getElementById("all").className = "";
	document.getElementById("zoom-block").className = "";
	document.getElementById("zoom-block").innerHTML = "";		
    }
    else
    {
	largePicture = elem.getElementsByTagName('img')[0].getAttribute('src').substring(0, elem.getElementsByTagName('img')[0].getAttribute('src').length) + '.large';
	document.getElementById("all").className = "my-body";
	document.getElementById("zoom-block").className = "lightbox";
	topMargin = document.documentElement.scrollTop || document.body.scrollTop + 100;
	document.getElementById("all").style.height = document.documentElement.scrollHeight || document.body.scrollHeight;
	document.getElementById("zoom-block").style.top =  topMargin + "px";
	document.getElementById("zoom-block").innerHTML = "<a class='close' onClick='zoomIn(this)'>x</a><div style='float:right;text-align:left;border:none;background-color:white;width:30%;padding:20px;'><img src='img/moodress.png' style='float:left;width:40px;display:inline-block;margin-right:10px;' /><h1 style='display:inline-block;margin:0;'>" + elem.title + "</h1><p>" + elem.getElementsByTagName('span')[0].innerHTML + "</p><div style='float:left;line-height:13px;vertical-align:middle;color:gray;font-size:10px;'>June 29, 5:20am</div><div style='float:right;text-align:right;font-size:13px;margin-bottom:20px;'><i class='fi-like'></i> 25 <i class='fi-comment' style='margin-left:8px;'></i> 12</div><hr /><div class='row' style='margin-bottom:20px;'><div class='large-2 columns' style='margin:0;padding:0 5px 0 0;'><img src='http://placehold.it/30x30&text=PP' /></div><div class='large-10 columns' style='padding:0;'><p style='margin:0;'><span style='font-weight:bold;'>Sandro</span> Lorem ipsum dolor sit amet, consecte adipiscing elit. Quisque a elit non dolor consequat dictum at vel metus.</p><p style='clear:both;font-size:10px;margin:2px 0 5px 0;'><span style='font-size:14px;color:gray;'><i class='fi-like'></i></span> June 29 at 5:20am</p></div></div><div class='row'><div class='large-2 columns' style='margin:0;padding:0 5px 0 0;'><img src='http://placehold.it/30x30&text=PP' /></div><div class='large-10 columns' style='padding:0;'><p style='margin:0;'><span style='font-weight:bold;'>Omer</span> Nice!</p><p style='clear:both;font-size:10px;margin:2px 0 5px 0;'><span style='font-size:14px;color:gray;'><i class='fi-like'></i></span> June 29 at 5:20am</p></div></div></div><div class='pic' style='float:left;'><img src='" + largePicture + "' /></div>";
    }
}
