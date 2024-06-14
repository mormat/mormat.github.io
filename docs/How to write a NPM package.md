## How to test a npm package from local sources

Register the current project as a package with
```
npm install --save ../path/to/mymodule
```

Install the new registered package global with
```
npm install -g <package-name>
```

In debian, the default installation folder is :
`~/.nvm/versions/node/<node_version>/lib/node_modules/<module_name>`

The current project can also be linked as a global package with
```
npm link
```

To import the previous linked package from another project, 
```
npm link <name-of-package>
```

To create a .tgz file (useful to check what files will be published)
```
npm pack
```
