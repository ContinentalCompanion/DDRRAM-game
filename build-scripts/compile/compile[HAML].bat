@echo off
for /f "delims== tokens=1,2" %%G in (../param.txt) do set %%G=%%H
cd %src%

echo Compiling [HAML]...
call haml index.html.haml ../build/index.html
echo Compiling complete.
pause

cd ../
echo.
