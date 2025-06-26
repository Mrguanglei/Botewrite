@echo off
SETLOCAL ENABLEEXTENSIONS

REM Check if argument is dev mode
SET MODE=%1
IF "%MODE%"=="--dev" GOTO DEV
IF "%MODE%"=="-d" GOTO DEV
IF "%MODE%"=="dev" GOTO DEV
IF "%MODE%"=="development" GOTO DEV

:PROD
echo Starting BoteWrite in [PRODUCTION] mode...
start "BoteWrite Backend" cmd /c "uv run server.py"
start "BoteWrite Web UI" cmd /c "cd web && pnpm start"
REM Wait for user to close
GOTO END

:DEV
echo Starting BoteWrite in [DEVELOPMENT] mode...
start "BoteWrite Backend" cmd /c "uv run server.py --reload"
start "BoteWrite Web UI" cmd /c "cd web && pnpm dev"
REM Wait for user to close
pause

:END
ENDLOCAL
