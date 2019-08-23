@echo off
for /f "delims== tokens=1,2" %%G in (../param.txt) do set %%G=%%H
cd %app%

echo Compiling [browserify]...
call browserify app.js > app-bundle.js
echo Compiling complete.
pause

cd ../../
echo.
