@echo off
setlocal

REM Paths relative to any /build-scripts/ subfolder. Defined in param.txt
for /f "delims== tokens=1,2" %%G in (../param.txt) do set %%G=%%H
for %%I in ("%build%") do set "buildPath=%%~dpfI"
set "currDir=%CD%"
cd %src%

echo Copying [meta] files...
call copyfiles -f meta/** %buildPath%
echo Copying [meta] complete.
pause

cd %currDir%
echo.
