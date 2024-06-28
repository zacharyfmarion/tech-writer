console.log('hello world');

// Change
console.log({
	REPO_PATH: process.env.REPO_PATH,
	PR_NUMBER: process.env.PR_NUMBER,
	COMMIT_SHA: process.env.COMMIT_SHA
})