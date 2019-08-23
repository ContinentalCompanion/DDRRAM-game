@echo off

echo ==========================================================================
echo ==========================================================================
echo Build Script for my Test HTML Game
echo Updates SASS, compiles HAML, compiles TS, and opens index.html in Chrome
pause
echo ==========================================================================
echo ==========================================================================
echo.

cd ./compile
call compile

cd ./build-scripts/test
call test[index]
