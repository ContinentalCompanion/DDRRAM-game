@echo off
setlocal

REM Paths relative to any /build-scripts/ subfolder. Defined in param.txt
for /f "delims== tokens=1,2" %%G in (../param.txt) do set %%G=%%H
set "currDir=%CD%"
cd %root%

echo Compiling [SCSS]...
call sass --update src:build
echo Compiling [SCSS] complete.
pause

cd %currDir%
echo.
