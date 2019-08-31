@echo off
setlocal

REM Paths relative to any /build-scripts/ subfolder. Defined in param.txt
for /f "delims== tokens=1,2" %%G in (../param.txt) do set %%G=%%H
set "currDir=%CD%"
cd %app%

echo Compiling [browserify]...
call browserify app.js > app-bundle.js
echo Compiling [browserify] complete.
pause

cd %currDir%
echo.
