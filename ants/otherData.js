// COMMON NAMES
antData.commonNames = {
"Acanthomyops": "citronella ant",
"Acromyrmex": "leaf-cutter ant",
"Anoplolepis gracilipes": "yellow crazy ant",
"Anoplolepis": "pugnacious ant",
"Atta cephalotes": "sauba ant",
"Atta texana": "Texas leafcutting ant",
"Atta": "leaf-cutter ant",
"Brachyponera chinensis": "Asian needle ant",
"Brachyponera": "needle ant",
"Camponotus chromaiodes": "red carpenter ant",
"Camponotus consobrinus": "banded sugar ant",
"Camponotus floridanus": "Glorida carpenter ant",
"Camponotus herculeanus": "Hercules ant",
"Camponotus pennsylvanicus": "black carpenter ant",
"Camponotus variegatus": "Hawaiian carpenter ant",
"Camponotus": "carpenter ant",
"Carebara diversa": "East Indian harvesting ant",
"Carebara": "marauder ant",
"Cephalotes borgmeieri": "gliding ant",
"Cephalotes": "turtle ant",
"Cephalotini": "turtle ant",
"Crematogaster": "acrobat ant",
"Dorylinae": "army ant",
"Dorylus": "driver ant",
"Dorymyrmex insanus": "pyramid ant",
"Dorymyrmex": "cone ant",
"Eciton burchellii": "Eciton army ant",
"Ectatomma tuberculatum": "kelep",
"Forelius pruinosus": "high noon ant",
"Formica exsectoides": "Allegheny mound ant",
"Formica fuliginosa": "jet ant",
"Formica fusca": "silky ant",
"Formica obscuripes": "Western thatching ant",
"Formica polyctena": "European red wood ant",
"Formica pratensis": "European red wood ant",
"Formica rufa": "horse ant",
"Formica sanguinea": "warrior ant",
"Formica": "wood ant",
"Formicidae": "ant",
"Formicinae": "formicine ant",
"Haidomyrmecinae": "hell ant",
"Iridomyrmex purpureus": "meat ant",
"Iridomyrmex": "rainbow ant",
"Lasius claviger": "smaller yellow ant",
"Lasius flavus": "turf ant",
"Lasius interjectus": "larger yellow ant",
"Lasius niger": "black garden ant",
"Lasius": "moisture ant",
"Lepisiota capensis": "small black sugar ant",
"Leptanillinae": "army ant",
"Linepithema humile": "Argentine ant",
"Monomorium minimum": "little black ant",
"Monomorium pharaonis": "pharaoh ant",
"Mutillidae": "velvet ant",
"Myrmecia gulosa": "red bull ant",
"Myrmecia pilosula": "jack jumper ant",
"Myrmecia": "bull ant",
"Myrmecocystus": "honeypot ant",
"Myrmecocystus mexicanus": "honeypot ant",
"Myrmelachista schumanni": "lemon ant",
"Myrmica": "red ant",
"Nothomyrmecia": "dinosaur ant",
"Nylanderia fulva": "tawny crazy ant",
"Ochetellus glaber": "black household ant",
"Odontomachus": "trap-jaw ant",
"Oecophylla smaragdina": "green tree ant",
"Oecophylla": "weaver ant",
"Ooceraea biroi": "clonal raider ant",
"Paraponera clavata": "bullet ant",
"Paratrechina longicornis": "crazy ant",
"Pheidole megacephala": "African big-headed ant",
"Pheidole": "big-headed ant",
"Pogonomyrmex badius": "Florida harvester ant",
"Pogonomyrmex barbatus": "red harvester ant",
"Pogonomyrmex californicus": "California harvester ant",
"Pogonomyrmex maricopa": "Maricopa harvester ant",
"Pogonomyrmex occidentalis": "Western harvester ant",
"Pogonomyrmex rugosus": "rough harvester ant",
"Pogonomyrmex": "harvester ant",
"Ponerinae": "ponerine ant",
"Pseudomyrmex gracilis": "slender twig ant",
"Pseudoponera stigma": "pan-tropical panther ant",
"Pseudoponera": "panther ant",
"Solenopsis geminata": "tropical fire ant",
"Solenopsis invicta": "red imported fire ant",
"Solenopsis molesta": "thief ant",
"Solenopsis molesta": "thief ant",
"Solenopsis richteri": "black imported fire ant",
"Solenopsis xyloni": "Southern fire ant",
"Solenopsis": "fire ant",
"Tapinoma melanocephalum": "ghost ant",
"Tapinoma sessile": "odorous house ant",
"Temnothorax albipennis": "rock ant",
"Tetramorium immigrans": "pavement ant",
"Tetramorium": "pavement ant",
"Wasmannia auropunctata": "little fire ant",
"Zigrasimeciinae": "iron-maiden ant",
"Monomorium floricola": "flower ant",
"Cephalotes atratus": "kaka-sikikoko",
"Atta insularis": "bibijagua",
"Atta mexicana": "chicatana",
}

// LISTS
// PREDATORS (WEIGHTED)
antData.predators = ["ant","caterpillar","spider","fly","beetle","worm","bird","snail","slug","bee","wasp","fish","lizard","snake","frog","toad","mantis","anteater","antlion","assassin bug"];
antData.diseases = ["zombie-ant fungus","strepsiptera","nematode","cordyceps","ophiocordyceps"]

// ACTIONS
antData.workerActions = [
"eating",
"drinking",
"following pheromone trail",
"battling {{wc|"+antData.predators.join("|")+"}}",
"taking a break",
"swimming",
"climbing {{c|wall|leg|pant leg|furniture|rock|hill|tree|blade of grass|fence|foot|shoe|flower stem}}",
"staying still",
"escaping ant trap",
"investigating",
"performing trophallaxis",
"caring for aphids",
"caring for larvae",
"cultivating fungus",
"harvesting nectar",
"communicating",
"breaking down food",
"death spiraling",
"carrying {{c|carcass|crumb|leaf|captive|sand}}",
"alerting the colony",
"exploring the unknown",
"constructing hill",
"digging",
"dying",
"bridge chaining",
"rafting",
"foraging",
"storing food",
"running",
"tandem running",
"exploring someone's pants",
];
antData.droneActions = [
"eating",
"drinking",
"following pheromone trail",
"sitting around",
"walking aimlessly",
"mating",
"communicating",
"breaking down food",
"staying still",
"dying",
"running",
];
antData.queenActions = [
"eating",
"drinking",
"taking a break",
"laying eggs",
"mating",
"basking",
"commanding",
"communicating",
"breaking down food",
"staying still",
"dying",
];
antData.larvaActions = [
"being fed",
"squirming",
];

// DEATHS (WEIGHTED)
antData.deaths = [
"old age",
"starvation",
"thirst",
"human shoe",
"poisoning",
"sticky trap",
"foreign colony ant",
"enemy colony ant",
"food dispute",
"bird",
"frog",
"toad",
"flooding",
"extreme temperature",
"failed attack on human",
"fly swatter",
"bug spray",
"rock",
"blunt force trauma",
"falling projectile",
"cave-in",
"car tire",
"unknown causes",
"assumption after disappearance",
"fungal infection",
"parasitic infection",
"cordyceps infection",
"banishment",
"accidentally getting sat on",
"getting pet a little too hard",
"kid having a bad day",
"magnifying glass",
"arson attack",
"lawnmower",
"vivisection",
"decapitation",
"dissection",
"pressure washer",
"drowning in sewer",
"drowning in water bottle",
"cat",
"dog",
"bee sting",
"snake",
"worm",
"storm",
"stray {{c|baseball|tennis ball|soccer ball|basketball}}",
"quicksand",
"venus flytrap",
"pitcher plant",
"burial in cement",
"suicide",
"sacrifice",
"asphyxiation",
"strangulation",
"constipation",
"cannibalism",
"domestic violence dispute",
"human consumption",
"drowning in honey",
"forced music listening",
"blender",
"falling on spike",
"gunfire",
"horse hoof",
"snowstorm",
"falling icicle",
"live electrical wire",
"morphine overdose",
"death spiral",
"amber fossilization",
"acid",
"resin casting",
"molten aluminum casting",
"bomb detonation",
"implosion",
"landslide",
"tornado",
"wildfire",
"house fire",
"unethical psychological experiment",
"witch spell sacrifice",
"hydraulic press",
"guillotine",
"electric chair",
"lethal injection",
"The Rack",
"Death Maze",
"crucifixion",
"lightning strike",
"nuclear radiation",
"demon core",
"successful rocket launch",
"failed rocket launch",
];