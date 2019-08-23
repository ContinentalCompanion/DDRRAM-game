@echo off
for /f "delims== tokens=1,2" %%G in (../param.txt) do set %%G=%%H
cd %src%

echo Compiling [SASS]...
call sass --update global-styles:../build/global-styles
echo Compiling complete.
pause

cd ../
echo.
