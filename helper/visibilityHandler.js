export default function visibilityHandler(setData) {
	return (visibility) => {
		if (visibility) {
			setData(visibility);
		} else {
			setData((data) => !data);
		}
	};
}
