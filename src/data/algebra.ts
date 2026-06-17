import { Subject } from "./types";

export const algebra: Subject = {
  id: "algebra",
  title: "Алгебра",
  description: "9 сынып алгебра курсы",
  units: [
    {
      id: "unit-1",
      title: "Екі айнымалысы бар теңдеулер мен теңсіздіктер",
      topics: [
        {
          id: "topic-1",
          title: "Сызықтық емес теңдеулер жүйесі",
          description: "Екі айнымалысы бар сызықтық емес теңдеулер жүйесін шешу тәсілдері.",
          theory: `
**Сызықтық емес теңдеулер жүйесі** — құрамында кем дегенде бір сызықтық емес (дәрежесі 1-ден үлкен немесе айнымалылардың көбейтіндісі бар) теңдеуі бар жүйе.

### Негізгі шешу тәсілдері:
1. **Алмастыру тәсілі**: Бір теңдеуден бір айнымалыны екіншісі арқылы өрнектеп, оны екінші теңдеуге қою.
2. **Қосу тәсілі**: Теңдеулерді мүшелеп қосу немесе азайту арқылы бір айнымалыны жою.
3. **Жаңа айнымалы енгізу тәсілі**: Күрделі өрнектерді жаңа айнымалымен белгілеу арқылы жүйені қарапайым түрге келтіру.
4. **Графиктік тәсіл**: Әр теңдеудің графигін салып, олардың қиылысу нүктелерін табу.
          `,
          formulas: `Сызықтық емес теңдеулер жүйесінің жалпы түрі:
$$
\\begin{cases} 
F_1(x; y) = 0 \\\\
F_2(x; y) = 0 
\\end{cases}
$$
немесе
$$
\\begin{cases} 
f(x; y) = g(x; y) \\\\
p(x; y) = q(x; y) 
\\end{cases}
$$
Мұндағы кем дегенде бір теңдеу — сызықтық емес. Жүйенің шешімі — екі теңдеуді де дұрыс теңдікке айналдыратын $(x_0; y_0)$ сандар жұбы.`,
          visualSchemas: `
Графиктік тәсіл кезінде:
1. **Шеңбер + Түзу**: 2 нүктеде қиылысуы, жанасуы (1 нүкте) немесе қиылыспауы мүмкін.
2. **Парабола + Түзу**: 2 нүкте, 1 нүкте немесе қиылыспайды.
          `,
          examples: [
            {
              title: `Мысал 1: Алмастыру тәсілі`,
              steps: [
                { title: `Берілгені`, description: `Жүйені шешіңіз: $\\begin{cases} x - y = 2 \\\\ x^2 + y^2 = 10 \\end{cases}$` },
                { title: `1-қадам`, description: `Бірінші теңдеуден $x$-ті өрнектейміз: $x = y + 2$.` },
                { title: `2-қадам`, description: `Оны екінші теңдеуге қоямыз: $(y + 2)^2 + y^2 = 10$.` },
                { title: `3-қадам`, description: `Жақшаны ашып ықшамдаймыз: $y^2 + 4y + 4 + y^2 = 10 \\Rightarrow 2y^2 + 4y - 6 = 0 \\Rightarrow y^2 + 2y - 3 = 0$.` },
                { title: `4-қадам`, description: `Квадрат теңдеуді шешеміз: $y_1 = 1$, $y_2 = -3$.` },
                { title: `5-қадам`, description: `$x$-тің сәйкес мәндерін табамыз: $y_1 = 1 \\Rightarrow x_1 = 3$; $y_2 = -3 \\Rightarrow x_2 = -1$.` }
              ],
              answer: `(3; 1) және (-1; -3)`
            },
            {
              title: `Мысал 2: Қосу тәсілі`,
              steps: [
                { title: `Берілгені`, description: `Жүйені шешіңіз: $\\begin{cases} x^2 - y = 5 \\\\ x^2 + y = 13 \\end{cases}$` },
                { title: `1-қадам`, description: `Екі теңдеуді қосамыз: $(x^2 - y) + (x^2 + y) = 5 + 13 \\Rightarrow 2x^2 = 18$.` },
                { title: `2-қадам`, description: `$x^2 = 9 \\Rightarrow x_1 = 3, x_2 = -3$.` },
                { title: `3-қадам`, description: `Әр $x$ үшін $y$-ті табамыз: $x^2 - y = 5 \\Rightarrow 9 - y = 5 \\Rightarrow y = 4$. Бұл $x$-тің екі мәнінде де бірдей.` }
              ],
              answer: `(3; 4) және (-3; 4)`
            }
          ],
          practice: [
            { question: `Жүйені шешіңіз: $\\begin{cases} y = x^2 \\\\ y = x + 2 \\end{cases}$`, solution: `$x^2 = x + 2 \\Rightarrow x^2 - x - 2 = 0 \\Rightarrow x_1=2, x_2=-1$. $y_1=4, y_2=1$.`, answer: `(2; 4), (-1; 1)` },
            { question: `Жүйені шешіңіз: $\\begin{cases} x y = 6 \\\\ x + y = 5 \\end{cases}$`, solution: `Виет теоремасы бойынша бұл $t^2 - 5t + 6 = 0$ теңдеуінің түбірлері: 2 және 3. Демек $x=2, y=3$ немесе $x=3, y=2$.`, answer: `(2; 3), (3; 2)` },
            { question: `Жүйені шешіңіз: $\\begin{cases} x^2 + y^2 = 25 \\\\ y - x = 1 \\end{cases}$`, solution: `$y = x + 1 \\Rightarrow x^2 + (x+1)^2 = 25 \\Rightarrow 2x^2 + 2x - 24 = 0 \\Rightarrow x^2 + x - 12 = 0$. $x_1=3, x_2=-4$. $y_1=4, y_2=-3$.`, answer: `(3; 4), (-4; -3)` },
            { question: `Жүйе неше шешімге ие: $\\begin{cases} x^2 + y^2 = 4 \\\\ y = 3 \\end{cases}$?`, solution: `$x^2 + 3^2 = 4 \\Rightarrow x^2 = -5$. Нақты сандар жиынында шешімі жоқ.`, answer: `Шешімі жоқ` },
            { question: `Жүйені шешіңіз: $\\begin{cases} x - y = 1 \\\\ x y = 12 \\end{cases}$`, solution: `$x = y+1 \\Rightarrow (y+1)y = 12 \\Rightarrow y^2+y-12=0 \\Rightarrow y_1=3, y_2=-4$. $x_1=4, x_2=-3$.`, answer: `(4; 3), (-3; -4)` }
          ],
          selfCheck: [
            "Алмастыру тәсілін қандай жағдайда қолданған тиімді?",
            "Графиктік тәсілмен шығарудың артықшылығы мен кемшілігі қандай?"
          ],
          miniTest: [
            { question: `Сызықтық емес теңдеулер жүйесі дегеніміз не?`, options: [`Барлық теңдеулері сызықтық жүйе`, `Кем дегенде бір теңдеуі сызықтық емес жүйе`, `Тек квадрат теңдеулерден тұратын жүйе`, `Теңдеулері жоқ жүйе`], correctAnswerIndex: 1 },
            { question: `Графиктік тәсілмен $\\begin{cases} x^2 + y^2 = 9 \\\\ y = x \\end{cases}$ жүйесін шешкенде, қандай фигуралар қиылысады?`, options: [`Екі түзу`, `Екі шеңбер`, `Шеңбер және түзу`, `Парабола және түзу`], correctAnswerIndex: 2 },
            { question: `$\\begin{cases} y = x^2 \\\\ y = 4 \\end{cases}$ жүйесінің неше шешімі бар?`, options: [`1`, `2`, `3`, `Шешімі жоқ`], correctAnswerIndex: 1 },
            { question: `Алмастыру тәсілін қолданғанда $\\begin{cases} x - y = 3 \\\\ x y = 4 \\end{cases}$ жүйесінде $x$-ті қалай өрнектеу тиімді?`, options: [`$x = 3 - y$`, `$x = y - 3$`, `$x = 3 + y$`, `$x = 4/y$`], correctAnswerIndex: 2 },
            { question: `$\\begin{cases} x^2 - y^2 = 0 \\\\ x + y = 2 \\end{cases}$ жүйесінің бір шешімін көрсетіңіз.`, options: [`(1; 1)`, `(2; 0)`, `(0; 2)`, `(-1; 3)`], correctAnswerIndex: 0 }
          ]
        }
      ]
    },
    {
      id: "unit-3",
      title: "Тізбектер",
      topics: [
        {
          id: "topic-1",
          title: "Арифметикалық прогрессия",
          description: "Арифметикалық прогрессияның n-ші мүшесі және қосындысы.",
          theory: `
**Арифметикалық прогрессия** — әрбір мүшесі өзінің алдындағы мүшеге бірдей тұрақты санды (айырым) қосу арқылы алынатын сандар тізбегі.

Кез келген $n \\ge 1$ үшін: $a_{n+1} = a_n + d$, мұндағы $d$ - прогрессияның айырымы.
          `,
          formulas: `Арифметикалық прогрессия формулалары:
- $a_n = a_1 + (n - 1)d$ — $n$-ші мүшенің формуласы
- $d = a_{n+1} - a_n$ — прогрессияның айырымы
- $S_n = \\frac{a_1 + a_n}{2} \\cdot n$ — алғашқы $n$ мүшенің қосындысы
- $S_n = \\frac{2a_1 + (n - 1)d}{2} \\cdot n$ — қосындының екінші (балама) формуласы`,
          visualSchemas: `
Сан осінде арифметикалық прогрессия мүшелері бірдей қашықтықта орналасады:
$a_1 \\xrightarrow{+d} a_2 \\xrightarrow{+d} a_3 \\xrightarrow{+d} a_4$
          `,
          examples: [
            {
              title: `Мысал 1: n-ші мүшені табу`,
              steps: [
                { title: `Берілгені`, description: `Арифметикалық прогрессияда $a_1 = 5$, $d = 3$. Прогрессияның оныншы мүшесін ($a_{10}$) табыңыз.` },
                { title: `1-қадам`, description: `$n$-ші мүшенің формуласын қолданамыз: $a_n = a_1 + (n-1)d$.` },
                { title: `2-қадам`, description: `Орнына қоямыз: $a_{10} = 5 + (10 - 1) \\cdot 3$.` },
                { title: `3-қадам`, description: `Есептейміз: $a_{10} = 5 + 9 \\cdot 3 = 5 + 27 = 32$.` }
              ],
              answer: `32`
            },
            {
              title: `Мысал 2: Қосындыны табу`,
              steps: [
                { title: `Берілгені`, description: `Тізбек: 2, 6, 10, ... Осы прогрессияның алғашқы 15 мүшесінің қосындысын ($S_{15}$) табыңыз.` },
                { title: `1-қадам`, description: `$a_1$ мен $d$-ны анықтаймыз: $a_1 = 2$, $d = 6 - 2 = 4$.` },
                { title: `2-қадам`, description: `Қосынды формуласын қолданамыз: $S_n = \\frac{2a_1 + (n - 1)d}{2} \\cdot n$.` },
                { title: `3-қадам`, description: `Орнына қоямыз: $S_{15} = \\frac{2 \\cdot 2 + (15 - 1) \\cdot 4}{2} \\cdot 15 = \\frac{4 + 14 \\cdot 4}{2} \\cdot 15$.` },
                { title: `4-қадам`, description: `Есептейміз: $\\frac{4 + 56}{2} \\cdot 15 = \\frac{60}{2} \\cdot 15 = 30 \\cdot 15 = 450$.` }
              ],
              answer: `450`
            }
          ],
          practice: [
            { question: `Арифметикалық прогрессияда $a_1 = 7$, $d = -2$. $a_8$ табыңыз.`, solution: `$a_8 = 7 + (8-1)(-2) = 7 - 14 = -7$`, answer: `-7` },
            { question: `Егер $a_3 = 12$ және $a_5 = 20$ болса, $d$ неге тең?`, solution: `$a_5 = a_3 + 2d \\Rightarrow 20 = 12 + 2d \\Rightarrow 2d = 8 \\Rightarrow d = 4$`, answer: `4` },
            { question: `Тізбектің алғашқы мүшесі 4, айырымы 3. Алғашқы 10 мүшесінің қосындысын табыңыз.`, solution: `$S_{10} = \\frac{2 \\cdot 4 + 9 \\cdot 3}{2} \\cdot 10 = \\frac{8 + 27}{2} \\cdot 10 = 35 \\cdot 5 = 175$`, answer: `175` },
            { question: `$a_1 = -10, a_n = 20, n = 11$. $S_{11}$ табыңыз.`, solution: `$S_{11} = \\frac{-10 + 20}{2} \\cdot 11 = 5 \\cdot 11 = 55$`, answer: `55` },
            { question: `Прогрессия: 10, 7, 4, ... Осы тізбектегі ең алғашқы теріс мүшенің нөмірін табыңыз.`, solution: `$a_n = 10 + (n-1)(-3) = 13 - 3n$. $13 - 3n < 0 \\Rightarrow 3n > 13 \\Rightarrow n > 4.33$. Демек, $n = 5$.`, answer: `5` }
          ],
          selfCheck: [
            "Арифметикалық прогрессияның айырымы нөлге тең бола ала ма?",
            "Прогрессияның кемімелі екенін қалай білуге болады?"
          ],
          miniTest: [
            { question: `Арифметикалық прогрессияның айырымы (d) қалай табылады?`, options: [`$a_n \\cdot a_{n-1}$`, `$a_n + a_{n-1}$`, `$a_n - a_{n-1}$`, `$a_n / a_{n-1}$`], correctAnswerIndex: 2 },
            { question: `$a_1=5$, $d=2$ болса, $a_4$ неге тең?`, options: [`11`, `9`, `13`, `7`], correctAnswerIndex: 0 },
            { question: `$S_n$ формуласын көрсетіңіз:`, options: [`$\\frac{a_1+a_n}{2}$`, `$\\frac{a_1+a_n}{2} \\cdot n$`, `$\\frac{a_1 \\cdot a_n}{2}$`, `$a_1 + (n-1)d$`], correctAnswerIndex: 1 },
            { question: `Егер $a_2 = 10, a_4 = 14$ болса, айырым (d) қанша?`, options: [`4`, `2`, `3`, `1`], correctAnswerIndex: 1 },
            { question: `1, 2, 3, ..., 100 сандарының қосындысы неге тең?`, options: [`5050`, `5000`, `5100`, `5010`], correctAnswerIndex: 0 }
          ]
        },
        {
          id: "topic-2",
          title: "Геометриялық прогрессия",
          description: "Геометриялық прогрессия және оның қасиеттері.",
          theory: `
**Геометриялық прогрессия** — бірінші мүшесі нөлден өзгеше, ал екіншісінен бастап әрбір мүшесі өзінің алдындағы мүшеге бірдей нөлден өзгеше тұрақты санды (еселік) көбейту арқылы алынатын сандар тізбегі.

Кез келген $n \\ge 1$ үшін: $b_{n+1} = b_n \\cdot q$, мұндағы $q$ - прогрессияның еселігі.
          `,
          formulas: `
**$n$-ші мүшесінің формуласы:**  
$$b_n = b_1 \\cdot q^{n - 1}$$

**Алғашқы $n$ мүшесінің қосындысы ($q \\neq 1$):**  
$$S_n = \\frac{b_1(q^n - 1)}{q - 1}$$

**Шексіз кемімелі геометриялық прогрессияның қосындысы ($|q| < 1$):**
$$S = \\frac{b_1}{1 - q}$$
          `,
          visualSchemas: `
Геометриялық прогрессияда өсу өте жылдам болады (мысалы, вирустың таралуы немесе банк депозиті).
$b_1 \\xrightarrow{\\times q} b_2 \\xrightarrow{\\times q} b_3$
          `,
          examples: [
            {
              title: "Шексіз кемімелі прогрессияның қосындысы",
              steps: [
                { title: "Берілгені", description: "Тізбек: $1, \\frac{1}{2}, \\frac{1}{4}, \\dots$" },
                { title: "Еселікті табу", description: "$q = \\frac{1/2}{1} = \\frac{1}{2}$." },
                { title: "Формула", description: "$S = \\frac{b_1}{1 - q}$" },
                { title: "Есептеу", description: "$S = \\frac{1}{1 - 1/2} = \\frac{1}{1/2} = 2$." }
              ],
              answer: "2"
            }
          ],
          practice: [
            {
              question: "$b_1 = 3$, $q = 2$. $b_5 = ?$",
              solution: "$b_5 = 3 \\cdot 2^4 = 3 \\cdot 16 = 48$.",
              answer: "48"
            },
            {
              question: "Егер $b_2 = 12$ және $b_4 = 108$ болса ($q>0$), $b_1$ табыңыз.",
              solution: "$b_4 / b_2 = q^2 \\Rightarrow 108 / 12 = 9 \\Rightarrow q^2 = 9$. $q>0$ болғандықтан, $q=3$. Онда $b_1 = b_2 / q = 12 / 3 = 4$.",
              answer: "4"
            },
            {
              question: "Периодты бөлшекті жай бөлшекке айналдырыңыз: $0.(3)$",
              solution: "$0.(3) = 0.3 + 0.03 + 0.003 + \\dots$ Бұл шексіз кемімелі геометриялық прогрессия. $b_1 = 0.3$, $q = 0.1$. $S = \\frac{0.3}{1 - 0.1} = \\frac{0.3}{0.9} = \\frac{1}{3}$.",
              answer: "1/3"
            }
          ],
          selfCheck: [
            "Қандай жағдайда геометриялық прогрессияның мүшелерінің таңбалары кезектесіп ауысады?",
            "Шексіз кемімелі прогрессия болу үшін $q$ қандай болуы керек?"
          ],
          miniTest: [
            {
              question: "$b_1 = 2$, $q = 3$. $S_3 = ?$",
              options: ["20", "24", "26", "28"],
              correctAnswerIndex: 2
            },
            {
              question: "$q = -1$ болғанда тізбек қандай болады?",
              options: ["Өспелі", "Кемімелі", "Ауыспалы таңбалы", "Тұрақты"],
              correctAnswerIndex: 2
            },
            {
              question: "$b_n = 5 \\cdot 2^n$. Еселік $q$ нешеге тең?",
              options: ["2", "5", "10", "2.5"],
              correctAnswerIndex: 0
            }
          ]
        }
      ]
    },
    {
      id: "unit-4",
      title: "Тригонометрия",
      topics: [
        {
          id: "topic-1",
          title: "Негізгі тригонометриялық тепе-теңдіктер",
          description: "Синус, косинус, тангенс және котангенс байланыстары.",
          theory: `
Кез келген $\\alpha$ бұрышы үшін синус пен косинус квадраттарының қосындысы 1-ге тең (Пифагор теоремасының тригонометриялық түрі).
Тангенс пен котангенс функциялары синус пен косинустың қатынастары ретінде анықталады.
          `,
          formulas: `**Негізгі тригонометриялық тепе-теңдіктер:**
- $\\sin^2 \\alpha + \\cos^2 \\alpha = 1$
- $\\tan \\alpha = \\frac{\\sin \\alpha}{\\cos \\alpha}$, мұндағы $\\cos \\alpha \\neq 0$
- $\\cot \\alpha = \\frac{\\cos \\alpha}{\\sin \\alpha}$, мұндағы $\\sin \\alpha \\neq 0$
- $\\tan \\alpha \\cdot \\cot \\alpha = 1$
- $1 + \\tan^2 \\alpha = \\frac{1}{\\cos^2 \\alpha}$
- $1 + \\cot^2 \\alpha = \\frac{1}{\\sin^2 \\alpha}$`,
          visualSchemas: `
**Бірлік шеңбер:**
Радиусы 1-ге тең шеңберде кез келген нүктенің координаталары $(\\cos \\alpha, \\sin \\alpha)$ болады.
          `,
          examples: [
            {
              title: `Мысал 1: Тепе-теңдікті қолдану`,
              steps: [
                { title: `Берілгені`, description: `Егер $\\sin \\alpha = 0.6$ және $\\alpha$ сүйір бұрыш ($0 < \\alpha < 90^\\circ$) болса, $\\cos \\alpha$ табыңыз.` },
                { title: `1-қадам`, description: `Негізгі тепе-теңдікті қолданамыз: $\\sin^2 \\alpha + \\cos^2 \\alpha = 1$.` },
                { title: `2-қадам`, description: `Орнына қоямыз: $0.6^2 + \\cos^2 \\alpha = 1 \\Rightarrow 0.36 + \\cos^2 \\alpha = 1$.` },
                { title: `3-қадам`, description: `Есептейміз: $\\cos^2 \\alpha = 1 - 0.36 = 0.64$. Сүйір бұрыш үшін косинус оң болады: $\\cos \\alpha = \\sqrt{0.64} = 0.8$.` }
              ],
              answer: `0.8`
            },
            {
              title: `Мысал 2: Өрнекті ықшамдау`,
              steps: [
                { title: `Берілгені`, description: `Өрнекті ықшамдаңыз: $(1 - \\sin^2 \\alpha) \\cdot \\tan^2 \\alpha$.` },
                { title: `1-қадам`, description: `Жақша ішін ауыстырамыз: $1 - \\sin^2 \\alpha = \\cos^2 \\alpha$.` },
                { title: `2-қадам`, description: `Тангенсті ашамыз: $\\tan^2 \\alpha = \\frac{\\sin^2 \\alpha}{\\cos^2 \\alpha}$.` },
                { title: `3-қадам`, description: `Көбейтеміз: $\\cos^2 \\alpha \\cdot \\frac{\\sin^2 \\alpha}{\\cos^2 \\alpha} = \\sin^2 \\alpha$.` }
              ],
              answer: `\\sin^2 \\alpha`
            }
          ],
          practice: [
            { question: `Өрнекті ықшамдаңыз: $1 - \\cos^2 \\alpha$.`, solution: `Негізгі тепе-теңдік бойынша: $\\sin^2 \\alpha + \\cos^2 \\alpha = 1$, демек $1 - \\cos^2 \\alpha = \\sin^2 \\alpha$.`, answer: `\\sin^2 \\alpha` },
            { question: `Егер $\\cos \\alpha = 0.8$ (сүйір бұрыш) болса, $\\tan \\alpha$ неге тең?`, solution: `$\\sin^2 \\alpha = 1 - 0.64 = 0.36 \\Rightarrow \\sin \\alpha = 0.6$. $\\tan \\alpha = \\frac{0.6}{0.8} = 0.75$.`, answer: `0.75` },
            { question: `Ықшамдаңыз: $\\cos \\alpha \\cdot \\tan \\alpha$.`, solution: `$\\cos \\alpha \\cdot \\frac{\\sin \\alpha}{\\cos \\alpha} = \\sin \\alpha$.`, answer: `\\sin \\alpha` },
            { question: `Егер $\\tan \\alpha = 2$ болса, $\\cot \\alpha$ табыңыз.`, solution: `$\\tan \\alpha \\cdot \\cot \\alpha = 1 \\Rightarrow \\cot \\alpha = 1 / \\tan \\alpha = 1/2 = 0.5$.`, answer: `0.5` },
            { question: `Өрнектің мәнін табыңыз: $\\sin^2 30^\\circ + \\cos^2 30^\\circ$.`, solution: `Кез келген бұрыш үшін бұл қосынды 1-ге тең.`, answer: `1` }
          ],
          selfCheck: [
            "Тангенс қандай бұрыштарда анықталмаған?",
            "Негізгі тригонометриялық тепе-теңдік қалай дәлелденеді?"
          ],
          miniTest: [
            { question: `Негізгі тригонометриялық тепе-теңдікті көрсетіңіз:`, options: [`$\\sin \\alpha + \\cos \\alpha = 1$`, `$\\sin^2 \\alpha + \\cos^2 \\alpha = 1$`, `$\\sin^2 \\alpha - \\cos^2 \\alpha = 1$`, `$\\tan \\alpha + \\cot \\alpha = 1$`], correctAnswerIndex: 1 },
            { question: `$\\tan \\alpha$ нені білдіреді?`, options: [`$\\cos \\alpha / \\sin \\alpha$`, `$\\sin \\alpha / \\cos \\alpha$`, `$1 / \\sin \\alpha$`, `$1 / \\cos \\alpha$`], correctAnswerIndex: 1 },
            { question: `$(1 - \\sin^2 \\alpha)$ неге тең?`, options: [`$\\cos^2 \\alpha$`, `$\\sin^2 \\alpha$`, `$\\tan^2 \\alpha$`, `1`], correctAnswerIndex: 0 },
            { question: `Егер $\\sin \\alpha = 1$ болса, $\\cos \\alpha$ қандай болады?`, options: [`1`, `-1`, `0`, `Анықталмайды`], correctAnswerIndex: 2 },
            { question: `$\\cot \\alpha$ қандай жағдайда анықталмаған?`, options: [`$\\cos \\alpha = 0$`, `$\\sin \\alpha = 0$`, `$\\tan \\alpha = 1$`, `$\\alpha = 45^\\circ$`], correctAnswerIndex: 1 }
          ]
        },
        {
          id: "topic-2",
          title: "Бұрыш пен доғаның градустық және радиандық өлшемдері",
          description: "Градус және радиан ұғымдары, бір-біріне айналдыру.",
          theory: "Бұрыштың өлшемі екі түрлі болады: градус және радиан. 1 радиан — шеңбер радиусына тең доғаға тірелетін центрлік бұрыш. 180 градус = $\\pi$ радиан.",
          formulas: "- Градустан радианға: $\\alpha_{rad} = (\\alpha_{deg} \\cdot \\pi) / 180$\n- Радианнан градусқа: $\\alpha_{deg} = (\\alpha_{rad} \\cdot 180) / \\pi$",
          visualSchemas: "Бірлік шеңбердегі бұрыштар: 0, $\\pi/2$ ($90^\\circ$), $\\pi$ ($180^\\circ$), $3\\pi/2$ ($270^\\circ$), $2\\pi$ ($360^\\circ$).",
          examples: [
            {
              title: "Мысал 1",
              steps: [
                { title: "Берілгені", description: "$60^\\circ$-ты радианға айналдырыңыз." },
                { title: "Шешуі", description: "$60 \\cdot (\\pi / 180) = \\pi / 3$." }
              ],
              answer: "\\pi/3"
            }
          ],
          practice: [
            { question: "$120^\\circ$ радианмен қалай жазылады?", solution: "$120 \\cdot \\pi/180 = 2\\pi/3$", answer: "2\\pi/3" },
            { question: "$\\pi/4$ радиан неше градус?", solution: "$180/4 = 45^\\circ$", answer: "45" },
            { question: "$270^\\circ$ радианмен?", solution: "$270 \\cdot \\pi/180 = 3\\pi/2$", answer: "3\\pi/2" }
          ],
          selfCheck: ["Радиан деген не?", "Градус пен радианның айырмашылығы қандай?"],
          miniTest: [
            { question: "180 градус неше радианға тең?", options: ["$\\pi$", "$2\\pi$", "$\\pi/2$", "$3\\pi/2$"], correctAnswerIndex: 0 },
            { question: "$\\pi/6$ неше градус?", options: ["30", "60", "45", "90"], correctAnswerIndex: 0 }
          ]
        },
        {
          id: "topic-3",
          title: "Кез келген бұрыштың синусы, косинусы, тангенсі және котангенсі",
          description: "Тригонометриялық функциялардың кез келген бұрыш үшін анықтамасы.",
          theory: "Бірлік шеңбердегі $(x, y)$ нүктесі үшін: $\\cos \\alpha = x$, $\\sin \\alpha = y$, $\\tan \\alpha = y/x$, $\\cot \\alpha = x/y$. Бұрыш координаттық ширектердің кез келгеніне түсуі мүмкін.",
          formulas: "$\\sin \\alpha = y$\n$\\cos \\alpha = x$\n$\\tan \\alpha = y/x$ ($x \\neq 0$)\n$\\cot \\alpha = x/y$ ($y \\neq 0$)",
          visualSchemas: "Бірлік шеңберде нүктенің координаталары $(\\cos \\alpha, \\sin \\alpha)$ ретінде беріледі.",
          examples: [
            {
              title: "Мысал",
              steps: [
                { title: "Берілгені", description: "$\\sin(150^\\circ)$ мәнін табыңыз." },
                { title: "Шешуі", description: "$150^\\circ$ екінші ширекте. $\\sin(150^\\circ) = 1/2$." }
              ],
              answer: "1/2"
            }
          ],
          practice: [
            { question: "$\\cos(120^\\circ)$ мәнін табыңыз.", solution: "Екінші ширек, косинус теріс. -1/2", answer: "-1/2" },
            { question: "$\\tan(135^\\circ)$ мәнін табыңыз.", solution: "-1", answer: "-1" },
            { question: "$\\sin(270^\\circ)$ мәнін табыңыз.", solution: "Төменгі нүкте, -1", answer: "-1" }
          ],
          selfCheck: ["Қай ширектерде синус оң?", "Тангенс қай ширектерде теріс?"],
          miniTest: [
            { question: "$\\sin(90^\\circ)$ неге тең?", options: ["1", "0", "-1", "0.5"], correctAnswerIndex: 0 },
            { question: "$\\cos(180^\\circ)$ неге тең?", options: ["1", "0", "-1", "-0.5"], correctAnswerIndex: 2 }
          ]
        },
        {
          id: "topic-4",
          title: "Тригонометриялық функциялар және олардың қасиеттері",
          description: "Анықталу облысы, периодтылығы, жұп-тақтылығы.",
          theory: "sin және cos үшін: анықталу облысы R, мәндер облысы [-1; 1]. Периоды $2\\pi$. tg және ctg периоды $\\pi$. cos - жұп функция ($\cos(-x) = \\cos x$), ал қалғандары тақ ($\sin(-x) = -\\sin x$).",
          formulas: "$\\cos(-\\alpha) = \\cos \\alpha$\n$\\sin(-\\alpha) = -\\sin \\alpha$\n$\\tan(-\\alpha) = -\\tan \\alpha$\n$\\cot(-\\alpha) = -\\cot \\alpha$",
          visualSchemas: "cos функциясы симметриялы (жұп), ал sin функциясы координаттар басына қатысты симметриялы (тақ).",
          examples: [
            {
              title: "Мысал",
              steps: [
                { title: "Берілгені", description: "$\\cos(-60^\\circ)$ мәнін табыңыз." },
                { title: "Шешуі", description: "cos жұп функция: $\\cos(-60^\\circ) = \\cos(60^\\circ) = 1/2$." }
              ],
              answer: "1/2"
            }
          ],
          practice: [
            { question: "$\\sin(-30^\\circ)$ неге тең?", solution: "$-\\sin(30^\\circ) = -1/2$", answer: "-1/2" },
            { question: "$\\tan(-45^\\circ)$ неге тең?", solution: "$-\\tan(45^\\circ) = -1$", answer: "-1" },
            { question: "$\\cos(-90^\\circ)$ неге тең?", solution: "$\\cos(90^\\circ) = 0$", answer: "0" }
          ],
          selfCheck: ["Жұп тригонометриялық функцияны атаңыз.", "Тангенстің периоды қандай?"],
          miniTest: [
            { question: "Қай функция жұп?", options: ["sin", "cos", "tg", "ctg"], correctAnswerIndex: 1 },
            { question: "sin функциясының ең үлкен мәні қандай?", options: ["1", "0", "$\\pi$", "Шексіз"], correctAnswerIndex: 0 }
          ]
        },
        {
          id: "topic-5",
          title: "Келтіру формулалары",
          description: "Үлкен бұрыштарды сүйір бұрыштарға келтіру.",
          theory: "$\\pi/2$ және $3\\pi/2$ ($90^\\circ$ және $270^\\circ$) арқылы өткенде функция аты өзгереді (sin ↔ cos, tg ↔ ctg). $\\pi$ және $2\\pi$ арқылы өткенде өзгермейді. Таңбасы бастапқы функцияның сол ширектегі таңбасы бойынша қойылады.",
          formulas: "$\\sin(\\pi/2 - \\alpha) = \\cos \\alpha$\n$\\cos(\\pi + \\alpha) = -\\cos \\alpha$\n$\\tan(3\\pi/2 - \\alpha) = \\cot \\alpha$",
          visualSchemas: "Келтіру ережесі: 1) Функция аты өзгере ме? (Тік ось - иә, көлденең ось - жоқ). 2) Бастапқы функцияның таңбасы қандай?",
          examples: [
            {
              title: "Мысал",
              steps: [
                { title: "Берілгені", description: "$\\sin(120^\\circ)$ мәнін келтіру формуласымен табыңыз." },
                { title: "Шешуі", description: "$\\sin(90^\\circ + 30^\\circ) = \\cos(30^\\circ) = \\sqrt{3}/2$." }
              ],
              answer: "\\sqrt{3}/2"
            }
          ],
          practice: [
            { question: "$\\cos(150^\\circ)$ мәні?", solution: "$\\cos(180^\\circ-30^\\circ) = -\\cos(30^\\circ) = -\\sqrt{3}/2$", answer: "-\\sqrt{3}/2" },
            { question: "$\\tan(225^\\circ)$ мәні?", solution: "$\\tan(180^\\circ+45^\\circ) = \\tan(45^\\circ) = 1$", answer: "1" },
            { question: "$\\sin(210^\\circ)$ мәні?", solution: "$\\sin(180^\\circ+30^\\circ) = -\\sin(30^\\circ) = -1/2$", answer: "-1/2" }
          ],
          selfCheck: ["Қай ось арқылы өткенде функция аты өзгереді?", "Таңбаны қалай анықтаймыз?"],
          miniTest: [
            { question: "$\\cos(\\pi/2 + \\alpha)$ неге тең?", options: ["$\\sin \\alpha$", "$-\\sin \\alpha$", "$\\cos \\alpha$", "$-\\cos \\alpha$"], correctAnswerIndex: 1 },
            { question: "$\\sin(\\pi - \\alpha)$ неге тең?", options: ["$\\sin \\alpha$", "$-\\sin \\alpha$", "$\\cos \\alpha$", "$-\\cos \\alpha$"], correctAnswerIndex: 0 }
          ]
        },
        {
          id: "topic-6",
          title: "Екі бұрыштың қосындысы мен айырымының формулалары",
          description: "sin(α±β), cos(α±β), tg(α±β) формулалары.",
          theory: "Бұл формулалар екі бұрыштың қосындысының немесе айырымының функцияларын жеке бұрыштардың функциялары арқылы өрнектеуге мүмкіндік береді.",
          formulas: "$\\sin(\\alpha \\pm \\beta) = \\sin \\alpha \\cos \\beta \\pm \\cos \\alpha \\sin \\beta$\n$\\cos(\\alpha \\pm \\beta) = \\cos \\alpha \\cos \\beta \\mp \\sin \\alpha \\sin \\beta$\n$\\tan(\\alpha \\pm \\beta) = (\\tan \\alpha \\pm \\tan \\beta) / (1 \\mp \\tan \\alpha \\tan \\beta)$",
          visualSchemas: "Қосу формулалары тригонометриялық өрнектерді ықшамдаудың негізі болып табылады.",
          examples: [
            {
              title: "Мысал",
              steps: [
                { title: "Берілгені", description: "$\\cos(75^\\circ)$ мәнін табыңыз." },
                { title: "Шешуі", description: "$\\cos(45^\\circ+30^\\circ) = \\cos 45^\\circ \\cos 30^\\circ - \\sin 45^\\circ \\sin 30^\\circ = (\\sqrt{6} - \\sqrt{2})/4$." }
              ],
              answer: "(\\sqrt{6} - \\sqrt{2})/4"
            }
          ],
          practice: [
            { question: "$\\sin(15^\\circ)$ мәнін табыңыз.", solution: "$\\sin(45^\\circ-30^\\circ) = (\\sqrt{6} - \\sqrt{2})/4$", answer: "(\\sqrt{6} - \\sqrt{2})/4" },
            { question: "$\\cos(105^\\circ)$ мәнін табыңыз.", solution: "$\\cos(60^\\circ+45^\\circ) = (\\sqrt{2} - \\sqrt{6})/4$", answer: "(\\sqrt{2} - \\sqrt{6})/4" },
            { question: "$\\sin 15^\\circ \\cos 15^\\circ$ өрнегін есептеңіз", solution: "$\\sin(2 \\cdot 15^\\circ)/2 = \\sin(30^\\circ)/2 = 1/4$", answer: "1/4" }
          ],
          selfCheck: ["$\\cos(\\alpha + \\beta)$ формуласында ортада қандай таңба болады?", "$\\sin(\\alpha - \\beta)$ формуласы қандай?"],
          miniTest: [
            { question: "$\\cos(\\alpha + \\beta)$ неге тең?", options: ["$\\cos \\alpha \\cos \\beta + \\sin \\alpha \\sin \\beta$", "$\\cos \\alpha \\cos \\beta - \\sin \\alpha \\sin \\beta$", "$\\sin \\alpha \\cos \\beta + \\cos \\alpha \\sin \\beta$", "$\\sin \\alpha \\cos \\beta - \\cos \\alpha \\sin \\beta$"], correctAnswerIndex: 1 },
            { question: "$\\sin(\\alpha - \\beta)$ неге тең?", options: ["$\\sin \\alpha \\cos \\beta - \\cos \\alpha \\sin \\beta$", "$\\sin \\alpha \\cos \\beta + \\cos \\alpha \\sin \\beta$", "$\\cos \\alpha \\cos \\beta - \\sin \\alpha \\sin \\beta$", "$\\cos \\alpha \\cos \\beta + \\sin \\alpha \\sin \\beta$"], correctAnswerIndex: 0 }
          ]
        },
        {
          id: "topic-7",
          title: "Қос бұрыш формулалары",
          description: "sin(2α), cos(2α), tg(2α) формулалары.",
          theory: "Қос бұрыш формулалары екі бұрыштың қосындысы формуласынан ($\\alpha=\\beta$ болғанда) шығады.",
          formulas: "$\\sin(2\\alpha) = 2 \\sin \\alpha \\cos \\alpha$\n$\\cos(2\\alpha) = \\cos^2 \\alpha - \\sin^2 \\alpha = 2 \\cos^2 \\alpha - 1 = 1 - 2 \\sin^2 \\alpha$\n$\\tan(2\\alpha) = 2 \\tan \\alpha / (1 - \\tan^2 \\alpha)$",
          visualSchemas: "Бұл формулалар бұрышты екі есе кішірейтуге немесе үлкейтуге көмектеседі.",
          examples: [
            {
              title: "Мысал",
              steps: [
                { title: "Берілгені", description: "$\\sin \\alpha = 0.6$, $\\alpha$ - сүйір. $\\sin(2\\alpha)$ табыңыз." },
                { title: "Шешуі", description: "$\\cos \\alpha = 0.8$. $\\sin(2\\alpha) = 2 \\cdot 0.6 \\cdot 0.8 = 0.96$." }
              ],
              answer: "0.96"
            }
          ],
          practice: [
            { question: "$\\cos \\alpha = 0.6$. $\\cos(2\\alpha)$ табыңыз.", solution: "$2(0.6)^2 - 1 = 0.72 - 1 = -0.28$.", answer: "-0.28" },
            { question: "$\\sin 15^\\circ \\cos 15^\\circ$ неге тең?", solution: "$(1/2) \\cdot \\sin(30^\\circ) = 1/4$.", answer: "1/4" },
            { question: "$\\cos^2 15^\\circ - \\sin^2 15^\\circ$ неге тең?", solution: "$\\cos(30^\\circ) = \\sqrt{3}/2$.", answer: "\\sqrt{3}/2" }
          ],
          selfCheck: ["$\\cos(2\\alpha)$ формуласының неше түрі бар?", "$\\sin(2\\alpha)$ неге тең?"],
          miniTest: [
            { question: "$\\sin(2\\alpha)$ формуласы:", options: ["$\\cos^2 \\alpha - \\sin^2 \\alpha$", "$2 \\sin \\alpha \\cos \\alpha$", "$\\sin^2 \\alpha - \\cos^2 \\alpha$", "$1 - 2 \\sin^2 \\alpha$"], correctAnswerIndex: 1 },
            { question: "$\\cos(2\\alpha)$ формуласы:", options: ["$2 \\sin \\alpha \\cos \\alpha$", "$\\cos^2 \\alpha - \\sin^2 \\alpha$", "$\\sin^2 \\alpha - \\cos^2 \\alpha$", "$1 + \\tan^2 \\alpha$"], correctAnswerIndex: 1 }
          ]
        },
        {
          id: "topic-8",
          title: "Жарты бұрыш формулалары",
          description: "Дәрежені төмендету және жарты бұрыш формулалары.",
          theory: "Жарты бұрыш формулалары қос бұрыштың косинусы формуласынан қорытылып шығарылады.",
          formulas: "$\\sin(\\alpha/2) = \\pm\\sqrt{(1 - \\cos \\alpha) / 2}$\n$\\cos(\\alpha/2) = \\pm\\sqrt{(1 + \\cos \\alpha) / 2}$\n$\\tan(\\alpha/2) = \\sin \\alpha / (1 + \\cos \\alpha) = (1 - \\cos \\alpha) / \\sin \\alpha$",
          visualSchemas: "Дәрежені төмендету: $\\sin^2 \\alpha = (1 - \\cos 2\\alpha) / 2$, $\\cos^2 \\alpha = (1 + \\cos 2\\alpha) / 2$.",
          examples: [
            {
              title: "Мысал",
              steps: [
                { title: "Берілгені", description: "$\\cos(15^\\circ)$ мәнін табыңыз." },
                { title: "Шешуі", description: "$\\cos(15^\\circ) = \\sqrt{(1 + \\cos 30^\\circ)/2} = \\sqrt{(1 + \\sqrt{3}/2)/2} = \\sqrt{2+\\sqrt{3}}/2$." }
              ],
              answer: "\\sqrt{2+\\sqrt{3}}/2"
            }
          ],
          practice: [
            { question: "$\\sin(22.5^\\circ)$ мәнін табыңыз.", solution: "$\\sqrt{(1 - \\cos 45^\\circ)/2} = \\sqrt{(2-\\sqrt{2})}/2$", answer: "\\sqrt{(2-\\sqrt{2})}/2" },
            { question: "$\\cos(22.5^\\circ)$ мәнін табыңыз.", solution: "$\\sqrt{(2+\\sqrt{2})}/2$", answer: "\\sqrt{(2+\\sqrt{2})}/2" },
            { question: "$1 - \\cos(60^\\circ)$ неге тең? (жарты бұрыш арқылы)", solution: "$2 \\sin^2(30^\\circ) = 2 \\cdot (1/4) = 1/2$", answer: "1/2" }
          ],
          selfCheck: ["Дәрежені төмендету формуласы қайдан шығады?", "Жарты бұрыштың таңбасы қалай анықталады?"],
          miniTest: [
            { question: "$\\sin^2(\\alpha/2)$ неге тең?", options: ["$(1 - \\cos \\alpha)/2$", "$(1 + \\cos \\alpha)/2$", "$(1 - \\sin \\alpha)/2$", "$(1 + \\sin \\alpha)/2$"], correctAnswerIndex: 0 },
            { question: "$\\cos^2(\\alpha/2)$ неге тең?", options: ["$(1 - \\cos \\alpha)/2$", "$(1 + \\cos \\alpha)/2$", "$(1 - \\sin \\alpha)/2$", "$(1 + \\sin \\alpha)/2$"], correctAnswerIndex: 1 }
          ]
        },
        {
          id: "topic-9",
          title: "Қосындыны көбейтіндіге түрлендіру",
          description: "sin x ± sin y және cos x ± cos y формулалары.",
          theory: "Бұл формулалар тригонометриялық теңдеулерді шешуде қосындыны көбейтінді түріне келтіріп, көбейткіштерге жіктеу үшін қолданылады.",
          formulas: "$\\sin x + \\sin y = 2 \\sin(\\frac{x+y}{2}) \\cos(\\frac{x-y}{2})$\n$\\sin x - \\sin y = 2 \\sin(\\frac{x-y}{2}) \\cos(\\frac{x+y}{2})$\n$\\cos x + \\cos y = 2 \\cos(\\frac{x+y}{2}) \\cos(\\frac{x-y}{2})$\n$\\cos x - \\cos y = -2 \\sin(\\frac{x+y}{2}) \\sin(\\frac{x-y}{2})$",
          visualSchemas: "Қосындыларды көбейтіндіге айналдырғанда бұрыштардың қосындысы мен айырымының жартысы алынады.",
          examples: [
            {
              title: "Мысал",
              steps: [
                { title: "Берілгені", description: "$\\sin 75^\\circ + \\sin 15^\\circ$ есептеңіз." },
                { title: "Шешуі", description: "$2 \\sin(45^\\circ) \\cos(30^\\circ) = 2 \\cdot (\\sqrt{2}/2) \\cdot (\\sqrt{3}/2) = \\sqrt{6}/2$." }
              ],
              answer: "\\sqrt{6}/2"
            }
          ],
          practice: [
            { question: "$\\cos 105^\\circ + \\cos 15^\\circ$", solution: "$2 \\cos(60^\\circ) \\cos(45^\\circ) = \\sqrt{2}/2$", answer: "\\sqrt{2}/2" },
            { question: "$\\cos 75^\\circ - \\cos 15^\\circ$", solution: "$-2 \\sin(45^\\circ) \\sin(30^\\circ) = -\\sqrt{2}/2$", answer: "-\\sqrt{2}/2" },
            { question: "$\\sin 105^\\circ - \\sin 15^\\circ$", solution: "$2 \\sin(45^\\circ) \\cos(60^\\circ) = \\sqrt{2}/2$", answer: "\\sqrt{2}/2" }
          ],
          selfCheck: ["$\\cos x - \\cos y$ формуласының алдында қандай таңба бар?", "Қосындыны көбейтіндіге айналдыру не үшін қажет?"],
          miniTest: [
            { question: "$\\sin x + \\sin y$ формуласы:", options: ["$2 \\sin(\\frac{x+y}{2}) \\cos(\\frac{x-y}{2})$", "$2 \\cos(\\frac{x+y}{2}) \\cos(\\frac{x-y}{2})$", "$-2 \\sin(\\frac{x+y}{2}) \\sin(\\frac{x-y}{2})$", "$2 \\sin(\\frac{x-y}{2}) \\cos(\\frac{x+y}{2})$"], correctAnswerIndex: 0 },
            { question: "$\\cos x - \\cos y$ формуласы:", options: ["$2 \\cos(\\frac{x+y}{2}) \\cos(\\frac{x-y}{2})$", "$-2 \\sin(\\frac{x+y}{2}) \\sin(\\frac{x-y}{2})$", "$2 \\sin(\\frac{x+y}{2}) \\cos(\\frac{x-y}{2})$", "$2 \\sin(\\frac{x-y}{2}) \\cos(\\frac{x+y}{2})$"], correctAnswerIndex: 1 }
          ]
        },
        {
          id: "topic-10",
          title: "Көбейтіндіні қосындыға түрлендіру",
          description: "sin x cos y, cos x cos y, sin x sin y формулалары.",
          theory: "Көбейтінділерді қосындыға айналдыру көбінесе интегралдау немесе күрделі өрнектерді қосылғыштарға ыдырату үшін қажет.",
          formulas: "$\\sin x \\cos y = \\frac{1}{2} [\\sin(x+y) + \\sin(x-y)]$\n$\\cos x \\cos y = \\frac{1}{2} [\\cos(x+y) + \\cos(x-y)]$\n$\\sin x \\sin y = \\frac{1}{2} [\\cos(x-y) - \\cos(x+y)]$",
          visualSchemas: "Көбейтінділер формуласында бұрыштардың қосындысы мен айырымы алынады, жартысы емес.",
          examples: [
            {
              title: "Мысал",
              steps: [
                { title: "Берілгені", description: "$\\cos 75^\\circ \\cos 15^\\circ$ мәнін табыңыз." },
                { title: "Шешуі", description: "$\\frac{1}{2} [\\cos 90^\\circ + \\cos 60^\\circ] = \\frac{1}{2} [0 + 1/2] = 1/4$." }
              ],
              answer: "1/4"
            }
          ],
          practice: [
            { question: "$\\sin 75^\\circ \\sin 15^\\circ$", solution: "$\\frac{1}{2} [\\cos 60^\\circ - \\cos 90^\\circ] = 1/4$", answer: "1/4" },
            { question: "$\\sin 105^\\circ \\cos 15^\\circ$", solution: "$\\frac{1}{2} [\\sin 120^\\circ + \\sin 90^\\circ] = (\\sqrt{3}+2)/4$", answer: "(\\sqrt{3}+2)/4" },
            { question: "$2 \\sin 15^\\circ \\cos 15^\\circ$", solution: "$\\sin(30^\\circ) = 1/2$", answer: "1/2" }
          ],
          selfCheck: ["$\\sin x \\sin y$ формуласында неге $\\cos(x-y)$ бірінші тұрады?", "Көбейтіндіні қосындыға қашан түрлендіреді?"],
          miniTest: [
            { question: "$\\cos x \\cos y$ формуласы:", options: ["$0.5[\\cos(x+y) + \\cos(x-y)]$", "$0.5[\\sin(x+y) + \\sin(x-y)]$", "$0.5[\\cos(x-y) - \\cos(x+y)]$", "$0.5[\\sin(x-y) + \\sin(x+y)]$"], correctAnswerIndex: 0 },
            { question: "$\\sin x \\sin y$ формуласы:", options: ["$0.5[\\cos(x-y) - \\cos(x+y)]$", "$0.5[\\cos(x+y) + \\cos(x-y)]$", "$0.5[\\sin(x+y) + \\sin(x-y)]$", "$0.5[\\cos(x-y) + \\cos(x+y)]$"], correctAnswerIndex: 0 }
          ]
        },
        {
          id: "topic-11",
          title: "Тригонометриялық өрнектерді тепе-тең түрлендіру",
          description: "Тригонометриялық өрнектерді ықшамдау және дәлелдеу әдістері.",
          theory: "Өрнектерді ықшамдау үшін осыған дейін өтілген барлық формулалар: негізгі тепе-теңдіктер, келтіру, қос бұрыш, жарты бұрыш, қосынды мен көбейтінді формулалары кешенді түрде қолданылады.",
          formulas: "Барлық тригонометриялық формулалар қолданылады.",
          visualSchemas: "Негізгі стратегия: 1. Бұрыштарды бірдей ету. 2. Функцияларды бірдей ету (тек sin мен cos-қа көшу). 3. Ортақ көбейткішті жақша сыртына шығару немесе формулаларды қолдану.",
          examples: [
            {
              title: "Мысал",
              steps: [
                { title: "Берілгені", description: "$(\\sin 2\\alpha) / (1 + \\cos 2\\alpha)$ ықшамдаңыз." },
                { title: "Шешуі", description: "$\\sin 2\\alpha = 2 \\sin \\alpha \\cos \\alpha$. $1 + \\cos 2\\alpha = 2 \\cos^2 \\alpha$. Бөлшек: $(2 \\sin \\alpha \\cos \\alpha) / (2 \\cos^2 \\alpha) = \\sin \\alpha / \\cos \\alpha = \\tan \\alpha$." }
              ],
              answer: "\\tan \\alpha"
            }
          ],
          practice: [
            { question: "$(1 - \\cos^2 \\alpha) / (1 - \\sin^2 \\alpha)$", solution: "$\\sin^2 \\alpha / \\cos^2 \\alpha = \\tan^2 \\alpha$", answer: "\\tan^2 \\alpha" },
            { question: "$\\cos^4 \\alpha - \\sin^4 \\alpha$", solution: "$(\\cos^2 \\alpha - \\sin^2 \\alpha)(\\cos^2 \\alpha + \\sin^2 \\alpha) = \\cos 2\\alpha \\cdot 1 = \\cos 2\\alpha$", answer: "\\cos 2\\alpha" },
            { question: "$\\sin \\alpha / (1 - \\cos \\alpha) - \\sin \\alpha / (1 + \\cos \\alpha)$", solution: "Алымы: $2 \\sin \\alpha \\cos \\alpha$. Бөлшек: $2 \\sin \\alpha \\cos \\alpha / \\sin^2 \\alpha = 2 \\cot \\alpha$", answer: "2 \\cot \\alpha" }
          ],
          selfCheck: ["Қандай жағдайда барлық функцияларды синус пен косинусқа ауыстырған тиімді?", "Бөлшектерді қосқанда қандай тепе-теңдік жиі қолданылады?"],
          miniTest: [
            { question: "$\\cos^4 \\alpha - \\sin^4 \\alpha$ неге тең?", options: ["$\\cos 2\\alpha$", "$\\sin 2\\alpha$", "1", "0"], correctAnswerIndex: 0 },
            { question: "$(\\sin 2\\alpha) / (2 \\cos \\alpha)$ неге тең?", options: ["$\\sin \\alpha$", "$\\cos \\alpha$", "$\\tan \\alpha$", "$\\cot \\alpha$"], correctAnswerIndex: 0 }
          ]
        }
      ]
    },
    {
      id: "unit-5",
      title: "Комбинаторика элементтері",
      topics: [
        {
          id: "topic-1",
          title: "Комбинаториканың негізгі ережелері",
          description: "Қосу және көбейту ережелері.",
          theory: `
**Комбинаторика** — математиканың әртүрлі жиындардан берілген шарттарға сай комбинациялар құруды және олардың санын табуды зерттейтін саласы.

### Негізгі ережелер:
1. **Қосу ережесі**: Егер А элементін $m$ тәсілмен, ал В элементін $n$ тәсілмен таңдауға болса (және бұл таңдаулар бір мезгілде орындалмаса), онда «А немесе В» элементін $m + n$ тәсілмен таңдауға болады.
2. **Көбейту ережесі**: Егер А элементін $m$ тәсілмен, содан кейін В элементін $n$ тәсілмен таңдауға болса, онда «А және В» жұбын $m \\cdot n$ тәсілмен таңдауға болады.
          `,
          formulas: `
- Қосу ережесі: $N = m + n$
- Көбейту ережесі: $N = m \\cdot n$
          `,
          visualSchemas: `
### 1. Қосу ережесі (Немесе)
**Тапсырма:** 3 алма 🍎 және 2 алмұрт 🍐 бар. 1 жеміс таңдау керек.
🍎 🍎 🍎 | 🍐 🍐
Нұсқалар: $3 + 2 = 5$ тәсіл.

### 2. Көбейту ережесі (Және)
**Тапсырма:** 2 жейде (👕 А, 👕 Б) және 3 шалбар (👖 1, 👖 2, 👖 3). Бір киім үлгісін таңдау.
**Таңдау ағашы (Граф):**
👕 А 
  ├── 👖 1  (А-1)
  ├── 👖 2  (А-2)
  └── 👖 3  (А-3)

👕 Б 
  ├── 👖 1  (Б-1)
  ├── 👖 2  (Б-2)
  └── 👖 3  (Б-3)

Жалпы: $2 \\times 3 = 6$ нұсқа.
          `,
          examples: [
            {
              title: `Мысал 1: Қосу ережесі`,
              steps: [
                { title: `Берілгені`, description: `Себетте 5 алма және 4 алмұрт бар. Себеттен 1 жемісті (алма немесе алмұрт) қанша тәсілмен алуға болады?` },
                { title: `Шешуі`, description: `Алманы 5 тәсілмен, ал алмұртты 4 тәсілмен алуға болады. Қосу ережесі бойынша: $5 + 4 = 9$.` }
              ],
              answer: `9 тәсіл`
            },
            {
              title: `Мысал 2: Көбейту ережесі`,
              steps: [
                { title: `Берілгені`, description: `Асханада 3 түрлі бірінші тағам және 4 түрлі екінші тағам бар. Түскі ас жиынтығын (бір бірінші және бір екінші тағам) неше тәсілмен таңдауға болады?` },
                { title: `Шешуі`, description: `Бірінші тағамды 3 тәсілмен, екіншіні 4 тәсілмен таңдаймыз. Көбейту ережесі бойынша: $3 \\cdot 4 = 12$.` }
              ],
              answer: `12 тәсіл`
            }
          ],
          practice: [
            { question: `Сыныпта 15 ұл және 12 қыз бар. Кезекшілікке 1 оқушыны неше тәсілмен таңдауға болады?`, solution: `15 + 12 = 27`, answer: `27` },
            { question: `Сыныпта 15 ұл және 12 қыз бар. Кезекшілікке 1 ұл және 1 қызды неше тәсілмен таңдауға болады?`, solution: `15 \\cdot 12 = 180`, answer: `180` },
            { question: `0, 1, 2, 3 цифрларынан қанша екі таңбалы сан құрастыруға болады (цифрлар қайталануы мүмкін)?`, solution: `Бірінші орынға 0 тұра алмайды (3 нұсқа: 1, 2, 3). Екінші орынға кез келгені (4 нұсқа: 0, 1, 2, 3). $3 \\cdot 4 = 12$.`, answer: `12` },
            { question: `Қалада А-дан В-ға 3 жол, В-дан С-ға 2 жол бар. А-дан С-ға В арқылы неше жолмен баруға болады?`, solution: `$3 \\cdot 2 = 6$`, answer: `6` },
            { question: `Кітап дүкенінде 5 математика және 4 физика кітабы бар. Оқушы 1 кітапты қанша тәсілмен таңдай алады?`, solution: `5 + 4 = 9`, answer: `9` }
          ],
          selfCheck: [
            "Қосу және көбейту ережелерінің айырмашылығы неде?",
            "Таңдау ағашын қандай есептерде қолданған ыңғайлы?"
          ],
          miniTest: [
            { question: `«Немесе» жалғаулығы қай ережеге сәйкес келеді?`, options: [`Қосу ережесі`, `Көбейту ережесі`, `Дәрежелеу`, `Бөлу ережесі`], correctAnswerIndex: 0 },
            { question: `Тақтада 3 алма мен 2 банан жатыр. 1 жемісті неше түрлі жолмен алуға болады?`, options: [`5`, `6`, `1`, `3`], correctAnswerIndex: 0 },
            { question: `Тақтада 3 алма мен 2 банан жатыр. 1 алма ЖӘНЕ 1 бананды неше түрлі жолмен алуға болады?`, options: [`5`, `6`, `1`, `3`], correctAnswerIndex: 1 },
            { question: `1, 2, 3 цифрларынан неше екі таңбалы сан құруға болады (цифрлар қайталанбаса)?`, options: [`9`, `6`, `3`, `8`], correctAnswerIndex: 1 },
            { question: `Монетаны 3 рет лақтырғанда неше түрлі нәтиже болуы мүмкін?`, options: [`6`, `9`, `8`, `3`], correctAnswerIndex: 2 }
          ]
        },
        {
          id: "topic-2",
          title: "Орын алмастыру, орналастыру, теру",
          description: "Комбинаториканың негізгі формулалары.",
          theory: `
**Факториал** — 1-ден $n$-ге дейінгі натурал сандардың көбейтіндісі: $n! = 1 \\cdot 2 \\cdot 3 \\dots n$. Ескерту: $0! = 1$.

1. **Орын алмастыру (Перестановки)**: $n$ түрлі элементтен тұратын жиынның элементтерін бір-бірімен орын ауыстыру арқылы алынатын комбинациялар. Тәртіп маңызды!
2. **Орналастыру (Размещения)**: $n$ элементтен $m$ элементті таңдап алып, оларды белгілі бір ретпен орналастыру. Тәртіп маңызды!
3. **Теру (Сочетания)**: $n$ элементтен $m$ элементті таңдап алу. Мұнда таңдалған элементтердің реті маңызды емес!
          `,
          formulas: `
- Орын алмастыру: $P_n = n!$
- Орналастыру: $A_n^m = \\frac{n!}{(n-m)!}$
- Теру: $C_n^m = \\frac{n!}{m!(n-m)!}$
          `,
          visualSchemas: `
### 1. Орын алмастыру (Перестановка)
**Тапсырма:** 3 түрлі түсті шарды (🔴, 🔵, 🟢) қатарға орналастыру.
$P_3 = 3! = 6$ нұсқа:
1. 🔴 🔵 🟢
2. 🔴 🟢 🔵
3. 🔵 🔴 🟢
4. 🔵 🟢 🔴
5. 🟢 🔴 🔵
6. 🟢 🔵 🔴

### 2. Орналастыру (Размещение)
**Тапсырма:** 4 адамнан (А, Б, В, Г) 2 адамды "Бастық" және "Орынбасар" қызметіне сайлау. Рет маңызды!
$A_4^2 = 12$ нұсқа:
| Бастық | Орынбасар |
| :---: | :---: |
| А | Б, В, Г |
| Б | А, В, Г |
| В | А, Б, Г |
| Г | А, Б, В |
*(Жалпы: 4 × 3 = 12 жұп: АБ, АВ, АГ, БА, БВ, БГ, ВА, ВБ, ВГ, ГА, ГБ, ГВ)*

### 3. Теру (Сочетание)
**Тапсырма:** 4 адамнан (А, Б, В, Г) 2 адамды кезекшілікке сайлау. Рет маңызды емес!
$C_4^2 = 6$ нұсқа:
- {А, Б}  (БА мен бірдей)
- {А, В}  (ВА мен бірдей)
- {А, Г}  (ГА мен бірдей)
- {Б, В}  (ВБ мен бірдей)
- {Б, Г}  (ГБ мен бірдей)
- {В, Г}  (ГВ мен бірдей)
          `,
          examples: [
            {
              title: `Мысал 1: Орын алмастыру`,
              steps: [
                { title: `Берілгені`, description: `5 адамды кезекке неше түрлі тәсілмен тұрғызуға болады?` },
                { title: `Шешуі`, description: `Бұл орын алмастыру: $P_5 = 5! = 1 \\cdot 2 \\cdot 3 \\cdot 4 \\cdot 5 = 120$.` }
              ],
              answer: `120`
            },
            {
              title: `Мысал 2: Орналастыру`,
              steps: [
                { title: `Берілгені`, description: `Жарысқа 10 спортшы қатысты. Алтын, күміс және қола медальдарды қанша тәсілмен бөліп беруге болады?` },
                { title: `Шешуі`, description: `Медальдардың реті маңызды (кім алтын, кім күміс алатыны), сондықтан орналастыру формуласын қолданамыз: $A_{10}^3 = \\frac{10!}{(10-3)!} = \\frac{10!}{7!} = 8 \\cdot 9 \\cdot 10 = 720$.` }
              ],
              answer: `720`
            },
            {
              title: `Мысал 3: Теру`,
              steps: [
                { title: `Берілгені`, description: `Сыныптағы 20 оқушыдан 2 кезекшіні қанша тәсілмен таңдауға болады?` },
                { title: `Шешуі`, description: `Кезекшілердің арасында рет маңызды емес. Теру формуласы: $C_{20}^2 = \\frac{20!}{2!(20-2)!} = \\frac{20!}{2! \\cdot 18!} = \\frac{19 \\cdot 20}{2} = 190$.` }
              ],
              answer: `190`
            }
          ],
          practice: [
            { question: `4 кітапты сөреге неше тәсілмен қоюға болады?`, solution: `$P_4 = 4! = 24$`, answer: `24` },
            { question: `7 оқушының ішінен 3 оқушыны сайысқа неше тәсілмен таңдауға болады (рөлдері бірдей)?`, solution: `$C_7^3 = \\frac{7!}{3! \\cdot 4!} = \\frac{5 \\cdot 6 \\cdot 7}{6} = 35$`, answer: `35` },
            { question: `Телефон нөмірінде соңғы 4 цифр әртүрлі. Осы 4 цифрды неше тәсілмен теруге болады?`, solution: `Бұл 10 цифрдан 4-еуін ретімен таңдау: $A_{10}^4 = 10 \\cdot 9 \\cdot 8 \\cdot 7 = 5040$`, answer: `5040` },
            { question: `Топтағы 12 студент бір-бірімен қол алысып амандасты. Барлығы неше қол алысу болды?`, solution: `Бұл 12 студенттен 2-еуін таңдау: $C_{12}^2 = \\frac{12 \\cdot 11}{2} = 66$`, answer: `66` }
          ],
          selfCheck: [
            "Теру мен орналастырудың басты айырмашылығы неде?",
            "Қандай жағдайда факториал қолданылады?"
          ],
          miniTest: [
            { question: `Тәртіп МЫҢЫЗДЫ болатын комбинация қалай аталады?`, options: [`Теру`, `Орналастыру`, `Жиын`, `Факториал`], correctAnswerIndex: 1 },
            { question: `$5!$ мәні неге тең?`, options: [`20`, `60`, `120`, `24`], correctAnswerIndex: 2 },
            { question: `$C_5^2$ мәнін табыңыз:`, options: [`10`, `20`, `5`, `120`], correctAnswerIndex: 0 },
            { question: `$A_4^2$ мәнін табыңыз:`, options: [`6`, `8`, `12`, `24`], correctAnswerIndex: 2 },
            { question: `Комиссияға 10 адамнан 3 адамды таңдау керек. Бұл қай формулаға жатады?`, options: [`Орын алмастыру`, `Орналастыру`, `Теру`, `Ықтималдық`], correctAnswerIndex: 2 }
          ]
        }
      ]
    }
  ]
};
