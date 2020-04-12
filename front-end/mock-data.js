let mock = [{
  id:1,
  operator: "Mute",
  name: "Mark R. Chandar",
  image: 'mute.webp',
  role: "Defender",
  gadget: "SIGNAL DISRUPTOR",
  Bio:"“People think my codename is because I don’t like to talk. Maybe I just don’t like you.”An exceptional and well-rounded student, Chandar was one of the youngest accepted into the University of Cambridge. He majored in electronics and computer engineering, completing an internship at a prestigious tech company where he contributed to the design and function of security system prototypes. His ingenuity caught the attention of Britain’s national security office, the Government Communications Headquarters (GCHQ). Having demonstrated acuity in code breaking, Chandar became an intelligence officer within the signals intelligence (SIGINT) unit. He continues to contribute to the applied technical research team and has recently expanded his field of study to include learning Korean."
  },
  {
    id:2,
    operator: "Sledge",
    name: "Seamus Cowden",
    image: 'sledge.webp',
    role: "Attacker",
    gadget: "TACTICAL BREACHING HAMMER",
    Bio:"“Coming through!” Born in the far north of Scotland, Cowden’s military father and nurse mother moved to Inverness with him and his three siblings when he was five. His athleticism elevated him to the position of Captain of the 1998 Scotland Under-20s Rugby Union Team. Following a long family tradition of military service, Cowden joined the 3rd UK Mechanised Division of the British Army. His drive and physique suit the division’s historical nickname of “Iron Sides.” Cowden’s first assignment was in the Armoured Division where he studied engineering and specialized in upgrading the infantry combat vehicles. From there, he developed various breaching tactics. He was then recruited into the SAS, where he holds multiple records in speed and strength. An expert in mechanical, ballistic, explosive and thermal breaching strategies, Cowden is the operator to choose for quick and relatively silent destruction."
  },
  {
    id:3,
    operator: "Smoke",
    name: "James Porter",
    image: 'smoke.webp',
    role: "Defender",
    gadget: "REMOTE GAS GRENADE",
    Bio:"“Sure, I care about the environment. Immediately around me, anyway.” Though Porter wasn’t an exceptional student, aptitude tests revealed his propensity for sciences. Encouraged by faculty and his parents, he was able to follow a more unorthodox manner of education with tutors, home-schooling, and field science. He flourished in this break from formal classroom studies and quickly developed his skills in chemistry, biology, and math. Uninterested in pursuing a formal university education, Porter forged a fake ID and enlisted in the British Army. Though the rigidity of army rules wasn’t always a good fit, it was offset by the diverse range of training and experiences army life gave him. While he has been reprimanded for breaking rules, his superiors quickly recognized both his innovation and strategic perspective. He was then encouraged to join the SAS. Porter prefers to acquire knowledge and skills, such as language and music, in his own way and does not excel in a formal training capacity."
  },
  {
    id:4,
    operator: "Thatcher",
    name: "Mike Baker",
    image: 'thatcher.webp',
    role: "Attacker",
    gadget: "EMP GRENADE",
    Bio:"“What you can feel, what you can touch – those are the things that are real. Everything else is just a distraction.” Baker comes from a long line of dockworkers and soldiers. At the age of eighteen he enlisted for active military duty despite family pressure to join the family trade as a stevedore. Immediately thrown into politically-charged conflicts, Baker’s performance was exemplary. Further training and another conflict gave him a Distinguished Flying Cross and Conspicuous Gallantry Cross. His keen sense of observation and decisive manner, combined with his close-quarter combat techniques, made him invaluable on VIP protection detail. With extensive field experience and proficiency in SAS tactics, Baker is a critical asset to any Rainbow operation. He has honed his expertise with protective measures and electronic counter-measures and frequently works with engineers to advance the equipment. As a Warrant Officer Class 1 (Regimental Sergeant Major) Baker serves as a respected and effective mentor to new recruits. Baker maintains his agility training, continuing abseiling, and has broken numerous mountain climbing records."
  },
  {
    id:5,
    operator: "Ash",
    name: "Eliza Cohen",
    image: 'ash.webp',
    role: "Attacker",
    gadget: "BREACHING ROUNDS",
    Bio:"“You can never truly understand a conflict until you’ve been on both sides.”Cohen’s mother is a renowned Jewish political activist and professor while her Palestinian father is a professor of Middle Eastern Studies. Cohen was raised in Israel, excelling in Mathematics and Physics. She earned a degree in Structural Engineering at Tel Aviv University and spent a few semesters at Boston University. Cohen then enlisted in the Israeli Defense Forces (IDF). After undergoing the rigorous twenty-two month training for the elite Air Force unit, Shaldag, she served five years. Skilled in ground and airborne operations, all-weather and all-terrain navigation and reconnaissance, she was invaluable in Operation Orchard. Moving to the US to work with FBI SWAT, Cohen applied her degree in Engineering and gift in structural resistance to develop advanced demolition tactics and equipment. Along with Hebrew, Cohen is fluent in Arabic, English, French and Greek."
  },
  {
    id:6,
    operator: "Castle",
    name: "Miles Campbell",
    image: 'castle.webp',
    role: "Defender",
    gadget: "ARMOR PANEL",
    Bio:"“Listen up, people: No one dies today. Any questions’ll just have to wait.” Miles Campbell graduated from Cal State LA with a bachelor’s degree in Criminal Justice and promptly joined the LAPD. Recruited into LAPD SWAT, Campbell excelled in tactical support and high-risk incidents. His careful application of dynamic and deliberate entries made him a Captain early on, while his exceptional perimeter control earned him his first commendation. Always interested in the safety of his team, Campbell worked tirelessly to perfect defense and reinforcement techniques and equipment. He has earned multiple commendations since his first and is a certified firearms specialist. Transferred to the FBI as a field agent where he trained with the German Federal Police (GSG-9), he was then recruited into the FBI SWAT team. Campbell has participated in cross-departmental training sessions with international law enforcement agencies, including the SAS and GIGN."
  },
  {
    id:7,
    operator: "Pulse",
    name: "Jack Estrada",
    image: 'pulse.webp',
    role: "Defender",
    gadget: "HEARTBEAT SENSOR",
    Bio:"“The heart is just a motor. Like any machine, it can be fine-tuned.” Born on Seymour Johnson Air Force Base, Estrada was raised on bases across the US and internationally, in Germany, Turkey, and Japan. His father was a pilot and his mother was a classified Senior Intelligence Officer. Estrada demonstrated acumen for science at an early age and was quickly moved into an advanced curriculum. His focus on Forensic Science and Biochemistry made him a perfect fit for the Biometrics Program with the FBI, which he joined as their youngest intern. He secured his role as an agent and was soon recruited into SWAT, working both in the field and in the FBI Lab. Estrada’s high emotional intelligence led him to join the FBI’s Hostage Rescue Team (HRT) where he excelled in crisis management and negotiation tactics. His knowledge of behavioral biometrics led to the creation of the Cardiac Sensor, along with several other prototypes which he continues to refine."
  },
  {
    id:8,
    operator: "Thermite",
    name: "Jordan Trace",
    image: 'thermite.webp',
    role: "Attacker",
    gadget: "EXOTHERMIC CHARGE",
    Bio:"“You see a wall, I see an opportunity.” Trace joined the Corps straight out of high school, making him a fourth-generation Marine. Following his first tour of Iraq, he obtained enough experience to volunteer as an explosive ordnance disposal technician. After his second tour of Iraq, Trace returned to the U.S., enrolled in university, and earned a Bachelor of Science in Chemistry. He brought his experience and skills to the FBI, where he spent a number of years as a field agent within the Hazardous Materials Response Unit. Seeking more dynamic environments, Trace transferred into FBI SWAT, where he excelled at developing new barricade protocols. He then earned a spot in Rainbow where he’s shown further interest in research and development on gadget upgrades. Trace’s hometown of Plano has a major concentration of Chinese Americans, and as such Trace has conversational level of Mandarin."
  },
  {
    id:9,
    operator: "Montagne",
    name: "Gilles Touré",
    image: 'monty.webp',
    role: "Attacker",
    gadget: "EXTENDABLE SHIELD",
    Bio:"“Every conflict is an iteration upon the last. Every scar, a victory.” Touré began his career in law enforcement as a uniformed police officer with the National Gendarmerie. They used his imposing form whenever there was a need to show a strong police presence, earning him a spot in the Mobile Gendarmerie where the focus was on crowd control as well as military and counter-terrorism patrol missions. Touré’s push for extensive training provided him with a broad skillset and earned him a position in the GIGN. Though he’s best utilized for his breaching techniques, Touré also has training in combat engineering and reconnaissance. When not deployed with Rainbow, Touré is an instructor at GIGN."
  },
  {
    id:10,
    operator: "Twitch",
    name: "Emmanuelle Pichon",
    image: 'twitch.webp',
    role: "Attacker",
    gadget: "SHOCK DRONES",
    Bio:"“Machine learning and teamwork have one thing in common: Always lead by example.” Pichon grew up in a family of academics in the historic city of Nancy, France, where the children were encouraged to excel in Math, Science, and Technology. Early participation in sponsored computer programming competitions led to her joining the army cadets at sixteen. Almost immediately her talent was recognized, particularly in robotics. Her superiors quickly encouraged Pichon to study engineering while continuing her career in the military. From the start, Pichon’s focus has been on adaptable technology that aids soldiers in the field. While there is much praise for her technological achievements, Pichon’s tactical prowess and ability to problem solve quickly and efficiently make her a crucial operational asset. Pichon's unique combination of talents made her well-suited for GIGN and, later, Rainbow. She is fluent in French, English, and German and her current research focus is AI."
  },
  {
    id:11,
    operator: "Doc",
    name: "Gustave Kateb",
    image: 'doc.webp',
    role: "Defender",
    gadget: "STIM PISTOL",
    Bio:"“My job is to keep you alive. Make it as hard as you like.” Of Algerian and French descent, Kateb grew up in an affluent family in Paris’ 16th arrondissement. He comes from a well-respected lineage in both the military and medicine. In his second year of medical studies with the prestigious Université Paris Descartes, Kateb answered the appeal for volunteers in Médecins Sans Frontières (MSF). He has subsequently volunteered numerous times on emergency frontline aid missions around the world. Upon graduation, Kateb declined a prominent private medical practice in favor of a career with the French Defense Health Service. Kateb’s main discipline is toxicology and ecotoxicology. He has authored studies on biological agents and their effects on at-risk populations and damaged environments, and contributed reports to the European Centre for Disease Prevention and Control (ECDC). Recognizing the ongoing need for doctors, Kateb continues to volunteer with MSF. He is a highly regarded medical officer for the commandement des forces spéciales Terre."
  },
  {
    id:12,
    operator: "Rook",
    name: "Julien Nizan",
    image: 'rook.webp',
    role: "Defender",
    gadget: "ARMOR PACK",
    Bio:"“If you're going to get shot, you may as well do it right.” Nizan’s father is a respected stone mason while his mother held numerous jobs. They both informed his sense of architectural design and precision, helping him earn top rankings in school. Along with Nizan’s intellectual interests, he excelled in athletics from an early age, including Track & Field, fencing, and cycling. He later dropped out of university to cycle across France before returning and joining the Gendarmerie. Nizan thrived in his training, which included specialized qualifications in weapons, surveillance, and criminal investigations. His adaptability put him at the top of the list in military and defense courses, quickly catching the attention of the GIGN. His first operations with that unit combined all of the elements to satisfy his endless pursuit of challenges and adventure, according to staff psychologists. Specializing in hostage rescue and surveillance, Nizan’s list of successful interventions is extensive."
  },
  {
    id:13,
    operator: "Jager",
    name: "Marius Streicher",
    image: 'jager.webp',
    role: "Defender",
    gadget: "ACTIVE DEFENSE SYSTEM",
    Bio:"“Birthdays. Proposals. These should be surprises. No one wants a grenade to the face.” Raised by his uncle, a mechanic with the Bundespolizei (BPOL) Aviation Group, Streicher was around engines and motors at an early age. While he demonstrated skills in mechanics, it didn’t hold the challenge that he was looking for. Since he had an affinity for complex machinery, his uncle encouraged him to study aeronautical engineering at university, but strict academic form was an uncomfortable fit for him. So while Streicher’s grades were acceptable, he had a tendency toward restless antics. Following his hobby and passion in flying, he spent considerable time around pilots and aircraft. Private corporations sought him out, but Streicher joined BPOL-Aviation Group because it offered him unique challenges, the opportunity to fly and to serve his country. Almost immediately, Streicher began designing defensive weapon systems for BPOL including a ground-based Active Defense System (ADS) prototype. It was this prototype that caught the attention of GSG 9 and Rainbow."
  },
  {
    id:14,
    operator: "Bandit",
    name: "Dominic Brunsmeier",
    image: 'bandit.webp',
    role: "Defender",
    gadget: "SHOCK WIRE",
    Bio:"“Survival is all about timing. Nature doesn’t give second chances.” Brunsmeier and his twin brother were raised in a working class district near the Berlin Wall. Their father worked in the police force and strongly encouraged them to join. While working with Bundespolizei (BPOL) Brunsmeier excelled in crisis situations. He transferred to the Aviation Group long enough to obtain his helicopter license but his adaptability and experience with border surveillance flagged him for undercover operations. He was embedded as an undercover agent in the terrorist organization Red Army Faction (RAF) and later in the Hannover Chapter of the Hell’s Angels. In both operations Brunsmeier’s contribution was critical in seeing key members arrested and providing valuable information. While undercover, Brunsmeier honed skills in guerrilla tactics and improvised explosive devices. He developed prototypes of his electrified barricade and deployable shield. He is fluent in German, English, Polish and Turkish."
  },
  {
    id:15,
    operator: "Blitz",
    name: "Elias Kötz",
    image: 'blitz.webp',
    role: "Attacker",
    gadget: "FLASH SHIELD",
    Bio:"“I don’t like photos of myself. The lighting is always wrong.” Kötz is a graduate of Hermann-Böse-Gymnasium, an elite academy specializing in science and language studies. Throughout his education Kötz excelled both academically and athletically. Among his many unique qualities, Kötz is multilingual with the ability to grasp the nuance of a language quickly. His physically imposing frame and skill with his weapon make him formidable in tight space, room-to-room deployment. It’s his tactical experience that secures him as a solid Rainbow elite. These abilities combined with his specialized academic background and good-natured personality make him highly sought after. He easily transitioned from a Schnelle Kräfte soldier in Kosovo to a member of GSG 9. Kötz has been integral to fostering training practices and good will between India’s National Security Guard and GSG 9."
  },
  {
    id:16,
    operator: "IQ",
    name: "Monika Weiss",
    image: 'iq.webp',
    role: "Attacker",
    gadget: "ELECTRONICS DETECTOR",
    Bio:"“Life is the ultimate Rube Goldberg machine.” Weiss’s mother is a renowned mathematician and her father is an inventor whose high academic standards encouraged Weiss and her siblings to win numerous awards in math, science, and music throughout their school years. Thriving in the gifted program enabled Weiss to complete her first internship with a local tech company at the age of sixteen. She was invited to MIT, where she focused on electrical engineering, achieving accolades for her research in Microelectronics. Weiss then joined CalTech for graduate studies in experimental electrical engineering. Weiss returned to Germany to work with military technology research before joining the Bundespolizei (BPOL) as an officer. Both the physical and mental challenges of the job appealed to Weiss and she quickly moved through the ranks. After two years with the BPOL she was recruited by the GSG 9."
  },
  {
    id:17,
    operator: "Fuze",
    name: "Shuhrat Kessikbayev",
    image: 'fuze.webp',
    role: "Attacker",
    gadget: "CLUSTER CHARGE",
    Bio:"“Chaos is only an enemy if you’re unable to adapt.” Growing up in a military family in Samarkand, Uzbekistan, Shuhrat Kessikbayev immigrated to Russia shortly before the fall of the Soviet Union. From an early age Kessikbayev displayed an aptitude for science. His interest in mechanical engineering was honed in the military where he also trained as a machinist. Kessikbayev has applied these skills in numerous engineering projects, including his own weapon, and his ability to improvise in the field with scrap materials and minimal tools has made him a legend among his fellow recruits. This is one of the key reasons he is an asset to Rainbow Operations. During his time in the 27th Motor Rifle Brigade he excelled as a sharpshooter and has extensive weapon knowledge. Deployment within the Spetsnaz is confirmed, however, all operation details remain classified. Kessikbayev is fluent in Uzbek, Russian, Ukrainian, and English."
  },
  {
    id:18,
    operator: "Glaz",
    name: "Timur Glazkov",
    image: 'glaz.webp',
    role: "Attacker",
    gadget: "FLIP SIGHT",
    Bio:"“Imagination keeps you alive. It’s how you find your way out of the dark. That, and a flashlight.” Timur “Glaz” Glazkov’s formidable skill as a sniper served him well within Spetsnaz. He has an exceptional talent for observation and attention to detail. Glazkov grew up in the seaport city of Vladivostok, where he studied art. In 2004, militants took a school hostage in Beslan resulting in the deaths of numerous people, including children. This motivated Glaz to join the Ground Forces of the Russian Federation. While training at the prestigious Khabarovsk Military Commanders Academy he developed unparalleled marksmanship and was immediately recruited into the 45th Guards Regiment. Assigned to special ops and VIP protection detail, reports consistently show that Glaz possesses a unique creative approach to problem-solving. He is the squad member with the most expertise in long-range scoped weaponry."
  },
  {
    id:19,
    operator: "Tachanka",
    name: "Alexsandr Senaviev",
    image: 'tachanka.webp',
    role: "Defender",
    gadget: "MOUNTED LMG",
    Bio:"“They told me I’d died. They were wrong. I was reborn.” Many of the men in the Senaviev family served in the Red Army. At the age of eighteen, Senaviev was conscripted into military service just as the Soviet Union was ending its operations in Afghanistan. Upon the dissolution of his draft, Senaviev opted to enlist full time. He was part of the wrestling league, where his formidable frame and match strategy earned him accolades. Along with heavy artillery, Senaviev's training focused on defensive and breaching tactics, and while there he apprenticed as a precision tool and die machinist in the weapons division. Senaviev applied for a transfer to the Russian Navy but for classified reasons remained in the Armed Forces."
  },
  {
    id:20,
    operator: "Kapkan",
    name: "Maxim Basuda",
    image: 'kapkan.webp',
    role: "Defender",
    gadget: "ENTRY DENIAL DEVICE",
    Bio:"“There are many different kinds of cunning. Fortunately, survival requires only one.” Maxim “Kapkan” Basuda and his brothers grew up in Kovrov, surrounded by the influence of the Russian military. Both parents worked in the military support factories, his father in mechanical engineering and his mother in textiles. Encouraged by his parents and teachers, Basuda joined the Ministry of Internal Affairs as a police officer. Along with the standard training of weapon expertise, protection detail, and high speed pursuit, Basuda showed adroit skills with hostage rescue and information gathering. Clever strategies and self-sufficiency meant that Basuda was perfect for an undercover operation in the port town of Naryan Mar on the Barents Sea. His successful efforts to shut down organized crime prompted his recruitment into the highly respected Spetsnaz. Basuda became an avid hunter and trapper during his time in the Arctic Circle, before being transferred to Beslan in 2002."
  }
]

export default mock;
