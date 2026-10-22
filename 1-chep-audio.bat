@echo off
chcp 65001 >nul
REM Chep mp3 + durations.dat + manifest.dat tu server sang Remotion.
REM Chi chep tep moi/thay doi (robocopy) -> chay lai bao nhieu lan cung duoc, ke ca khi dang tao mp3 do dang.
set "SRC=%~dp0..\SEO-PT-projectjs\server\router\DetPro\audio\dp"
set "DST=%~dp0public\audio\dp"
if not exist "%SRC%" (
  echo Khong thay thu muc mp3: %SRC%
  pause
  exit /b 1
)
robocopy "%SRC%" "%DST%" /E /XO /NFL /NDL /NJH /R:1 /W:1
if %ERRORLEVEL% GEQ 8 (
  echo Chep loi, ma %ERRORLEVEL%
) else (
  echo Da chep xong sang %DST%
)
pause
