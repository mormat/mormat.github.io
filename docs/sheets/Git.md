init all submodules

```
git submodule update --init --recursive
```

update all submodules
```
git submodule update --remote --recursive
```

fetch remote branch
```
git checkout --track origin/dev
```

create tags
```
git tag 2.0.0
git push origin --tags
```

to publish a package
```
npm publish
```

If your repository has a scope, you need to adjust the publish command slightly
```
npm publish --access public
```

