mkdir 2-business/$1

cd 2-business/$1

yarn init --yes

yarn add --dev typescript
yarn add --dev @types/node
yarn add --dev jest
yarn add --dev ts-jest

tsc --init --rootDir src --outDir lib

yarn ts-jest config:init

mkdir src

touch src/index.ts