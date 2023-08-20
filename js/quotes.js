const quotes = [
  {
    quote: "살다보면 좋은 일도 있도 슬픈 일도 있어. 그게 인생이야",
    author: "-주사 맞기 싫어 도망가는 흰둥이에게-",
  },
  {
    quote:
      "한 번 먹어봐! 맛있어! 같이 초코비 먹을 수 있는 거 작지만 확실한 행복이잖아! 안 그래?",
    author: "-'초시공! 태풍을 부르는 나의 신부'에서 어른 짱구가 다미누나에게-",
  },
  {
    quote:
      "아! 5살 짱구야! 이 미래는 오직 너만의 거야! 네가 원하는 대로 살아! 그럼!",
    author: "-'초시공! 태풍을 부르는 나의 신부'에서 어른 짱구가 5살 짱구에게-",
  },
  {
    quote:
      "아무리 그래도 넌 악당에 안 어울려! 평화를 지키는 떡잎마을 방범대원이니깐",
    author: "-'폭풍을 부르는 석양의 떡잎마을 방범대'에서 철수에게-",
  },
  {
    quote:
      "아저씨, 여기 있어요 다같이 사이좋게 먹으면 맛있는건 훨씬 더 맛있거든요!",
    author: "-'엄청 맛있어! B급 음식 서바이벌!'에서 악당 로열 황태자에게-",
  },
  {
    quote: "대신 일할 사람은 있어도 대신할 아빠는 없으니깐",
    author: "-짱구아빠, 신형만-",
  },
  {
    quote:
      "아냐, 우린 세계를 지키는 히어로 따위가 아니야. 어린 아이들에게 미래를 살아가게 해주고 싶은 아버지다.",
    author: "-'부리부리 3분 대작전'에서 짱구아빠가 -",
  },
  {
    quote: "정의의 반대말은 악이 아닌 또 다른 정의인거야.",
    author: "-'암흑 마왕 대추적'에서 짱구아빠가-",
  },
  {
    quote:
      "계획은 무슨! 계획대로 안 되는 게 인생이란 거야. 똑똑히 기억해 둬라.",
    author: "-'태풍을 부르는 노래하는 엉덩이 폭탄!'에서 짱구아빠가-",
  },
  {
    quote:
      "엄마가 강한 사람은 약한 사람을 도와주는 거라고 말했잖아요. 하지만 서로가 서로를 도우면 더 좋을 것 같아서요.",
    author: "-'태풍을 부르는 황금 스파이 대작전'에서 짱구가-",
  },
];

const quote = document.querySelector("#quote p:first-child");
const author = document.querySelector("#quote p:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
//quote 길이를 0~1 사이의 부동소숫점 랜덤값이랑 곱해서 나온값에, 소수점을 버리고, array 접근함

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
