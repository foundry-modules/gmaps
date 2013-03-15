include ../../build/modules.mk

MODULE = gmaps
FILENAME = ${MODULE}.js
SOURCE =  ${MODULE}.intro.js \
${MODULE}.js \
${MODULE}.controller.js \
${MODULE}.outro.js

PRODUCTION = ${PRODUCTION_DIR}/${FILENAME}
DEVELOPMENT = ${DEVELOPMENT_DIR}/${FILENAME}

all:
	cat ${SOURCE} | ${RESOLVE_NAMESPACE} > ${DEVELOPMENT}
	${UGLIFYJS} ${DEVELOPMENT} > ${PRODUCTION}
