@echo off

echo Preprocessor Compiler
echo Compiles all preprocessing languages and copies meta assets.
pause
echo.

call compile[HAML]

cd ./build-scripts/compile
call compile[SASS]

cd ./build-scripts/compile
call compile[TS]

cd ./build-scripts/compile
call compile[browserify]

cd ./build-scripts/compile
call copy[meta]

echo Compiling complete.
pause
echo --------------------------------------------------------------------------
echo.
