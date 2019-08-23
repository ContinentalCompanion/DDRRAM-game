@echo off
for /f "delims== tokens=1,2" %%G in (../param.txt) do set %%G=%%H
cd %src%

echo Copying meta files from [meta]...
call copyfiles -f meta/** ../build
echo Copying complete.
pause

cd ../
echo.
