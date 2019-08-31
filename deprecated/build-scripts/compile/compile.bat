@echo off
setlocal

echo Preprocessor Compiler
echo Compiles all preprocessing languages and copies meta assets.
pause
echo.

call compile[HAML]
call copy[meta]

echo Preprocessor Compiler complete.
pause
echo --------------------------------------------------------------------------
echo.
