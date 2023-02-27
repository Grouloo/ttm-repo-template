mkdir 1-enterprise/$1

cd 1-enterprise/$1

yarn init

#yarn config set name @ttm/$1
#yarn config set main lib/index.js
#yarn config set scripts --json '{"build": "tsc --watch"}'

yarn add --dev typescript
yarn add --dev @types/node

tsc --init --rootDir src --outDir lib

mkdir src

touch src/index.ts