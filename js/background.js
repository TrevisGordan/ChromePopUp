
chrome.browserAction.onClicked.addListener( function clicky(tab) {

	chrome.windows.create({ tabId: 	tab.id,
							type: 	"popup" });

});

//NotWorking
/*
function windowChange(tab) {
	chrome.windows.update({
							type: 	"normal" });

}
//NotWorking//

chrome.contextMenus.create({
  title: "Change Window",
  onclick: windowChange,
});
*/
//NotWorking//
/*
<protocol>//<hostname>:<port>/<pathname><search><hash>

function windowChange(tab) {
	var pageUrl = window.location.href;

	chrome.tabs.create({
    url: window.location.protocol +  });

}

chrome.contextMenus.create({
  title: "Pop Window",
  onclick: windowURl With Reload, <--- There is the ERROR
});
*/

chrome.contextMenus.create({
  title: "Pop Window",
	contexts:["page"],
  onclick: clicky,
});
/*
function getword(info,tab) {
  console.log("Word " + info.selectionText + " was clicked.");
  chrome.tabs.create({
    url: "http://www.google.com/search?q=" + info.selectionText,
  });
}
chrome.contextMenus.create({
  title: "Search: %s",
  contexts:["selection"],
  onclick: getword,
});
*/
