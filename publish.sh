pnpm run wc
read -p 'commit：' commit
git add .
git commit -m "$commit"
nrm use npm
lerna publish
nrm use taobao
read -p 'version:' version
pnpm add vue-transfer-pagination@0.0."$version"
pnpm run serve