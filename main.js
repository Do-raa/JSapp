/*let el = document.createElement("h1");    
let att = document.createAttribute("my-attribute") 
let txt = document.createTextNode("hello") 
let cmmt = document.createComment("this is a comment")
el.className = "heading"  
//el.setAttributeNode(att) 
el.setAttribute("my-attribute", "new")
el.appendChild(txt) 
el.appendChild(cmmt)
console.log(el) 
document.body.appendChild(el) */ 

let data = [{
    title : "Article 1",
    parag : "We envision a world where everyone has a role to play, no matter what age, in solving problems for the good of others."
    }, {
    title : "Article 2",
    parag : "Rebecca, The Maasai Changemaker is inspired by the true story of a young girl in Kenya who was alarmed by the signs of climate change in her community. She educated herself about the problem, then galvanized her community and the government to take action and protect the environment. "
    }, {
    title : "Article 3", 
    parag : "It was an anxious and desperate night; my sweat fell in torrents—except at occasional intervals, when it was checked by the violent shriek of a middle-aged white woman with an unchecked ego which swept up the aisles "
    }, {
    title : "Article 4", parag : "Mom works. She never picks me up from school, and two miles is too close for a bus pickup, which is fine by me because I like cutting through the woods. Especially on autumn days, when the air is cool, and the flies and mosquitos are gone, and basketball practice hasn’t begun"
   }, {
    title : "Article 5", parag : "There is a peace at sunrise that surpasses all understanding. It's a renewal. A feeling that anything is possible. I’d like to say I drag myself from the comfort of my bed every day to enjoy sunrise’s splendor, but you wouldn’t believe me and I would be lying."
   }]

data.map(el =>{ 
      let myDiv =  document.createElement("div");  
      let myHeading =  document.createElement("h2");  
      let myParag =  document.createElement("p"); 
    
      let myHeadingText = document.createTextNode(el.title)
      let myParagText = document.createTextNode(el.parag) 
      
      myHeading.appendChild(myHeadingText) 
      myParag.appendChild(myParagText)
      myDiv.className = "articles"  + Math.floor(Math.random() * 1000)

      myDiv.style.backgroundColor = "#F4EAD5" 
      myDiv.style.display = "flex"  
      myDiv.style.flexDirection = "column"
      myDiv. style.margin = "3px"  
      myDiv. style.paddingLeft= "10px" 
      myDiv.style.borderRadius = "10px" 
      myHeading.style. color = "#2B3A55"
      
      document.body.appendChild(myDiv)
      myDiv.appendChild(myHeading) 
      myDiv.appendChild(myParag)
    console.log(myDiv)}) 
   