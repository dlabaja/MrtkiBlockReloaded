function setToggleState() {
	temporaryTurnOffCheckbox.checked = false;
	chrome.storage.sync.get('mrtkiBlock_skipThisCycle', storage => {
		chrome.storage.sync.set({
	  		mrtkiBlock_skipThisCycle: true,
		});
		chrome.tabs.query({active: true, currentWindow: true}, function (arrayOfTabs) {
			chrome.tabs.reload(arrayOfTabs[0].id);
		});	
	});
}

function setBannedWebs() {
	chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
		chrome.storage.sync.get('mrtkiBlock_bannedWebs', storage => {
			const regex = new RegExp(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/, "gi");
			const groups = regex.exec(tabs[0].url);
			const hostname = groups[4];
			const bannedWebs = storage.mrtkiBlock_bannedWebs ?? [];
			const currentHostnameIndex = bannedWebs.findIndex(web => web === hostname);
			chrome.storage.sync.set({
			  mrtkiBlock_bannedWebs: bannedWebs.includes(hostname) ? bannedWebs.filter(web => web !== hostname) : [...bannedWebs, hostname],
			});   
		});
	});
}

function setNoFullVersion() {
	chrome.storage.sync.get('mrtkiBlock_noFullVersion', storage => {
		chrome.storage.sync.set({
			  mrtkiBlock_noFullVersion: !storage.mrtkiBlock_noFullVersion
		});		   
	}); 
}

function setNoTooltips() {
	chrome.storage.sync.get('mrtkiBlock_noTooltips', storage => {
		chrome.storage.sync.set({
			  mrtkiBlock_noTooltips: !storage.mrtkiBlock_noTooltips
		});		   
	}); 
}

function addIgnoredWord() {
		chrome.storage.sync.get('mrtkiBlock_ignoredWords', storage => {
			const ignoredWords = storage.mrtkiBlock_ignoredWords ?? [];
			const inputValue = ignoredWordInput.value;
			const currentIgnoredWordIndex = ignoredWords.findIndex(word => word === inputValue);
			const newIgnoredWords = ignoredWords.includes(inputValue) ? ignoredWords : [...ignoredWords, inputValue]
			chrome.storage.sync.set({
			  mrtkiBlock_ignoredWords: newIgnoredWords,
			});
			ignoredWordsList.textContent = newIgnoredWords.join(', ');
		});
}

function resetIgnoredWords() {
	chrome.storage.sync.set({
			  mrtkiBlock_ignoredWords: [],
			});
	ignoredWordsList.textContent = [];

}

const temporaryTurnOffCheckbox = document.querySelector("input[name=temporaryOff]");
temporaryTurnOffCheckbox.addEventListener('change', setToggleState);

const bannedWebsCheckbox = document.querySelector("input[name=bannedWebs]");
bannedWebsCheckbox.addEventListener('change', setBannedWebs);

const noFullVersionCheckbox = document.querySelector("input[name=noFullVersion]");
noFullVersionCheckbox.addEventListener('change', setNoFullVersion);

const noTooltipsCheckbox = document.querySelector("input[name=noTooltips]");
noTooltipsCheckbox.addEventListener('change', setNoTooltips);

const addIgnoredWordButton = document.querySelector("button[id=addIgnoredWord]");
addIgnoredWordButton.addEventListener('click', addIgnoredWord);

const resetIgnoredWordsButton = document.querySelector("button[id=resetIgnoredWords]");
resetIgnoredWordsButton.addEventListener('click', resetIgnoredWords);

const ignoredWordsSpan = document.querySelector("span[id=ignoredWordsList]");
const ignoredWordInput = document.querySelector("input[id=ignoredWordsInput]");

chrome.storage.sync.get(null, storage => {
	chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
		const regex = new RegExp(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/, "gi");
		const groups = regex.exec(tabs[0].url);
		const hostname = groups[4];
		const bannedWebs = storage.mrtkiBlock_bannedWebs ?? [];
		bannedWebsCheckbox.checked = storage.mrtkiBlock_bannedWebs.includes(hostname);

	});
	temporaryTurnOffCheckbox.checked = false;
	noFullVersionCheckbox.checked = !!storage.mrtkiBlock_noFullVersion;	
	noTooltipsCheckbox.checked = !!storage.mrtkiBlock_noTooltips;
	const ignoredWords = !!storage.mrtkiBlock_ignoredWords && !!storage.mrtkiBlock_ignoredWords.length ? storage.mrtkiBlock_ignoredWords.join(', ') : ''
	ignoredWordsList.textContent = ignoredWords;	
});
