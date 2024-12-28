let beginStory= "Soğuk bir kış sabahıydı. Elif, köyün çıkışındaki eski değirmene gitmek üzere  hazırlığını yapmıştı."+
 "Herkes o değirmenin lanetli olduğuna inanıyordu, ama Elif buna aldırış etmeden oraya gitmeye kararlıydı."+
 "Gidip görmeden bu söylentilerin doğru olup olmadığını asla öğrenemezdi."+
 "Değirmen yolunda yürürken, rüzgarın uğultusu kulağında fısıldayan bir ses gibi geliyordu."+
"Birden yere düşmüş eski bir anahtar buldu. Anahtarın kime ait olduğunu ya da neyi açtığını bilmiyordu, ama onu cebine koydu ve yoluna devam etti."+
"Değirmenin kapısına geldiğinde, kapı hafifçe aralık duruyordu. İçeriye adım atıp atmamak konusunda bir an tereddüt etti. O sırada içeriden hafif bir hışırtı duydu."
if(localStorage.beginStory){
    beginStory = localStorage.beginStory;
}
alert(beginStory);
const endOfStory = prompt("Hikayeyi nasıl devam ettirmek istersiniz?");

const newStory = beginStory + " " + endOfStory;

localStorage.beginStory = newStory;
console.log(newStory);


