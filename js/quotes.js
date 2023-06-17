const quotes = [
  {
    quote:
      "세상에서 가장 중요한 일들 대부분은 아무도 도와주지 않을 때에도 계속 노력한 사람들에 의해 이루어졌다. ",
    author: "데일 카네기",
  },
  {
    quote:
      "열정은 사람을 현재에 완전히 가둬서 그에게 시간은 매 순간이 단절된 현재의 연속이 된다. ",
    author: "수 핼펀",
  },
  {
    quote: "겨울이 당신에게 여름내내 무얼 했느냐고 묻는 날이 꼭 올 것이다.",
    author: "헨리클레이",
  },
  {
    quote:
      "만약 가슴안에서 '나는 그림에 재능이 없는 걸' 이라는 음성이 들려오면, 반드시 그림을 그려보아야 한다. 그 소리는 당신이 그림을 그릴 때 잠잠해진다. ",
    author: "빈센트 반 고흐",
  },
  {
    quote: "희망이 있는 곳에는 반드시 시련이 있는 법이다. ",
    author: "무라카미 하루키 ",
  },
  {
    quote:
      "만약 당신이 한번도 두렵거나 굴욕적이거나 상처입은 적이 없다면, 당신은 아무런 위험도 감수하지 않은 것이다. ",
    author: "줄리아 소렐 ",
  },
  {
    quote:
      "조금도 위험을 감수하지 않는 것이 인생에서 가장 위험한 일이라고 생각한다.",
    author: "오프라 윈프리 ",
  },
  {
    quote: "성공이란 열정을 잃지 않고 실패를 거듭할 수 있는 능력이다. ",
    author: "윈스턴 처칠",
  },
  {
    quote: "나는 내가 더 노력할수록 운이 더 좋아진다는 것을 발견했다. ",
    author: "토마스제퍼슨",
  },
  {
    quote:
      "문제점을 찾지말고 해결책을 찾아라. 사람은 누구나 자기가 할 수 있다고 믿는 것 이상의 것을 할 수 있다. 할 수 있다고 생각하면 할 수 있고, 할 수 없다고 생각하면 할 수 없다. ",
    author: "헨리포드",
  },
];
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;