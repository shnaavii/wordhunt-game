
			var words = ['the', 'this', 'there', 'they','are','you','hii', 'them', 'tina', 'baby','gun','on','book','run','pan','why','doll','pot','sun','amor','fun','cat','my','jug','wow','ant','kite','java','wet','pin','eat','top','yum','unity','ice','ohh','lol','goal','poll','have','we','me','nope','bun','vase','pop','ans','none','in'];
	       
			var i , u , p , r ;
			var k =0;
			var sp ,sq , sr , st;
			i=Math.floor(Math.random() * words.length);
			document.getElementById("ans").innerHTML = words[i] ;  //  array 1
			u=Math.floor(Math.random() * words.length);
			document.getElementById("ans2").innerHTML = words[u] ;  // array 2
	   	    p=Math.floor(Math.random() * words.length);
			document.getElementById("ans3").innerHTML = words[p] ; // array 3
			r=Math.floor(Math.random() * words.length);
			document.getElementById("ans4").innerHTML = words[r] ;  // array 4
	    	 
			var n = 0;    // height 1
			var j = 0;    //height 2
			var c = 0;    //height 2
			var d = 0;    //height 2
			function xyz(){          // animation function
                n++;
                d++;
				j+=0.3;
				c+=0.5;
				
				document.getElementById("stopp").style.height = n +"px";
		        document.getElementById("stopp2").style.height = c +"px";
		        document.getElementById("stopp3").style.height = d +"px";
				document.getElementById("stopp4").style.height = j +"px";
				
		        requestAnimationFrame(xyz);
		   	    if(j >= 560 || n >= 660 || c >= 560 || d >= 660){
		   		   document.getElementById("over").style = "display:block;"
				   document.getElementById("main").style = "overflow:hidden;"  
				   document.getElementById("score").innerHTML = k;
		   	    }
		   }
		    
			function abc() {  // array function
		        var input =document.getElementById("input").value;
				var word1 = document.getElementById("ans").innerHTML;
				var word2 = document.getElementById("ans2").innerHTML;
				var word3 = document.getElementById("ans3").innerHTML;
				var word4 = document.getElementById("ans4").innerHTML;
				
					if (word1 === input  ){
						n=0;
						n++;
						var sp = new Audio (words[i] + '.mp3');
						sp.play();			  
						i=Math.floor(Math.random() * words.length);
						k++;
						document.getElementById("ans").innerHTML = words[i];
						document.getElementById("tim").innerHTML = k ;
						document.getElementById("input").value ='';
						document.getElementById("score").innerHTML = k;
						document.getElementById("score2").innerHTML = k;
					}
					else if (word2 === input  ){
						c=0;
						c++;
						sq = new Audio (words[u] + '.mp3');
						sq.play();
						u=Math.floor(Math.random() * words.length);
						k++;
						document.getElementById("ans2").innerHTML = words[u];
						document.getElementById("tim").innerHTML = k ;
						document.getElementById("input").value ='';
						document.getElementById("score").innerHTML = k;
						document.getElementById("score2").innerHTML = k;
					}
					else if (word3 === input){
						d=0;
						d++;
						sr = new Audio (words[p] + '.mp3');
						sr.play();
						p=Math.floor(Math.random() * words.length);
						k++;
						document.getElementById("ans3").innerHTML = words[p];
						document.getElementById("tim").innerHTML = k ;
						document.getElementById("input").value ='';
						document.getElementById("score").innerHTML = k;
						document.getElementById("score2").innerHTML = k;
					}
					else if (word4 === input ){
						j=0;
						j++;
						st = new Audio (words[r] + '.mp3');
						st.play();
						r=Math.floor(Math.random() * words.length);
						k++;
						document.getElementById("ans4").innerHTML = words[r];
						document.getElementById("tim").innerHTML = k ;
						document.getElementById("input").value ='';
						document.getElementById("score").innerHTML = k;
						document.getElementById("score2").innerHTML = k;
					}
				    if(k >= 50){                               //you win div display condition
						document.getElementById("input").style = "display:none;"
						document.getElementById("stopp").style = "display:none;"
						document.getElementById("stopp2").style = "display:none;"
						document.getElementById("over").style = "display:none;"
						document.getElementById("main").style = "overflow:hidden;"
						document.getElementById("win").style = "display:block;"
						document.getElementById("score2").innerHTML = k;
					} 
			}	
				
				
		        input.addEventListener("keyup", abc);
		        xyz();	     // animationfunction call  
			