@echo off
chcp 65001 >nul
REM #178/#187 KIEM DRIVE -> THU MUC dp-toPush (ten cu: 8-kiem-drive.bat): so video (renders\dp\*.mp4) va anh bia (renders\dp\img\*.jpg) voi thu muc Drive DetProMedia.
REM   8-kiem-drive-toPush-folder.bat      -> dua tep CHUA CO tren Drive (va ban render lai moi hon) vao renders\dp-toPush[ngay - gio]
REM   8-kiem-drive-toPush-folder.bat xem  -> chi bao cao, khong tao thu muc
REM #187: dua vao bang LIEN KET CUNG (hard link): khong ton them dung luong o; xoa dp-toPush khong mat video goc.
REM       O day -> bao ro "O DIA DAY" va dung; DANH-SACH.txt ghi truoc khi dua tep.
REM May 02 (khong co SEO-PT-projectjs): tao tep tools\drive\drive-key.txt chua khoa doc Drive (khong dua vao git).
cd /d "%~dp0"
if /i "%~1"=="xem" (
  node tools\drive\kiem-drive.mjs --chi-xem
) else (
  node tools\drive\kiem-drive.mjs
)
set "RC=%ERRORLEVEL%"
if "%RC%"=="3" echo. & echo *** O DIA DAY: giai phong o roi chay lai file nay. ***
if "%RC%"=="4" echo. & echo *** Co tep khong dua vao duoc - xem danh sach loi o tren. ***
echo.
for /d %%D in ("renders\dp-toPush*") do set "LAST=%%D"
if /i not "%~1"=="xem" if defined LAST start "" "%LAST%"
pause
