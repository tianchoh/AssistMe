var imagesArray   =   ["images2/1.png", "images2/2.png", "images2/3.png", "images2/4.png",
	                   "images2/5.png", "images2/6.png","images2/7.png", "images2/8.png",
				       "images2/9.png", "images2/10.png", "images2/11.png", "images2/12.png",
			    	   "images2/13.png", "images2/14.png", "images2/15.png", "images2/16.png",
					   "images2/17.png", "images2/18.png", "images2/19.png", "images2/20.png",
					   "images2/21.png", "images2/22.png", "images2/23.png", "images2/24.png",
					   "images2/25.png", "images2/26.png", "images2/27.png", "images2/28.png",
					   "images2/29.png", "images2/30.png", "images2/31.png", "images2/32.png",
					   "images2/33.png", "images2/34.png", "images2/35.png", "images2/36.png",
					   "images2/37.png", "images2/38.png", "images2/39.png", "images2/40.png",
					   "images2/41.png", "images2/42.png", "images2/43.png", "images2/44.png",
					   "images2/45.png"];
function hideImage(){
	$("#Image").hide()
	$("#ST").click(function(){
		$("#Image").show()
		$("#HIDE").hide(0)
		})
	}
function displayImage(){
	hideImage();
	for (var i = 0, num = []; i < 7; i++) {
    num[i] = i;
  }
  num.sort(function () {
      var xyz = Math.floor(Math.random() - 0.5);
	  return xyz
  });
   
   for(var j = 0;j<2;j++){
    document.canvas.src = imagesArray[num[j]];
	$("#1").click(function(){
		var e = document.getElementById("1").val();
		})
   }
}





















/*


$(document).ready(function(){
	$("#H").hide(0)
	$("#ST").click(function(){
	$("#Image").show()
	$("#HIDE").hide(0)
	var imagesArray = ["images2/1.png", "images2/2.png", "images2/3.png", "images2/4.png",
	                   "images2/5.png", "images2/6.png", "images2/7.png", "images2/8.png",
				       "images2/9.png", "images2/10.png", "images2/11.png", "images2/12.png",
			    	   "images2/13.png", "images2/14.png", "images2/15.png", "images2/16.png",
					   "images2/17.png", "images2/18.png", "images2/19.png", "images2/20.png",
					   "images2/21.png", "images2/22.png", "images2/23.png", "images2/24.png",
					   "images2/25.png", "images2/26.png", "images2/27.png", "images2/28.png",
					   "images2/29.png", "images2/30.png", "images2/31.png", "images2/32.png",
					   "images2/33.png", "images2/34.png", "images2/35.png", "images2/36.png",
					   "images2/37.png", "images2/38.png", "images2/39.png", "images2/40.png",
					   "images2/41.png", "images2/42.png", "images2/43.png", "images2/44.png",
					   "images2/45.png"]
	for (var i = 0, num = []; i < 45; i++) {
    num[i] = i;	
	}
	num.sort(function () {
      return Math.floor(Math.random() - 0.5);
    });
	//for(var j = 0;j<45;j++){
    document.canvas.src = imagesArray[num[0]];	
	//}
	alert("reach")
	$("#S").click(function hi(){
	alert("reach2")
	var count = 0
	count = count + 1
	var placing = count
	if(count<5){
    document.canvas.src = imagesArray[placing];	
	alert("Reached! Placing:" + placing)
	}else{
		
	}
	})
	})
	})*/