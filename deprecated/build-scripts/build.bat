@echo off

echo ==========================================================================
echo ==========================================================================
echo Build Script for my Test HTML Game
echo Compiles HAML, copies over meta files, compiles Angular project, and opens
echo Angular project in Chrome.
pause
echo ==========================================================================
echo ==========================================================================
echo.

cd ./compile
call compile

cd ./build-scripts/test
call test[index]
