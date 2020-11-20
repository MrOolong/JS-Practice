function retrieveMajor(semver) {
	var majorSplit = semver.split(".");
	var major = majorSplit[0];
	console.log(major);
	return major;
}

function retrieveMinor(semver) {
	var minorSplit = semver.split(".");
	var minor = minorSplit[1];
	console.log(minor);
	return minor;
}

function retrievePatch(semver) {
	var patchSplit = semver.split(".");
	var patch = patchSplit[2];
	console.log(patch);
	return patch;
}

// e.g. retrieveMajor("1.2.3") returns 1
