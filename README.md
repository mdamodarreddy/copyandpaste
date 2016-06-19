# copyandpaste
before using this you need to install following dependencies
npm install gulp --save-dev
npm install gulp-jshint --save-dev
npm install gulp-cleanup --save-dev
npm install yargs --save-dev

This is mainly created copy folder from source and paste in destnation given source.

Here i wrote two tasks to perform 
1. copy-all task will copy folder from given source and paste in destination
we have to rung follwing cmd command

gulp copy-all --srcpath e:\ngACTsV1\public\296 --destpath h:\paste\296

--srcpath means copy the folder from where

--destpath means where to paste the folder.

if in case copied folder is in destination folder allready it will delete and paste copied folder.
this feature is in built in.

2. copy task will copy only html folder from given source and paste in destination
we have to rung follwing cmd command

gulp copy --srcpath e:\ngACTsV1\public\296 --destpath h:\paste\296

--srcpath means copy the folder from where

--destpath means where to paste the folder.

if in case copied folder is in destination folder allready it will delete and paste copied folder.
this feature is in built in.

Note while running copy-all command if you not specified any folder name then it will copy all the folder from the source and paste in destination.
gulp copy-all --srcpath e:\ngACTsV1\public --destpath h:\paste
