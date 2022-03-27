/*メタディスクリプションとタイトルタグ変更。yotpoのレビュー量を含める。(以前、会社レビュー用に書いたもので、現在はすでにリリースされています）
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

//メタディスクリプションとタイトルタに最安値を含めるように変更する。(https://skyticket.jp/rentacar/kyushu/fukuoka/hakata_station/) 最安値が表示されない場合は、他のタグを表示します
const lowestPrice = document.querySelector(".-price").textContent
if (lowestPrice.includes('¥')){
document.querySelector("meta[name='description']").setAttribute("content",`博多駅(福岡)の格安レンタカー ${lowestPrice}〜！博多駅で最安値のレンタカーを比較・予約。当日予約や乗り捨て、24時間営業など幅広いプランを掲載。口コミやおすすめ検索からかんたんに予約ができます！`)
document.title = ("content",`博多駅(福岡)の 格安レンタカー比較予約 ${lowestPrice}`)
}
else {
document.querySelector("meta[name='description']").setAttribute("content","博多駅(福岡)の格安レンタカーが最大70%オフ！博多駅で最安値のレンタカーを比較・予約。当日予約や乗り捨て、24時間営業など幅広いプランを掲載。口コミやおすすめ検索からかんたんに予約ができます！")
document.title = ("content","博多駅(福岡)の 格安レンタカー比較予約｜スカイチケット")
}

//レンタカー乗り捨てクリック時のボタン色を変更
const oneWayBox = document.querySelector(".return_way_checkbox")
const searchButton = document.querySelector(".js-btn_search_submit.btn-type-primary")
function changeButtonColor(){
searchButton.style.background="red"
searchButton.textContent="乗り捨て検索!!!"
}
oneWayBox.addEventListener("click",changeButtonColor)

//レンタカートップでスクロールする最安値を変更
const lowestPrice = document.querySelector(".-price")
document.addEventListener("scroll",function () {
	lowestPrice.style.fontSize="60px"
  lowestPrice.style.color="red"
})
