const drawButtons = (videos) => {
	const ul = document.querySelector('ul');

	while (ul.firstChild) {
		ul.removeChild(ul.firstChild);
	}

	for (let i = 0; i < videos; i += 1) {
		const li = document.createElement('li');
		const button = document.createElement('button');

		button.innerText = `Video #${i}`;

		button.addEventListener('click', () => {
			chrome.tabs.query({ active: true, currentWindow: true },
				(tabs) => chrome.tabs.sendMessage(tabs[0].id, { type: 'pip', i }));
		});

		li.appendChild(button);
		ul.appendChild(li);
	};
}

chrome.runtime.onMessage.addListener((message) => {
	if (message.type === 'videos_update') {
		drawButtons(message.videos);
	}
});
