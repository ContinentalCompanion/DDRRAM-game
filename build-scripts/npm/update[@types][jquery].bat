@echo off
for /f "delims== tokens=1,2" %%G in (../param.txt) do set %%G=%%H

echo Updating [@types/jquery]...
call npm install --save --prefix %lib% @types/jquery
echo Update complete.
pause
echo.
