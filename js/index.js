// Iteravtion 1: Names and Input
let hacker1="Andy";
console.log("The driver name is: "+hacker1);
let hacker2="John";
console.log("The navigator's name is "+hacker2)
//
// Iteration 2: Conditionals
if (hacker1.length>hacker2.length){
  console.log("TThe driver has the longest name, it has"+hacker1.length+ "characters"+ hacker1) 
}else if(hacker1.length==hacker2.length){
  console.log("Wow, you both have equally long names, "+hacker2.length+" characters")
  
}else {
  console.log("It seems that the navigator has the longest name, it has" +hacker2.length+"characters.")
}

// Iteration 3: Loops
hacker1.toUpperCase();
var alRev="";
let arr=[...hacker2]
for (let i=1; i<=hacker2.length;i++){
let j=hacker2.length-i;
alRev=alRev+arr[j];
}
console.log(alRev)

if(hacker1<hacker2){console.log("The driver's name goes first")

}else if(hacker1==hacker2){console.log("What?! You both have the same name?")}
else{console.log("Yo, the navigator goes first definitely.")}

/////bono
let paragrafo="What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has surviv1ed not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like) Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\"" ;
let parArra=paragrafo.split(" ");
console.log("In total:"+parArra.length+" words")
let contEt=0;
for (let j=0; j<parArra.length;j++){
if(parArra[j]=="et"){contEt++};


}

console.log("The 'et' we have "+contEt+
' inclusions')





//////palindrome


let phraseToCheck="mamapapamama";


if (phraseToCheck%2===1){
console.log("This is not a palindrome")

}
let halfPhrase=phraseToCheck.length/2;
for (let i=1 ; i<halfPhrase.length;i++){

  if(phraseToCheck[i]!==phraseToCheck[-i]){
    console.log("I am sorry ,what is not a palindrome")
    break
  }else if(i==(halfPhrase-1)){console.log("WOW it's a palindrome")}


}
