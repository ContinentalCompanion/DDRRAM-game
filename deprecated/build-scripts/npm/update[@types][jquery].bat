@echo off
setlocal

REM Paths relative to any /build-scripts/ subfolder. Defined in param.txt
for /f "delims== tokens=1,2" %%G in (../param.txt) do set %%G=%%H

echo Updating [@types/jquery]...
call npm install --save --prefix %node% @types/jquery
echo Update complete.
pause
echo.
