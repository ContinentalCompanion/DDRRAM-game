@echo off
setlocal

REM Paths relative to any /build-scripts/ subfolder. Defined in param.txt
for /f "delims== tokens=1,2" %%G in (../param.txt) do set %%G=%%H
set "currDir=%CD%"
for %%I in ("%build%") do set "buildPath=%%~dpfI"
cd %src%
set "srcPath=%CD%"

echo Compiling [HAML]...
for /f %%J in (./hamlconfig.txto call :compileHamlFile %%J
echo Compiling [HAML] complete.
pause

cd %currDir%
echo.
exit /b 0


:compileHamlFile
    :: Compiles all files in /src to /%buildpath%
    set "hamlPath=%~dpf1"
    call set "htmlOut=%%hamlPath:%srcPath%=%%"
    call set "htmlOut=%buildPath%%htmlOut:.haml=%"
    set "fileName=%~nx1"
    for %%K in ("%htmlOut%\..") do set "buildDir=%%~dpfK"

    echo -- Compiling [%fileName%]...
    IF NOT EXIST %buildDir% MD %buildDir%
    call haml %hamlPath% %htmlOut%
    exit /b 0
