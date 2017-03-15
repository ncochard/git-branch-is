# What is this for? #

`git-branch-is` is a utility that can be used to complement the features provided by [`husky`](https://github.com/typicode/husky).

`husky` allows you to define some scripts such as `precommit` or `prepush`.

	{
		...
		"scripts": {
			"prepush": "npm run test",
			"test": "mocha"
		},
		...
	}

The problem in the example above it that the command `npm run test` will be executed for every `git push`. But you do not want to execute this command if you are working on a branch.

With `git-branch-is`, you can ensure that the command is only executed if you are working on a specific branch.

	{
		...
		"scripts": {
			"prepush": "git-branch-is master && npm run test || git-branch-is-not master",
			"test": "mocha"
		},
		...
	}

# Install #

	npm install --save-dev git-branch-is