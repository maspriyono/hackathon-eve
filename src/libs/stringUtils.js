const NAME_MIN_LENGTH = 3;

export const truncateString = (string, length) => {
	if (string && string.length > length) {
	  return string.substring(0, length) + '...';
	} else {
	  return string;
	}
}

export const extractUniqueHashtags = (string) => {
	try {

		if (string === undefined || string === null) {
			throw "Text cannot be null!"
		};

		var regexp = /[#]+[A-Za-z0-9_]+/g;
		const hashtags = string.match(regexp);

		return [...new Set(hashtags)]; // Make sure it is unique
	}

	catch (error) {
		console.log('error', error);
	}
}

export const checkName = (name='') => {
	if (name.length < NAME_MIN_LENGTH) {
		return false;
	} else {
		return !!name.match(/^[a-zA-Z0-9]+?[a-zA-Z0-9\_\-\"\']+?$/);
	}
}

export const getMentions = (text='') => {
	const splits = text.split('@');
	splits.shift();

	const mentions = [];

	for (let split of splits) {
		let username = split.substr(0, NAME_MIN_LENGTH);
		if (!checkName(username)) {
			continue;
		}

		for (let idx = NAME_MIN_LENGTH; idx < split.length; idx++) {
			const newUsername = username + split[idx];
			if (checkName(newUsername)) {
				username = newUsername;
			} else {
				break;
			}
		}
		mentions.push(username);
	}

	return mentions;
}
