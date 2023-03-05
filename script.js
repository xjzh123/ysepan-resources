console.log("%c脚本加载成功", "color: #fff; border-radius: 5px; padding: 10px 25px;background: linear-gradient(315deg, #1fd1f9 0%, #b621fe 74%)")

console.log("本脚本由4n0n4me制作。")

/* Custom icon */

let link = document.createElement('link')
link.href = 'https://things-ysepan-resources.netlify.app/icon.png'
link.rel = 'icon'
document.head.appendChild(link)

/* No warning popups */

function removeWarningPopups() {
    document.querySelectorAll('#menuList ul > li > a.new[data-url]').forEach(el => {
        el.href = el.dataset.url
        delete el.dataset.url
    })
}

let observer = new MutationObserver(removeWarningPopups)

observer.observe(document.getElementById('menuList'), { childList: true, subtree: true })
