//htagでlogまとめ
function hTagLog() {
const h = ["h1","h2","h3","h4","h5","h6"]
let headings = []
for (let i=0;i<h.length;i++) {
  const elem = document.querySelector(h[i])
  if (elem)
    headings.push(elem.textContent)
  console.log(headings.join("\n"))
  }
}
hTagLog()

//alt-textでlogまとめ
function altTextLog () {
  let imgs = document.images,alts=[]
  for (let i=0;i<imgs.length;i++) {
      alts.push(imgs[i].getAttribute("alt"))
  }
  console.log(alts.join("\n"))
}
altTextLog()
