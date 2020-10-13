export default function(strings, ...keys) {
	return function(dictionary) {
		let result = [strings[0]];
		keys.forEach((key, i) => {
			result.push(
				dictionary[key],
				strings[i + 1],
			);
		});
		return result.join('');
	};
}