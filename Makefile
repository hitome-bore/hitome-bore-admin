export NODE_PATH=test/testSupport:public/js:local_modules:system/helpers:game/backend/helpers:config:utils
REPORTER ?= dot

#	How to test modules:
#
#	Modules are tested by running 'npm test' in their folder.
#	E.g.:
#		cd ./local_modules/hoge-extensions
#		npm test
#

#Non-module tests:
alltests := find . -name "*.js" | egrep -v '/node_modules/' | egrep '/test?/'


#Run all tests
test:
	@NODE_ENV=localTest ./node_modules/.bin/mocha $$($(alltests)) -r expect.js -R spec

#'coverage' and 'doc' are not in this list (since they build something)
.PHONY: test