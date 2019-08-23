@echo off
for /f "delims== tokens=1,2" %%G in (../param.txt) do set %%G=%%H

echo Updating [JQuery]...
call npm install --save --prefix %lib% jquery
echo Update complete.
pause
echo.
