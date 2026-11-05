/* Gogledd course content: North Wales spoken Welsh.
   Card format: [english, welsh, sound-it-out, note?]. Card ids are unitId_n, so only ever ADD
   cards to the end of a unit, or saved progress will point at the wrong phrase. */

export const LEVELS = [
  { id: "l1", title: "Dechrau", en: "Getting started", units: ["u1", "u2", "u3", "u9", "u10", "u11"] },
  { id: "l2", title: "Bob dydd", en: "Everyday Welsh", units: ["u12", "u13", "u14", "u15", "u16", "u4", "u6", "u5", "u17", "u7"] },
  { id: "l3", title: "Allan", en: "Out and about", units: ["u18", "u19", "u20", "u21", "u22"] },
  { id: "l4", title: "Ddoe a fory", en: "Past and future", units: ["u8", "u23", "u24", "u25"] }
];

const RAW = [
 { id: "u1", title: "Cyfarch", en: "Greetings", cards: [
  ["Good morning", "Bore da", "BOR-eh DAH"],
  ["Good afternoon", "Pnawn da", "PNOWN DAH", "Short for prynhawn. Nobody says the full word in everyday speech."],
  ["How are you? (to a friend)", "Sut wyt ti?", "sɨt OOT tee", "The u in sut is the Northern sound ɨ (see Seiniau). You'll also hear Su'mae? for a quick hello."],
  ["How are you? (polite, or to more than one person)", "Sut dach chi?", "sɨt DAKH khee", "Dach chi is the Northern spoken form. The South says dych chi."],
  ["Very well, thanks", "Da iawn, diolch", "dah YOWN, DEE-olkh"],
  ["And you? (to a friend)", "A chdi?", "ah KHDEE", "Chdi is a very Northern way of saying 'you'. It marks you out as a Gog straight away."],
  ["Thank you very much", "Diolch yn fawr", "DEE-olkh un VOWR", "Mawr (big) becomes fawr after yn. This change is called soft mutation."],
  ["Bye for now", "Hwyl rŵan", "HOO-il ROO-an", "Rŵan (now) is the classic Northern word. The South says nawr."],
  ["See you later (to a friend)", "Wela i di wedyn", "WEL-ah ee dee WED-in"],
  ["Good night", "Nos da", "nohs DAH"],
  ["Hi! (casual)", "Su'mae?", "sɨ-MY", "A quick hello, used all over Wales. Iawn? (All right?) is another very Northern greeting."],
  ["Welcome", "Croeso", "KROY-so"],
  ["I'm sorry", "Mae'n ddrwg gen i", "mine DHROOG gen ee", "Literally 'it's bad with me'. Gen i is the Northern form."],
  ["Excuse me", "Esgusodwch fi", "es-gis-OD-ookh vee"],
  ["Please (formal)", "Os gwelwch yn dda", "os GWEL-ookh un DHAH", "In everyday speech most people just say plîs."]
 ]},
 { id: "u2", title: "Amdana i", en: "About me", cards: [
  ["My name is Az", "Az ydy fy enw i", "az UH-dee vuh EN-oo ee", "Also common: Az dw i (I'm Az)."],
  ["I'm from Caernarfon", "Dw i'n dod o Gaernarfon", "doo een DOHD oh gire-NAR-von", "After o (from), C softens to G. Swap in your own town."],
  ["I live in Bali", "Dw i'n byw yn Bali", "doo een BYOO un BAH-lee", "Welsh place names change after yn (yng Nghaernarfon). Foreign names are usually left alone."],
  ["I'm learning Welsh", "Dw i'n dysgu Cymraeg", "doo een DUS-gɨ kum-RAIG"],
  ["I'm vegan", "Dw i'n figan", "doo een VEE-gan"],
  ["I work with animals", "Dw i'n gweithio efo anifeiliaid", "doo een GWAITH-yo EH-vo an-ee-VAIL-yaid", "Efo (with) is Northern. The South says gyda."],
  ["I don't speak much Welsh yet", "Dw i ddim yn siarad llawer o Gymraeg eto", "doo ee DHIM un SHAR-ad HLAU-er oh gum-RAIG EH-to", "In fast speech: Dw i'm yn siarad… Cymraeg softens to Gymraeg after o."],
  ["Can you speak more slowly, please?", "Fedrwch chi siarad yn arafach, plîs?", "VED-rookh khee SHAR-ad un ar-AV-akh, pleess", "Medru (to be able) is the Northern verb. The South prefers gallu."],
  ["I've got two dogs", "Mae gen i ddau gi", "my gen ee DHYE GEE", "Dau softens to ddau after gen i, and ci softens to gi after dau. The noun stays singular after a number."],
  ["I like walking", "Dw i'n licio cerdded", "doo een LIK-yo KER-dhed", "Licio is the everyday Northern word for like. Hoffi is used everywhere too."],
  ["I live on a farm", "Dw i'n byw ar fferm", "doo een BYOO ar FERM"],
  ["I run a charity", "Dw i'n rhedeg elusen", "doo een HRED-eg el-ISS-en"]
 ]},
 { id: "u3", title: "Geiriau'r Gogledd", en: "Northern essentials", cards: [
  ["I want a cuppa", "Dw i isio paned", "doo ee ISH-o PAN-ed", "No 'n after Dw i with isio. Paned is the everyday word for a cup of tea or coffee."],
  ["Do you want a cuppa? (polite)", "Dach chi isio paned?", "DAKH khee ISH-o PAN-ed"],
  ["I understand", "Dw i'n dallt", "doo een DAHLT", "Dallt is Northern for deall."],
  ["I don't understand", "Dw i ddim yn dallt", "doo ee DHIM un DAHLT", "Often squashed to Dw i'm yn dallt."],
  ["I have a cat", "Mae gen i gath", "my GEN ee GAHTH", "Mae gen i (I have) is Northern; the South says mae gyda fi. Cath softens to gath."],
  ["Have you got a dog? (to a friend)", "Oes gen ti gi?", "OYS gen tee GEE", "Answer Oes (yes) or Nac oes (no). Ci softens to gi."],
  ["Where's the shop?", "Lle mae'r siop?", "HLEH mire SHOP", "Lle (where) is the everyday Northern word. Ble is used more in the South."],
  ["What are you doing now?", "Be' ti'n neud rŵan?", "beh teen NAYD ROO-an", "Be' is short for beth, neud for gwneud."],
  ["All right? (greeting)", "Iawn?", "YOWN", "A very Northern hello. Answer Iawn, diolch."],
  ["We'll see", "Gawn ni weld", "gown nee WELD"],
  ["Close the door, please", "Caewch y drws, plîs", "KYE-ookh uh DROOS, pleess"],
  ["A little bit", "Dipyn bach", "DIP-in BAHKH"]
 ]},
 { id: "u4", title: "Bwyd a diod", en: "Food and drink", cards: [
  ["I'm hungry", "Mae gen i isio bwyd", "my gen ee ISH-o BOO-id", "A Northern idiom: literally 'I have a want of food'."],
  ["Can I have a coffee with oat milk, please?", "Ga i goffi efo llefrith ceirch, plîs?", "gah ee GOF-ee EH-vo HLEV-rith KAIRKH, pleess", "Llefrith is Northern for milk; the South says llaeth. Ceirch means oats."],
  ["I don't eat meat", "Dw i ddim yn bwyta cig", "doo ee DHIM un BOO-ee-ta KEEG"],
  ["Is there meat in this?", "Oes 'na gig yn hwn?", "OYS na GEEG un HOON", "Cig softens to gig after oes 'na."],
  ["Is there milk in this?", "Oes 'na lefrith yn hwn?", "OYS na LEV-rith un HOON", "Llefrith softens to lefrith: LL becomes a plain L."],
  ["Delicious!", "Blasus!", "BLAS-is", "The u here is the Northern ɨ sound, close to 'is'."],
  ["I'm tired", "Dw i wedi blino", "doo ee WED-ee BLEE-no"],
  ["Water, please", "Dŵr, plîs", "DOOR, pleess"],
  ["Is it vegan?", "Ydy o'n figan?", "UH-dee ohn VEE-gan"],
  ["I'm thirsty", "Mae gen i syched", "my gen ee SUH-khed"],
  ["Lunch is ready", "Mae cinio'n barod", "my KIN-yon BAR-od", "Parod softens to barod after yn ('n)."],
  ["The bill, please", "Y bil, plîs", "uh BIL, pleess"]
 ]},
 { id: "u5", title: "Anifeiliaid", en: "Animals", cards: [
  ["The pigs are happy", "Mae'r moch yn hapus", "mire MOKH un HAP-is"],
  ["The cow is in the field", "Mae'r fuwch yn y cae", "mire VIOOKH un uh KYE", "Buwch is feminine, so it softens to fuwch after 'r (the)."],
  ["There are six sheep in the field", "Mae 'na chwe dafad yn y cae", "my na KHWEH DAV-ad un uh KYE", "Chwech becomes chwe before a noun, and the noun stays singular after a number."],
  ["The goat is naughty", "Mae'r afr yn ddrwg", "mire AH-vr un DHROOG", "Gafr is feminine: the G drops after 'r. Drwg softens to ddrwg after yn."],
  ["The dog is sleeping", "Mae'r ci'n cysgu", "mire KEEN KUS-gɨ"],
  ["The hens are eating", "Mae'r ieir yn bwyta", "mire YAIR un BOO-ee-ta", "Iâr is one hen, ieir is hens."],
  ["I have an animal sanctuary in Bali", "Mae gen i noddfa anifeiliaid yn Bali", "my gen ee NODH-va an-ee-VAIL-yaid un BAH-lee"],
  ["Be kind to animals", "Byddwch yn garedig wrth anifeiliaid", "BUDH-ookh un gar-ED-ig OORTH an-ee-VAIL-yaid", "Caredig wrth means kind to. Caredig softens to garedig after yn."],
  ["horse", "ceffyl", "KEF-il"],
  ["pig", "mochyn", "MOKH-in", "One pig is mochyn; pigs are moch."],
  ["rabbit", "cwningen", "koo-NING-en"],
  ["duck", "hwyaden", "hoo-ee-AD-en"],
  ["The horse is old", "Mae'r ceffyl yn hen", "mire KEF-il un HEN"],
  ["The animals are safe here", "Mae'r anifeiliaid yn ddiogel yma", "mire an-ee-VAIL-yaid un dhee-OG-el UM-a", "Diogel (safe) softens to ddiogel after yn."]
 ]},
 { id: "u6", title: "Y tywydd", en: "The weather", cards: [
  ["What's the weather like?", "Sut mae'r tywydd?", "sɨt mire TUH-widh"],
  ["It's raining", "Mae hi'n bwrw glaw", "my heen BOO-roo GLAU"],
  ["It's lovely today", "Mae hi'n braf heddiw", "my heen BRAHV HEDH-ee-oo"],
  ["It's cold", "Mae hi'n oer", "my heen OYR"],
  ["It's hot", "Mae hi'n boeth", "my heen BOYTH", "Poeth softens to boeth after yn."],
  ["It's windy", "Mae hi'n wyntog", "my heen WUN-tog", "Gwyntog loses its G after yn."],
  ["It was cold yesterday", "Roedd hi'n oer ddoe", "roydh heen OYR DHOY"],
  ["It's snowing", "Mae hi'n bwrw eira", "my heen BOO-roo AY-ra"],
  ["It's foggy", "Mae hi'n niwlog", "my heen NEE-oo-log"],
  ["It's going to rain", "Mae hi'n mynd i fwrw glaw", "my heen MIND ee VOO-roo GLAU", "Bwrw softens to fwrw after i (to)."]
 ]},
 { id: "u7", title: "Holi", en: "Asking questions", cards: [
  ["Where do you live? (to a friend)", "Lle wyt ti'n byw?", "HLEH oot teen BYOO", "In quick speech: Lle ti'n byw?"],
  ["Do you speak Welsh? (polite)", "Dach chi'n siarad Cymraeg?", "DAKH kheen SHAR-ad kum-RAIG"],
  ["Yes (I do)", "Ydw", "UH-doo", "Welsh has no single word for yes. You answer with the verb. In the North you'll often hear Yndw."],
  ["No (I don't)", "Nac ydw", "NAK UH-doo", "Often shortened to Nac'dw."],
  ["What time is it?", "Faint o'r gloch ydy hi?", "VYNT oar GLOKH UH-dee hee"],
  ["How much is it?", "Faint ydy o?", "VYNT UH-dee oh", "O (it/him) is Northern. The South says e."],
  ["Who is that?", "Pwy ydy hwnna?", "POO-ee UH-dee HOON-a"],
  ["Why?", "Pam?", "PAM"],
  ["When?", "Pryd?", "PRɨD"],
  ["What's this?", "Be' ydy hwn?", "beh UH-dee HOON"],
  ["What's your name? (to a friend)", "Be' ydy dy enw di?", "beh UH-dee duh EN-oo dee"],
  ["Where are you from? (polite)", "O le dach chi'n dod?", "oh LEH DAKH kheen DOHD", "Lle softens to le after o."]
 ]},
 { id: "u8", title: "Ddoe", en: "Yesterday", cards: [
  ["What did you do yesterday?", "Be' wnest ti ddoe?", "beh WNEST tee DHOY"],
  ["I went to Bangor", "Es i i Fangor", "ES ee ee VANG-or", "Bangor softens to Fangor after i (to)."],
  ["I didn't go", "Es i ddim", "ES ee DHIM"],
  ["I had lunch", "Ges i ginio", "GES ee GIN-yo", "Cinio softens to ginio as the object of the verb."],
  ["I saw a fox", "Welais i lwynog", "WEL-ice ee LOO-ee-nog", "Said Weles i or Welis i in the North. Llwynog softens to lwynog."],
  ["Did you have a good time? (to a friend)", "Gest ti amser da?", "GEST tee AM-ser DAH"],
  ["It was great", "Roedd o'n wych", "roydh OHN WEEKH", "Gwych loses its G after yn ('n)."],
  ["I did the shopping", "Wnes i'r siopa", "WNES eer SHOP-a"],
  ["I worked yesterday", "Wnes i weithio ddoe", "WNES ee WAITH-yo DHOY", "Wnes i + a verb is an easy way to talk about the past. The verb softens: gweithio → weithio."],
  ["We went home", "Aethon ni adra", "AITH-on nee AD-ra", "Adra (home) is Northern. The South says adre."],
  ["She went to Caernarfon", "Aeth hi i Gaernarfon", "AITH hee ee gire-NAR-von"],
  ["He came yesterday", "Daeth o ddoe", "DAITH oh DHOY"],
  ["I didn't see him", "Welais i mohono fo", "WEL-ice ee mo-HON-o VO", "Mohono fo means 'not him'. Very Northern."]
 ]},
 { id: "u9", title: "Rhifau", en: "Numbers", cards: [
  ["one", "un", "EEN"],
  ["two", "dau", "DYE", "Dau is used with masculine nouns, dwy with feminine ones."],
  ["three", "tri", "TREE"],
  ["four", "pedwar", "PED-war"],
  ["five", "pump", "PɨMP"],
  ["six", "chwech", "KHWEKH"],
  ["seven", "saith", "SITE"],
  ["eight", "wyth", "OOITH"],
  ["nine", "naw", "NOW"],
  ["ten", "deg", "DEG"],
  ["twenty", "ugain", "Ɨ-gain"],
  ["two cats", "dwy gath", "DOO-ee GAHTH", "Cath is feminine, so it takes dwy, and softens to gath."],
  ["How many?", "Faint?", "VYNT"]
 ]},
 { id: "u10", title: "Dyddiau", en: "Days and times", cards: [
  ["Monday", "Dydd Llun", "dɨdh HLɨN"],
  ["Tuesday", "Dydd Mawrth", "dɨdh MOWRTH"],
  ["Wednesday", "Dydd Mercher", "dɨdh MER-kher"],
  ["Thursday", "Dydd Iau", "dɨdh YAI"],
  ["Friday", "Dydd Gwener", "dɨdh GWEN-er"],
  ["Saturday", "Dydd Sadwrn", "dɨdh SAD-oorn"],
  ["Sunday", "Dydd Sul", "dɨdh SɨL"],
  ["today", "heddiw", "HEDH-ee-oo"],
  ["tomorrow", "fory", "VOR-ee", "Short for yfory."],
  ["this week", "yr wythnos yma", "ur OOITH-nos UM-a"],
  ["next week", "wythnos nesa", "OOITH-nos NES-a"],
  ["at the weekend", "dros y penwythnos", "drohs uh pen-OOITH-nos"]
 ]},
 { id: "u11", title: "Lliwiau", en: "Colours", cards: [
  ["red", "coch", "KOHKH"],
  ["blue", "glas", "GLAHS"],
  ["green", "gwyrdd", "GOO-irdh"],
  ["yellow", "melyn", "MEL-ɨn"],
  ["black", "du", "DƗ"],
  ["white", "gwyn", "GWIN"],
  ["grey", "llwyd", "HLOO-id"],
  ["The car is red", "Mae'r car yn goch", "mire KAR un GOHKH", "Colours soften after yn: coch → goch."],
  ["a black dog", "ci du", "KEE DƗ", "Adjectives usually come after the noun."],
  ["a white cat", "cath wen", "KAHTH WEN", "After a feminine noun, gwyn becomes wen."]
 ]},
 { id: "u12", title: "Dw i'n…", en: "What people are doing", cards: [
  ["I'm working", "Dw i'n gweithio", "doo een GWAITH-yo"],
  ["Are you working? (to a friend)", "Wyt ti'n gweithio?", "OOT teen GWAITH-yo"],
  ["He's reading", "Mae o'n darllen", "my OHN DAR-hlen"],
  ["She's cooking", "Mae hi'n coginio", "my heen ko-GIN-yo"],
  ["We're walking", "Dan ni'n cerdded", "DAN neen KER-dhed", "Dan ni is the Northern form. The South says dyn ni."],
  ["You're learning (polite)", "Dach chi'n dysgu", "DAKH kheen DUS-gɨ"],
  ["They're playing", "Maen nhw'n chwarae", "mine noon KHWAR-a", "Chwarae is said chwara in the North."],
  ["The children are sleeping", "Mae'r plant yn cysgu", "mire PLANT un KUS-gɨ"],
  ["I'm going to town", "Dw i'n mynd i'r dre", "doo een MIND eer DREH"],
  ["I'm coming now", "Dw i'n dod rŵan", "doo een DOHD ROO-an"]
 ]},
 { id: "u13", title: "Dim", en: "Saying no", cards: [
  ["I'm not working today", "Dw i ddim yn gweithio heddiw", "doo ee DHIM un GWAITH-yo HEDH-ee-oo"],
  ["She's not here", "Dydy hi ddim yma", "DUH-dee hee DHIM UM-a", "You'll often hear Tydi hi ddim yma in the North."],
  ["He doesn't like coffee", "Dydy o ddim yn licio coffi", "DUH-dee oh DHIM un LIK-yo KOF-ee"],
  ["We're not going", "Dan ni ddim yn mynd", "DAN nee DHIM un MIND"],
  ["They don't eat meat", "Dydyn nhw ddim yn bwyta cig", "DUH-din noo DHIM un BOO-ee-ta KEEG"],
  ["I don't know (casual)", "Dwn i'm", "DOON eem", "Very common Northern short form of Dw i ddim yn gwybod."],
  ["It doesn't matter", "Dim ots", "dim OTS"],
  ["Nothing", "Dim byd", "dim BEED"]
 ]},
 { id: "u14", title: "Ydy?", en: "Yes and no questions", cards: [
  ["Are you tired? (to a friend)", "Wyt ti wedi blino?", "OOT tee WED-ee BLEE-no", "Answer Ydw (yes) or Nac ydw (no)."],
  ["Is he coming?", "Ydy o'n dod?", "UH-dee ohn DOHD", "Answer Ydy or Nac ydy."],
  ["Is she Welsh?", "Ydy hi'n Gymraes?", "UH-dee heen gum-RICE", "Cymraes (a Welsh woman) softens after yn. A Welsh man is Cymro."],
  ["Are they here?", "Ydyn nhw yma?", "UH-din noo UM-a", "Answer Ydyn or Nac ydyn."],
  ["Is there a bus?", "Oes 'na fws?", "OYS na VOOS", "Bws softens to fws after oes 'na."],
  ["Do you like tea? (polite)", "Dach chi'n licio te?", "DAKH kheen LIK-yo TEH"],
  ["Yes (he/she is)", "Ydy", "UH-dee"],
  ["No (they aren't)", "Nac ydyn", "NAK UH-din"],
  ["Was it good?", "Oedd o'n dda?", "OYDH ohn DHAH", "Answer Oedd (yes) or Nac oedd (no)."]
 ]},
 { id: "u15", title: "Licio", en: "Likes and dislikes", cards: [
  ["I like tea", "Dw i'n licio te", "doo een LIK-yo TEH"],
  ["I love animals", "Dw i wrth fy modd efo anifeiliaid", "doo ee oorth vuh MODH EH-vo an-ee-VAIL-yaid", "Wrth fy modd means 'in my element'. The usual way to say you love doing or having something."],
  ["I don't like the rain", "Dw i ddim yn licio'r glaw", "doo ee DHIM un LIK-yor GLAU"],
  ["What do you like? (to a friend)", "Be' ti'n licio?", "beh teen LIK-yo"],
  ["I prefer coffee", "Mae'n well gen i goffi", "mine WEHL gen ee GOF-ee"],
  ["I can't stand onions", "Fedra i ddim diodde nionod", "VED-ra ee DHIM dee-ODH-eh NEE-on-od", "Nionod (onions) is Northern. The South says winwns."],
  ["It's lovely", "Mae o'n hyfryd", "my OHN HUV-rid"],
  ["Brilliant!", "Gwych!", "GWEEKH"]
 ]},
 { id: "u16", title: "Teulu", en: "Family", cards: [
  ["my mum", "fy mam i", "vuh MAM ee"],
  ["my dad", "fy nhad i", "vuh NHAHD ee", "Fy causes nasal mutation: tad → nhad."],
  ["my brother", "fy mrawd i", "vuh MROWD ee", "Brawd → mrawd after fy."],
  ["my sister", "fy chwaer i", "vuh KHWAIR ee"],
  ["my partner", "fy mhartner i", "vuh MHART-ner ee", "Partner → mhartner after fy."],
  ["my friend", "fy ffrind i", "vuh FRIND ee"],
  ["my nan", "fy nain i", "vuh NINE ee", "Nain is Northern. The South says mam-gu."],
  ["my grandad", "fy nhaid i", "vuh NHIDE ee", "Taid is Northern (the South says tad-cu). Taid → nhaid after fy."],
  ["Have you got children? (polite)", "Oes gynnoch chi blant?", "OYS GUN-okh khee BLANT", "Plant softens to blant."],
  ["This is my mum", "Dyma fy mam i", "DUM-a vuh MAM ee"]
 ]},
 { id: "u17", title: "Adra", en: "At home", cards: [
  ["Come in!", "Dewch i mewn!", "DEOOKH ee MEOON"],
  ["Sit down (polite)", "Steddwch", "STEDH-ookh", "Northern short form of eisteddwch."],
  ["Make yourself at home", "Gwnewch eich hun yn gartrefol", "GNEOOKH ukh HEEN un gar-TREV-ol"],
  ["The kettle's on", "Mae'r tegell ymlaen", "mire TEG-ehl um-LINE"],
  ["in the kitchen", "yn y gegin", "un uh GEG-in", "Cegin is feminine, so it softens after y."],
  ["bedroom", "llofft", "HLOFT", "Northern. Llofft can mean the bedroom or simply upstairs."],
  ["Where's the toilet?", "Lle mae'r toiled?", "HLEH mire TOY-led"],
  ["I'm going to bed", "Dw i'n mynd i'r gwely", "doo een MIND eer GWEL-ee"],
  ["Turn the light off (polite)", "Diffoddwch y golau", "dif-ODH-ookh uh GOL-eye"]
 ]},
 { id: "u18", title: "Siopa", en: "Shopping", cards: [
  ["How much is this?", "Faint ydy hwn?", "VYNT UH-dee HOON"],
  ["Can I have this one, please?", "Ga i hwn, plîs?", "gah ee HOON, pleess"],
  ["Have you got a bag? (polite)", "Oes gynnoch chi fag?", "OYS GUN-okh khee VAG", "Bag softens to fag."],
  ["That's too expensive", "Mae hwnna'n rhy ddrud", "my HOON-an hree DHREED", "Drud softens to ddrud after rhy (too)."],
  ["It's cheap", "Mae o'n rhad", "my OHN HRAHD"],
  ["Can I pay by card?", "Ga i dalu efo cerdyn?", "gah ee DAL-ee EH-vo KER-din", "Talu softens to dalu after ga i."],
  ["Do you sell oat milk?", "Dach chi'n gwerthu llefrith ceirch?", "DAKH kheen GWER-thee HLEV-rith KAIRKH"],
  ["Just looking, thanks", "Jest edrych, diolch", "JEST ED-rikh, DEE-olkh"],
  ["That's all", "Dyna'r cwbl", "DUN-ar KOO-bool"]
 ]},
 { id: "u19", title: "Y ffordd", en: "Directions and travel", cards: [
  ["Where's the station?", "Lle mae'r orsaf?", "HLEH mire OR-sav", "Gorsaf is feminine: the G drops after 'r."],
  ["Turn left", "Trowch i'r chwith", "TROWKH eer KHWEETH"],
  ["Turn right", "Trowch i'r dde", "TROWKH eer DHEH"],
  ["Straight on", "Syth ymlaen", "SɨTH um-LINE"],
  ["It's near", "Mae o'n agos", "my OHN AG-os"],
  ["It's far", "Mae o'n bell", "my OHN BEHL", "Pell softens to bell after yn."],
  ["A ticket to Bangor, please", "Tocyn i Fangor, plîs", "TOK-in ee VANG-or, pleess"],
  ["When does the bus leave?", "Pryd mae'r bws yn gadael?", "PRɨD mire BOOS un GAD-ail"],
  ["I'm lost", "Dw i ar goll", "doo ee ar GOHL"],
  ["I'm going by train", "Dw i'n mynd ar y trên", "doo een MIND ar uh TRAIN"]
 ]},
 { id: "u20", title: "Gwaith", en: "Work", cards: [
  ["What's your job? (polite)", "Be' ydy'ch gwaith chi?", "beh UH-deekh GWAITH khee"],
  ["I work from home", "Dw i'n gweithio adra", "doo een GWAITH-yo AD-ra"],
  ["I'm busy", "Dw i'n brysur", "doo een BRUH-sɨr", "Prysur softens to brysur after yn."],
  ["I'm a volunteer", "Dw i'n wirfoddolwr", "doo een weer-vo-DHOL-oor", "Gwirfoddolwr loses its G after yn."],
  ["I've got a meeting", "Mae gen i gyfarfod", "my gen ee guh-VAR-vod"],
  ["Can you help me? (polite)", "Fedrwch chi fy helpu i?", "VED-rookh khee vuh HEL-pee ee"],
  ["Can I help?", "Ga i helpu?", "gah ee HEL-pee"],
  ["I'll send an email", "Mi yrra i e-bost", "mee UR-a ee EH-bost", "Gyrru (to send, to drive) is Northern. It softens to yrra after mi."],
  ["See you on Monday", "Wela i chi ddydd Llun", "WEL-a ee khee dhɨdh HLɨN", "Dydd softens to ddydd when it means 'on' a day."]
 ]},
 { id: "u21", title: "Teimlo", en: "Feelings", cards: [
  ["I'm happy", "Dw i'n hapus", "doo een HAP-is"],
  ["I'm sad", "Dw i'n drist", "doo een DREEST", "Trist softens to drist after yn."],
  ["I'm cold", "Dw i'n oer", "doo een OYR"],
  ["I've got a headache", "Mae gen i gur pen", "my gen ee GEER PEN", "Cur pen is the Northern way to say headache."],
  ["I'm feeling better", "Dw i'n teimlo'n well", "doo een TAIM-lon WEHL"],
  ["I'm worried", "Dw i'n poeni", "doo een POY-nee"],
  ["Don't worry (to a friend)", "Paid â phoeni", "PIDE ah FOY-nee", "After â, P changes to PH (an F sound)."],
  ["I'm looking forward to it", "Dw i'n edrych ymlaen", "doo een ED-rikh um-LINE"],
  ["What's wrong?", "Be' sy'n bod?", "beh seen BOHD"]
 ]},
 { id: "u22", title: "Hamdden", en: "Free time", cards: [
  ["I like reading", "Dw i'n licio darllen", "doo een LIK-yo DAR-hlen"],
  ["I like walking in the mountains", "Dw i'n licio cerdded yn y mynyddoedd", "doo een LIK-yo KER-dhed un uh mun-UDH-oydh"],
  ["Do you want to go for a walk? (to a friend)", "Wyt ti isio mynd am dro?", "OOT tee ISH-o MIND am DROH", "Tro softens to dro after am."],
  ["I'm going swimming", "Dw i'n mynd i nofio", "doo een MIND ee NOV-yo"],
  ["I'm watching the telly", "Dw i'n gwylio'r teledu", "doo een GWIL-yor tel-ED-ee"],
  ["I listen to Radio Cymru", "Dw i'n gwrando ar Radio Cymru", "doo een GROOAN-do ar RAD-yo KUM-rɨ"],
  ["What are you doing at the weekend? (to a friend)", "Be' ti'n neud dros y penwythnos?", "beh teen NAYD drohs uh pen-OOITH-nos"],
  ["Not much", "Dim llawer", "dim HLAU-er"],
  ["Off we go!", "Ffwrdd â ni!", "FOORDH ah nee"]
 ]},
 { id: "u23", title: "Ro'n i", en: "I was, I used to", cards: [
  ["I was tired", "Ro'n i wedi blino", "RON ee WED-ee BLEE-no", "Ro'n i is the spoken form of roeddwn i."],
  ["It was lovely", "Roedd o'n hyfryd", "roydh OHN HUV-rid"],
  ["I was living in Wales", "Ro'n i'n byw yng Nghymru", "RON een BYOO ung NGHUM-rɨ", "Yn becomes yng before Cymru, and Cymru becomes Nghymru."],
  ["Were you there? (to a friend)", "Oeddat ti yna?", "OY-dhat tee UN-a", "Oeddat is the Northern spoken form of oeddet."],
  ["There were lots of people", "Roedd 'na lot o bobl", "roydh na LOT oh BOB-ol"],
  ["I used to have a horse", "Roedd gen i geffyl", "roydh gen ee GEF-il", "Ceffyl softens to geffyl after gen i."],
  ["I didn't know", "Do'n i ddim yn gwybod", "DON ee DHIM un GOO-ee-bod", "Often Do'n i'm yn gwybod."]
 ]},
 { id: "u24", title: "Fory", en: "The future", cards: [
  ["I'm going to learn Welsh", "Dw i'n mynd i ddysgu Cymraeg", "doo een MIND ee DHUS-gɨ kum-RAIG", "Dysgu softens to ddysgu after i."],
  ["See you tomorrow (to a friend)", "Wela i di fory", "WEL-a ee dee VOR-ee"],
  ["I'll do it", "Mi wna i o", "mee WNA ee OH", "Mi is a little word Northerners put before many verbs."],
  ["Everything will be fine", "Mi fydd popeth yn iawn", "mee VEEDH POP-eth un YOWN"],
  ["I'll be there at six", "Mi fydda i yna am chwech", "mee VUDH-a ee UN-a am KHWEKH"],
  ["Will you be there? (to a friend)", "Fyddi di yna?", "VUDH-ee dee UN-a"],
  ["Next year I'm going to Wales", "Flwyddyn nesa, dw i'n mynd i Gymru", "VLOOEE-dhin NES-a, doo een MIND ee GUM-rɨ", "Blwyddyn softens to flwyddyn at the start, and Cymru to Gymru after i."]
 ]},
 { id: "u25", title: "Medru a rhaid", en: "Can, must, would like", cards: [
  ["I can speak a bit of Welsh", "Dw i'n medru siarad dipyn bach o Gymraeg", "doo een MED-ree SHAR-ad DIP-in BAHKH oh gum-RAIG"],
  ["I can't come", "Fedra i ddim dod", "VED-ra ee DHIM DOHD"],
  ["Can you come? (to a friend)", "Fedri di ddod?", "VED-ree dee DHOHD", "Dod softens to ddod after fedri di."],
  ["I have to go", "Rhaid i mi fynd", "HRIDE ee mee VIND", "Mynd softens to fynd after rhaid i mi."],
  ["You must try it (to a friend)", "Rhaid i ti drio fo", "HRIDE ee tee DREE-o VO"],
  ["I'd like to go", "Baswn i'n licio mynd", "BAS-oon een LIK-yo MIND", "Baswn i is the Northern 'I would'. The South says byddwn i."],
  ["Would you like a cuppa? (polite)", "Fasech chi'n licio paned?", "VAS-ekh kheen LIK-yo PAN-ed"],
  ["I should go to bed", "Dylwn i fynd i'r gwely", "DUL-oon ee VIND eer GWEL-ee"],
  ["Can I come in?", "Ga i ddod i mewn?", "gah ee DHOHD ee MEOON"]
 ]}
];

export const UNITS = RAW.map(u => ({
  id: u.id, title: u.title, en: u.en,
  cards: u.cards.map(([en, cy, say, note], i) => ({ id: u.id + "_" + (i + 1), en, cy, say, note }))
}));

export const SOUNDS = [
 { letters: "ll", sp: "written HL in the guides", body: "Put your tongue where you'd say an English L, keep it there, and blow air out past the sides of your tongue. No voice, just a hiss. It is one sound, not 'thl' or 'cl'.", ex: [["llaw","hand"],["Llanberis",""],["llefrith","milk"],["dallt","understand"]] },
 { letters: "ch", sp: "KH", body: "The sound in Scottish loch or German Bach. Friction at the back of the mouth. Never 'tch' as in church.", ex: [["chwech","six"],["diolch","thanks"],["coch","red"],["chdi","you"]] },
 { letters: "dd", sp: "DH", body: "The voiced 'th' in this and that. Plain th in Welsh is always the voiceless sound in thin.", ex: [["heddiw","today"],["ddoe","yesterday"],["Gogledd","north"],["noddfa","sanctuary"]] },
 { letters: "u and y", sp: "ɨ", body: "The Northern hallmark. Say 'ee', then pull your tongue back towards the middle of your mouth without rounding your lips. The South says a plain 'ee'. Y in the last syllable of a word gets this sound too; elsewhere y is usually 'uh'.", ex: [["sut","how"],["tŷ","house"],["dysgu","learn"],["Cymru","Wales"]] },
 { letters: "rh", sp: "HR", body: "A rolled r with a puff of breath at the start.", ex: [["rhaid","must"],["rhedeg","run"],["rhif","number"]] },
 { letters: "f and ff", sp: "V / F", body: "A single f is always a v sound. Ff is the English f.", ex: [["fawr","big"],["ffermwr","farmer"],["fuwch","cow"]] },
 { letters: "w", sp: "OO", body: "W is often a vowel, like the oo in moon. Before another vowel it's a w as in English.", ex: [["cwm","valley"],["bwrw","to rain"],["wedyn","later"]] },
 { letters: "si", sp: "SH", body: "Si before a vowel sounds like English sh.", ex: [["siop","shop"],["siarad","speak"],["isio","want"]] },
 { letters: "Mutations", sp: "the first letter changes", body: "Welsh words change their first letter after certain words. Soft mutation is the common one: c→g, p→b, t→d, g drops, b→f, d→dd, m→f, ll→l, rh→r. You've seen it in diolch yn fawr and dwy gath. Don't try to learn the rules first; the phrases teach them.", ex: [["cath → gath",""],["mawr → fawr",""],["tad → nhad",""]] }
];
