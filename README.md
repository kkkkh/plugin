# plugin
## pre
node v14.15.1
npm v6.14.8

npm install -g pnpm@next-7
npm install -g lerna
npm install -g nrm

## Project setup
```
pnpm install
pnpm run serve
pnpm run lib-001 ...
```

## publish
```
sh sh.sh
```
or 

```
read -p 'commit：' commit
git add .
git commit -m "$commit"
nrm use npm
lerna publish
nrm use taobao
```

