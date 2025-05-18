
const questions = [
    "誰かの“ちょっとした違和感”に、なぜかすぐ気づいてしまう。",
    "「それには、どんな意味があるんだろう？」と自然に考えてしまう。",
    "気がつくと「私がちゃんとしなきゃ」と思って動いている。",
    "自分の内側にある感情や景色を、“何かの形”にして残したくなる。",
    "ひとつの場所に長くいると、落ち着かないような感覚になる。",
    "誰かに頼られると、断るよりもまず応えようとしてしまう。",
    "物事の流れや全体像が、他の人よりも早く見えてしまう気がする。",
    "「やってみたい！」と思った瞬間、もう動いてしまっていることがある。",
    "「自分が何者なのか、まだはっきりとはわからない」と感じることがある。"
];

const container = document.getElementById('questions');
questions.forEach((q, i) => {
    const div = document.createElement('div');
    div.innerHTML = `<p><strong>Q${i + 1}.</strong> ${q}</p>
    <label><input type="radio" name="q${i}" value="1"> YES</label>
    <label><input type="radio" name="q${i}" value="0"> NO</label>`;
    container.appendChild(div);
});

document.getElementById('quiz-form').onsubmit = function(e) {
    e.preventDefault();
    let score = 0;
    questions.forEach((q, i) => {
        const answer = document.querySelector('input[name="q' + i + '"]:checked');
        if (answer) {
            score += parseInt(answer.value);
        }
    });
    document.getElementById("result").innerHTML = `<p><strong>あなたのYES数は ${score} / ${questions.length} です（仮結果）。</strong></p>`;
};
