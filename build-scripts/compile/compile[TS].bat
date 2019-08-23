@echo off
for /f "delims== tokens=1,2" %%G in (../param.txt) do set %%G=%%H
cd %root%

echo Compiling [TS]...
call rimraf ./build/app
call tsc --build
echo Compiling complete.
pause
echo.
