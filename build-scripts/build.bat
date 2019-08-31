@echo off

echo ==========================================================================
echo ==========================================================================
echo Build Script for my Test HTML Game
echo Compiles HAML then serves Angular project
pause
echo ==========================================================================
echo ==========================================================================
echo.

cd ./compile
call compile[HAML]
call start chrome http://localhost:4200/ --auto-open-devtools-for-tabs --allow-file-access-from-files
call ng serve
