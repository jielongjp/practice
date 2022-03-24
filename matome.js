

/*メタディスクリプションとタイトルタグ変更。(以前、会社レビュー用に書いたもので、現在はすでにリリースされています）
https://adven.backlog.jp/view/GROWTH-1299#comment-137099365
*/
if (document.querySelector(".reviews-amount")){
const reviewsAmount = document.querySelector(".reviews-amount").textContent
document.querySelector("meta[name='description']").setAttribute("content",`スカイレンタカーの評判・口コミを比較！実際の利用者から${reviewsAmount}の口コミが確認可能！サービス利用の感想から設備や車両までレビュー内容を絞り込んで検索できる。スカイレンタカーおすすめのレンタカープランと人気車種を簡単に比較、予約するならスカイチケット！`)
document.title = ("content",`スカイレンタカーの博多駅店の評判・口コミ - ${reviewsAmount}`)
}
else {
document.querySelector("meta[name='description']").setAttribute("content","スカイレンタカーの評判・口コミを比較！実際の利用者からの口コミが確認可能！サービス利用の感想から設備や車両までレビュー内容を絞り込んで検索できる。スカイレンタカーおすすめのレンタカープランと人気車種を簡単に比較、予約するならスカイチケット！")
document.title = ("content","スカイレンタカーの評判・口コミ")
}

//レンタカー乗り捨てクリック時のボタン色を変更 (イベントリスナーの練習)　
const oneWayBox = document.querySelector(".return_way_checkbox")
const searchButton = document.querySelector(".js-btn_search_submit.btn-type-primary")
function changeButtonColor(){
searchButton.style.background="red"
searchButton.textContent="乗り捨て検索!!!"
}
oneWayBox.addEventListener("click",changeButtonColor)

//スクロールする最安値を変更
const lowestPrice = document.querySelector(".-price")
document.addEventListener("scroll",function () {
	lowestPrice.style.fontSize="60px"
  lowestPrice.style.color="red"
})

//seo業務のためたまに作ったscript
//ページ内リンクをダウンロードする
function linkDownload() {
  const linksArr = Array.from(document.querySelectorAll('a'))
  const domainName = window.origin
  let emptyLink = 0
  let externalLink = 0
  let internalLink = 0
  const linkList = linksArr.map(function (link) {
    if (link.href.length === 0) {
      emptyLink++
    } else if (link.href.includes(domainName)) {
      internalLink++
    } else if (!link.href.match(/^${domainName}/)) {
      externalLink++
    }
    return link.href
  })
  const linkCSV = linkList.join('\n').replace(/#.*/g, '')
  const link = window.document.createElement('a')
  link.setAttribute('href', 'data:text/csv;charset=utf-8,' + encodeURI(linkCSV))
  link.setAttribute('download', 'ページリンク.csv')
  link.click()
  return `リンク数: ${linkList.length} ${emptyLink} 空, ${internalLink} 内部, ${externalLink} 外部`
}
linkDownload()

//上記と同じですがリンク数アラートのみ
function linkAlert() {
  const linksArr = Array.from(document.querySelectorAll('a'))
  const domainName = window.origin
  let emptyLink = 0
  let externalLink = 0
  let internalLink = 0
  const linkList = linksArr.map(function (link) {
    if (link.href.length === 0) {
      emptyLink++
    } else if (link.href.includes(domainName)) {
      internalLink++
    } else if (!link.href.match(/^${domainName}/)) {
      externalLink++
    }
  })
  alert(`リンク数: ${linkList.length} ${emptyLink} 空, ${internalLink} 内部, ${externalLink} 外部`)
}
linkAlert()

//alt-textでlogまとめ
function altTextLog () {
  let imgs = document.images,alts=[]
  for (let i=0;i<imgs.length;i++) {
      alts.push(imgs[i].getAttribute("alt") || "altなし")
  }
  console.log(alts.join("\n"))
}
altTextLog()

//htagでalertまとめ does not work
function hTagAlert() {
const h = ["h1","h2","h3","h4","h5","h6"]
let headings = []
for (let i=0; i<h.length;i++) {
   headings[i] = document.querySelector(h[i]).textContent
  }
 console.log(headings[i].join("\n"))
}
hTagAlert()

//htagでlogまとめ
function hTagLog() {
const h = ["h1","h2","h3","h4","h5","h6"]
let headings = []
for (let i=0; i<h.length;i++) {
  const elem = document.querySelector(h[i])
  if (elem)
    headings.push(elem.textContent)
  console.log(headings.join("\n"))
  }
}
hTagLog()


//switchの練習
const randomNumber = Math.floor(Math.random() * 6);
let menu = ''
switch (randomNumber) {
  case 0:
    menu = 'Curry'
    break;
  case 1:
    menu = 'Tonkatsu'
    break;
  case 2:
    menu = 'Pasta'
    break;
  case 3:
   menu = 'Lentil soup'
    break;
  case 4:
    menu = 'Stirfry'
    break;
  case 5:
    menu = 'disanxian'
    break;
}
console.log(`Today's lunch:
 ${menu}`);

