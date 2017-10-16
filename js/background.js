
chrome.browserAction.onClicked.addListener( function(tab) {

	chrome.windows.create({ tabId: 	tab.id,
							type: 	"popup" });

});

//NotWorking
function windowChange(tab) {
	chrome.windows.update({
							type: 	"normal" });

}
//NotWorking//

chrome.contextMenus.create({
  title: "Change Window",
  onclick: windowChange,
});


function getword(info,tab) {
  console.log("Word " + info.selectionText + " was clicked.");
  chrome.tabs.update({
    url: "http://www.google.com/search?q=" + info.selectionText,
  });
}
chrome.contextMenus.create({
  title: "Search: %s",
  contexts:["selection"],
  onclick: getword,
});
