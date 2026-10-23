@echo off
chcp 65001 >nul
REM #178 KIEM DRIVE: so video (renders\dp\*.mp4) va anh bia (renders\dp\img\*.jpg) voi thu muc Drive DetProMedia.
REM   8-kiem-drive.bat            -> chep tep CHUA CO tren Drive (va ban render lai moi hon) ra renders\dp-toPush[ngay - gio]
REM   8-kiem-drive.bat xem        -> chi bao cao, khong chep
REM May 02 (khong co SEO-PT-projectjs): tao tep tools\drive\drive-key.txt chua khoa doc Drive (khong dua vao git).
cd /d "%~dp0"
if /i "%~1"=="xem" (
  node tools\drive\kiem-drive.mjs --chi-xem
) else (
  node tools\drive\kiem-drive.mjs
)
echo.
for /d %%D in ("renders\dp-toPush*") do set "LAST=%%D"
if /i not "%~1"=="xem" if defined LAST start "" "%LAST%"
pause
