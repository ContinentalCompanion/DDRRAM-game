@echo off
for /f "delims== tokens=1,2" %%G in (../param.txt) do set %%G=%%H

echo Updating [common-js]...
call npm install --save --prefix %lib% common-js
echo Update complete.
pause
echo.
