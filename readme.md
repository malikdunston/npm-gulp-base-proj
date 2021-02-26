# npm-gulp-base-proj

        Start a base project with npm, gulp, and browser-sync.

## install on your machine using command line:

        Make sure you have nodejs and node package manager installed on your machine.

###       Download with git... in your project file:

        git init
        git remote add origin https://github.gatech.edu/cdunston3/npm-gulp-base-proj
        git pull origin master

###       then...

        npm install
        gulp

## Notes

### dependencies:

        node.js
        npm
        gulp
        gulp-cache
        browser-sync

        
### steps from scratch (almost), remember --save-dev, and -g:

        npm init
        npm install --save-dev gulp (add params to your needs)
        npm install gulp-cache
        npm install browser-sync


### in your .gitigmore:

        "# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

        # dependencies
        /node_modules
        /.pnp
        .pnp.js

        # testing
        /coverage

        # production
        /build

        # misc
        .DS_Store
        .env.local
        .env.development.local
        .env.test.local
        .env.production.local

        npm-debug.log*
        yarn-debug.log*
        yarn-error.log*"

