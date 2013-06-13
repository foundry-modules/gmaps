all: join resolve-namespace minify

include ../../build/modules.mk

MODULE = gmaps
SOURCE_DIR = .
SOURCE_FILES = ${MODULE}.intro.js \
${MODULE}.js \
${MODULE}.controller.js \
${MODULE}.outro.js
