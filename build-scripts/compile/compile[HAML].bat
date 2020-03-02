@echo off
setlocal

REM Paths relative to any /build-scripts/ subfolder. Defined in param.txt
for /f "delims== tokens=1,2" %%G in (../param.txt) do set %%G=%%H
set "currDir=%CD%"
for %%I in ("%build%") do set "buildPath=%%~dpfI"
cd %src%
set "srcPath=%CD%"

:: Compiles all HAML files listed in src/hamlconfig.txt
echo Compiling [HAML]...
for /f %%J in (./hamlconfig.txt) do call :compileHamlFile %%J
echo Compiling [HAML] complete.
pause

cd %currDir%
echo.
exit /b 0


:compileHamlFile
    set "hamlPath=%~dpf1"
    set "htmlOut=%hamlPath:.haml=%"
    set "fileName=%~nx1"

    echo -- Compiling [%fileName%]...
    call haml %hamlPath% %htmlOut%
    exit /b 0
