
const questions = [
    "誰かの“ちょっとした違和感”に、なぜかすぐ気づいてしまう。|resonant",
    "「それには、どんな意味があるんだろう？」と自然に考えてしまう。|seeker",
    "気がつくと「私がちゃんとしなきゃ」と思って動いている。|guardian",
    "自分の内側にある感情や景色を、“何かの形”にして残したくなる。|expressive",
    "ひとつの場所に長くいると、落ち着かないような感覚になる。|free",
    "誰かに頼られると、断るよりもまず応えようとしてしまう。|devoted",
    "物事の流れや全体像が、他の人よりも早く見えてしまう気がする。|guiding",
    "「やってみたい！」と思った瞬間、もう動いてしまっていることがある。|impulsive",
    "「自分が何者なのか、まだはっきりとはわからない」と感じることがある。|void",
    "誰かが悲しそうな顔をしていると、自分の心まで沈んでしまう。|resonant",
    "わかりやすい答えよりも、「本当のところはどうなのか？」を知りたくなる。|seeker",
    "何かを任されると、「きちんとやらなきゃ」と気が引き締まる。|guardian",
    "言葉にできない気持ちを、音や絵や空気感で表したくなることがある。|expressive",
    "スケジュールがびっしりだと、息が詰まるような気がする。|free",
    "「あの人のためになるなら…」と、自分のことを後回しにする癖がある。|devoted",
    "会話の中で「この人が本当は何を求めてるのか」が、ふと見えてしまうことがある。|guiding",
    "考える前に身体が動いている──そんな自分に気づくことがある。|impulsive",
    "楽しいはずなのに、ふと心が遠くなる瞬間がある。|void",
    "人と長く一緒にいると、どっと疲れてしまうことがある。|resonant",
    "「なぜ私はここにいるのか」そんな問いがふと心に浮かぶ。|seeker",
    "誰かに迷惑をかけるくらいなら、自分が我慢したほうがいいと思ってしまう。|guardian",
    "普通にしているつもりでも、「個性的だね」と言われることがある。|expressive",
    "「ちゃんとしなきゃ」と思うと、なぜか心がかたくなる。|free",
    "人の心の痛みを、自分のことのように感じてしまう。|devoted",
    "誰かの話を聞いているうちに、「あ、この人はここでつまずいてるな」とわかることがある。|guiding",
    "ひとつのことに夢中になると、時間や予定を忘れてしまう。|impulsive",
    "何をしても満たされないような、空っぽな感覚にとらわれることがある。|void",
    "空気がピリッとしていると、心まで緊張してしまう。|resonant",
    "人の言葉の奥にある「本音」や「矛盾」にすぐ気づいてしまう。|seeker",
    "誰かに頼られると、「期待に応えなきゃ」と感じてしまう。|guardian",
    "「言葉にならない何か」を、伝えたくてたまらなくなる瞬間がある。|expressive",
    "まわりに人がいても、どこか孤独を感じることがある。|void"
];

const typeScores = {
    resonant: 0,
    seeker: 0,
    guardian: 0,
    expressive: 0,
    free: 0,
    devoted: 0,
    guiding: 0,
    impulsive: 0,
    void: 0
};

const typeLabels = {
    resonant: "共鳴の魂",
    seeker: "探求の魂",
    guardian: "守護の魂",
    expressive: "表現の魂",
    free: "自由の魂",
    devoted: "献身の魂",
    guiding: "導きの魂",
    impulsive: "衝動の魂",
    void: "空白の魂"
};

const resultTexts = {
    resonant: "あなたの魂は「共鳴の魂」──静かに誰かと響き合い、心にそっと灯りをともす役割を持っています。",
    seeker: "あなたの魂は「探求の魂」──真理や意味を求め、世界と自分の仕組みを見つめつづける存在です。",
    guardian: "あなたの魂は「守護の魂」──誰かを支え、安心をつくる“土台”のような役割を担っています。",
    expressive: "あなたの魂は「表現の魂」──感性のままに生き、まだ言葉にならないものを形にしていく存在です。",
    free: "あなたの魂は「自由の魂」──風のように軽やかに、どこまでも“自分で選ぶ”人生を歩んでいきます。",
    devoted: "あなたの魂は「献身の魂」──誰かの痛みにそっと寄り添い、癒しの力を静かに差し出せる人です。",
    guiding: "あなたの魂は「導きの魂」──道の先に光を見いだし、人に気づきを与えるために存在しています。",
    impulsive: "あなたの魂は「衝動の魂」──情熱の火を抱え、変化を起こす“目覚めのエネルギー”を持っています。",
    void: "あなたの魂は「空白の魂」──まだ言葉にならない深い静けさの中に、“はじまり”を秘めた存在です。"
};

const quizDiv = document.getElementById("questions");

questions.forEach((line, i) => {
    const [text, type] = line.split("|");
    const div = document.createElement("div");
    div.innerHTML = `<p><strong>Q${i + 1}.</strong> ${text}</p>
        <label><input type="radio" name="q${i}" value="1"> YES</label>
        <label><input type="radio" name="q${i}" value="0"> NO</label>`;
    quizDiv.appendChild(div);
});

document.getElementById("quiz-form").onsubmit = function(e) {
    e.preventDefault();
    Object.keys(typeScores).forEach(k => typeScores[k] = 0);
    questions.forEach((line, i) => {
        const [, type] = line.split("|");
        const answer = document.querySelector(`input[name="q${i}"]:checked`);
        if (answer && answer.value === "1") {
            typeScores[type]++;
        }
    });
    const topType = Object.entries(typeScores).sort((a, b) => b[1] - a[1])[0][0];
    document.getElementById("result").innerHTML = `
        <h2>あなたの魂タイプ：${typeLabels[topType]}</h2>
        <p>${resultTexts[topType]}</p>`;
};
