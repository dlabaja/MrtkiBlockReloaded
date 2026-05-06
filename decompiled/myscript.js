const dataSource = [
	{
		"match": "\\b(Andrejem Babišem|Babišem)|\\b(Andreje Babiše|Babiše)|\\b(Andreji Babišovi|Andreji Babiši|Babišovi|Babiši)|\\b(Babišovo|Babišově|Babišovu|Babišovy|Babišova|Babišův)|\\b(Babišová)|\\b(Andrej Babiš|Babiš)",
		"replacements": [
			["Kuním Ksichtem", "Kuního Ksichta", "Kunímu Ksichtu", "shuffle_1", "Babišová_keep", "Kuní Ksicht"],
			["Manželem Motyky, které to dnes moc sluší","Manžela Motyky, které to dnes moc sluší", "Manželovi Motyky, které to dnes moc sluší", "shuffle_1", "Babišová_keep", "Manžel Motyky, které to dnes moc sluší"],
			["Agentem Burešem", "Agenta Bureše", "Agentu Burešovi", "shuffle_1", "Babišová_keep", "Agent Bureš"],
			["Králem koblihových lidí", "Krále koblihových lidí", "Králi koblihových lidí", "shuffle_1", "Babišová_keep", "Král koblihových lidí"],
			["Nejlepším covid premiérem", "Nejlepšího covid premiéra", "Nejlepšímu covid premiérovi", "shuffle_1", "Babišová_keep", "Nejlepší covid premiér"],
			["STBákem", "STBáka", "STBákovi", "shuffle_1", "Babišová_keep", "STBák"],
			["Řepkobaronem", "Řepkobarona", "Řepkobaronu", "shuffle_1", "Babišová_keep", "Řepkobaron"],
			["Zapíračem", "Zapírače", "Zapírači", "shuffle_1", "Babišová_keep", "Zapírač"],
			["Logopedickou hříčkou", "Logopedické hříčky", "Logopedické hříčce", "shuffle_1", "Babišová_keep", "Logopedická hříčka"]
		]
	},
	{
		"match": "\\b(Miloše Zemana|Zemana)|\\b(Miloši Zemanovi|Miloši Zemanu|Zemanovi|Zemanu)|\\b(Milošem Zemanem|Zemanem)|\\b(Zemanovci)|\\b(Zemanovců)|\\b(Zemanová)|\\b(Zemanova|Zemanovy|Zemanovo|Zemanův)|\\b(Miloš Zeman|Zeman)",
		"replacements": [
			["Vepřočlověka", "Vepřočlověku", "Vepřočlověkem", "Vepřočlověkovci", "Vepřolidí", "Zemanová_keep", "shuffle_0", "Vepřočlověk"],
			["Prognostického nekromancera", "Prognostickému nekromanceru", "Prognostickým nekromancerem", "Prognostičtí nekromancerovci", "Prognostických nekromancerovců", "Zemanová_keep", "shuffle_0", "Prognostický nekromancer"],
			["Pudinkového barona", "Pudinkovému baronovi", "Pudinkovým baronem", "Pudinkoví baronovci", "Pudinkových baronovců", "Zemanová_keep", "shuffle_0", "Pudinkový baron"],
			["Starého jezevce", "Starému jezevci", "Starým jezevcem", "Staří jezevcovci", "Starých jezevcovců", "Zemanová_keep", "shuffle_0", "Starý jezevec"],
			["Ovara", "Ovaru", "Ovarem", "Ovarovci", "Ovarovců", "Zemanová_keep", "shuffle_0", "Ovar"],
			["Beznohého sprintera", "Beznohému sprinteru", "Beznohým sprinterem", "Beznozí sprinterovci", "Beznohých sprinterovců", "Zemanová_keep", "shuffle_0", "Beznohý sprinter"],
			["Alabama surfera", "Alabama surferu", "Alabama surferem", "Alabama surferovci", "Alabama surferovců", "Zemanová_keep", "shuffle_0", "Alabama surfer"],
			["Kuřáka pohanky", "Kuřáku pohanky", "Kuřákem pohanky", "Kuřákovci pohanky", "Kuřákovců pohanky", "Zemanová_keep", "shuffle_0", "Kuřák pohanky"],
		]
	},
	{
		"match": "\\b(Tomio Okamura|(?<!Hayato |Osamu )Okamura)|\\b(Tomia Okamury|(?<!Hayata |Osamy )Okamury)|\\b(Tomiu Okamurovi|(?<!Hayatu |Osamu )Okamurovi)|\\b(Tomia Okamuru|(?<!Hayata |Osamu )Okamuru)|\\b(Tomiem Okamurou|(?<!Hayatem |Osamem )Okamurou)",
		"replacements": [
			["Lobotomio Zmrdamura", "Lobotomia Zmrdamury", "Lobotomiu Zmrdamurovi", "Lobotomia Zmrdamuru", "Lobotomiem Zmrdamurou"],
			["Pitomio", "Pitomia", "Pitomiovi", "Pitomia", "Pitomiem"],
			["Syn maminky z Moravy", "Syna maminky z Moravy", "Synu maminky z Moravy", "Syna maminky z Moravy", "Synem maminky z Moravy"],
			["Ten, co mluví i za horečky", "Toho, co mluví i za horečky", "Tomu, co mluví i za horečky", "Toho, co mluví i za horečky", "Tím, co mluví i za horečky"],
			["Bicák ohýbající realitu", "Bicáku ohýbajícím realitu", "Bicáku ohýbajícím realitu", "Bicák ohýbajícím realitu", "Bicákem ohýbajícím realitu"],
			["Japonský vlastenec", "Japonského vlastence", "Japonskému vlastenci", "Japoského vlastence", "Japonským vlastencem"],
			["Česko-japonský sumoraj", "Česko-japonského sumoraje", "Česko-japonskému sumoraji", "Česko-japonského sumoraje", "Česko-japonským sumorajem"]

		]
	},
	{
		"match": "\\b(Daniela Landy)|\\b(Danielu Landovi)|\\b(Daniela Landu)|\\b(Danielem Landou)|\\b(Daniel Landa)",
		"replacements": [
			["Daniela Kukluxklandy", "Danielu Kukluxklandovi", "Daniela Kukluxklandu", "Danielem Kukluxklandou", "Daniel Kukluxklanda"],
			["Bílýho jezdce Rallye", "Bílýmu jezdci Rallye", "Bílýho jezdce Rallye", "Bílým jezdcem Rallye", "Bílej jezdec Rallye"],
			["Kouzelníka Glandalfa", "Kouzelníku Glandalfu", "Kouzelníka Glandalfa", "Kouzelníkem Glandalfem", "Kouzelník Glandalf"],
			["Daniela Palandy", "Danielu Palandovi", "Daniela Palandu", "Danielem Palandou", "Daniel Palanda"],
			["Mr. Propera", "Mr. Properu", "Mr. Propera", "Mr. Properem", "Mr. Proper"],
			["Strýčka Festera", "Strýčku Festerovi", "Strýčka Festera", "Strýčkem Festerem", "Strýček Fester"],
		]
	},
	{
		"match": "\\b(Helena Vondráčková)|\\b(Heleny Vondráčkové)|\\b(Heleně Vondráčkové)|\\b(Helenu Vondráčkovou)|\\b(Helenou Vondráčkovou)",
		"replacements": [
			["Pravěká fosílie", "Pravěké fosílie", "Pravěké fosílii", "Pravěké fosílii", "Pravěkou fosílií"],
			["Strážkyně tújí", "Strážkyně tújí", "Strážkyni tújí", "Strážkyni tújí", "Strážkyní tújí"],
			["Vyschlá mumie", "Vyschlé mumie", "Vyschlé mumii", "Vyschlou mumii", "Vyschlou mumií"],
			["Rekordmanka trestních oznámení", "Rekordmanky tresntích oznámení", "Rekordmance trestních oznámení", "Rekordmanku trestních oznámení", "Rekordmankou trestních oznámení"],
			["Stará raketa", "Staré rakety", "Staré raketě", "Starou raketu", "Starou raketou"],
			["Osoba z Řiťky", "Osoby z Řiťky", "Osobě z Řiťky", "Osobu z Řiťky", "Osobou z Řiťky"],
			["Hnědé uhlí popmusic", "Hnědého uhlí popmusic", "Hnědému uhlí popmusic", "Hnědé uhlí popmusic", "Hnědým uhlím popmusic"]

		]
	},
	{
		"match": "\\b(Dominika Feriho|Feriho(?![a-z]))|\\b(Dominiku Ferimu|Dominikovi Ferimu|Ferimu(?![a-z]))|\\b(Dominiku Ferim)|\\b(Dominikem Ferim|Ferim(?![a-z]))|\\b(Dominik Feri|Feri(?![a-z]))",
		"replacements": [
			["Úplně nahého", "Úplně nahému", "Úplně nahém", "Úplně nahým", "Úplně nahej"],
			["Predátora z Teplic", "Predátoru z Teplic", "Predátora z Teplic", "Predátorem z Teplic", "Predátor z Teplic"],
			["Majitele samyc", "Majiteli samyc", "Majiteli samyc", "Majitelem samyc", "Majitel samyc"],
			["Mistra hry na schovávanou", "Mistru hry na schovávanou", "Mistru hry na schovávanou", "Mistrem hry na schovávanou", "Mistr hry na schovávanou"],
			["Pátka", "Pátku", "Pátku", "Pátkem", "Pátek"]
		]
	},
	{
		"match": "\\b(Alena Schillerová|Schillerová)|\\b(Aleny Schillerové|Schillerové)|\\b(Aleně Schillerové)|\\b(Alenu Schillerovou)|\\b(Alenou Schillerovou|Schillerovou)",
		"replacements": [
			["Ministryně Instagramu", "Ministryně Instagramu", "Ministryni Instagramu", "Ministryni Instagramu", "Ministryní Instagramu"],
			["Candy Crush šampiónka", "Candy Crush šampiónky", "Candy Crush šampiónce", "Candy Crush šampiónku", "Candy Crush šampiónkou"],
			["Sofa Alena", "Sofy Aleny", "Sofě Aleně", "Sofu Alenu", "Sofou Alenou"],
			["Miss gerontia", "Miss gerontia", "Miss gerontii", "Miss gerontia", "Miss gerontii"],
			["Nouze", "Nouze", "Nouzí", "Nouzi", "Nouzí"],
			["Dluhový schodek", "Dluhového schodku", "Dluhovému schodku", "Dluhový schodek", "Dluhovým schodkem"]
		]
	},
	{
		"match": "\\b(Zdeňka Škromacha|Škromacha)|\\b(Zdeňku Škromachovi|Zdeňku Škromachu|Škromachovi|Škromachu)|\\b(Zdenkěm Škromachem|Škromachem)|\\b(Škromachová)|\\b(Škromachov|Škromachův)|\\b(Zdeněk Škromach|Škromach(?![a-z]))",
		"replacements": [
			["Vyvrženého vorvaně", "Vyvrženému vorvani", "Vyvrženým vorvaněm", "Škromachová_keep", "shuffle_0", "Vyvržený vorvaň"],
			["Selfie fetišisty", "Selfie fetišistu", "Selfie fetišistou", "Škromachová_keep", "shuffle_0", "Selfie fetišista"],
			["Bazenkového playboye", "Bazenkovému playboyi", "Bazénkovým playboyem", "Škromachová_keep", "shuffle_0", "Bazénkový playboy"],
			["Markeťáka Mountfieldu", "Markeťáku Mountfieldu", "Markeťákem Mountfieldu", "Škromachová_keep", "shuffle_0", "Markeťák Mountfieldu"],
			["Tunového cossplaye Mitche Buchannona", "Tunovému cossplayi Mitche Buchannona", "Tunovým cossplayem Mitche Buchannona", "Škromachová_keep", "shuffle_0", "Tunový cossplay Mitche Buchannona"],
			["Mischelin boye", "Mischelin boyi", "Mischelin boyem", "Škromachová_keep", "shuffle_0", "Mischelin boy"]
		]
	},
	{
		"match": "\\b(dOrtel)|\\b(Tomáše Ortela|Ortela)|\\b(Tomáši Ortelu|Ortelu)|\\b(Tomášem Ortelem|Ortelem)|\\b(Tomáš Ortel|Ortel(?![a-z]))|\\b(Ortelov|Ortelův)",
		"replacements": [
			["dOrtel_keep", "Nácka pro chudinu", "Nácku pro chudinu", "Náckem pro chudinu", "Nácek pro chudinu", "shuffle_1"],
			["dOrtel_keep", "Krysaře latentních nácků", "Krysaři latentních nácků", "Krysařem latentních nácků", "Krysař latentních nácků", "shuffle_1"],
			["dOrtel_keep", "Recitátora prostých textů", "Recitátoru prostých textů", "Recitátorem prostých textů", "Recitátor prostých textů", "shuffle_1"],
			["dOrtel_keep", "Tomáše dOrtela", "Tomáši dOrtelu", "Tomášem dOrtelem", "Tomáš dOrtel", "shuffle_1"],
			["dOrtel_keep", "Manžela figuríny z nákupáku", "Manželu figuríny z nákupáku", "Manželem figuríny z nákupáku", "Manžel figuríny z nákupáku", "shuffle_1"],
			["dOrtel_keep", "Hudebního hluchu", "Hudebnímu hluchu", "Hudebním hluchem", "Hudební hluch", "shuffle_1"]
		]
	},
	{
		"match": "\\b(Jana Hamáčka|Hamáčka)|\\b(Janu Hamáčku|Hamáčku|Janu Hamáčkovi|Hamáčkovi)|\\b(Janem Hamáčkem|Hamáčkem)|\\b(Jan Hamáček|Hamáček(?![a-z]))|\\b(Hamáčková)|\\b(Hamáčkov|Hamáčkův)",
		"replacements": [
			["Zbytečného šéfa zbytečné strany", "Zbytečnému šéfu zbytečné strany", "Zbytečným šéfem zbytečné strany", "Zbytečný šéf zbytečné strany", "Hamáčková_keep", "shuffle_0"],
			["Babišového patolízala", "Babišovému patolízalu", "Babišovým patolízalem", "Babišův patolízal", "Hamáčková_keep", "shuffle_0"],
			["Rohožky", "Rohožce", "Rohožkou", "Rohožka", "Hamáčková_keep", "shuffle_0"],
			["Věšáka na červené svetry", "Věšáku na červené svetry", "Věšákem na červené svetry", "Věšák na červené svetry", "Hamáčková_keep", "shuffle_0"],
			["Kapitána možná", "Kapitánu možná", "Kapitánem možná", "Kapitán možná", "Hamáčková_keep", "shuffle_0"],
			["Jana Klauňáčka", "Janu Klauňáčkovi", "Janem Klauňáčkem", "Jan Klauňáček", "Hamáčková_keep", "shuffle_0"],
			["Jana Haháčka", "Janu Haháčku", "Janem Haháčkem", "Jan Haháček", "Hamáčková_keep", "shuffle_0"]

		]
	},
	{
		"match": "\\b(Lubomíra Volného)|\\b(Lubomíru Volnému)|\\b(Lubomírem Volným)|\\b(Lubomír Volný)",
		"replacements": [
			["Mgr. Parakotoula vzad", "Mgr. Parakotoulu vzad", "Mgr. Parakotoulem vzad", "Mgr. Parakotoul vzad"],
			["Obchodníka s chudobou", "Obchodníku s chudobou", "Obchodníkem s chudobou", "Obchodník s chudobou"],
			["Výtržníka a taky trochu prasete", "Výtržníku a taky trochu praseti", "Výtržníkem a taky trochu prasetem", "Výtržník a taky trochu prase"],
			["Medvídka", "Medvídku", "Medvídkem", "Medvídek"],
			["Krále makaků", "Králi makaků", "Králem makaků", "Král makaků"],
			["Lízátkového barona", "Lízátkovému baronu", "Lízátkovým baronem", "Lízátkový baron"],
			["Flákance", "Flákanci", "Flákancem", "Flákanec"],
			["Volného radikála", "Volnému radikálu", "Volným radikálem", "Volný radikál"],
			["DHL práškovacího letadla", "DHL práškovacímu letadlu", "DHL práškovacím letadlem", "DHL práškovací letadlo"],
			["Vepřového tělocvikáře", "Vepřovému tělocvikáři", "Vepřovým tělocvikářem", "Vepřový tělocvikář"]
		]
	},
	{
		"match": "\\b(Ivanem Bartošem|Bartošem)|\\b(Ivana Bartoše|Bartoše(?![a-z]))|\\b(Ivanu Bartoši|Ivanu Bartošovi|Bartoši|Bartošovi)|\\b(Bartošova|Bartošovo|Bartošovy|Bartošův)|\\b(Ivan Bartoš|Bartoš(?![a-z]))",
		"replacements": [
			["Králem diskoték", "Krále diskoték", "Králi diskoték", "shuffle_1", "Král diskoték"],
			["Tím s drony na hlavě", "Toho s drony na hlavě", "Tomu s drony na hlavě", "shuffle_1", "Ten s drony na hlavě",],
			["Zkuřkou", "Zkuřky", "Zkuřce", "shuffle_1", "Zkuřka"],
			["Harmonikářem od Rakušana", "Harmonikáře od Rakušana", "Harmonikáři od Rakušana", "shuffle_1", "Harmonikář od Rakušana"],
			["Kulturistou z Mauthausenu", "Kulturisty z Mauthausenu", "Kulturistovi z Mauthausenu", "shuffle_1", "Kulturista z Mauthausenu"] 
		]
	},
	{
		"match": "\\b(Jany Bobošíkové|Bobošíkové)|\\b(Janě Bobošíkové)|\\b(Janu Bobošíkovou|Bobošíkovou)|\\b(Janou Bobošíkovou)|\\b(Jana Bobošíková)",
		"replacements": [
			["Zoufalé bez koryta", "Zoufalé bez koryta", "Zoufalou bez koryta", "Zoufalou bez koryta", "Zoufalá bez koryta"],
			["Politické fosílie", "Politické fosílii", "Politickou fosílii", "Politickou fosílií", "Politická fosílie"],
			["Oportunistické krysy", "Oportunistické kryse", "Oportunistickou krysu", "Oportunistickou krysou", "Oportunistická krysa"],
			["Putinové předkožky", "Putinové předkožce", "Putinovu předkožku", "Putinovou předkožkou", "Putinova předkožka"]
		]
	},
	{
		"match": "\\b(Luboše Xavera Veselého|Xavera Veselého|Luboše \„Xavera\“ Veselého|\„Xavera\“ Veselého)|\\b(Luboši Xaveru Veselému|Luboši Xaverovi Veselému|Xaveru Veselému|Xaverovi Veselému|\„Xaveru\“ Veselému|\„Xaverovi\“ Veselému)|\\b(Lubošem Xaverem Veselým|Xaverem Veselým|Lubošem \„Xaverem\“ Vesleým|\„Xaverem\“ Veselým)|\\b(Luboš Xaver Veselý|Xaver Veselý|Luboš \„Xaver\“ Veselý|\„Xaver\“ Veselý)",
		"replacements": [
			["Vypasené svině", "Vypasené svini", "Vypasenou sviní", "Vypasená svině"],
			["Ruského noku", "Ruskému noku", "Ruským nokem", "Ruský nok"],
			["Ředitele gulagu", "Řediteli gulagu", "Ředitelem gulagu", "Ředitel gulagu"],
			["Strůjce genocidy chlebíčků", "Strůjci genocidy chlebíčků", "Strůjcem genocidy chlébíčků", "Strůjce genocidy chlebíčků"],
			["Postrachu oleje z friťáku", "Postrachu oleje z friťáku", "Postrachem oleje z friťáku", "Postrach oleje z friťáku"],
			["Otesánka z televize", "Otesánku z televize", "Otesánkem z televize", "Otesánek z televize"],
			["Blopa", "Blopu", "Blopem", "Blop"]
		]
	},
	{
		"match": "\\b(Hany Lipovské|Lipovské)|\\b(Haně Lipovské)|\\b(Hanu Lipovskou|Lipovskou)|\\b(Hanou Lipovskou)|\\b(Hana Lipovská|Lipovská)",
		"replacements": [
			["Ošklivky Betty", "Ošklivce Betty", "Ošklivku Betty", "Ošklivkou Betty", "Ošklivka Betty"],
			["Strašidla z České televize", "Strašidlu z České televize", "Strašidlo z České televize", "Strašidlem z České televize", "Strašidlo z České televize"],
			["Reklamy na bouřku", "Reklamě na bouřku", "Reklamu na bouřku", "Reklamou na bouřku", "Reklama na bouřku"],
			["Wednesday Addamsové", "Wednesday Addamsové", "Wednesday Addamsovou", "Wednesday Addamsovou", "Wednesday Addamsová"],
			["Frankensteinovy nevěsty", "Frankensteinově nevěstě", "Frankensteinovu nevěstu", "Frankensteinovou nevěstou", "Frankensteinova nevěsta"],
			["Požíračky duší", "Požíračce duší", "Požíračku duší", "Požíračkou duší", "Požíračka duší"],
			["La Muerte", "La Muerte", "La Muerte", "La Muerte", "La Muerte"],
			["Carol Pifkové", "Carol Pifkové", "Carol Pifkovou", "Carol Pifkovou", "Carol Pifková"]
		]
	},
	{
		"match": "\\b(Romana Šmuclera|Šmuclera)|\\b(Romanu Šmucleru|Šmucleru|Romanu Šmuclerovi|Šmuclerovi)|\\b(Romanem Šmuclerem|Šmuclerem)|\\b(Šmuclerov|Šmuclerův)|\\b(Roman Šmucler|Šmucler)",
		"replacements": [
			["Díry do prdele", "Díře do prdele", "Dírou do prdele", "shuffle_0", "Díra do prdele"],
			["Covid experta přes zuby", "Covid expertu přes zuby", "Covid expertem přes zuby", "shuffle_0", "Covid expert přes zuby"],
			["Bezzubky", "Bezzubce", "Bezzubkou", "shuffle_0", "Bezzubka"],
			["Zubatého žaluda", "Zubatému žaludu", "Zubatým žaludem", "shuffle_0", "Zubatý žalud"],
			["Šmucmukmucklera", "Šmucmukmuckleru", "Šmucmukmucklerem", "shuffle_0", "Šmucmukmuckler"]
		]
	},
	{
		"match": "\\b(Vratislavem Mynářem|(?<!Cuntcléřem )Mynářem)|\\b(Vratislava Mynáře|(?<!Cuntcléře )Mynáře)|\\b(Vratislavu Mynáři|Vratislavu Mynářovi|(?<!Cuntcléři )Mynáři|(?<!Cuntcléři )Mynářovi)|\\b(Mynářová)|\\b(Mynářov|Mynářův)|\\b(Vratislav Mynář|(?<!Cuntcléř )Mynář)",
		"replacements": [
			["Prasetem, které mělo hlad", "Prasete, které mělo hlad", "Praseti, které mělo hlad", "Mynářová_keep", "shuffle_1", "Prase, které mělo hlad"],
			["Sjezdovkářem z Osvětiman", "Sjezdovkáře z Osvětiman", "Sjezdovkáři z Osvětiman", "Mynářová_keep", "shuffle_1", "Sjezdovkář z Osvětiman"],
			["Šéfem hradní divize tunelářů", "Šéfa hradní divize tunelářů", "Šéfovi hradní divize tunelářů", "Mynářová_keep", "shuffle_1", "Šéf hradní divize tunelářů"],
			["Čínským vyjednavačem", "Čínského vyjednavače","Čínskému vyjednavači", "Mynářová_keep", "shuffle_1", "Čínský vyjednavač"],
			["Cuntcléřem Mynářem", "Cuntcléře Mynáře", "Cuntcléři Mynáři", "Mynářová_keep", "shuffle_1", "Cuntcléř Mynář"],
			["Řezníkem z Osvětiman", "Řezníka z Osvětiman", "Řezníkovi z Osvětiman", "Mynářová_keep", "shuffle_1", "Řezník z Osvětiman"]
		]
	},
	{
		"match": "\\b(Martina Nejedlého|Nejedlého)|\\b(Martinu Nejedlému|Nejedlému)|\\b(Martinem Nejedlým|Nejedlým)|\\b(Martin Nejedlý|Nejedlý)",
		"replacements": [
			["Pumpaře", "Pumpaři", "Pumpařem", "Pumpař"],
			["Lánského gangstera", "Lánskému gangsterovi", "Lánským gangsterem", "Lánský gangster"],
			["Obchoďáka Lukoilu", "Obchoďáku Lukoilu", "Obchoďákem Lukoilu", "Obchoďák Lukoilu"],
			["Ruského vyjednavače", "Ruskému vyjednavači", "Ruským vyjednavačem", "Ruský vyjednavač"]
		]
	},
	{
		"match": "\\b(Miloslava Roznera|Roznera)|\\b(Miloslavu Rozneru|Miloslavu Roznerovi|Rozneru|Roznerovi)|\\b(Miloslavem Roznerem|Roznerem)|\\b(Roznerová)|\\b(Roznerov|Roznerův)|\\b(Miloslav Rozner|Rozner)",
		"replacements": [
			["Mistr zabrušování", "Mistru zabrušování", "Mistrem zabrušování", "Roznerová_keep", "shuffle_0", "Mistr zabrušování"],
			["Úplně jakoby nesouhlasitele", "Úplně jakoby neosuhlasiteli", "Úplně jakoby nesouhlasitelem", "Roznerová_keep", "shuffle_0", "Úplně jakoby nesouhlasitel"],
			["Stínového ministra kultury", "Stínovému ministru kultury", "Stínovým ministrem kultury", "Roznerová_keep", "shuffle_0", "Stínový ministr kultury"],
			["Vesnického manažera", "Vensickému manažeru", "Vesnickým manažerem", "Roznerová_keep", "shuffle_0", "Vesnický manažer"],
			["Generátora náhodných slov", "Generátoru náhodných slov", "Generátorem náhodných slov", "Roznerová_keep", "shuffle_0", "Generátor náhodných slov"]
		]
	},
	{
		"match": "\\b(Michala Koudelku)|\\b(Michalu Koudelkovi)|\\b(Michalem Koudelkou)|\\b(Koudelkov|Koudelkův)|\\b(Michal Koudelka)",
		"replacements": [
			["Vrchního čučkaře", "Vrchnímu čučkaři", "Vrchním čučkařem", "shuffle_0", "Vrchní čučkař"]
		]
	},
	{
		"match": "\\b(Ilony Csákové|Csákové(?!(?:, která stejně nikdy|, kterou nikdo nemá)))|\\b(Iloně Csákové)|\\b(Ilonu Csákovou|Csákovou(?!(?:, která stejně nikdy|, kterou nikdo nemá)))|\\b(Ilonou Csákovou)|\\b(Ilona Csáková|Csáková(?!(?:, která stejně nikdy|, kterou nikdo nemá)))",
		"replacements": [
			["Ozónové díry", "Ozónové díře", "Ozónovou díru", "Ozónovou dírou", "Ozónová díra"],
			["Důkazu života bez mozku", "Důkazu života bez mozku", "Důkaz života bez mozku", "Důkazem života bez mozku", "Důkaz života bez mozku"],
			["Csákové, která stejně nikdy neuměla zpívat", "Csákové, která stejně nikdy neuměla zpívat", "Csákovou, která stejně nikdy neuměla zpívat", "Csákovou, která stejně nikdy neuměla zpívat", "Csáková, která stejně nikdy neuměla zpívat"],
			["Csákové, kterou nikdo nemá rád", "Csákové, kterou nikdo nemá rád", "Csákovou, kterou nikdo nemá rád", "Csákovou, kterou nikdo nemá rád", "Csáková, kterou nikdo nemá rád"],
			["Rekordmanky opalování bez krému", "Rekordmance opalování bez krému", "Rekordmanku opalování bez krému", "Rekordmankou opalování bez krému", "Rekordmanka opalování bez krému"]
		]
	},
	{
		"match": "\\b(Petra Fialy)|\\b(Petru Fialovi)|\\b(Petra Fialu)|\\b(Petrem Fialou)|\\b(Petr Fiala)",
		"replacements": [
			["Psího sucharu", "Psího sucharu", "Psí suchar", "Psím sucharem", "Psí suchar"],
			["Ztělesnění nudy", "Ztělesnění nudy", "Ztělesnění nudy", "Ztělesněním nudy", "Ztělesnění nudy"],
			["Profesora \"jedu poprvé na eskalátoru\"", "Profesoru \"jedu poprvé na eskalátoru\"", "Profesora \"jedu poprvé na eskalátoru\"", "Profesorem \"jedu poprvé na eskalátoru\"", "Profesor \"jedu poprvé na eskalátoru\""],
			["Skejťáka v saku", "Skejťáku v saku", "Skejťáka v saku", "Skejťákem v saku", "Skejťák v saku"]		
		]
	},
	{
		"match": "\\b(Dominika Duky|(?<!Arciprasmana )Duky)|\\b(Dominiku Dukovi|(?<!Arciprasmanu )Dukovi)|\\b(Dominika Duku|(?<!Arciprasmana )Duku)|\\b(Dominikem Dukou|(?<!Arciprasmanem )Dukou)|\\b(Duková)|\\b(Dukova(?![a-z])|Dukovo(?![a-z])|Dukovy(?![a-z])|Dukův(?![a-z]))|\\b(Dominik Duka|(?<!Arciprasman )Duka)",
		"replacements": [
			["Pedofilního arcibiskupa", "Pedofilnímu arcibiskupu", "Pedofilního arcibiskupa", "Pedofilním arcibiskupem", "Duková_keep", "shuffle_0", "Pedofilní arcibiskup"],
			["Církevního zatajovače", "Církevnímu zatajovači", "Církevního zatajovače", "Církevním zatajovačem", "Duková_keep", "shuffle_0", "Církevní zatajovač"],
			["Arciprasmana Duky", "Arciprasmanu Dukovi", "Arciprasmana Duku", "Arciprasmanem Dukou", "Duková_keep", "shuffle_0", "Arciprasman Duka"],
			["Ztělesnění obžerství", "Ztělesnění obžerství", "Ztělesnění obžerství", "Ztělesněním obžerství", "Duková_keep", "shuffle_0", "Ztělesnění obžerství"]
		],
	},
	{
		"match": "\\b(Patrika Nachera|Nachera)|\\b(Patriku Nacheru|Patriku Nacherovi|Nacheru|Nacherovi)|\\b(Patrikem Nacherem|Nacherem)|\\b(Nacherová)|\\b(Nacherov|Nacherův)|\\b(Patrik Nacher|Nacher)",
		"replacements": [
			["Krysího žokeje", "Krysímu žokeji", "Krysím žokejem", "Nacherová_keep", "shuffle_0", "Krysí žokej"],
			["Leprikóna", "Leprikónu", "Leprikónem", "Nacherová_keep",  "shuffle_0", "Leprikón"],
			["Jeho maličkosti osobně", "Jeho maličkosti osobně", "Jeho maličkostí osobně", "Nacherová_keep", "shuffle_0", "Jeho maličkost osobně"],
			["Pražského krysaříka", "Pražskému krysaříku", "Pražským krysaříkem", "Nacherová_keep", "shuffle_0", "Pražský krysařík"],
			["Hobita", "Hobitu", "Hobitem", "Nacherová_keep", "shuffle_0", "Hobit"],
			["Sádrového trpaslíka", "Sádrovému trpaslíku", "Sádrovým trpaslíkem", "Nacherová_keep", "shuffle_0", "Sádrový trpaslík"],
			["Schumachera z angličáku", "Schumacheru z angličáku", "Schumacherem z angličáku", "Nacherová_keep", "shuffle_0", "Schumacher z angličáku"],

		]
	},
	{
		"match": "\\b(Adama Vojtěcha)|\\b(Adamu Vojtěchu|Adamu Vojtěchovi)|\\b(Adamem Vojtěchem)|\\b(Vojtěchová)|\\b(Vojtěchov|Vojtěchův)|\\b(Adam Vojtěch)",
		"replacements": [
			["Kena", "Kenovi", "Kenem", "Vojtěchová_keep", "shuffle_0", "Ken"],
			["Bezpohlavního partnera Barbie", "Bezpohlavnímu partneru Barbie", "Bezpohlavním partnerem Barbie", "Vojtěchová_keep", "shuffle_0", "Bezpohlavní partner Barbie"],
			["Hvězdné pěchoty ministerstva zdravotnictví", "Hvězdné pěchotě ministerstva zdravotnictví", "Hvězdnou pěchotou ministerstva zdravotnictví", "Vojtěchová_keep", "shuffle_0", "Hvězdná pěchota ministerstva zdravotnictví"],
			["ABBA revivalu", "ABBA revivalu", "ABBA revivalem", "Vojtěchová_keep", "shuffle_0", "ABBA revival"]
		]
	},
	{
		"match": "\\b(Romana Prymuly|Prymuly)|\\b(Romanu Prymulovi|Romanu Prymulu|Prymulovi|Prymulu)|\\b(Romana Prymulu|Prymulu)|\\b(Romanem Prymulou|Prymulou)|\\b(Prymulová)|\\b(Prymulov|Prymulův)|\\b(Roman Prymula|Prymula)",
		"replacements": [
			["Generála zdravotnictví", "Generálu zdravotnictví", "Generála zdravotnictví", "Generálem zdravotnictví", "Prymulová_keep", "shuffle_0", "Generál zdravotnictví"],
			["Promořovatele republiky", "Promořovateli republiky", "Promořovatele republiky", "Promořovatelem republiky", "Prymulová_keep", "shuffle_0", "Promořovatel republiky"],
			["Hradfest partylifu", "Hradfest partylifu", "Hradfest partylife", "Hradfest partylifem", "Prymulová_keep", "shuffle_0", "Hradfest partylife"],
			["Předlohy pro kuželkářskou kouli", "Předloze pro kuželkářskou kouli", "Předlohu pro kuželkářskou kouli", "Předlohou pro kuželkářskou kouli", "Prymulová_keep", "shuffle_0", "Předloha pro kuželkářskou kouli"],
			["Zavírače", "Zavírači", "Zavírače", "Zavíračem", "Prymulová_keep", "shuffle_0", "Zavírač"]
		]
	},
	{
		"match": "\\b(Kláry Dostálové)|\\b(Kláře Dostálové)|\\b(Kláru Dostálovou)|\\b(Klárou Dostálovou)|\\b(Klára Dostálová)",
		"replacements": [
			["Prasnice roku", "Prasnici roku", "Prasnici roku", "Prasnicí roku", "Prasnice roku"],
			["Požíračky jitrnic", "Požiračce jitrnic", "Požíračku jitrnic", "Požíračkou jitrnic", "Požíračka jitrnic"],
			["Dvoutunové Barbie", "Dvoutunové Barbie", "Dvoutunovou Barbie", "Dvoutunovou Barbie", "Dvoutunová Barbie"],
			["Předlohy pro obžerství", "Předloze pro obžerství", "Předlohu pro obžerství", "Předlohou pro obžerství", "Předloha pro obžerství"]
		]
	},
	{
		"match": "\\b(Karly Šlechtové|Šlechtové)|\\b(Karle Šlechtové)|\\b(Karlu Šlechtovou|Šlechtovou)|\\b(Karlou Šlechtovou)|\\b(Karla Šlechtová|Šlechtová)",
		"replacements": [
			["Rambohafí mámy", "Rambohafí mámě", "Rambohafí mámu", "Rambohafí mámou", "Rambohafí máma"],
			["Ministryně MotoGP", "Ministryni MotoGP", "Ministryni MotoGP", "Ministryní MotoGP", "Ministryně MotoGP"],
			["Kradly Šlechtové", "Kradle Šlechtové", "Kradlu Šlechtovou", "Kradlou Šlechtovou", "Kradla Šlechtová"],
			["Bývalé ministryně války", "Bývalé ministryně války", "Bývalou ministryni války", "Bývalou ministryní války", "Bývalá ministryně války"],
		]
	},
	{
		"match": "\\b(Jana Blatného|Blatného)|\\b(Janu Blatnému|Blatnému)|\\b(Janem Blatným|Blatným)|\\b(Jan Blatný|Blatný)",
		"replacements": [
			["Gargamela", "Gargamelu", "Gargamelem", "Gargamel"],
			["Zlatonky s ušima", "Zlatonce s ušima", "Zlatonkou s ušima", "Zlatonka s ušima"],
			["Ministra zdravotnictví číslo 14855", "Ministru zdravotnictví číslo 14855", "Ministrem zdravotnictví číslo 14855", "Ministr zdravotnictví číslo 14855"]
		]
	},
	{
		"match": "\\b(Marie Benešové|Benešové)|\\b(Marii Benešové)|\\b(Marii Benešovou|Benešovou)|\\b(Marií Benešovou)|\\b(Marie Benešová|Benešová)",
		"replacements": [
			["Amazonské ropuchy", "Amazonské ropuše", "Amazonskou ropuchu", "Amazonskou ropuchou", "Amazonská ropucha"],
			["Mluvčí žáb", "Mluvčí žáb", "Mluvčí žáb", "Mluvčím žáb", "Mluvčí žáb"],
			["Překrucovačky práva", "Překrucovačce práva", "Překrucovačku práva", "Překrucovačkou práva", "Překrucovačka práva"],
			["Dolores Umbridge", "Dolores Umbridge", "Dolores Umbridge", "Dolores Umbridge", "Dolores Umbridge"]
		]
	},
	{
		"match": "\\b(Tomáše Vandase|Vandase)|\\b(Tomáši Vandasu|Tomáši Vandasovi|Vandasu|Vandasovi)|\\b(Tomášem Vandasem|Vandasem)|\\b(Vandasov|Vandasův)|\\b(Tomáš Vandas|Vandas)",
		"replacements": [
			["Tomáše Vagabundase", "Tomáši Vagabundasovi", "Tomášem Vagabundasem", "shuffle_0", "Tomáš Vagabundas"],
			["Nácka z DSSS", "Náckovi z DSSS", "Náckem z DSSS", "shuffle_0", "Nácek z DSSS"],
			["Předsedy chráněné dílny", "Předsedovi chráněné dílny", "Předsedou chráněné dílny", "shuffle_0", "Předseda chráněné dílny"]
		]
	},
	{
		"match": "\\b(Víta Rakušana)|\\b(Vítu Rakušanu|Vítu Rakušanovi|Rakušanovi)|\\b(Vítem Rakušanem|Rakušanem)|\\b(Rakušanová)|\\b(Rakušanova|Rakušanovo|Rakušanovy|Rakušanův)|\\b(Vít Rakušan)",
		"replacements": [
			["Českého Steva Buscemiho", "Českému Stevu Buscemimu", "Českým Stevem Buscemim", "Rakušanová_keep", "shuffle_0", "Český Steve Buscemi"],
			["Gordona Freemana", "Gordonu Freemanovi", "Gordonem Freemanem", "Rakušanová_keep", "shuffle_0", "Gordon Freeman"],
			["Bohaté nevěsty", "Bohaté nevěstě", "Bohatou nevěstou", "Rakušanová_keep", "shuffle_0", "Bohatá nevěsta"]
		]
	},
	{
		"match": "\\b(Jaroslava Faltýnka|Faltýnka)|\\b(Jaroslavu Faltýnkovi|Jaroslavu Faltýnku|Faltýnkovi|Faltýnku)|\\b(Jaroslavem Faltýnkem|Faltýnkem)|\\b(Faltýnková)|\\b(Faltýnkov|Faltýnkův)|\\b(Jaroslav Faltýnek|Faltýnek)",
		"replacements": [
			["Burešovy pravé ruky od hoven", "Burešově pravé ruce od hoven", "Burešovou pravou rukou od hoven", "Faltýnková_keep", "shuffle_0", "Burešova pravá ruka od hoven"],
			["Deníčkového spisovatele", "Deníčkovému spisovateli", "Deníčkovým spisovatelem", "Faltýnková_keep", "shuffle_0", "Deníčkový spisovatel"],
			["Matlala z galerie", "Matlalovi z galerie", "Matlalem z galerie", "Faltýnková_keep", "shuffle_0", "Matlal z galerie"]
		]
	},
	{
		"match": "\\b(Michala Haška)|\\b(Michalu Hašku|Michalu Haškovi)|\\b(Michalem Haškem)|\\b(Michal Hašek)",
		"replacements": [
			["Tenisák boye", "Tenisák boyi", "Tenisák boyem", "Tenisák boy"],
			["Fešáka s imagirnární tiskovou mluvčí", "Fešákovi s imaginární tiskovou mluvčí", "Fešákem s imaginární tiskovou mluvčí", "Fešák s imaginární tiskovou mluvčí"],
			["Lánského pučisty Haška", "Lánskému pučistovi Haškovi", "Lánským pučistou Haškem", "Lánský pučista Hašek"],
			["Řidiče služebního lanďáku záchranky", "Řidiči služebního lanďáku záchranky", "Řidičem služebního lanďáku záchranky", "Řidič služebního lanďáku záchranky"]
		]
	},
	{
		"match": "\\b(Václava Klause mladšího|Klause mladšího|Václava Klause ml\.|Klause ml\.|Václava Klause juniora|Klause juniora|Václava Klause jr\.|Klause jr\.)|\\b(Václavu Klausovi mladšímu|Klausovi mladšímu|Václavu Klausi mladšímu|Klausi mladšímu|Václavu Klausi ml\.|Klausi ml\.|Klausi ml\.|Václavu Klausovi ml\.|Klausovi ml\.|Václavu Klausi juniorovi|Klausi juniorovi|Václavu Klausovi juniorovi|Klausovi juniorovi|Václavu Klausi jr\.|Klausi jr\.|Václavu Klausovi jr\.|Klausovi jr\.)|\\b(Václavem Klausem mladším|Klausem mladším|Václavem Klausem ml\.|Klausem ml\.|Václavem Klausem juniorem|Klausem juniorem|Václavem Klausem jr\.|Klausem jr\.)|\\b(Václav Klaus mladší|Klaus mladší|Václav Klaus ml\.|Klaus ml\.|Václav klaus junior|Klaus junior|Václav Klaus jr\.|Klaus jr\.)",
		"replacements": [
			["Křivohuba", "Křivohubovi", "Křivohubem", "Křivohub"],
			["Náčelníka Bočního větru", "Náčelníku Bočnímu větru", "Náčelníkem Bočním větrem", "Náčelník Boční vítr"],
			["Šklebila", "Šklebilovi", "Šklebilem", "Šklebil"],
			["Křiváka", "Křivákovi", "Křivákem", "Křivák"],
			["Křivoklátu", "Křivoklátu", "Křivoklátem", "Křivoklát"]
		]
	},
	{
		"match": "\\b(Václava Klause|Klause)|\\b(Václavu Klausi|Klausi|Václavu Klausovi|Klausovi)|\\b(Václavem Klausem)|\\b(Klausov|Klausův)|\\b(Václav Klaus|Klaus)",
		"replacements": [
			["Kikiny", "Kikině", "Kikinou", "shuffle_0", "Kikina"],
			["Latentního teplouše", "Latentnímu teplouši", "Latentním teploušem", "shuffle_0", "Latentní teplouš"],
			["Sběratele propisek", "Sběrateli propisek", "Sběratelem propisek", "shuffle_0", "Sběratel propisek"],
			["Růžového jendorožce", "Růžovému jednorožci", "Růžovým jednorožcem", "shuffle_0", "Růžový jednorožec"],
			["Důkaza globálního oteplování", "Důkazu globálního oteplování", "Důkazem globálního oteplování", "shuffle_0", "Důkaz globálního oteplování"]
		]
	},
	{
		"match": "\\b(Jaroslavy Pokorné Jermanové|Pokorné Jermanové|Jermanové)|\\b(Jaroslavě Pokorné Jermanové|Pokorné Jermanové|Jermanové)|\\b(Jaroslavu Pokornou Jermanovou|Pokornou Jermanovou|Jermanovou)|\\b(Jaroslavou Pokornou Jermanovou|Pokornou Jermanovou|Jermanovou)|\\b(Jaroslava Pokorná Jermanová|Pokorná Jermanová|Jermanová)",
		"replacements": [
			["Flundry od holiče", "Flundře od holiče", "Flundru od holiče", "Flundrou od holiče", "Flundra od holiče"],
			["Burešovy služtičky", "Burešově služtičce", "Burešovu služtičku", "Burešovou služtičkou", "Burešova služtička"],
			["Skartovačky", "Skartovačce", "Skartovačku", "Skartovačkou", "Skartovačka"]
		]
	},
	{
		"match": "\\b(Jaroslava Foldyny|Foldyny)|\\b(Jaroslavu Foldynovi|Foldynovi)|\\b(Jaroslava Foldynu|Foldynu)|\\b(Jaroslavem Foldynou|Foldynou)|\\b(Foldynová)|\\b(Foldynov|Foldynův)|\\b(Jaroslav Foldyna|Foldyna)",
		"replacements": [
			["Koštěte", "Koštěti", "Koště", "Koštětem", "shuffle_0", "Koště"],
			["Obránce tradiční rodiny", "Obránci tradiční rodiny", "Obránce tradiční rodiny", "Obráncem tradiční rodiny", "Foldynová_keep", "shuffle_0", "Obránce tradiční rodiny"],
			["Nočního vlku na prdeli", "Nočnímu vlku na prdeli", "Nočního vlka na prdeli", "Nočním vlkem na prdeli", "Foldynová_keep", "shuffle_0", "Noční vlk na prdeli"],
			["Bouchače na mopedu", "Bouchači na mopedu", "Bouchače na mopedu", "Bouchačem na mopedu", "Foldynová_keep", "shuffle_0", "Bouchač na mopedu"],
			["Zapařené řiti", "Zapařené řiti", "Zapařenou řiť", "Zapařenou řití", "Foldynová_keep", "shuffle_0", "Zapařená řiť"]
		]
	},
	{
		"match": "\\b(Zdeňka Ondráčka)|\\b(Zdeňku Ondráčku|Zdeňku Ondráčkovi)|\\b(Zdeňkem Ondráčkem)|\\b(Zdeněk Ondráček)",
		"replacements": [
			["Komunistické mlátičky", "Komunistické mlátičce", "Komunistickou mlátičkou", "Komunistická mlátička"],
			["Obušku, z pytle ven!", "Obušku, z pytle ven!", "Obušku, z pytle ven!", "Obušku, z pytle ven!"],
			["Mlátiče holek na Václaváku", "Mlátiči holek na Václaváku", "Mlátičem holek na Václaváku", "Mlátič holek na Václaváku"],
			["PlagiátDr. Ondráčka kkt.", "PlagiátDr. Ondráčkovi kkt.", "PlagiátDr. Ondráčkem kkt.", "PlagiátDr. Ondráček kkt."],
			["Toho, za kterého se klíčemi necinkalo", "Tomu, za kterého se klíčemi necinkalo", "Tím, za kterého se klíčemi necinkalo", "Ten, za kterého se klíčema necinkalo"],
			["Sklízeče obilí", "Sklízeči obilí", "Sklízečem obilí", "Sklízeč obilí"]
		]
	},
	{
		"match": "\\b(Vojtěcha Filipa)|\\b(Vojtěchu Filipovi|Vojtěchu Filipu)|\\b(Vojtěchem Filipem)|\\b(Vojtěch Filip)",
		"replacements": [
			["Agenta Falmera", "Agentu Falmerovi", "Agentem Falmerem", "Agent Falmer"],
			["Rudého noku", "Rudému noku", "Rudým nokem", "Rudý nok"]
		]
	},
	{
		"match": "\\b(Marty Semelové|Semelové)|\\b(Martě Semelové)|\\b(Martu Semelovou|Semelovou)|\\b(Martou Semelovou)|\\b(Marta Semelová|Semelová)",
		"replacements": [
			["Kuřby za pade", "Kuřbě za pade", "Kuřbu za pade", "Kuřbou za pade", "Kuřba za pade"],
			["Rudé Marty", "Rudé Martě", "Rudou Martu", "Rudou Martou", "Rudá Marta"],
			["Krvavé Mary", "Krvavé Mary", "Krvavou Mary", "Krvavou Mary", "Krvavá Mary"],
			["Red Widow", "Red Widow", "Red Widow", "Red Widow", "Red Widow"],
			["Zhouby Horákové", "Zhoubě Horákové", "Zhoubu Horákové", "Zhoubou Horákové", "Zhouba Horákové"],
			["Gulagmamy", "Gulagmamě", "Gulagmamu", "Gulagmamou", "Gulagmama"]
		]
	},
	{
		"match": "\\b(Karla Havlíčka)|\\b(Karlu Havlíčku|Karlu Havlíčkovi)|\\b(Karlem Havlíčkem)|\\b(Karel Havlíček)",
		"replacements": [
			["Chodící insomnie", "Chodící insimnii", "Chodící insomnií", "Chodící insomnie"],
			["Prdele na dvou židlích", "Prdeli na dvou židlích", "Prdelí na dvou židlích", "Prdel na dvou židlích"],
			["Toho, co vstává ve štyři ráno", "Tomu, co vstává ve štyři ráno", "Tím, co vstává ve štyři ráno", "Ten, co vstává ve štyři ráno"],
			["Párátek v očích", "Párátkám v očích", "Párátky v očích", "Párátka v očích"],
			["Ministra nádražek a lokálek", "Ministru nádražek a lokálek", "Ministrem nádražek a lokálek", "Ministr nádražek a lokálek"],
			["Ministra vlakových srážek", "Ministru vlakových srážek", "Ministrem vlakových srážek", "Ministr vlakových srážek"],
			["Slepejše", "Slepejši", "Slepejšem", "Slepejš"]
		]
	},
	{
		"match": "\\b(Aleše Brichty)|\\b(Aleši Brichtovi)|\\b(Aleše Brichtu)|\\b(Alešem Brichtou)|\\b(Brichtová)|\\b(Brichtův|Brichtovo)|\\b(Aleš Brichta)",
		"replacements": [
			["Lowcost Dalibora Jandy", "Lowcost Daliboru Jandovi", "Lowcost Dalibora Jandu", "Lowcost Daliborem Jandou", "Brichtová_keep", "shuffle_0", "Lowcost Dalibor Janda"],
			["Jednookého krále mezi slepými", "Jednookému králi mezi slepými", "Jednookého krále mezi slepými", "Jednookým králem mezi slepými", "Brichtová_keep", "shuffle_0", "Jednooký král mezi slepými"],
			["Aleše \'skleněnky\'", "Aleši \'skleněnce\'", "Aleše \'skleněnku\'", "Alešem \'skleněnkou\'", "Brichtová_keep", "shuffle_0", "Aleš \'skleněnka\'"],
			["Lucky Bílé bez plastik_keep", "Lucce Bílé bez plastik_keep", "Lucku Bílou bez plastik_keep", "Luckou Bílou bez plastik_keep", "Brichtová_keep", "shuffle_0", "Lucka Bílá bez plastik_keep"]

		]
	},
	{
		"match": "\\b(Richarda Krajča|Krajča)|\\b(Richardu Krajčovi|Krajčovi)|\\b(Richardem Krajčem|Krajčem)|\\b(Krajčová)|\\b(Krajčov|Krajčův)|\\b(Richard Krajčo|Krajčo)",
		"replacements": [
			["Agrogimliho", "Agrogimlimu", "Agrogimlim", "Krajčová_keep","shuffle_0", "Agrogimli"],
			["Paklíče", "Paklíči", "Paklíčem", "Krajčová_keep", "shuffle_0", "Paklíč"],
			["Manažera Agro kempu", "Manažerem Agro kempu", "Manažerem Agro kempu", "Krajčová_keep", "shuffle_0", "Manažer Agro kempu"],
			["Písmenkové polévky", "Písmenkové polévce", "Písmenkovou polévkou", "Krajčová_keep", "shuffle_0", "Písmenková polévka"],
			["Generátoru náhodných slov", "Generátoru náhodných slov", "Generátorem náhodných slov", "Krajčová_keep", "shuffle_0", "Generátor náhodných slov"],

		]
	},
	{
		"match": "\\b(Matěje Stropnického|(?<!Martina )Stropnického)|\\b(Matěji Stropnickému|(?<!Martinovi|Martinu )Stropnickému)|\\b(Matějem Stropnickým|(?<!Martinem )Stropnickým)|\\b(Matěj Stropnický|(?<!Martin )Stropnický)",
		"replacements": [
			["Hraběte Homokláda", "Hraběti Homokládu", "Hrabětem Homokládem", "Hrabě Homoklád"],
			["Buzíka z Homokládštejna", "Buzíkovi z Homokládštejna", "Buzíkem z Homokládštejna", "Buzík z Homokládštejna"],
			["Garanta pražské gay pride", "Garantu pražské gay pride", "Garantem pražské gay pride", "Garant pražské gay pride"],
			["Destruktora Strany Zelených", "Destruktoru Strany Zelených", "Destruktorem Strany Zelených", "Destruktor Strany Zelených"],
			["Garde Jany Maláčové", "Garde Jany Maláčové", "Garde Jany Maláčové", "Garde Jany Maláčové"],
			["Dwaynea Dibleyho", "Dwaynu Dibleymu", "Dwaynem Dibleym", "Dwayne Dibley"],
			["Lowcost Freddieho Mercuryho", "Lowcost Freddiemu Mercurymu", "Lowcost Freddiem Mercurym", "Lowcost Freddie Mercury"]
		]
	},
	{
		"match": "(Roberta Šlachty|Šlachty)|(Robertu Šlachtu|Robertu Šlachtovi|Šlachtovi)|(Roberta Šlachtu|Šlachtu)|(Robertem Šlachtou|Šlachtou)|(Šlachtová)|(Šlachtov|Šlachtův)|(Robert Šlachta|Šlachta)",
		"replacements":[
			["Ušatého torpéda", "Ušatému torpédu", "Ušaté torpédo", "Ušatým torpédem", "Šlachtová_keep", "shuffle_0", "Ušaté torpédo"],
			["Dumba", "Dumbovi", "Dumba", "Dumbou", "Šlachtová_keep", "shuffle_0", "Dumbo"],
			["Ministra odposlechů", "Ministru odposlechů", "Ministra odposlechů", "Ministrem odposlechů", "Šlachtová_keep", "shuffle_0", "Ministr odposlechů"],
			["Krále mulletů", "Králi mulletů", "Krále mulletů", "Králem mulletů", "Šlachtová_keep", "shuffle_0", "Král mulletů"],
			["Burešového backupu", "Burešovému backupu", "Burešův backup", "Burešovým backupem", "Šlachtová_keep", "shuffle_0", "Burešův backup"]
		]
	},
	{
		"match": "\\b(Pavla Poulíčka)|\\b(Pavlu Poulíčku|Pavlu Poulíčkovi)|\\b(Pavlem Poulíčkem)|\\b(Poulíčková)|\\b(Poulíčkov|Poulíčkův)|\\b(Pavel Poulíček)",
		"replacements": [
			["Učesané prdele", "Učesané prdeli", "Učesanou prdelí", "Poulíčková_keep", "shuffle_0", "Učesaná prdel"],
			["Ksichta s mapou měsíce", "Ksichtu s mapou měsíce", "Ksichtem s mapou měsíce", "Poulíčková_keep", "shuffle_0", "Ksicht s mapou měsíce"],
			["Šulína od kolotoče", "Šulínovi od kolotoče", "Šulínem od kolotoče", "Poulíčková_keep", "shuffle_0", "Šulín od kolotoče"],
			["Pavla Beďara", "Pavlu Beďarovi", "Pavlem Beďarem", "Poulíčková_keep", "shuffle_0", "Pavel Beďar"],
			["Mastného čela", "Mastnému čelu", "Mastným čelem", "Poulíčková_keep", "shuffle_0", "Mastné čelo"]
		]
	},
	{
		"match": "\\b(Davida Ratha|Ratha(?![a-z]))|\\b(Davidu Rathovi|Davidovi Rathovi|Rathovi(?![a-z]))|\\b(Davidem Rathem|Rathem(?![a-z]))|\\b(Rathova|Rathovo|Rathovy|Rathův)|\\b(David Rath|Rath(?![a-z]))",
		"replacements": [
			["Sedmičky v krabici", "Sedmičce v krabici", "Sedmičkou v krabici", "shuffle_0", "Sedmička v krabici"],
			["Fackovacího panáka", "Fackovacímu panáku", "Fackovacím panákem", "shuffle_0", "Fackovací panák"]
		]
	},
	{
		"match": "(Štěpána Strnada)|(Štěpánu Strnadovi|Štěpánu Strnadu)|(Štěpánem Strnadem)|(Štěpán Strnad)",
		"replacements": [
			["Doutníčka z OVB", "Doutníčku z OVB", "Doutníčkem z OVB", "Doutníček z OVB"]
		]
	},
	{
		"match": "\\b(Starobrna)|\\b(Starobrnu)|\\b(Starobrnem)|\\b(Starobrněns)(Starobrno)",
		"replacements": [
			["Starobahna", "Starobahnu", "Starobahnem", "Starobahněns", "Starobahno"]
		]
	},
	{	
		"match": "\\b(Gambrinus)",
		"replacements": [
			["Gambrihnus"]
		]
	},
	{
		"match": "\\b(Miroslava Pelty|Pelty)|\\b(Miroslavu Peltovi|Peltovi)|\\b(Miroslava Peltu|Peltu)|\\b(Miroslavem Peltou|Peltou)|\\b(Peltovy|Peltovo|Peltův)|\\b(Miroslav Pelta|Pelta)",
		"replacements": [
			["Českého Wayna Rooneyho", "Českému Waynu Rooneymu", "Českého Wayna Rooneyho", "Českým Waynem Rooneym", "shuffle_0", "Český Wayne Rooney"],
			["Svěžího vánku českého fotbalu", "Svěžímu vánku českému fotbalu", "Svěží vánek českého fotbalu", "Svěžím vánkem českého fotbalu", "shuffle_0", "Svěží vánek českého fotbalu"],
			["Návštěvníka šaten rozhodčích", "Návštěvníkovi šaten rozhodčích", "Návštěvníka šaten rozhodčích", "Návštěvníkem šaten rozhodčích", "shuffle_0", "Návštěvník šaten rozhodčích"]
		]
	},
	{
		"match": "\\b(Romana Berbra|Berbra)|\\b(Romanu Berbru|Romanu Berbrovi|Berbru|Berbrovi)|\\b(Romanem Berbrem|Berbrem)|\\b(Berbrová)|\\b(Berbrov|Berbrův)|\\b(Roman Berbr|Berbr)",
		"replacements": [
			["Taťky švába", "Taťku švábovi", "Taťkou švábem", "Berbrová_keep","shuffle_0", "Taťka šváb"],
			["Nakláněče roviny", "Nakláněči roviny", "Nakláněčem roviny", "Berbrová_keep", "shuffle_0", "Nakláněč roviny"]
		]
	},
	{
		"match": "\\b(Pavla Novotného)|\\b(Pavlu Novotnému)|\\b(Pavlem Novotným)|\\b(Pavel Novotný)",
		"replacements": [
			["Vraha Ivety Bartošové_keep", "Vrahu Ivety Bartošové_keep", "Vrahem Ivety Bartošové_keep", "Vrah Ivety Bartošové_keep"],
			["Nesplněného cíle GRU", "Nesplněnému cíli GRU", "Nesplněným cílem GRU", "Nesplněný cíl GRU"],
			["Zhouby Koněva", "Zhoubě Koněva", "Zhoubou Koněva", "Zhouba Koněva"],
			["Mistra rýsování bez pravítka", "Mistru rýsování bez pravítka", "Mistrem rýsování bez pravítka", "Mistr rýsování bez pravítka"],
			["Vorvaně z Řeporyj", "Vorvani z Řeporyj", "Vorvaněm z Řeporyj", "Vorvaň z Řeporyj"],
			["Vokálního kulometu", "Vokálnímu kulometu", "Vokálním kulometem", "Vokální kulomet"],
			["Degustátora novičoku", "Degustátoru novičoku", "Degustátorem novičoku", "Degustátor novičoku"],
			["Hrochodýla", "Hrochodýlu", "Hrochodýlem", "Hrochodýl"]
		]
	},
	{
		"match": "\\b(Petra Novotného)|\\b(Petru Novotnému)|\\b(Petrem Novotným)|\\b(Petr Novotný)",
		"replacements": [
			["Zpoceného čela po jednom vtipu", "Zpocenému čelu po jednom vtipu", "Zpoceným čelem po jednom vtipu", "Zpocené čelo po jednom vtipu"]
		]
	},
	{
		"match": "\\b(Radka Vondráčka|Vondráčka)|\\b(Radku Vondráčkovi|Radku Vondráčku|Vondráčkovi|Vondráčku)|\\b(Radkem Vondráčkem|Vondráčkem)|\\b(Radek Vondráček|Vondráček)",
		"replacements": [
			["Burešového Marigolda", "Burešového Marigoldu", "Burešovým Marigoldem", "Burešův Marigold"],
			["Majitele nejhezčího prostředníčku ve sněmovně", "Majiteli nejhezčího prostředníčku ve sněmovně", "Majitelem nejhezčího prostředníčku ve sněmovně", "Majitel nejhezčího prostředníčku ve sněmovně"],
			["Adrenalinového lezce po lavicích sněmovny", "Adrenalinovému lezci po lavicích sněmovny", "Adrenalinovým lezcem po lavicích sněmovny", "Adrenalinový lezec po lavicích sněmovny"],
			["Barda bez talentu", "Bardu bez talentu", "Bardem bez talentu", "Bard bez talentu"]
		]
	},
	{
		"match": "\\b(Miloše Vystrčila)|\\b(Miloši Vystrčilovi|Miloši Vystrčilu|Vystrčilovi)|\\b(Milošem Vystrčilem)|\\b(Vystrčilův|Vystrčilov)|\\b(Miloš Vystrčil)",
		"replacements": [
			["Agresivního sysla", "Agresivnímu syslovi", "Agresivním syslem", "shuffle_0", "Agresivní sysel"],
			["Kubery light", "Kuberovi light", "Kuberou light", "shuffle_0", "Kubera light"],
			["Taiwanského simpa", "Taiwanskému simpovi", "Taiwanským simpem", "shuffle_0", "Taiwanský simp"]
		]
	},
	{
		"match": "\\b(Zdeňka Hřiba)|\\b(Zdeňku Hřibu|Zdeňku Hřibovi)|\\b(Zdeňkem Hřibem)|\\b(Zdeněk Hřib)",
		"replacements": [
			["Majitele nejdražšího kávovaru ve Střední Evropě", "Majiteli nejdražšího kávovaru ve Střední Evropě", "Majitelem nejdražšího kávovaru ve Střední Evropě", "Majitel nejdražšího kávovaru ve Střední Evropě"],
			["Spongeboba s kloboukem", "Spongebobu s kloboukem", "Spongebobem s kloboukem", "Spongebob s kloboukem"],
			["Kladiva z houby", "Kladivu z houby", "Kladivem z houby", "Kladivo z houby"],
			["Mykologického zázraku", "Mykologickému zázraku", "Mykologickým zázrakem", "Mykologický zázrak"]
		]
	},
	{
		"match": "\\b(Jaromíra Soukupa)|\\b(Jaromírem Soukupem)|\\b(Jaromírem Soukupem)|\\b(Jaromír Soukup)",
		"replacements": [
			["Větroplaše", "Větroplaši", "Větroplašem", "Větroplaš"],
			["Oportunistické svině", "Oportunistické svini", "Oportunistickou sviní", "Oportunistická svině"],
			["Majitele největší čínské investice v ČR", "Majiteli největší čínské investice v ČR", "Majitelem největší čínské investice v ČR", "Majitel největší čínské investice v ČR"]
		]
	},
	{
		"match": "\\b(Kateřiny Konečné)|\\b(Kateřině Konečné)|\\b(Kateřinu Konečnou)|\\b(Kateřinou Konečnou)|\\b(Kateřina Konečná)",
		"replacements": [
			["Blonďatého krtka", "Blonďatému krtku", "Blonďatého krtka", "Blonďatým krtkem", "Blonďatý krtek"],
			["Putinovy děvky", "Putinově děvce", "Putinovu děvku", "Putinovou děvkou", "Putinova děvka"],
			["Šilhavé rachejtle", "Šilhavé rachejtli", "Šilhavou rachejtli", "Šilhavou rachejtlí", "Šilhavá rachejtle"]
		]
	},
	{
		"match": "\\b(Lucie Bílé)|\\b(Lucii Bílé)|\\b(Lucii Bílou)|\\b(Lucií Bílou)|\\b(Lucie Bílá)",
		"replacements": [
			["Lucie Rudé", "Lucii Rudé", "Lucii Rudou", "Lucií Rudou", "Lucie Rudá"],
			["Rozkuřovačky Alexandrovců", "Rozkuřovačce Alexandrovců", "Rozkuřovačku Alexandrovců", "Rozkuřovačkou Alexandrovců", "Rozkuřovačka Alexandrovců"],
			["Smrtelné ruky Lucky Bílé", "Smrtelné ruce Lucky Bílé", "Smrtelnou ruku Lucky Bílé", "Smrtelnou rukou Lucky Bílé", "Smrtelná ruka Lucky Bílé"],
			["Landové hajlovačky", "Landové hajlovačce", "Landovu hajlovačku", "Landovou hajlovačkou", "Landova hajlovačka"],
			["Hany Zaňákové", "Haně Zaňákové", "Hanu Zaňákovou", "Hanou Zaňákovou", "Hana Zaňáková"]
		]
	},
	{
		"match": "\\b(Františka Ringo Čecha|Ringo Čecha)|\\b(Františku Ringo Čechovi|Františkovi Ringo Čechovi|Ringo Čechovi|Ringu Čechovi)|\\b(Františkem Ringo Čechem|Ringo Čechem)|\\b(František Ringo Čech|Ringo Čech)",
		"replacements": [
			["Toho, co držel pero, ale nepodepsal", "Tomu, co držel pero, ale nepodepsal", "Tím, co držel pero, ale nepodepsal", "Ten, co držel pero, ale nepodepsal"],
			["Autora obrazu Zvířátka obdivují autoportrét", "Autorovi obrazu Zvířátka obdivují autoportrét", "Autorem obrazu Zvířátka obdivují autoportrét", "Autor obrazu Zvířátka obdivují autoportrét"],
			["Vepřa knedla Ringa", "Vepřu knedlu Ringovi", "Vepřo knedlo Ringem", "Vepřo knedlo Ringo"]
		]
	},
	{
		"match": "\\b(Jakuba Michálka)|\\b(Jakubu Michálku|Jakubu Michálkovi|Jakobovi Michálkovi)|\\b(Jakubem Michálkem)|\\b(Jakub Michálek)",
		"replacements": [
			["Splněné kvóty na Aspergery", "Splněné kvótě na Aspergery", "Splněnou kvótou na Aspergery", "Splněná kvóta na Aspergery"],
			["Lidl Kalouska", "Lidl Kalouskovi", "Lidl Kalouskem", "Lidl Kalousek"]
		]
	},
	{
		"match": "\\b(Mikuláše Ferjenčíka|Ferjenčíka)|\\b(Mikuláši Ferjenčíkovi|Mikuláši Ferjenčíkovi|Ferjenčíkovi)|\\b(Mikulášem Ferjenčíkem|Ferjenčíkem)|\\b(Ferjenčíková)|\\b(Mikuláš Torrent Ferjenčík|Mikuláš Ferjenčík|Ferjenčík)",
		"replacements": [
			["Ježíše Torrentuse", "Ježíši Torrentusi", "Ježíšem Torrentusem", "Ferjenčíková_keep", "Ježíš Torrentus"],
			["Piratebay admina", "Piratebay adminovi", "Piratebay adminem", "Ferjenčíková_keep", "Piratebay admin"]
		]
	},
	{
		"match": "\\b(Michala Kostky)|\\b(Michalu Kostkovi)|\\b(Michala Kostku)|\\b(Michalem Kostkou)|\\b(Michal Kostka)",
		"replacements": [
			["Bradky zavěšené na idiotovi", "Bradce zavěšené na idiotovi", "Bradku zavěšenou na idiotovi", "Bradkou zavěšenou na idiotovi", "Bradka zavěšená na idiotovi"],
			["Rudého Michala Kolesy", "Rudému Michalu Kolesovi", "Rudého Michala Kolesu", "Rudým Michalem Kolesou", "Rudý Michal Kolesa"]
		]
	},
	{
		"match": "\\b(Daniela Vávry)|\\b(Danielu Vávrovi)|\\b(Daniela Vávru)|\\b(Danielem Vávrou)|\\b(Daniel Vávra)",
		"replacements": [
			["CEO sebereflexe", "CEO sebereflexe", "CEO sebereflexe", "CEO sebereflexe", "CEO sebereflexe"],
			["Gibona v Bentley", "Gibonu v Bentley", "Gibona v Bentley", "Gibonem v Bentley", "Gibon v Bentley"]
		]
	},
	{
		"match": "\\b(Dominika Haška)|\\b(Dominiku Haškovi|Dominiku Hašku)|\\b(Dominikem Haškem)|\\b(Dominik Hašek)",
		"replacements": [
			["Markeťáka z Wishe", "Markeťáku z Wishe", "Markeťákem z Wishe", "Markeťák z Wishe"],
			["#ONBAVÍ", "#ONBAVÍ", "#ONBAVÍ", "#ONBAVÍ"],
			["Legendy NHL a insolvencí", "Legendě NHL a insolvencí", "Legednou NHL a insolvencí", "Legenda NHL a insolvencí"],
			["Rybáře, lesníka a hokejového brankáře", "Rybáři, lesníku a hokejovému brankáři", "Rybářem, lesníkem a hokejovým brankářem", "Rybář, lesník a hokejový brankář"],
			["Dominika Šaška", "Dominiku Šaškovi", "Dominikem Šaškem", "Dominik Šašek"]
		]
	},
	{
		"match": "\\b(Iva Rittiga|Rittiga)|\\b(Ivu Rittigu|Ivu Rittigovi|Rittigu|Rittigovi)|\\b(Ivo Rittigem|Rittigem)|\\b(Rittigovo|Rittigovy|Rittigova|Rittigův)|\\b(Ivo Rittig|Rittig)",
		"replacements": [
			["Vepřočlověka ve Versace", "Vepřočlověku ve Versace", "Vepřočlověkem ve Versace", "shuffle_0", "Vepřočlověk ve Versace"]
		]
	},
	{
		"match": "\\b(Stanislava Lukeše)|\\b(Stanislavu Lukeši|Stanislavu Lukešovi)|\\b(Stanislavem Lukešem)|\\b(Stanislav Lukeš)",
		"replacements": [
			["Šukela", "Šukelovi", "Šukelem", "Šukel"],
			["Krále pingpongových pálek", "Králi pingpongových pálek", "Králem pingpongových pálek", "Král pingpongových pálek"],
			["Přemožitele děcek v mezinárodním turnaji", "Přemožiteli děcek v mezinárodním turnaji", "Přemožitelem děcek v mezinárodním turnaji", "Přemožitel děcek v mezinárodním turnaji"],
			["Třicetiletého panice", "Třicetiletému panici", "Třicetiletým panicem", "Třicetiletý panic"],
			["Nejvěrnějšího zákazníka Homecreditu", "Nejvěrnějšímu zákazníku Homecreditu", "Nejvěrnějším zákazníkem Homecreditu", "Nejvěrnější zákazník Homecreditu"],
			["Adepta na trestný pobyt v Likehousu", "Adeptu na trestný pobyt v Likehousu", "Adeptem na trestný pobyt v Likehousu", "Adept na trestný pobyt v Likehousu"],
			["Stopadesáti kil svalů", "Stopadesáti kilům svalů", "Stopadesáti kily svalů", "Stopadesát kilo svalů"],
			["Honimíra", "Honimíru", "Honimírem", "Honimír"],
			["Plejtváka Stenlyho", "Plejtváku Stenlymu", "Plejtvákem Stenlym", "Plejtvák Stenly"],
			["Kudrnatého zla", "Kudrnatému zlu", "Kudrnatým zlem", "Kudrnaté zlo"]
		]
	},
	{
		"match": "\\b(Tomáše Kuči)|\\b(Tomáši Kučovi)|\\b(Tomáše Kuču)|\\b(Tomášem Kučou)|\\b(Tomáš Kuča)",
		"replacements": [
			["ZTP na zasranou smůlu", "ZTP na zasranou smůlu", "ZTP na zasranou smůlu", "ZTP na zasranou smůlu", "ZTP na zasranou smůlu"],
			["Simpa Domminiky Myslivcové", "Simpovi Dominiky Myslivcové", "Simpa Dominiky Myslivcové", "Simpem Dominiky Myslivcové", "Simp Dominiky Myslivcové"],
			["Majitele vystřelovací rybičky", "Majiteli vystřelovací rybyčky", "Majitele vystřelovací rybyčky", "Majitelem vystřelovací rybičky", "Majitel vystřelovací rybičky"],
			["Vynálezce obranné ulity", "Vynálezci obranné ulity", "Vynálezce obranné ulity", "Vynálezcem obranné ulity", "Vynálezce obranné ulity"],
			["Bezrukého brankáře", "Bezrukému brankáři", "Bezrukého brankáře", "Bezrukým brankářem", "Bezruký brankář"],
			["Zlaťáka", "Zlaťáku", "Zlaťáka", "Zlaťákem", "Zlaťák"],
			["Putovního neštěstí fotbalových týmů pralesních lig", "Putovnímu neštěstí fotbalových týmů pralesních lig", "Putovní neštěstí fotbalových týmů pralesních lig", "Putovním neštěstím fotbalových týmů pralesních lig", "Putovní neštěstí fotbalových týmů pralesních lig"],
			["Růžové tlapičky", "Růžové tlapičce", "Růžovou tlapičku", "Růžovou tlapičkou", "Růžová tlapička"],
			["Bezzubého lovce princezniček", "Bezzubému lovci princezniček", "Bezzubého lovce princezniček", "Buzzubým lovcem princezniček", "Bezzubý lovec princezniček"]
		]
	},
	{
		"match": "\\b(Parzivala)|\\b(Parzivalu|Parzivalovi)|\\b(Parzivalem)|\\b(Parzivalov|Parzivalův)|\\b(Parzival)",
		"replacements": [
			["Boomerského mrdače mývalů_onlyon:paralelnilisty", "Boomerskému mrdači mývalů_onlyon:paralelnilisty", "Boomerským mrdačem mývalů_onlyon:paralelnilisty", "shuffle_0_onlyon:paralelnilisty", "Boomerský mrdač mývalů_onlyon:paralelnilisty"],
			["Operátora amatéra_onlyon:paralelnilisty", "Operátoru amatéru_onlyon:paralelnilisty", "Operátorem amatérem_onlyon:paralelnilisty", "shuffle_0_onlyon:paralelnilisty", "Operátor amatér_onlyon:paralelnilisty"],
			["Obdivovatele Grznára_onlyon:paralelnilisty", "Obdivovateli Grznára_onlyon:paralelnilisty", "Obdivovatelem Grznára_onlyon:paralelnilisty", "shuffle_0_onlyon:paralelnilisty", "Obdivovatel Grznára_onlyon:paralelnilisty"]
		]
	},
	{
		"match": "\\b(Nodaxxe)|\\b(Nodaxxu|Nodaxxovi)|\\b(Nodaxxem)|\\b(Nodaxx)",
		"replacements": [
			["Vesnického Davida Guetty_onlyon:paralelnilisty", "Vesnickému Davidu Guettovi_onlyon:paralelnilisty", "Vesnickým Davidem Guettou_onlyon:paralelnilisty", "Vesnický David Guetta_onlyon:paralelnilisty"],
			["Bílého kluka z rudé rodiny_onlyon:paralelnilisty", "Bílému klukovi z rudé rodiny_onlyon:paralelnilisty", "Bílým klukem z rudé rodiny_onlyon:paralelnilisty", "Bílý kluk z rudé rodiny_onlyon:paralelnilisty"],
			["Scalpera bez peněz_onlyon:paralelnilisty", "Scalperu bez peněz_onlyon:paralelnilisty", "Scalperem bez peněz_onlyon:paralelnilisty", "Scalper bez peněz_onlyon:paralelnilisty"],
			["Svačinového krále_onlyon:paralelnilisty", "Svačinovému králi_onlyon:paralelnilisty", "Svačinovým králem_onlyon:paralelnilisty", "Svačinový král_onlyon:paralelnilisty"],
			["Nudaxxe_onlyon:paralelnilisty", "Nudaxxovi_onlyon:paralelnilisty", "Nudaxxem_onlyon:paralelnilisty", "Nudaxx_onlyon:paralelnilisty"]
		]
	},
	{
		"match": "\\b(Malca|Mᴀʟᴄᴀ)|\\b(Malcovi)|\\b(Malcem)|\\b(Malcova(?![a-z])|Malcovy(?![a-z])|Malcovy(?![a-z])|Malcův(?![a-z]))|\\b(Malco|Mᴀʟᴄᴏ)",
		"replacements": [
			["Majitele Feldy jezdící na párno_onlyon:paralelnilisty", "Majiteli Feldy jezdící na párno_onlyon:paralelnilisty", "Majitelem Feldy jezdící na párno_onlyon:paralelnilisty", "shuffle_0_onlyon:paralelnilisty", "Majitel Feldy jezdící na párno_onlyon:paralelnilisty"],
			["Incestu plameňáků_onlyon:paralelnilisty", "Incestu plameňáků_onlyon:paralelnilisty", "Incestem plameňáků_onlyon:paralelnilisty", "shuffle_0_onlyon:paralelnilisty", "Incest plameňáků_onlyon:paralelnilisty"],
			["Simpa Valhally_onlyon:paralelnilisty", "Simpovi Valhally_onlyon:paralelnilisty", "Simpem Valhally_onlyon:paralelnilisty", "shuffle_0_onlyon:paralelnilisty", "Simp Valhally_onlyon:paralelnilisty"]
		]
	},
	{
		"match": "\\b(Hermora)|\\b(Hermoru|Hermorovi)|\\b(Hermorem)|\\b(Hermor)",
		"replacements": [
			["Olympionika ve smažení_onlyon:paralelnilisty", "Olympioniku ve smažení_onlyon:paralelnilisty", "Olympionikem ve smažení_onlyon:paralelnilisty", "Olympionik ve smažení_onlyon:paralelnilisty"]
		]
	},
	{
		"match": "\\b(Valhally)|\\b(Valhalle)|\\b(Valhallu)|\\b(Valhallou)|\\b(Valhalla)",
		"replacements": [
			["Jednoho článku za sto let_onlyon:paralelnilisty", "Jednomu článku za sto let_onlyon:paralelnilisty", "Jeden článek za sto let_onlyon:paralelnilisty", "Jedním článkem za sto let_onlyon:paralelnilisty", "Jeden článek za sto let_onlyon:paralelnilisty"],
			["Studenokrevné, chladné a zlé_onlyon:paralelnilisty", "Studenokrevné, chladné a zlé_onlyon:paralelnilisty", "Studenokrevnou, chladnou a zlou_onlyon:paralelnilisty", "Studenokrevnou, chladnou a zlou_onlyon:paralelnilisty", "Studenokrevná, chladná a zlá_onlyon:paralelnilisty"],
			["Válečku_onlyon:paralelnilisty", "Válečku_onlyon:paralelnilisty", "Váleček_onlyon:paralelnilisty", "Válečkem_onlyon:paralelnilisty", "Váleček_onlyon:paralelnilisty"]
		]
	},
	{
		"match": "\\b(Filipa Grznára|Grznára(?!(?:, kterému sluší XS trenýrky)))|\\b(Filipu Grznáru|Filipu Grznárovi|Grznáru(?!(?:, kterému sluší XS trenýrky))|Grznárovi(?!(?:, kterému sluší XS trenýrky)))|\\b(Filipem Grznárem|Grznárem(?!(?:, kterému sluší XS trenýrky)))|\\b(Grznárovy|Grznárova|Grznárův)|\\b(Filip Grznár|Grznár(?!(?:, kterému sluší XS trenýrky)))",
		"replacements": [
			["Anabolického prasete", "Anabolickému praseti", "Anabolickým prasetem", "shuffle_0", "Anabolické prase"],
			["BamBama", "BamBamu", "BamBamem", "shuffle_0", "BamBam"],
			["Grznára, kterému sluší XS trenýrky", "Grznárovi, kterému sluší XS trenýrky", "Grznárem, kterému sluší XS trenýrky", "shuffle_0", "Grznár, kterému sluší XS trenýrky"],
			["Neandrtálce z posilovny", "Neandrtálci z posilovny", "Neandrtálcem z posilovny", "shuffle_0", "Neandrtálec z posilovny"],
			["Předního odběratele dětského oleje", "Přednímu odběrateli dětského oleje", "Předním odběratelem dětského oleje", "shuffle_0", "Přední odběratel dětského oleje"],
			["Kromaňonce", "Kromaňonci", "Kromaňoncem", "shuffle_0", "Kromaňonec"],
			["Pičo vole mrdat", "Pičo vole mrdat", "Pičo vole mrdat", "shuffle_0", "Pičo vole mrdat"],
			["Generála sypací brigády", "Generálu sypací brigády", "Generálem sypací brigády", "shuffle_0", "Generál sypací brigády"],
			["Nejlepšího dřepaře, vy kundy", "Nejlepšímu dřepaři, vy kundy", "Nejlepším dřepařem, vy kundy", "shuffle_0", "Nejlepší dřepař, vy kundy"]

		]
	},
	{
		"match": "\\b(Jiřího Pospíšila)|\\b(Jiřímu Pospíšilu|Jiřímu Pošpíšilovi)|\\b(Jiřím Pospíšilem)|\\b(Jiří Pospíšil)",
		"replacements": [
			["Mámy Moravcové", "Mámě Moravcové", "Mámou Moravcovou", "Máma Moravcová"],
			["Úplně jakoby ne tak tradičního rodinného příslušníka", "Úplně jakoby ne tak tradičnímu rodinnému příslušníku", "Úplně jakoby ne tak tradičním rodinným příslušníkem", "Úplně jakoby ne tak tradiční rodinný příslušník"],
			["Jirky nabodávače", "Jirkovi nabodávačovi", "Jirkou nabodávačem", "Jirka nabodávač"],
			["Obesity cosplaye Ovčáčka", "Obesity cosplayi Ovčáčka", "Obesity cosplayem Ovčáčka", "Obesity cosplay Ovčáčka"]
		]
	},
	{
		"match": "\\b(Jiřího Ovčáčka|Ovčáčka)|\\b(Jiřímu Ovčáčku|Ovčáčku|Jiřímu Ovčáčkovi|Ovčáčkovi)|\\b(Jiřím Ovčáčkem|Ovčáčkem)|\\b(Jiří Ovčáček|Ovčáček(?![a-z]))|\\b(Ovčáčkov|Ovčáčkův)",
		"replacements": [
			["Buzeranta s kabelkou", "Buzerantu s kabelkou", "Buzerantem s kabelkou", "Buzerant s kabelkou", "shuffle_0"],
			["Bezpáteřní krysy", "Bezpáteřní kryse", "Bezpáteřní krysou", "Bezpáteřní krysa", "shuffle_0"],
			["Zaměstnance hospicu Lány", "Zaměstnanci hospicu Lány", "Zaměstnancem hospicu Lány", "Zaměstnanec hospicu Lány", "shuffle_0"],
			["Bolševické svině", "Bolševické svini", "Bolševickou sviní", "Bolševická svině", "shuffle_0"],
			["Nižšího státního úředníka", "Nižšímu státnímu úředníku", "Nižším státním úředníkem", "Nižší státní úředník", "shuffle_0"],
			["Twitterového teroristy", "Twitterovému teroristovi", "Twitterovým teroristou", "Twitterový terorista", "shuffle_0"]
		]
	},
	{
		"match": "\\b(Jana Maláčová|Maláčová)|\\b(Jany Maláčové)|\\b(Janě Maláčové|Maláčové)|\\b(Janu Maláčovou)|\\b(Janou Maláčovou|Maláčovou)",
		"replacements": [
			["Venezuela", "Venezuely", "Venezuele", "Venezuelu", "Venezuelou"],
			["Dluhová spirála", "Dluhové spirály", "Dluhové spirále", "Dluhovou spirálu", "Dluhovou spirálou"],
			["Nepolíbená ropucha", "Nepolíbené ropuchy", "Nopolíbené ropuše", "Nepolíbenou ropuchu", "Nepolíbenou ropuchou"],
			["Předloha Věstonické Venuše", "Předlohy Věstonické Venuše", "Předloze Věstonické Venuše", "Předlohu Věstonické Venuše", "Předlohou Věstonické Venuše"]
		]
	},
	{
		"match": "\\b(Matěje Bělohoubka)|\\b(Matěji Bělohoubku|Matěji Bělohoubkovi)|\\b(Matějem Bělohoubkem)|\\b(Matěj Bělohoubek)",
		"replacements": [
			["Dívky na koštěti", "Dívce na koštěti", "Dívkou na koštěti", "Dívka na koštěti"],
			["Pirátského gambitu", "Pirátskému gambitu", "Pirátským gambitem", "Pirátský gambit"],
			["Vlezdoprdelka Bartoše", "Vlezdoprdelce Bartoše", "Vlezdoprdelkou Bartoše", "Vlezdoprdelka Bartoše"],
			["Bělohoubka, který měl dostal baseballkou", "Bělohoubkovi, který měl dostat baseballkou", "Bělohoubkem, který měl dostat baseballkou", "Bělohoubek, který měl dostat baseballkou"],
			["Potlouka", "Potlouku", "Potloukem", "Potlouk"]
		]
	},
	{
		"match": "\\b(Petra Nečase)|\\b(Petru Načasu|Petru Nečasovi)|\\b(Petrem Nečasem)|\\b(Petr Nečas)",
		"replacements": [
			["Trafikanta", "Trafikantu", "Trafikantem", "Trafikant"],
			["Petra Nagyho", "Petru Nagymu", "Petrem Nagyem", "Petr Nagy"],
			["Nákupčího kabelek ze státního rozpočtu", "Nákupčímu kabelek ze státního rozpočtu", "Nákupčím kabelek ze státního rozpočtu", "Nákupčí kabelek ze státního rozpočtu"],
			["Kočkopsa", "Kočkopsu", "Kočkopsem", "Kočkopes"],
			["Kočkopsoidního kočkopsa", "Kočkopsoidnímu kočkopsu", "Kočkopsoidním kočkopsem", "Kočkopsoidní kočkopes"],
		]
	},
	{
		"match": "\\b(Jiřího Čunka|Čunka)|\\b(Jiřímu Čunku|Jiřímu Čunkovi|Čunku|Čunkovi)|\\b(Jiřím Čunkem|Čunkem)|\\b(Jiří Čunek|Čunek)",
		"replacements": [
			["Pozorovatele afrického moru prasat z helikoptéry", "Pozorovateli afrického moru prasat z helikoptéry", "Pozorovatelem afrického moru prasat z helikoptéry", "Pozorovatel afrického moru prasat z helikoptéry"],
			["Apokalypsa Zlína", "Apokalypse Zlína", "Apokalypsou Zlína", "Apokalypsa Zlína"],
			["Zkázy vsetínských cigánů", "Zkáze vsetínských cigánů", "Zkázou vsetínských cigánů", "Zkáza vsetínských cigánů"],
			["Architekta kontejnerů", "Architektovi kontejnerů", "Architektem kontejnerů", "Architekt kontejnerů"]
		]
	},
	{
		"match": "\\b(Jiřího Paroubka|Paroubka)|\\b(Jiřímu Paroubku|Jiřímu Paroubkovi|Paroubku|Paroubkovi)|\\b(Jiřím Paroubkem|Paroubkem)|\\b(Paroubkova|Paroubkovy|Paroubkův|Paroubkovo)|\\b(Jiří Paroubek|Paroubek)",
		"replacements": [
			["Sexy mozka", "Sexy mozku", "Sexy mozkem", "shuffle_0", "Sexy mozek"],
			["Mistra dechových cvičení s černým páskem", "Mistru dechových cvičení s černým páskem", "Mistrem dechových cvičení s černým páskem", "shuffle_0", "Mistr dechových cvičení s černým páskem"],
			["Prasete bradavičnatého", "Praseti bradavičnatému", "Prasetem bradavičnatým", "shuffle_0", "Prase bradavičnaté"],
			["Halířů, co dělaj talíře", "Halířům, co dělaj talíře", "Halířy, co dělaj talíře", "shuffle_0", "Halíře dělaj talíře"]
		]
	},
	{
		"match": "\\b(Mirka Topolánka|Miroslava Topolánka|Mirka Topolánka|Topolánka)|\\b(Mirku Topolánkovi|Topolánkovi|Miroslavu Topolánkovi|Mirku Topolánku|Topolánku|Miroslavu Topolánku)|\\b(Miroslavem Topolánkem|Mirkem Topolánkem|Topolánkem)|\\b(Topolánkova|Topolánkovy|Topolánkovo|Topolánkův)|\\b(Mirek Topolánek|Miroslav Topolánek|Topolánek)",
		"replacements": [
			["Burana po toskánsku", "Buranu po toskánsku", "Buranem po toskánsku", "shuffle_0", "Buran po toskánsku"],
			["Dalíkovy amnestie", "Dalíkově amnestii", "Dalíkovou amnestií", "shuffle_0", "Dalíkova amnestie"],
			["Švédské trojky", "Švédské trojce", "Švédskou trojkou", "shuffle_0", "Švédská trojka"]
		]
	},
	{
		"match": "\\b(Bohuslava Sobotky)|\\b(Bohuslavu Sobotkovi)|\\b(Bohuslava Sobotku)|\\b(Bohuslavem Sobotkou)|\\b(Sobotkova|Sobotkovy|Sobotkovo|Sobotkův)|\\b(Bohuslav Sobotka)",
		"replacements": [
			["Dluhoslava Neděleje", "Dluhoslavu Neděleji", "Dluhoslava Neděleje", "Dluhoslavem Nedělejem", "shuffle_0", "Dluhoslav Nedělej"],
			["Zubopleše  z OKD", "Zubopleši z OKD", "Zubopleš z OKD", "Zubopleší z OKD", "shuffle_0", "Zubopleš z OKD"],
			["Žaluda s brýlemi", "Žaludu s brýlemi", "Žalud s brýlemi", "Žaludem s brýlemi", "shuffle_0", "Žalud s brýlemi"],
			["Der frenc", "Der frenc", "Der frenc", "Der frenc", "shuffle_0", "Der frenc"]
		]
	},
	{
		"match": "\\b(Slušných lidí)|\\b(Slušným lidem)|\\b(Slušné lidi)|\\b(Slušnými lidmi)|\\b(Slušní lidé)",
		"replacements": [
			["Z sušních lidí", "Z sušním lidem", "Z sušní lidi", "Z sušními lidmi", "Z sušní lidé"],
			["Putinovy předsunuté armády", "Putinově předsunuté armádě", "Putinovu předsunutou armádu", "Putinovou předsunutou armádou", "Putinova předsunutá armáda"],
			["Brněnského Bronxu", "Brněnskému Bronxu", "Brněnský Bronx", "Brněnským Bronxem", "Brněnský Bronx"],
			["Brněnských mlátiček", "Brněnským mlátičkám", "Brněnské mlátičky", "Brněnskými mlátičkami", "Brněnské mlátičky"],
			["Pernicovy buzerparty", "Pernicově buzerpartě", "Pernicovu buzerpartu", "Pernicovou buzerpartou", "Pernicova buzerparta"],
			["Kriplbandy", "Kriplbandě", "Kriplbandu", "Kriplbandou", "Kriplbanda"],
			["Zdravotních ubližovačů", "Zdravotním ubližovačům", "Zdravotní ubližovače", "Zdravotními ubližovači", "Zdravotní ubližovači"]
		]
	},
	{
		"match" : "\\b(Dělnické mládeže)|\\b(Dělnické mládeži)|\\b(Dělnickou mládež)|\\b(Dělnickou mládeží)|\\b(Dělnická mládež)",
		"replacements": [
			["Zorg squadu", "Zorg squadu", "Zorg squad", "Zorg squadem", "Zorg squad"],
			["SS-pionýrů", "SS-pionýrům", "SS-pionýry", "SS-pionýri", "SS-pionýři"],
			["Vylepovačů plakátů na zákazy výlepů", "Vylepočavi plakátů na zákazy výlepů", "Vylepovače plakátů na zákazy výlepů", "Vylepovači plakátů na zákazy výlepů", "Vylepovači plakátů na zákazy výlepů"],
			["Bulimiků v bomberech", "Bulimikům v bomberech", "Bulimiky v bomberech", "Bulimiky v bomberech", "Bulimici v bomberech"],
			["Školky DSSS", "Školce DSSS", "Školku DSSS", "Školkou DSSS", "Školka DSSS"]
		]
	},
	{
		"match": "\\b(Miroslava Kalouska|(?<!Lidl )Kalouska)|\\b(Miroslavu Kalousku|Miroslavu Kalouskovi|(?<!Lidl )Kalousku|(?<!Lidl )Kalouskovi)|\\b(Miroslavem Kalouskem|(?<!Lidl )Kalouskem)|\\b(Miroslav Kalousek|(?<!Lidl )Kalousek(?![a-z]))|\\b(Kalousková)|\\b(Kalouskův|(?<!Lidl )Kalouskov)",
		"replacements": [
			["Arcikacíře Mirka", "Arcikacíři Mirkovi", "Arcikacířem Mirkem", "Arcikacíř Mirek", "Kalousková_keep", "shuffle_0"],
			["Kalůska, ňajvětšeho kreminálníka", "Kalůsku, ňajvětšemu kreminálníkovi", "Kalůskem, ňajvětšem kreminálníkem", "Kalůsek, ňajvětšek kreminálník", "Kalousková_keep", "shuffle_0"],
			["Zloděje zlodějského", "Zloději zlodějskému", "Zlodějem zlodějským", "Zloděj zlodějský", "Kalousková_keep", "shuffle_0"],
			["Ťoho ožraly", "Ťomu ožralovi", "Tím ožralou", "Těn ožrala", "Kalousková_keep", "shuffle_0"],
			["Padákového zabijáka", "Padákovému zabijáku", "Padákovým zabijákem", "Padákový zabiják", "Kalousková_keep", "shuffle_0"],
			["Viníka vašich posraných životů", "Viníku vašich posraných životů", "Viníkem vašich posraných životů", "Viník vašich posraných životů", "Kalousková_keep", "shuffle_0"]
		]
	}
]

chrome.storage.sync.get(null, storage => {
	const noTooltips = storage.mrtkiBlock_noTooltips;
	const ignoredWords = storage.mrtkiBlock_ignoredWords ?? [];
	if (storage.mrtkiBlock_skipThisCycle) {
		chrome.storage.sync.set({
		  mrtkiBlock_skipThisCycle: false,
		});
	} else if (!storage.mrtkiBlock_bannedWebs || !storage.mrtkiBlock_bannedWebs.includes(window.location.hostname) ) {
		if (!storage.mrtkiBlock_noFullVersion) {
			let timer;
			let observer = new MutationObserver( (mutations) => {
				if (timer) clearTimeout(timer);
				timer = setTimeout(() => {
					execute(noTooltips, ignoredWords);
				}, 1000);
			});

			observer.observe( document.documentElement || document.body , {subtree:true,characterData:false, childList: true} );
		}
		
		execute(noTooltips, ignoredWords);
		
		

		if (window.location.href.includes('novinky.cz') || window.location.href.includes('seznamzpravy')) {
			setTimeout(() => execute(noTooltips, ignoredWords), 3000)
		} else
			window.onload = function(){ 
    		execute(noTooltips, ignoredWords);
		}
	}
});

function traverseNodes(node, depth) {
	if (!!node && !!node.parentElement && node.parentElement.getAttribute('contenteditable') === 'true') {
		return NodeFilter.FILTER_REJECT;
	}
	if (depth === 0 || !node || !node.parentElement)
		return NodeFilter.FILTER_ACCEPT;
	
	return traverseNodes(node.parentElement, depth - 1);
}

myfilter=function(node){
	return traverseNodes(node, 5);
}


function execute(noTooltips, ignoredWords) {
	const html = document.querySelector('html');

	const walker = document.createTreeWalker(html, NodeFilter.SHOW_TEXT, myfilter);
	var node;
	node = walker.nextNode();
	while (!!node) {
		var change = false;
		let nextNode = walker.nextNode();
		const originalNodeText = node.nodeValue.repeat(1);
		if (!!node.nodeValue && node.nodeValue.trim() !== '') {
			var nodeValue = node.nodeValue.replace(/\u00A0/, ' ');
			for (i=0; i<dataSource.length;i++) {
				var IgnordWordFound = false;
				const regex = new RegExp(dataSource[i].match,"mi");
				var groups = null;
				
				var stop = false;				
				
				while ((groups = regex.exec(nodeValue)) != null && !stop) {

					ignoredWords.forEach(ignoredWord => {
						if (groups[0].includes(ignoredWord)) {
							stop = true;
						}
					})

					if (stop == true) {
						break;
					}

					const index = groups.slice(1).findIndex(item => !!item);
					const replacement = dataSource[i].replacements[Math.floor(Math.random() * dataSource[i].replacements.length)];				
					const onlyOn = replacement[index].includes('onlyon') ? replacement[index].split(':')[1] : null;
					if (!replacement || !replacement[index] || (!!onlyOn && !window.location.href.includes(onlyOn))) {
						stop = true;
						continue;
					}
					if (replacement[index].includes("shuffle")) {
						var shuffle_index = parseInt(replacement[index].split('_')[1])
						nodeValue = shuffle(nodeValue, groups.index, !!onlyOn ? replacement[shuffle_index].split('_')[0] : replacement[shuffle_index]);
						change = true;
					} else {					
						if (replacement[index].includes('keep')) {
							nodeValue = nodeValue.replace(regex, replacement[index].split('_')[0]);
							change = true;
							stop = true;
						} else {
							nodeValue = nodeValue.replace(regex, !!onlyOn ? replacement[index].split('_')[0] : replacement[index]);
							change = true;
						}						
					}				
				}
			}

			if (change) {
				if (!noTooltips)
					node.parentNode.setAttribute("title", originalNodeText)
				node.nodeValue = nodeValue;	
			}
		} 
		node = nextNode;
	}
}	

function shuffle(input, index, replacement) {
	var isFirstWord = index === 0;
	var split = input.split('');
	while (split[index] && split[index].trim() !== '') {
		split.splice(index, 1)
	}
	split.splice(index, 1)
	var nextWordPresent = false;
	while (split[index] && split[index].match(/[a-zA-ZáčďéěíňóřšťůúýžÁČĎÉĚÍŇÓŘŠŤŮÚÝŽ0-9]|\(|\)/i)) {
		index += 1;
		nextWordPresent = true;
	}
		
	if (nextWordPresent) {
		split.splice(index, 0, ...(' ' + replacement).split(''));
	} 
	const result = split.join('');
	if (isFirstWord) {
		return result.charAt(0).toUpperCase() + result.slice(1);
	} else {
		return result;
	}
}
