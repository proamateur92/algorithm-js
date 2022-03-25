// 완주하지 못한 선수

var answer = '';

const participant = ['leo', 'kiki', 'eden'];
const completion = ['eden', 'kiki'];
const map = new Map();

for (let i = 0; i < participant.length; i++) {
  let a = participant[i];
  let b = completion[i];

  map.set(a, (map.get(a) || 0) + 1);
  map.set(b, (map.get(b) || 0) - 1);
}

for (let [k, v] of map) {
  if (v > 0) answer = k;
}

console.log(answer);
