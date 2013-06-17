all: join-script-files resolve-namespace minify-script

include ../../build/modules.mk

MODULE = gmaps
SOURCE_SCRIPT_FOLDER = .
SOURCE_SCRIPT_FILES = ${MODULE}.intro.js \
${MODULE}.js \
${MODULE}.controller.js \
${MODULE}.outro.js
