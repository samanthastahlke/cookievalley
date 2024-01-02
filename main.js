//const Game = require("steamapi/src/structures/Game");

Game.registerMod("sns cookie valley",{
	init:function(){

		Game.Loader.replaced = [];

		Game.Loader.Load=function(assets)
		{
			for (var i in assets)
			{
				this.loadingN++;
				this.assetsN++;
				if (this.assetsLoading.indexOf(assets[i])==-1 && this.assetsLoaded.indexOf(assets[i])==-1)
				{
					var imgSrc = assets[i];

					if(this.replaced[assets[i]])
						imgSrc = this.replaced[assets[i]];

					var img=new Image();
					if (!Game.local) img.crossOrigin='anonymous';
					img.alt=imgSrc;
					img.onload=bind(this,this.onLoad);
					this.assets[assets[i]]=img;
					this.assetsLoading.push(assets[i]);
					if (imgSrc.indexOf('/')!=-1) img.src=imgSrc;
					else img.src=this.domain+imgSrc;
				}
			}
		}

		Game.Loader.Replace=function(old,newer)
		{
			if (!this.assets[old]) this.Load([old]);
			var img=new Image();
			if (!Game.local) img.crossOrigin='anonymous';
			if (newer.indexOf('/')!=-1)/*newer.indexOf('http')!=-1 || newer.indexOf('https')!=-1)*/ img.src=newer;
			else img.src=this.domain+newer;
			img.alt=newer;
			img.onload=bind(this,this.onLoad);
			this.assets[old]=img;
			this.replaced[old]=newer;
		}

		Game.grandmaNames = ["Abigail", "Alex", "Birdie", "Caroline", "Clint", "Demetrius", "Elliott", "Emily", "Evelyn", "George", "Gil", "Governor", "Gunther", "Gus", "Haley", "Harvey", "Jas", "Jodi", "Kent", "Krobus", "Leah", "Leo", "Lewis", "Linus", "Marlon", "Marnie", "Maru", "Mona", "Morris", "Pam", "Penny", "Pierre", "Rasmodius", "Robin", "Sam", "Sandy", "Sebastian", "Shane", "Vincent", "Willy"];

		var greetingName = Game.grandmaNames[Math.floor(Math.random() * Game.grandmaNames.length)];
		var greeting = greetingName + ' was waiting for you.';

		Game.Notify(`Welcome to Cookie Valley!`,greeting,[16,5,this.dir+'/img/modicon.png']);

		Game.Loader.Replace('icons.png',this.dir+'/img/icons.png');
		Game.Loader.Replace('cursor.png',this.dir+'/img/cursor.png');

		Game.Loader.Replace('sugarLump.png',this.dir+'/img/stardrop.png');
		Game.Loader.Replace('heavenlyMoney.png',this.dir+'/img/golden_walnut.png');
		Game.Loader.Replace('buildings.png',this.dir+'/img/buildings.png');
		
		Game.Loader.Replace('farm.png',this.dir+'/img/farm_new.png');
		Game.Loader.Replace('farmBackground.png',this.dir+'/img/bg_farm.png');
		Game.Loader.Replace('mine.png',this.dir+'/img/mine_new.png');
		Game.Loader.Replace('mineBackground.png',this.dir+'/img/bg_mine.png');
		Game.Loader.Replace('factory.png',this.dir+'/img/coop.png');
		Game.Loader.Replace('factoryBackground.png',this.dir+'/img/bg_coop.png');
		Game.Loader.Replace('bank.png',this.dir+'/img/barn.png');
		Game.Loader.Replace('bankBackground.png',this.dir+'/img/bg_barn.png');
		Game.Loader.Replace('temple.png',this.dir+'/img/skullcavern.png');
		Game.Loader.Replace('templeBackground.png',this.dir+'/img/bg_skullcavern.png');
		Game.Loader.Replace('wizardtower.png',this.dir+'/img/wizardtower_new.png');
		Game.Loader.Replace('wizardtowerBackground.png',this.dir+'/img/bg_wizardtower.png');
		Game.Loader.Replace('alchemylab.png',this.dir+'/img/greenhouse.png');
		Game.Loader.Replace('alchemylabBackground.png',this.dir+'/img/bg_greenhouse.png');
		Game.Loader.Replace('shipment.png',this.dir+'/img/fishpond.png');
		Game.Loader.Replace('shipmentBackground.png',this.dir+'/img/bg_fishpond.png');
		Game.Loader.Replace('portal.png',this.dir+'/img/obelisk.png');
		Game.Loader.Replace('portalBackground.png',this.dir+'/img/bg_obelisk.png');
		Game.Loader.Replace('timemachine.png',this.dir+'/img/goldenclock.png');
		Game.Loader.Replace('timemachineBackground.png',this.dir+'/img/bg_goldenclock.png');
		Game.Loader.Replace('prism.png',this.dir+'/img/museum.png');
		Game.Loader.Replace('prismBackground.png',this.dir+'/img/bg_museum.png');
		Game.Loader.Replace('antimattercondenser.png',this.dir+'/img/sewer.png');
		Game.Loader.Replace('antimattercondenserBackground.png',this.dir+'/img/bg_sewer.png');
		Game.Loader.Replace('chancemaker.png',this.dir+'/img/communitycentre.png');
		Game.Loader.Replace('chancemakerBackground.png',this.dir+'/img/bg_communitycentre.png');
		Game.Loader.Replace('fractalEngine.png',this.dir+'/img/cabin.png');
		Game.Loader.Replace('fractalEngineBackground.png',this.dir+'/img/bg_cabin.png');
		Game.Loader.Replace('javascriptconsole.png',this.dir+'/img/island.png');
		Game.Loader.Replace('javascriptconsoleBackground.png',this.dir+'/img/bg_island.png');
		Game.Loader.Replace('idleverse.png',this.dir+'/img/csharpconsole.png');
		Game.Loader.Replace('idleverseBackground.png',this.dir+'/img/bg_csharpconsole.png');
		Game.Loader.Replace('cortex.png',this.dir+'/img/crossoverer.png');
		Game.Loader.Replace('cortexBackground.png',this.dir+'/img/bg_crossoverer.png');
		Game.Loader.Replace('you.png',this.dir+'/img/you_new.png');
		Game.Loader.Replace('youBackground.png',this.dir+'/img/bg_you.png');

		Game.Loader.Replace('grandmaBackground.png',this.dir+'/img/bg_villager.png');
		Game.Loader.Replace('grandma.png',this.dir+'/img/villager.png');

		Game.Loader.Replace('farmerGrandma.png',this.dir+'/img/villager_farm.png');
		Game.Loader.Replace('minerGrandma.png',this.dir+'/img/villager_mine.png');
		Game.Loader.Replace('workerGrandma.png',this.dir+'/img/villager_coop.png');
		Game.Loader.Replace('bankGrandma.png',this.dir+'/img/villager_barn.png');
		Game.Loader.Replace('templeGrandma.png',this.dir+'/img/villager_skullcavern.png');
		Game.Loader.Replace('witchGrandma.png',this.dir+'/img/villager_wizardtower.png');
		Game.Loader.Replace('transmutedGrandma.png',this.dir+'/img/villager_greenhouse.png');
		Game.Loader.Replace('cosmicGrandma.png',this.dir+'/img/villager_fishpond.png');
		Game.Loader.Replace('alteredGrandma.png',this.dir+'/img/villager_obelisk.png');
		Game.Loader.Replace('grandmasGrandma.png',this.dir+'/img/villager_goldenclock.png');
		Game.Loader.Replace('rainbowGrandma.png',this.dir+'/img/villager_museum.png');
		Game.Loader.Replace('antiGrandma.png',this.dir+'/img/villager_sewer.png');
		Game.Loader.Replace('luckyGrandma.png',this.dir+'/img/villager_communitycentre.png');
		Game.Loader.Replace('metaGrandma.png',this.dir+'/img/villager_cabin.png');
		Game.Loader.Replace('scriptGrandma.png',this.dir+'/img/villager_island.png');
		Game.Loader.Replace('alternateGrandma.png',this.dir+'/img/villager_csharpconsole.png');
		Game.Loader.Replace('brainyGrandma.png',this.dir+'/img/villager_crossoverer.png');
		Game.Loader.Replace('cloneGrandma.png',this.dir+'/img/villager_you.png');
		Game.Loader.Replace('bunnyGrandma.png',this.dir+'/img/villager_easter.png');
		Game.Loader.Replace('elfGrandma.png',this.dir+'/img/villager_christmas.png');

		Game.Loader.Replace('grandmas1.jpg',this.dir+'/img/joja1.jpg');
		Game.Loader.Replace('grandmas2.jpg',this.dir+'/img/joja2.jpg');
		Game.Loader.Replace('grandmas3.jpg',this.dir+'/img/joja3.jpg');

		Game.Loader.Replace('wrinkler.png',this.dir+'/img/serpent.png');
		Game.Loader.Replace('wrinklerBits.png',this.dir+'/img/serpent_gibs.png');
		Game.Loader.Replace('winkler.png',this.dir+'/img/serpentito.png');
		Game.Loader.Replace('winterWrinkler.png',this.dir+'/img/serpent_winter.png');
		Game.Loader.Replace('winterWinkler.png',this.dir+'/img/serpentito_winter.png');
		Game.Loader.Replace('shinyWrinkler.png',this.dir+'/img/serpent_gold.png');
		Game.Loader.Replace('shinyWrinklerBits.png',this.dir+'/img/serpent_gibs_gold.png');
		Game.Loader.Replace('shinyWinkler.png',this.dir+'/img/serpentito_gold.png');
		Game.Loader.Replace('wrinklerShadow.png',this.dir+'/img/serpent_shadow.png');

		Game.Loader.Replace('wrinklerBlink.png',this.dir+'/img/blank.png');
		Game.Loader.Replace('wrinklerGooglies.png',this.dir+'/img/blank.png');
		Game.Loader.Replace('youLight.png',this.dir+'/img/blank.png');

		var farmObj = Game.Objects["Farm"];
		farmObj.art.rows = 2;
		farmObj.art.w = 96;
		farmObj.art.yV = 0;

		var mineObj = Game.Objects["Mine"];
		mineObj.art.rows = 1;
		mineObj.art.w = 64;
		mineObj.art.x = 8;
		mineObj.art.xV = 4;
		mineObj.art.y = 14;
		mineObj.art.yV = 12;

		var coopObj = Game.Objects["Factory"];
		coopObj.art.rows = 2;
		coopObj.art.w = 76;
		coopObj.art.x = -2;
		coopObj.art.xV = 0;
		coopObj.art.y = 24;
		coopObj.art.yV = 0;
		
		var barnObj = Game.Objects["Bank"];
		barnObj.art.rows = 2;
		barnObj.art.w = 80;
		barnObj.art.x = 0;
		barnObj.art.xV = 0;
		barnObj.art.y = 30;
		barnObj.art.yV = 0;

		var skullObj = Game.Objects["Temple"];
		skullObj.art.rows = 2;
		skullObj.art.w = 128;
		skullObj.art.x = 4;
		skullObj.art.y = 30;
		skullObj.art.yV = 2;

		var wizObj = Game.Objects["Wizard tower"];
		wizObj.art.rows = 2;
		wizObj.art.w = 64;
		wizObj.art.x = -4;
		wizObj.art.xV = 4;
		wizObj.art.y = 12;
		wizObj.art.yV = 0;
		
		var fishObj = Game.Objects["Shipment"];
		fishObj.art.w = 64;
		fishObj.art.x = 16;
		fishObj.art.xV = 0;
		fishObj.art.y = 24;
		fishObj.art.yV = 24;

		var greenObj = Game.Objects["Alchemy lab"];
		greenObj.art.rows = 2;
		greenObj.art.w = 96;
		greenObj.art.xV = 0;
		greenObj.art.y = 24;
		greenObj.art.yV = 0;

		var obeliskObj = Game.Objects["Portal"];
		obeliskObj.art.rows = 1;
		obeliskObj.art.w = 36;
		obeliskObj.art.xV = 24;
		obeliskObj.art.yV = 32;

		var clockObj = Game.Objects["Time machine"];
		clockObj.art.rows = 2;
		clockObj.art.w = 96;
		clockObj.art.xV = 24;
		clockObj.art.yV = 8;
		clockObj.art.y = 16;

		var sewerObj = Game.Objects["Antimatter condenser"];
		sewerObj.art.y = 24;
		sewerObj.art.yV = 48;

		var museumObj = Game.Objects["Prism"];
		museumObj.art.w = 48;
		museumObj.art.y = 12;

		var commObj = Game.Objects["Chancemaker"];
		commObj.art.rows = 1;
		commObj.art.w = 76;
		commObj.art.xV = 4;
		commObj.art.y = 16;
		commObj.art.yV = 4;

		var cabinObj = Game.Objects["Fractal engine"];
		cabinObj.art.w = 64;
		cabinObj.art.xV = 0;
		cabinObj.art.y = 24;
		cabinObj.art.yV = 16;
		
		var islandObj = Game.Objects["Javascript console"];
		islandObj.art.frames = 1;
		islandObj.art.w = 32;
		islandObj.art.x = 0;
		islandObj.art.xV = 16;
		islandObj.art.y = -24;
		islandObj.art.yV = 16;

		var consoleObj = Game.Objects["Idleverse"];
		consoleObj.art.rows = 1;
		consoleObj.art.w = 64;
		consoleObj.art.xV = 32;
		consoleObj.art.yV = 96;

		var crossObj = Game.Objects["Cortex baker"];
		crossObj.art.yV = 80;

		var youObj = Game.Objects["You"];
		youObj.art.w = 64;
		youObj.art.y = -8;

		//Gently used
		Game.Tiers[1].color = '#c27823';
		//Copper
		Game.Tiers[2].color = '#e37f54';
		//Amethyst
		Game.Tiers[3].color = '#8e47ff';
		//Steel
		Game.Tiers[4].color = '#a3bfd4';
		//Ruby
		Game.Tiers[5].color = '#e82751';
		//Slimy
		Game.Tiers[6].color = '#6aada0';
		//Gold
		Game.Tiers[7].color = '#deb028';
		//Emerald
		Game.Tiers[8].color = '#00c767';
		//Diamond
		Game.Tiers[9].color = '#bddcff';
		//Iridium
		Game.Tiers[10].color = '#47bcff';
		//Prismatic
		Game.Tiers[11].color = '#d4c2ff';
		//Galaxy
		Game.Tiers[12].color = '#c948f7';
		//Volcanic
		Game.Tiers[13].color = '#ff4714';
		//Radioactive
		Game.Tiers[14].color = '#9eff42';
		//Infinity
		Game.Tiers[15].color = '#f9a1ff';

		

		for (var i in Game.Upgrades)
		{
			var it = Game.Upgrades[i];
			it.icon = [it.icon[0], it.icon[1], this.dir+'/img/icons.png'];
		}

		for (var i in Game.Achievements)
		{
			var it = Game.Achievements[i];
			it.icon = [it.icon[0], it.icon[1], this.dir+'/img/icons.png'];
		}

		//Manually update golden cookie icon indices to reflect new tiers.
		Game.UpgradesById[83].icon[1] = 16;
		Game.AchievementsById[67].icon[1] = 16;
		Game.AchievementsById[263].icon[1] = 16;
		Game.AchievementsById[264].icon[1] = 16;

		//Deal with the ticker. In vanilla only parts are localized, so it's forced my hand.
		Game.getNewTicker=function(manual)//note : "manual" is true if the ticker was clicked, but may also be true on startup etc
		{
			var list=[];
			
			var NEWS=loc("News :").replace(' ','&nbsp;')+' ';
			
			var loreProgress=Math.round(Math.log(Game.cookiesEarned/10)*Math.LOG10E+1|0);
			
			if (Game.TickerN%2==0 || loreProgress>14)
			{
				var animals=['newts','penguins','scorpions','axolotls','puffins','porpoises','blowfish','horses','crayfish','slugs','humpback whales','nurse sharks','giant squids','polar bears','fruit bats','frogs','sea squirts','velvet worms','mole rats','paramecia','nematodes','tardigrades','giraffes','monkfish','wolfmen','goblins','hippies'];
				
				if (Math.random()<0.75 || Game.cookiesEarned<10000)
				{
					if (Game.Objects['Grandma'].amount>0) list.push('<q>'+choose(loc("Ticker (grandma)"))+'</q><sig>'+Game.Objects['Grandma'].single+'</sig>');
					
					if (!Game.prefs.notScary && Game.Objects['Grandma'].amount>=50) list.push('<q>'+choose(loc("Ticker (threatening grandma)"))+'</q><sig>'+Game.Objects['Grandma'].single+'</sig>');
					
					if (EN && Game.HasAchiev('Just wrong') && Math.random()<0.05) list.push(NEWS+'cookie manufacturer downsizes, sells own grandmother!');
					if (!Game.prefs.notScary && Game.HasAchiev('Just wrong') && Math.random()<0.4) list.push('<q>'+choose(loc("Ticker (angry grandma)"))+'</q><sig>'+Game.Objects['Grandma'].single+'</sig>');
					
					if (!Game.prefs.notScary && Game.Objects['Grandma'].amount>=1 && Game.pledges>0 && Game.elderWrath==0) list.push('<q>'+choose(loc("Ticker (grandmas return)"))+'</q><sig>'+Game.Objects['Grandma'].single+'</sig>');
					
					if (!EN)
					{
						for (var i in Game.Objects)
						{
							if (i!='Cursor' && i!='Grandma' && Game.Objects[i].amount>0) list.push(NEWS+choose(loc("Ticker ("+i+")")));
						}
						
						if (Game.cookiesEarned>=1000)
						{
							if (Game.season=='halloween') list.push(NEWS+choose(loc("Ticker (Halloween)")));
							if (Game.season=='christmas') list.push(NEWS+choose(loc("Ticker (Christmas)")));
							if (Game.season=='valentines') list.push(NEWS+choose(loc("Ticker (Valentines)")));
							if (Game.season=='easter') list.push(NEWS+choose(loc("Ticker (Easter)")));
						}
					}
					else
					{
						if (Game.Objects['Farm'].amount>0) list.push(
							NEWS+choose(loc("Ticker (Farm)")));
						
						if (Game.Objects['Mine'].amount>0) list.push(choose([
							NEWS+choose(loc("Ticker (Mine)"))
						]));
						
						if (Game.Objects['Factory'].amount>0) list.push(choose([
							NEWS+choose(loc("Ticker (Factory)"))
						]));
						
						if (Game.Objects['Bank'].amount>0) list.push(choose([
							NEWS+choose(loc("Ticker (Bank)"))
						]));
						
						if (Game.Objects['Temple'].amount>0) list.push(choose([
							NEWS+choose(loc("Ticker (Temple)"))
						]));
						
						if (Game.Objects['Wizard tower'].amount>0) list.push(choose([
							NEWS+choose(loc("Ticker (Wizard tower)"))
						]));
						
						if (Game.Objects['Shipment'].amount>0) list.push(choose([
							NEWS+choose(loc("Ticker (Shipment)"))
						]));
						
						if (Game.Objects['Alchemy lab'].amount>0) list.push(choose([
							NEWS+choose(loc("Ticker (Alchemy lab)"))
						]));
						
						if (Game.Objects['Portal'].amount>0) list.push(choose([
							NEWS+choose(loc("Ticker (Portal)"))
						]));
						
						if (Game.Objects['Time machine'].amount>0) list.push(choose([
							NEWS+choose(loc("Ticker (Time machine)"))
						]));
						
						if (Game.Objects['Antimatter condenser'].amount>0) list.push(choose([
							NEWS+choose(loc("Ticker (Antimatter condenser)"))
						]));
						
						if (Game.Objects['Prism'].amount>0) list.push(choose([
							NEWS+choose(loc("Ticker (Prism)"))
						]));
						
						if (Game.Objects['Chancemaker'].amount>0) list.push(choose([
							NEWS+choose(loc("Ticker (Chancemaker)"))
						]));
						
						if (Game.Objects['Fractal engine'].amount>0) list.push(choose([
							NEWS+choose(loc("Ticker (Fractal engine)"))
						]));
						
						if (Game.Objects['Javascript console'].amount>0) list.push(choose([
							NEWS+choose(loc("Ticker (Javascript console)"))
						]));
						
						if (Game.Objects['Idleverse'].amount>0) list.push(choose([
							NEWS+choose(loc("Ticker (Idleverse)"))
						]));
						
						if (Game.Objects['Cortex baker'].amount>0) list.push(choose([
							NEWS+choose(loc("Ticker (Cortex baker)"))
						]));
						
						if (Game.Objects['You'].amount>0) list.push(choose([
							NEWS+choose(loc("Ticker (You)"))
						]));
						
						if (Game.season=='halloween' && Game.cookiesEarned>=1000) list.push(choose([
						'News : strange twisting creatures amass around cookie factories, nibble at assembly lines.',
						'News : ominous wrinkly monsters take massive bites out of cookie production; "this can\'t be hygienic", worries worker.',
						'News : pagan rituals on the rise as children around the world dress up in strange costumes and blackmail homeowners for candy.',
						'News : new-age terrorism strikes suburbs as houses find themselves covered in eggs and toilet paper.',
						'News : children around the world "lost and confused" as any and all Halloween treats have been replaced by cookies.'
						]));
						
						if (Game.season=='christmas' && Game.cookiesEarned>=1000) list.push(choose([
						'News : bearded maniac spotted speeding on flying sleigh! Investigation pending.',
						'News : Santa Claus announces new brand of breakfast treats to compete with cookie-flavored cereals! "They\'re ho-ho-horrible!" says Santa.',
						'News : "You mean he just gives stuff away for free?!", concerned moms ask. "Personally, I don\'t trust his beard."',
						'News : obese jolly lunatic still on the loose, warn officials. "Keep your kids safe and board up your chimneys. We mean it."',
						'News : children shocked as they discover Santa Claus isn\'t just their dad in a costume after all!<br>"I\'m reassessing my life right now", confides Laura, aged 6.',
						'News : mysterious festive entity with quantum powers still wrecking havoc with army of reindeer, officials say.',
						'News : elves on strike at toy factory! "We will not be accepting reindeer chow as payment anymore. And stop calling us elves!"',
						'News : elves protest around the nation; wee little folks in silly little outfits spread mayhem, destruction; rabid reindeer running rampant through streets.',
						'News : scholars debate regarding the plural of reindeer(s) in the midst of elven world war.',
						'News : elves "unrelated to gnomes despite small stature and merry disposition", find scientists.',
						'News : elves sabotage radioactive frosting factory, turn hundreds blind in vicinity - "Who in their right mind would do such a thing?" laments outraged mayor.',
						'News : drama unfolds at North Pole as rumors crop up around Rudolph\'s red nose; "I may have an addiction or two", admits reindeer.'
						]));
						
						if (Game.season=='valentines' && Game.cookiesEarned>=1000) list.push(choose([
						'News : organ-shaped confectioneries being traded in schools all over the world; gruesome practice undergoing investigation.',
						'News : heart-shaped candies overtaking sweets business, offering competition to cookie empire. "It\'s the economy, cupid!"',
						'News : love\'s in the air, according to weather specialists. Face masks now offered in every city to stunt airborne infection.',
						'News : marrying a cookie - deranged practice, or glimpse of the future?',
						'News : boyfriend dumped after offering his lover cookies for Valentine\'s Day, reports say. "They were off-brand", shrugs ex-girlfriend.'
						]));
						
						if (Game.season=='easter' && Game.cookiesEarned>=1000) list.push(choose([
						'News : long-eared critters with fuzzy tails invade suburbs, spread terror and chocolate!',
						'News : eggs have begun to materialize in the most unexpected places; "no place is safe", warn experts.',
						'News : packs of rampaging rabbits cause billions in property damage; new strain of myxomatosis being developed.',
						'News : egg-laying rabbits "not quite from this dimension", warns biologist; advises against petting, feeding, or cooking the creatures.',
						'News : mysterious rabbits found to be egg-layers, but mammalian, hinting at possible platypus ancestry.'
						]));
					}
				}
				if (!EN)
				{
					if (Game.cookiesEarned>=10000)
					{
						list.push(NEWS+choose(loc("Ticker (misc)")));
						list.push(NEWS+choose(loc("Ticker (misc)")));
						list.push(NEWS+choose(loc("Ticker (misc)")));
					}
				}
				else
				{
					if (Math.random()<0.05)
					{
						if (Game.HasAchiev('Base 10')) list.push('News : cookie manufacturer completely forgoes common sense, lets strange obsession with round numbers drive building decisions!');
						if (Game.HasAchiev('From scratch')) list.push('News : follow the tear-jerking, riches-to-rags story about a local cookie manufacturer who decided to give it all up!');
						if (Game.HasAchiev('A world filled with cookies')) list.push('News : known universe now jammed with cookies! No vacancies!');
						if (Game.HasAchiev('Last Chance to See')) list.push('News : incredibly rare albino wrinkler on the brink of extinction poached by cookie-crazed pastry magnate!');
						if (Game.Has('Serendipity')) list.push('News : local cookie manufacturer becomes luckiest being alive!');
						if (Game.Has('Season switcher')) list.push('News : seasons are all out of whack! "We need to get some whack back into them seasons", says local resident.');
						
						if (Game.Has('Kitten helpers')) list.push('News : faint meowing heard around local cookie facilities; suggests new ingredient being tested.');
						if (Game.Has('Kitten workers')) list.push('News : crowds of meowing kittens with little hard hats reported near local cookie facilities.');
						if (Game.Has('Kitten engineers')) list.push('News : surroundings of local cookie facilities now overrun with kittens in adorable little suits. Authorities advise to stay away from the premises.');
						if (Game.Has('Kitten overseers')) list.push('News : locals report troupe of bossy kittens meowing adorable orders at passersby.');
						if (Game.Has('Kitten managers')) list.push('News : local office cubicles invaded with armies of stern-looking kittens asking employees "what\'s happening, meow".');
						if (Game.Has('Kitten accountants')) list.push('News : tiny felines show sudden and amazing proficiency with fuzzy mathematics and pawlinomials, baffling scientists and pet store owners.');
						if (Game.Has('Kitten specialists')) list.push('News : new kitten college opening next week, offers courses on cookie-making and catnip studies.');
						if (Game.Has('Kitten experts')) list.push('News : unemployment rates soaring as woefully adorable little cats nab jobs on all levels of expertise, says study.');
						if (Game.Has('Kitten consultants')) list.push('News : "In the future, your job will most likely be done by a cat", predicts suspiciously furry futurologist.');
						if (Game.Has('Kitten assistants to the regional manager')) list.push('News : strange kittens with peculiar opinions on martial arts spotted loitering on local beet farms!');
						if (Game.Has('Kitten marketeers')) list.push('News : nonsensical kitten billboards crop up all over countryside, trying to sell people the cookies they already get for free!');
						if (Game.Has('Kitten analysts')) list.push('News : are your spending habits sensible? For a hefty fee, these kitten analysts will tell you!');
						if (Game.Has('Kitten executives')) list.push('News : kittens strutting around in hot little business suits shouting cut-throat orders at their assistants, possibly the cutest thing this reporter has ever seen!');
						if (Game.Has('Kitten admins')) list.push('News : all systems nominal, claim kitten admins obviously in way over their heads.');
						if (Game.Has('Kitten strategists')) list.push('News : overpaid kittens scratching their fuzzy little heads trying to find new ways to get cookies in your shopping cart!');
						if (Game.Has('Kitten angels')) list.push('News : "Try to ignore any ghostly felines that may be purring inside your ears," warn scientists. "They\'ll just lure you into making poor life choices."');
						if (Game.Has('Kitten wages')) list.push('News : kittens break glass ceiling! Do they have any idea how expensive those are!');
						if (Game.HasAchiev('Jellicles')) list.push('News : local kittens involved in misguided musical production, leave audience perturbed and unnerved.');
					}
					
					if (Game.HasAchiev('Dude, sweet') && Math.random()<0.2) list.push(choose([
					'News : major sugar-smuggling ring dismantled by authorities; '+Math.floor(Math.random()*30+3)+' tons of sugar lumps seized, '+Math.floor(Math.random()*48+2)+' suspects apprehended.',
					'News : authorities warn tourists not to buy bootleg sugar lumps from street peddlers - "You think you\'re getting a sweet deal, but what you\'re being sold is really just ordinary cocaine", says agent.',
					'News : pro-diabetes movement protests against sugar-shaming. "I\'ve eaten nothing but sugar lumps for the past '+Math.floor(Math.random()*10+4)+' years and I\'m feeling great!", says woman with friable skin.',
					'News : experts in bitter disagreement over whether sugar consumption turns children sluggish or hyperactive.',
					'News : fishermen deplore upturn in fish tooth decay as sugar lumps-hauling cargo sinks into the ocean.',
					'News : rare black sugar lump that captivated millions in unprecedented auction revealed to be common toxic fungus.',
					'News : "Back in my day, sugar lumps were these little cubes you\'d put in your tea, not those fist-sized monstrosities people eat for lunch", whines curmudgeon with failing memory.',
					'News : sugar lump-snacking fad sweeps the nation; dentists everywhere rejoice.'
					]));
					
					if (Math.random()<0.001)//apologies to Will Wright
					{
						list.push(
						'You have been chosen. They will come soon.',
						'They\'re coming soon. Maybe you should think twice about opening the door.',
						'The end is near. Make preparations.',
						'News : broccoli tops for moms, last for kids; dads indifferent.',
						'News : middle age a hoax, declares study; turns out to be bad posture after all.',
						'News : kitties want answers in possible Kitty Kibble shortage.'
						);
					}
					
					if (Game.cookiesEarned>=10000) list.push(
					'News : '+choose([
						'cookies found to '+choose(['increase lifespan','sensibly increase intelligence','reverse aging','decrease hair loss','prevent arthritis','cure blindness'])+' in '+choose(animals)+'!',
						'cookies found to make '+choose(animals)+' '+choose(['more docile','more handsome','nicer','less hungry','more pragmatic','tastier'])+'!',
						'cookies tested on '+choose(animals)+', found to have no ill effects.',
						'cookies unexpectedly popular among '+choose(animals)+'!',
						'unsightly lumps found on '+choose(animals)+' near cookie facility; "they\'ve pretty much always looked like that", say biologists.',
						'new species of '+choose(animals)+' discovered in distant country; "yup, tastes like cookies", says biologist.',
						'cookies go well with '+choose([choose(['roasted','toasted','boiled','sauteed','minced'])+' '+choose(animals),choose(['sushi','soup','carpaccio','steak','nuggets'])+' made from '+choose(animals)])+', says controversial chef.',
						'"do your cookies contain '+choose(animals)+'?", asks PSA warning against counterfeit cookies.',
						'doctors recommend twice-daily consumption of fresh cookies.',
						'doctors warn against chocolate chip-snorting teen fad.',
						'doctors advise against new cookie-free fad diet.',
						'doctors warn mothers about the dangers of "home-made cookies".'
						]),
					'News : "'+choose([
						'I\'m all about cookies',
						'I just can\'t stop eating cookies. I think I seriously need help',
						'I guess I have a cookie problem',
						'I\'m not addicted to cookies. That\'s just speculation by fans with too much free time',
						'my upcoming album contains 3 songs about cookies',
						'I\'ve had dreams about cookies 3 nights in a row now. I\'m a bit worried honestly',
						'accusations of cookie abuse are only vile slander',
						'cookies really helped me when I was feeling low',
						'cookies are the secret behind my perfect skin',
						'cookies helped me stay sane while filming my upcoming movie',
						'cookies helped me stay thin and healthy',
						'I\'ll say one word, just one : cookies',
						'alright, I\'ll say it - I\'ve never eaten a single cookie in my life'
						])+'", reveals celebrity.',
					choose([
						'News : scientist predicts imminent cookie-related "end of the world"; becomes joke among peers.',
						'News : man robs bank, buys cookies.',
						'News : scientists establish that the deal with airline food is, in fact, a critical lack of cookies.',
						'News : hundreds of tons of cookies dumped into starving country from airplanes; thousands dead, nation grateful.',
						'News : new study suggests cookies neither speed up nor slow down aging, but instead "take you in a different direction".',
						'News : overgrown cookies found in fishing nets, raise questions about hormone baking.',
						'News : "all-you-can-eat" cookie restaurant opens in big city; waiters trampled in minutes.',
						'News : man dies in cookie-eating contest; "a less-than-impressive performance", says judge.',
						'News : what makes cookies taste so right? "Probably all the [*****] they put in them", says anonymous tipper.',
						'News : man found allergic to cookies; "what a weirdo", says family.',
						'News : foreign politician involved in cookie-smuggling scandal.',
						'News : cookies now more popular than '+choose(['cough drops','broccoli','smoked herring','cheese','video games','stable jobs','relationships','time travel','cat videos','tango','fashion','television','nuclear warfare','whatever it is we ate before','politics','oxygen','lamps'])+', says study.',
						'News : obesity epidemic strikes nation; experts blame '+choose(['twerking','that darn rap music','video-games','lack of cookies','mysterious ghostly entities','aliens','parents','schools','comic-books','cookie-snorting fad'])+'.',
						'News : cookie shortage strikes town, people forced to eat cupcakes; "just not the same", concedes mayor.',
						'News : "you gotta admit, all this cookie stuff is a bit ominous", says confused idiot.',
						//'News : scientists advise getting used to cookies suffusing every aspect of life; "this is the new normal", expert says.',
						//'News : doctors advise against wearing face masks when going outside. "You never know when you might need a cookie... a mask would just get in the way."',//these were written back when covid hadn't really done much damage yet but they just feel in poor taste now
						'News : is there life on Mars? Various chocolate bar manufacturers currently under investigation for bacterial contaminants.',
						'News : "so I guess that\'s a thing now", scientist comments on cookie particles now present in virtually all steel manufactured since cookie production ramped up worldwide.',
						'News : trace amounts of cookie particles detected in most living creatures, some of which adapting them as part of new and exotic metabolic processes.',
					]),
					choose([
						'News : movie cancelled from lack of actors; "everybody\'s at home eating cookies", laments director.',
						'News : comedian forced to cancel cookie routine due to unrelated indigestion.',
						'News : new cookie-based religion sweeps the nation.',
						'News : fossil records show cookie-based organisms prevalent during Cambrian explosion, scientists say.',
						'News : mysterious illegal cookies seized; "tastes terrible", says police.',
						'News : man found dead after ingesting cookie; investigators favor "mafia snitch" hypothesis.',
						'News : "the universe pretty much loops on itself," suggests researcher; "it\'s cookies all the way down."',
						'News : minor cookie-related incident turns whole town to ashes; neighboring cities asked to chip in for reconstruction.',
						'News : is our media controlled by the cookie industry? This could very well be the case, says crackpot conspiracy theorist.',
						'News : '+choose(['cookie-flavored popcorn pretty damn popular; "we kinda expected that", say scientists.','cookie-flavored cereals break all known cereal-related records','cookies popular among all age groups, including fetuses, says study.','cookie-flavored popcorn sales exploded during screening of Grandmothers II : The Moistening.']),
						'News : all-cookie restaurant opening downtown. Dishes such as braised cookies, cookie thermidor, and for dessert : crepes.',
						'News : "Ook", says interviewed orangutan.',
						'News : cookies could be the key to '+choose(['eternal life','infinite riches','eternal youth','eternal beauty','curing baldness','world peace','solving world hunger','ending all wars world-wide','making contact with extraterrestrial life','mind-reading','better living','better eating','more interesting TV shows','faster-than-light travel','quantum baking','chocolaty goodness','gooder thoughtness'])+', say scientists.',
						'News : flavor text '+choose(['not particularly flavorful','kind of unsavory','"rather bland"','pretty spicy lately'])+', study finds.',
					]),
					choose([
						'News : what do golden cookies taste like? Study reveals a flavor "somewhere between spearmint and liquorice".',
						'News : what do wrath cookies taste like? Study reveals a flavor "somewhere between blood sausage and seawater".',
						'News : '+Game.bakeryName+'-brand cookies "'+choose(['much less soggy','much tastier','relatively less crappy','marginally less awful','less toxic','possibly more edible','more fashionable','slightly nicer','trendier','arguably healthier','objectively better choice','slightly less terrible','decidedly cookier','a tad cheaper'])+' than competitors", says consumer survey.',
						'News : "'+Game.bakeryName+'" set to be this year\'s most popular baby name.',
						'News : new popularity survey says '+Game.bakeryName+'\'s the word when it comes to cookies.',
						'News : major city being renamed '+Game.bakeryName+'ville after world-famous cookie manufacturer.',
						'News : '+choose(['street','school','nursing home','stadium','new fast food chain','new planet','new disease','flesh-eating bacteria','deadly virus','new species of '+choose(animals),'new law','baby','programming language'])+' to be named after '+Game.bakeryName+', the world-famous cookie manufacturer.',
						'News : don\'t miss tonight\'s biopic on '+Game.bakeryName+'\'s irresistible rise to success!',
						'News : don\'t miss tonight\'s interview of '+Game.bakeryName+' by '+choose(['Bloprah','Blavid Bletterman','Blimmy Blimmel','Blellen Blegeneres','Blimmy Blallon','Blonan Blo\'Brien','Blay Bleno','Blon Blewart','Bleven Blolbert','Lord Toxikhron of dimension 7-B19',Game.bakeryName+'\'s own evil clone'])+'!',
						'News : people all over the internet still scratching their heads over nonsensical reference : "Okay, but why an egg?"',
						'News : viral video "Too Many Cookies" could be "a grim commentary on the impending crisis our world is about to face", says famous economist.',
						'News : "memes from last year somehow still relevant", deplore experts.',
						'News : cookie emoji most popular among teenagers, far ahead of "judgmental OK hand sign" and "shifty-looking dark moon", says study.',
					]),
					choose([
						'News : births of suspiciously bald babies on the rise; ancient alien cabal denies involvement.',
						'News : "at this point, cookies permeate the economy", says economist. "If we start eating anything else, we\'re all dead."',
						'News : pun in headline infuriates town, causes riot. 21 wounded, 5 dead; mayor still missing.',
						'Nws : ky btwn W and R brokn, plas snd nw typwritr ASAP.',
						'Neeeeews : "neeeew EEEEEE keeeeey working fineeeeeeeee", reeeports gleeeeeeeeful journalist.',
						'News : cookies now illegal in some backwards country nobody cares about. Political tensions rising; war soon, hopefully.',
						'News : irate radio host rambles about pixelated icons. "None of the cookies are aligned! Can\'t anyone else see it? I feel like I\'m taking crazy pills!"',
						'News : nation cheers as legislators finally outlaw '+choose(['cookie criticism','playing other games than Cookie Clicker','pineapple on pizza','lack of cheerfulness','mosquitoes','broccoli','the human spleen','bad weather','clickbait','dabbing','the internet','memes','millennials'])+'!',
						'News : '+choose(['local','area'])+' '+choose(['man','woman'])+' goes on journey of introspection, finds cookies : "I honestly don\'t know what I was expecting."',
						'News : '+choose(['man','woman'])+' wakes up from coma, '+choose(['tries cookie for the first time, dies.','regrets it instantly.','wonders "why everything is cookies now".','babbles incoherently about some supposed "non-cookie food" we used to eat.','cites cookies as main motivator.','asks for cookies.']),
						'News : pet '+choose(animals)+', dangerous fad or juicy new market?',
						'News : person typing these wouldn\'t mind someone else breaking the news to THEM, for a change.',
						'News : "average person bakes '+Beautify(Math.ceil(Game.cookiesEarned/8000000000))+' cookie'+(Math.ceil(Game.cookiesEarned/8000000000)==1?'':'s')+' a year" factoid actually just statistical error; '+Game.bakeryName+', who has produced '+Beautify(Game.cookiesEarned)+' cookies in their lifetime, is an outlier and should not have been counted.'
						])
					);
				}
			}
			
			if (list.length==0)
			{
				if (loreProgress<=0) list.push(loc("You feel like making cookies. But nobody wants to eat your cookies."));
				else if (loreProgress<=1) list.push(loc("Your first batch goes to the trash. The neighborhood raccoon barely touches it."));
				else if (loreProgress<=2) list.push(loc("Your family accepts to try some of your cookies."));
				else if (loreProgress<=3) list.push(loc("Your cookies are popular in the neighborhood."),loc("People are starting to talk about your cookies."));
				else if (loreProgress<=4) list.push(loc("Your cookies are talked about for miles around."),loc("Your cookies are renowned in the whole town!"));
				else if (loreProgress<=5) list.push(loc("Your cookies bring all the boys to the yard."),loc("Your cookies now have their own website!"));
				else if (loreProgress<=6) list.push(loc("Your cookies are worth a lot of money."),loc("Your cookies sell very well in distant countries."));
				else if (loreProgress<=7) list.push(loc("People come from very far away to get a taste of your cookies."),loc("Kings and queens from all over the world are enjoying your cookies."));
				else if (loreProgress<=8) list.push(loc("There are now museums dedicated to your cookies."),loc("A national day has been created in honor of your cookies."));
				else if (loreProgress<=9) list.push(loc("Your cookies have been named a part of the world wonders."),loc("History books now include a whole chapter about your cookies."));
				else if (loreProgress<=10) list.push(loc("Your cookies have been placed under government surveillance."),loc("The whole planet is enjoying your cookies!"));
				else if (loreProgress<=11) list.push(loc("Strange creatures from neighboring planets wish to try your cookies."),loc("Elder gods from the whole cosmos have awoken to taste your cookies."));
				else if (loreProgress<=12) list.push(loc("Beings from other dimensions lapse into existence just to get a taste of your cookies."),loc("Your cookies have achieved sentience."));
				else if (loreProgress<=13) list.push(loc("The universe has now turned into cookie dough, to the molecular level."),loc("Your cookies are rewriting the fundamental laws of the universe."));
				else if (loreProgress<=14) list.push(loc("A local news station runs a 10-minute segment about your cookies. Success!<br><small>(you win a cookie)</small>"),loc("it's time to stop playing"));
			}
			
			//if (Game.elderWrath>0 && (Game.pledges==0 || Math.random()<0.2))
			if (Game.elderWrath>0 && (((Game.pledges==0 && Game.resets==0) && Math.random()<0.3) || Math.random()<0.03))
			{
				list=[];
				if (Game.elderWrath==1) list.push((NEWS+choose(loc("Ticker (grandma invasion start)"))));
				if (Game.elderWrath==2) list.push((NEWS+choose(loc("Ticker (grandma invasion rise)"))));
				if (Game.elderWrath==3) list.push((NEWS+choose(loc("Ticker (grandma invasion full)"))));
			}
			
			if (EN && Game.season=='fools')
			{
				list=[];
				
				if (Game.cookiesEarned>=1000) list.push(choose([
					choose(['Your office chair is really comfortable.','Profit\'s in the air!','Business meetings are such a joy!','What a great view from your office!','Smell that? That\'s capitalism, baby!','You truly love answering emails.','Working hard, or hardly working?','Another day in paradise!','Expensive lunch time!','Another government bailout coming up! Splendid!','These profits are doing wonderful things for your skin.','You daydream for a moment about a world without taxes.','You\'ll worry about environmental damage when you\'re dead!','Yay, office supplies!','Sweet, those new staplers just came in!','Ohh, coffee break!']),
					choose(['You\'ve spent the whole day','Another great day','First order of business today:','Why, you truly enjoy','What next? That\'s right,','You check what\'s next on the agenda. Oh boy,'])+' '+choose(['signing contracts','filling out forms','touching base with the team','examining exciting new prospects','playing with your desk toys','getting new nameplates done','attending seminars','videoconferencing','hiring dynamic young executives','meeting new investors','updating your rolodex','pumping up those numbers','punching in some numbers','getting investigated for workers\' rights violations','reorganizing documents','belittling underlings','reviewing employee performance','revising company policies','downsizing','pulling yourself up by your bootstraps','adjusting your tie','performing totally normal human activities','recentering yourself in the scream room','immanentizing the eschaton','shredding some sensitive documents','comparing business cards','pondering the meaning of your existence','listening to the roaring emptiness inside your soul','playing minigolf in your office'])+'!',
					'The word of the day is: '+choose(['viral','search engine optimization','blags and wobsites','social networks','webinette','staycation','user experience','crowdfunding','carbon neutral','big data','machine learning','disrupting','influencers','monoconsensual transactions','sustainable','freemium','incentives','grassroots','web 3.0'/*this was before this whole crypto mess i'm so sorry*/,'logistics','leveraging','branding','proactive','synergizing','market research','demographics','pie charts','blogular','blogulacious','blogastic','authenticity','plastics','electronic mail','cellular phones','rap music','bulbs','goblinization','straight-to-bakery','microbakeries','chocolativity','flavorfulness','tastyfication','sugar offsets','activated wheat','reification','immanentize the eschaton','cookies, I guess'])+'.'
				]));
				if (Game.cookiesEarned>=1000 && Math.random()<0.05) list.push(choose([
					'If you could get some more cookies baked, that\'d be great.',
					'So. About those TPS reports.',
					'Hmm, you\'ve got some video tapes to return.',
					'They\'ll pay. They\'ll all pay.',
					'You haven\'t even begun to peak.',
					'There is an idea of a '+Game.bakeryName+'. Some kind of abstraction. But there is no real you, only an entity. Something illusory.',
					'This was a terrible idea!'
				]));
				
				
				if (Game.TickerN%2==0)
				{
					if (Game.Objects['Grandma'].amount>0) list.push(choose([
					'Your rolling pins are rolling and pinning!',
					'Production is steady!'
					]));
					
					if (Game.Objects['Grandma'].amount>0) list.push(choose([
					'Your ovens are diligently baking more and more cookies.',
					'Your ovens burn a whole batch. Ah well! Still good.'
					]));
					
					if (Game.Objects['Farm'].amount>0) list.push(choose([
					'Scores of cookies come out of your kitchens.',
					'Today, new recruits are joining your kitchens!'
					]));
					
					if (Game.Objects['Factory'].amount>0) list.push(choose([
					'Your factories are producing an unending stream of baked goods.',
					'Your factory workers decide to go on strike!',
					'It\'s safety inspection day in your factories.'
					]));
					
					if (Game.Objects['Mine'].amount>0) list.push(choose([
					'Your secret recipes are kept safely inside a giant underground vault.',
					'Your chefs are working on new secret recipes!'
					]));
					
					if (Game.Objects['Shipment'].amount>0) list.push(choose([
					'Your supermarkets are bustling with happy, hungry customers.',
					'Your supermarkets are full of cookie merch!'
					]));
					
					if (Game.Objects['Alchemy lab'].amount>0) list.push(choose([
					'It\'s a new trading day at the stock exchange, and traders can\'t get enough of your shares!',
					'Your stock is doubling in value by the minute!'
					]));
					
					if (Game.Objects['Portal'].amount>0) list.push(choose([
					'You just released a new TV show episode!',
					'Your cookie-themed TV show is being adapted into a new movie!'
					]));
					
					if (Game.Objects['Time machine'].amount>0) list.push(choose([
					'Your theme parks are doing well - puddles of vomit and roller-coaster casualties are being swept under the rug!',
					'Visitors are stuffing themselves with cookies before riding your roller-coasters. You might want to hire more clean-up crews.'
					]));
					
					if (Game.Objects['Antimatter condenser'].amount>0) list.push(choose([
					'Cookiecoin is officially the most mined digital currency in the history of mankind!',
					'Cookiecoin piracy is rampant!'
					]));
					
					if (Game.Objects['Prism'].amount>0) list.push(choose([
					'Your corporate nations just gained a new parliament!',
					'You\'ve just annexed a new nation!',
					'A new nation joins the grand cookie conglomerate!'
					]));
					
					if (Game.Objects['Chancemaker'].amount>0) list.push(choose([
					'Your intergalactic federation of cookie-sponsored planets reports record-breaking profits!',
					'Billions of unwashed aliens are pleased to join your workforce as you annex their planet!',
					'New toll opened on interstellar highway, funnelling more profits into the cookie economy!'
					]));
					
					if (Game.Objects['Fractal engine'].amount>0) list.push(choose([
					'Your cookie-based political party is doing fantastic in the polls!',
					'New pro-cookie law passes without a hitch thanks to your firm grasp of the political ecosystem!',
					'Your appointed senators are overturning cookie bans left and right!'
					]));
					
					if (Game.Objects['Javascript console'].amount>0) list.push(choose([
					'Cookies are now one of the defining aspects of mankind! Congratulations!',
					'Time travelers report that this era will later come to be known, thanks to you, as the cookie millennium!',
					'Cookies now deeply rooted in human culture, likely puzzling future historians!'
					]));
					
					if (Game.Objects['Idleverse'].amount>0) list.push(choose([
					'Public aghast as all remaining aspects of their lives overtaken by universal cookie industry!',
					'Every single product currently sold in the observable universe can be traced back to your company! And that\'s a good thing.',
					'Antitrust laws let out a helpless whimper before being engulfed by your sprawling empire!'
					]));
					
					if (Game.Objects['Cortex baker'].amount>0) list.push(choose([
					'Bold new law proposal would grant default ownership of every new idea by anyone anywhere to '+Game.bakeryName+'\'s bakery!',
					'Bakery think tanks accidentally reinvent cookies for the 57th time this week!',
					'Bakery think tanks invent entire new form of human communication to advertise and boost cookie sales!'
					]));
					
					if (Game.Objects['You'].amount>0) list.push(choose([
					''+Game.bakeryName+' releases new self-help book: "How I Made My '+Beautify(Game.cookiesEarned)+' Cookies And How You Can Too"!',
					'Don\'t miss our interview tonight with the stupefying '+Game.bakeryName+', who discusses where to go next once you\'re at the top!',
					'Fame, beauty, biscuits; '+Game.bakeryName+' has it all - but is it enough?'
					]));
				}
				
				if (loreProgress<=0) list.push('Such a grand day to begin a new business.');
				else if (loreProgress<=1) list.push('You\'re baking up a storm!');
				else if (loreProgress<=2) list.push('You are confident that one day, your cookie company will be the greatest on the market!');
				else if (loreProgress<=3) list.push('Business is picking up!');
				else if (loreProgress<=4) list.push('You\'re making sales left and right!');
				else if (loreProgress<=5) list.push('Everyone wants to buy your cookies!');
				else if (loreProgress<=6) list.push('You are now spending most of your day signing contracts!');
				else if (loreProgress<=7) list.push('You\'ve been elected "business tycoon of the year"!');
				else if (loreProgress<=8) list.push('Your cookies are a worldwide sensation! Well done, old chap!');
				else if (loreProgress<=9) list.push('Your brand has made its way into popular culture. Children recite your slogans and adults reminisce them fondly!');
				else if (loreProgress<=10) list.push('A business day like any other. It\'s good to be at the top!');
				else if (loreProgress<=11) list.push('You look back on your career. It\'s been a fascinating journey, building your baking empire from the ground up.');
			}
			
			for (var i=0;i<Game.modHooks['ticker'].length;i++)
			{
				var arr=Game.modHooks['ticker'][i]();
				if (arr) list=list.concat(arr);
			}
			
			Game.TickerEffect=0;
			
			if (!manual && Game.T>Game.fps*10 && Game.Has('Fortune cookies') && Math.random()<(Game.HasAchiev('O Fortuna')?0.04:0.02))
			{
				var fortunes=[];
				for (var i in Game.Tiers['fortune'].upgrades)
				{
					var it=Game.Tiers['fortune'].upgrades[i];
					if (!Game.HasUnlocked(it.name)) fortunes.push(it);
				}
				
				if (!Game.fortuneGC) fortunes.push('fortuneGC');
				if (!Game.fortuneCPS) fortunes.push('fortuneCPS');
				
				if (fortunes.length>0)
				{
					list=[];
					var me=choose(fortunes);
					Game.TickerEffect={type:'fortune',sub:me};
					
					if (me=='fortuneGC') me=loc("Today is your lucky day!");/*<br>Click here for a golden cookie.';*/
					else if (me=='fortuneCPS') {Math.seedrandom(Game.seed+'-fortune');me=loc("Your lucky numbers are:")+' '+Math.floor(Math.random()*100)+' '+Math.floor(Math.random()*100)+' '+Math.floor(Math.random()*100)+' '+Math.floor(Math.random()*100)/*+'<br>Click here to gain one hour of your CpS.'*/;Math.seedrandom();}
					else
					{
						if (EN)
						{
							me=me.dname.substring(me.name.indexOf('#'))+' : '+me.baseDesc.substring(me.baseDesc.indexOf('<q>')+3);
							me=me.substring(0,me.length-4);
						}
						else if (me.buildingTie) me=me.dname+' : '+loc(choose(["Never forget your %1.","Pay close attention to the humble %1.","You've been neglecting your %1.","Remember to visit your %1 sometimes."]),me.buildingTie.single);
						else me=me.dname+' : '+loc(choose(["You don't know what you have until you've lost it.","Remember to take breaks.","Hey, what's up. I'm a fortune cookie.","You think you have it bad? Look at me."]));
					}
					me='<span class="fortune"><div class="icon" style="vertical-align:middle;display:inline-block;background-position:'+(-29*48)+'px '+(-8*48)+'px;transform:scale(0.5);margin:-16px;position:relative;left:-4px;top:-2px;"></div>'+me+'</span>';
					list=[me];
				}
			}
			
			if (Game.windowW<Game.tickerTooNarrow) list=['<div style="transform:scale(0.8,1.2);">'+NEWS+(EN?'help!':loc("help me!"))+'</div>'];
			
			Game.TickerAge=Game.fps*10;
			Game.Ticker=choose(list);
			Game.AddToLog(Game.Ticker);
			Game.TickerN++;
			Game.TickerDraw();
		}

		var css_prompt=document.createElement('style');
		css_prompt.innerHTML=`#promptContentSpendLump .icon {background-image:url('${this.dir}/img/icons.png')!important;}`;
		document.head.appendChild(css_prompt);

		var css_new=document.createElement('style');
		css_new.innerHTML=`.icon,body .icon,body .crate,body .usesIcon{background-image:url('${this.dir}/img/icons.png')}`+
		`.product .icon,.product .icon.off,.tinyProductIcon{background-image:url('${this.dir}/img/buildings.png')}`;
		document.head.appendChild(css_new);

		var css_currency=document.createElement('style');
		css_currency.innerHTML=`.heavenly.price:before{background:url('${this.dir}/img/golden_walnut.png');}`+`.lump.price:before{background:url('${this.dir}/img/stardrop.png');}`;
		document.body.appendChild(css_currency);

		Game.registerHook('create', function(){
			//Never forgetti, code injetti.
			//console.dir(Game.Loader.assets['icons.png']);

			//Strips out quotes from upgrades...but only if we're in English.
			//...it's a long story.
			if(EN)
			{
				const regexQuote = /<q>.*?<\/q>/
				const regexOpen = new RegExp(/<q>/g);

				for (var i in Game.UpgradesById)
				{
					var it = Game.UpgradesById[i];

					if (it.ddesc != null && (it.ddesc.match(regexOpen) || []).length > 1)
						it.ddesc = it.ddesc.replace(regexQuote,'');
				}

				for (var i in Game.AchievementsById)
				{
					var it = Game.AchievementsById[i];

					if (it.ddesc != null && (it.ddesc.match(regexOpen) || []).length > 1)
						it.ddesc = it.ddesc.replace(regexQuote,'');
				}

			}

			//Manually update the things that have "description functions" we wish to override.
			Game.UpgradesById[534].descFunc=null;
			Game.UpgradesById[531].descFunc=null;
			Game.UpgradesById[606].descFunc=null;
			
			//Edit buff names.
			Game.goldenCookieBuildingBuffs={
				//Junimos
				'Cursor':['High spirits','Forest fire'],
				//Villagers
				'Grandma':['Pot luck','Civil unrest'],
				//Farmland
				'Farm':['Fertile ground','Salted earth'],
				//Mines
				'Mine':['Coal train','Infested floors'],
				//Coops
				'Factory':['Eggcellence','Cooptastrophe'],
				//Barns
				'Bank':['Milk madness','Cowlamity'],
				//Skull caverns
				'Temple':['Qi\'s delight','Sandstorm'],
				//Wizard towers
				'Wizard tower':['Cookie clairvoyance','Sleighted hand'],
				//Fish ponds
				'Shipment':['Going swimmingly','Drought'],
				//Greenhouses
				'Alchemy lab':['Growing somewhere','Shattered'],
				//Obelisks
				'Portal':['Extradimensional baking','Interdimensional traffic jam'],
				//Gold clocks
				'Time machine':['Seize the moment','Daylight savings disaster'],
				//Sewers
				'Antimatter condenser':['Underground block party','Unprecedented flooding'],
				//Museums
				'Prism':['Free admission','Gift shop closure'],
				//Community centres
				'Chancemaker':['Municipal budget surplus','Public funding failure'],
				//Cabins
				'Fractal engine':['Warm hearts','Cold shoulders'],
				//Islands
				'Javascript console':['Sun-kissed','Trouble in paradise'],
				//Consoles
				'Idleverse':['Meal-time rendering','Segfaults (how?!)'],
				//Crossoverers
				'Cortex baker':['Epic crossover event','Worlds collide'],
				//You
				'You':['Self-confidence','Identity crisis'],
			};

			//Edit buff titles.
			Game.buffTypesByName["blood frenzy"].func = function(time,pow)
			{
				return {
					name:'Cash grab',
					desc:loc("Cookie production x%1 for %2!",[pow,Game.sayTime(time*Game.fps,-1)]),
					icon:[29,6],
					time:time*Game.fps,
					add:true,
					multCpS:pow,
					aura:1
				};
			};

			//Edit buff icons.
			Game.buffTypesByName["frenzy"].func = function(time,pow)
			{
				return {
					name:'Frenzy',
					desc:loc("Cookie production x%1 for %2!",[pow,Game.sayTime(time*Game.fps,-1)]),
					icon:[10,16],
					time:time*Game.fps,
					add:true,
					multCpS:pow,
					aura:1
				};
			};

			Game.buffTypesByName["click frenzy"].func = function(time,pow)
			{
				return {
					name:'Click frenzy',
					desc:loc("Clicking power x%1 for %2!",[pow,Game.sayTime(time*Game.fps,-1)]),
					icon:[0,16],
					time:time*Game.fps,
					add:true,
					multClick:pow,
					aura:1
				};
			};

			Game.buffTypesByName["building buff"].func = function(time,pow,building)
			{
				var obj=Game.ObjectsById[building];
				return {
					name:Game.goldenCookieBuildingBuffs[obj.name][0],
					dname:EN?Game.goldenCookieBuildingBuffs[obj.name][0]:loc("%1 Power!",obj.dname),
					desc:loc("Your %1 are boosting your CpS!",loc("%1 "+obj.bsingle,LBeautify(obj.amount)))+'<br>'+loc("Cookie production +%1% for %2!",[Beautify(Math.ceil(pow*100-100)),Game.sayTime(time*Game.fps,-1)]),
					icon:[obj.iconColumn,16],
					time:time*Game.fps,
					add:true,
					multCpS:pow,
					aura:1
				};
			};
		});

		Game.registerHook('check', function(){

		});

		Game.registerHook('draw',function(){

		});
		
	},
	save:function(){
	},
	load:function(str){
	},
});