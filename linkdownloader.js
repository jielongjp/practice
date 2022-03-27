//ページ内リンクをCSVにダウンロードする
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
    } else if (!link.href.includes(domainName)) {
      externalLink++
    }
    return link.href
  })
  const linkCSV = linkList.join('\n')
  const link = window.document.createElement('a')
  link.setAttribute('href', 'data:text/csv;charset=utf-8,' + encodeURI(linkCSV))
  link.setAttribute('download', 'ページリンク.csv')
  link.click()
  return `リンク数: ${linkList.length}, ${emptyLink} 空, ${internalLink} 内部, ${externalLink} 外部`
}
linkDownload()
