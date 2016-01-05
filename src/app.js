angular.module('sampleModule',['ngRoute','ngMaterial', 'ui.grid','jkuri.gallery'])
	.config(function($routeProvider,$locationProvider){
		$routeProvider
			.when('/list',{
				controller:'listCtrl',
				templateUrl:'list/list.html'
			})
			.when('/detail/:ID',{
				controller:'detailCtrl',
				templateUrl:'detail/detail.html'
			})
			.otherwise({ redirectTo: '/list' });
		$locationProvider.html5Mode(true);
	})
	.factory('dataService',function(){
		var data = [
					{'image':'http://images.designntrend.com/data/images/full/72810/one-punch-man.jpg?w=780',
					 'Title':'One Punch Man',
					 'Description':'Saitama is a hero who only became a hero for fun. After three years of "special" training, though, he\'s become so strong that he\'s practically invincible. In fact, he\'s too strong, even his mightiest opponents are taken out with a single punch, and it turns out that being devastatingly powerful is actually kind of a bore. With his passion for being a hero lost along with his hair, yet still faced with new enemies every day, how much longer can he keep it going?',
					 'price':'5.0',
					 'chapter':{'chapter name':'Onepunch-Man 56.5',
								'pages':[
									'http://img.mymanga.me/165646859118035090191160551114.jpg',
									'http://img.mymanga.me/1715828161380057047732699780.jpg',
									'http://img.mymanga.me/487783731564958066863611638.jpg',
									'http://img.mymanga.me/18821394941394606781932686606.jpg',
									'http://img.mymanga.me/296220265302236621674713482.jpg',
									'http://img.mymanga.me/11622493610345359862089973136.jpg',
									'http://img.mymanga.me/82973258302924182541181329.jpg',
									'http://img.mymanga.me/152419938916512408111227227539.jpg',
									'http://img.mymanga.me/11496268801809558770789831506.jpg',
									'http://img.mymanga.me/188364700020890901581264543817.jpg',
									'http://img.mymanga.me/612386685473848371049945213.jpg',
									'http://img.mymanga.me/13942237199739259381626123218.jpg',
									'http://img.mymanga.me/140891896418671689711652595547.jpg',
									'http://img.mymanga.me/19167118551208850476195630845.jpg'
								]
								,}
					},
					{'image':'http://img03.deviantart.net/c926/i/2013/071/5/5/dragon_ball_z___gogeta_by_l33t_n-d5xv1bc.jpg',
					 'Title':'Dragon Ball Z',
					 'Description':'Dragon Ball is a Japanese manga series written and illustrated by Akira Toriyama. It was originally serialized in Weekly Shōnen Jump from 1984 to 1995, with the 519 individual chapters published into 42 tankōbon volumes by Shueisha. Dragon Ball was initially inspired by the classical Chinese novel Journey to the West. The series follows the adventures of the protagonist, Goku, from his childhood through adulthood as he trains in martial arts and explores the world in search of the seven orbs known as the Dragon Balls, which summon a wish-granting dragon when gathered. Along his journey, Goku makes several friends and battles a wide variety of villains, many of whom also seek the Dragon Balls.',
					 'price':'5.0',
					 'chapter':{'chapter name':'Chapter 1',
								'pages':[
									'http://i7.mangareader.net/dragon-ball/1/dragon-ball-1695159.jpg',
									'http://i4.mangareader.net/dragon-ball/1/dragon-ball-1695160.jpg',
									'http://i10.mangareader.net/dragon-ball/1/dragon-ball-1695162.jpg',
									'http://i8.mangareader.net/dragon-ball/1/dragon-ball-1695165.jpg',
									'http://i8.mangareader.net/dragon-ball/1/dragon-ball-1695168.jpg',
									'http://i8.mangareader.net/dragon-ball/1/dragon-ball-1695169.jpg',
									'http://i6.mangareader.net/dragon-ball/1/dragon-ball-1695184.jpg',
									'http://i6.mangareader.net/dragon-ball/1/dragon-ball-1695188.jpg',
									'http://i4.mangareader.net/dragon-ball/1/dragon-ball-1695191.jpg',
									'http://i10.mangareader.net/dragon-ball/1/dragon-ball-1695196.jpg',
									'http://i8.mangareader.net/dragon-ball/1/dragon-ball-1695199.jpg',
									'http://i8.mangareader.net/dragon-ball/1/dragon-ball-1695202.jpg',
									'http://i6.mangareader.net/dragon-ball/1/dragon-ball-1695207.jpg',
									'http://i3.mangareader.net/dragon-ball/1/dragon-ball-1695220.jpg',
									'http://i1.mangareader.net/dragon-ball/1/dragon-ball-1695240.jpg',
									'http://i7.mangareader.net/dragon-ball/1/dragon-ball-1695247.jpg',
									'http://i5.mangareader.net/dragon-ball/1/dragon-ball-1695253.jpg',
									'http://i6.mangareader.net/dragon-ball/1/dragon-ball-1695267.jpg'
								]}
					},
					{'image':'https://lh3.googleusercontent.com/-LdnRekp2vaE/VVEX9bEb5nI/AAAAAAAACj4/BiFoV0wFgsM/w1550-h1550/naruto_shippuden_by_thirst122-d6gczaw.jpg',
					 'Title':'Naruto',
					 'Description':'Twelve years before the start of the series, the Nine-Tails attacked Konohagakure, destroying much of the village and taking many lives. The leader of the village, the Fourth Hokage sacrificed his life to seal the Nine-Tails into a newborn, Naruto Uzumaki. Orphaned by the attack, Naruto was shunned by the villagers, who out of fear and anger, viewed him as the Nine-Tails itself. Though the Third Hokage outlawed speaking about anything related to the Nine-Tails, the children — taking their cues from their parents — inherited the same animosity towards Naruto. In his thirst to be acknowledged, Naruto vowed he would one day become the greatest Hokage the village had ever seen',
					 'price':'5.0',
					 'chapter':{'chapter name':'Naruto 700.5',
										'pages':[
											'http://2.p.mpcdn.net/6841/684942/1.jpg',
											'http://2.p.mpcdn.net/6841/684942/2.jpg',
											'http://2.p.mpcdn.net/6841/684942/3.jpg',
											'http://2.p.mpcdn.net/6841/684942/4.jpg',
											'http://2.p.mpcdn.net/6841/684942/5.jpg',
											'http://2.p.mpcdn.net/6841/684942/6.jpg',
											'http://2.p.mpcdn.net/6841/684942/7.jpg',
											'http://2.p.mpcdn.net/6841/684942/8.jpg',
											'http://2.p.mpcdn.net/6841/684942/9.jpg',
											'http://2.p.mpcdn.net/6841/684942/10.jpg',
											'http://2.p.mpcdn.net/6841/684942/11.jpg',
											'http://2.p.mpcdn.net/6841/684942/12.jpg',
											'http://2.p.mpcdn.net/6841/684942/13.jpg',
											'http://2.p.mpcdn.net/6841/684942/14.jpg',
											'http://2.p.mpcdn.net/6841/684942/15.jpg',
											'http://2.p.mpcdn.net/6841/684942/16.jpg',
											'http://2.p.mpcdn.net/6841/684942/17.jpg'
										]}
					},
					{'image':'http://www.genibellule.com/luffy.jpg',
					 'Title':'One Piece',
					 'Description':'One Piece is a Japanese manga series written and illustrated by Eiichiro Oda. It has been serialized in Shueisha\'s Weekly Shōnen Jump magazine since July 19, 1997, with the chapters collected into seventy-nine tankōbon volumes to date. One Piece follows the adventures of Monkey D. Luffy, a funny young man whose body gained the properties of rubber after unintentionally eating a Devil Fruit. With his diverse crew of pirates, named the Straw Hat Pirates, Luffy explores the ocean in search of the world\'s ultimate treasure known as "One Piece" in order to become the next Pirate King.',
					 'price':'5.0',
					 'chapter':{'chapter name':'One Piece 795',
								'pages':[
									'http://i10.mangareader.net/one-piece/795/one-piece-5843593.jpg',
									'http://i2.mangareader.net/one-piece/795/one-piece-5843599.jpg',
									'http://i6.mangareader.net/one-piece/795/one-piece-5843605.jpg',
									'http://i10.mangareader.net/one-piece/795/one-piece-5843611.jpg',
									'http://i6.mangareader.net/one-piece/795/one-piece-5843617.jpg',
									'http://i7.mangareader.net/one-piece/795/one-piece-5843623.jpg',
									'http://i9.mangareader.net/one-piece/795/one-piece-5843629.jpg',
									'http://i9.mangareader.net/one-piece/795/one-piece-5843635.jpg',
									'http://i5.mangareader.net/one-piece/795/one-piece-5843641.jpg',
									'http://i5.mangareader.net/one-piece/795/one-piece-5843647.jpg',
									'http://i9.mangareader.net/one-piece/795/one-piece-5843653.jpg',
									'http://i5.mangareader.net/one-piece/795/one-piece-5843659.jpg',
									'http://i4.mangareader.net/one-piece/795/one-piece-5843665.jpg',
									'http://i6.mangareader.net/one-piece/795/one-piece-5843671.jpg',
									'http://i4.mangareader.net/one-piece/795/one-piece-5843677.jpg',
									'http://i6.mangareader.net/one-piece/795/one-piece-5843683.jpg',
									'http://i10.mangareader.net/one-piece/795/one-piece-5843689.jpg'
								]}
					},
					{'image':'https://lh4.ggpht.com/nrvfFEvReW0W34eDdL3VivDcHVsMU29gpTecWULIs_4oCmvhMV9JCA5c3aJ2Z5_kkoA',
					 'Title':'Death Note',
					 'Description':'The series Death Note centers around a high school student named Light Yagami who discovers a supernatural notebook that allows him to kill anyone by writing the victim\'s name while picturing his or her face. The plot follows his attempts to become God by creating a New World cleansed of evil, using the book; the complex conflict between himself and all those who try to stop him.',
					 'price':'5.0',
					 'chapter':{'chapter name':'Death Note Oneshot 1',
								'pages':[
									'http://i5.mangareader.net/death-note-oneshot/1/death-note-oneshot-946569.jpg',
									'http://i7.mangareader.net/death-note-oneshot/1/death-note-oneshot-946570.jpg',
									'http://i7.mangareader.net/death-note-oneshot/1/death-note-oneshot-946571.jpg',
									'http://i7.mangareader.net/death-note-oneshot/1/death-note-oneshot-946572.jpg',
									'http://i1.mangareader.net/death-note-oneshot/1/death-note-oneshot-946573.jpg',
									'http://i9.mangareader.net/death-note-oneshot/1/death-note-oneshot-946574.jpg',
									'http://i1.mangareader.net/death-note-oneshot/1/death-note-oneshot-946575.jpg',
									'http://i1.mangareader.net/death-note-oneshot/1/death-note-oneshot-946576.jpg',
									'http://i1.mangareader.net/death-note-oneshot/1/death-note-oneshot-946577.jpg',
									'http://i3.mangareader.net/death-note-oneshot/1/death-note-oneshot-946578.jpg',
									'http://i9.mangareader.net/death-note-oneshot/1/death-note-oneshot-946579.jpg',
									'http://i1.mangareader.net/death-note-oneshot/1/death-note-oneshot-946580.jpg',
									'http://i1.mangareader.net/death-note-oneshot/1/death-note-oneshot-946581.jpg',
									'http://i7.mangareader.net/death-note-oneshot/1/death-note-oneshot-946582.jpg',
									'http://i3.mangareader.net/death-note-oneshot/1/death-note-oneshot-946583.jpg',
									'http://i1.mangareader.net/death-note-oneshot/1/death-note-oneshot-946584.jpg',
									'http://i7.mangareader.net/death-note-oneshot/1/death-note-oneshot-946585.jpg',
									'http://i1.mangareader.net/death-note-oneshot/1/death-note-oneshot-946586.jpg',
									'http://i9.mangareader.net/death-note-oneshot/1/death-note-oneshot-946587.jpg',
									'http://i1.mangareader.net/death-note-oneshot/1/death-note-oneshot-946588.jpg'
								]}
					}	
                    ];
		return{
			setData: function(newData){
				data = newData;
			},
			setDataOf:function(index,newData){
				data[index] = newData;
			},
			getAllData: function(){
				return data;
			},
			getDataOf:function(index){
				return data[index];
			},
		};
	});