@echo off
setlocal

REM Paths relative to any /build-scripts/ subfolder. Defined in param.txt
for /f "delims== tokens=1,2" %%G in (../param.txt) do set %%G=%%H

echo Launching website in Chrome...
pause
echo --------------------------------------------------------------------------
echo.

cd %build%
start index-shortcut --auto-open-devtools-for-tabs --allow-file-access-from-files
