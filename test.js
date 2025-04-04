let pronoun1 = ['the', 'our'];
let adj1 = ['great', 'big'];
let noun1 = ['jogger', 'racoon'];
let exten1 = ['.com','.es']

for (let i = 0; i < pronoun1.length; i++) {
  for (let j = 0; j < adj1.length; j++) 
    for (let k = 0; k < noun1.length; k++) {
        for (let l = 0; l < exten1.length; l++) {
      console.log(pronoun1[i] + adj1[j] + noun1[k] + exten1[l]);
    }
  }
}

let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let exten = ['.com','.es']


for (let p of pronoun) {
    for (let a of adj){
        for (let n of noun){
            for (let e of exten){
                console.log(p+a+n+e);
                
            }
        }
    }
}