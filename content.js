chrome.runtime.onMessage.addListener((message) => {
	if (message.type === 'pip') {
		const videos = document.querySelectorAll('video');

		videos[message.i].requestPictureInPicture();
	}
});

setInterval(() => {
	const videos = document.querySelectorAll('video');

	chrome.runtime.sendMessage({
		'type': 'videos_update',
		videos: videos.length
	});

}, 2000);
