@echo off
chcp 65001 >nul
REM #195 DON GIONG KOKORO DA DUNG XONG: bai nao da co video <bai>--w01.mp4 tren Drive DetProMedia
REM   thi giong Kokoro (public\audio\kokoro\<bai>\) khong can nua -> xoa cho nhe o (va nhe goi render).
REM   7-don-giong-kokoro-video-da-len-drive.bat        -> bao cao, hoi Y/N roi moi xoa
REM   7-don-giong-kokoro-video-da-len-drive.bat xem    -> chi bao cao, khong xoa
REM Bai da xoa ghi vao public\audio\kokoro\_da-don.txt; "3-tao-giong-kokoro.bat all" bo qua cac bai nay.
REM Can render lai 1 bai: 3-tao-giong-kokoro.bat <bai>  (tao lai giong)  roi render.
REM KHONG chay luc 3-tao-giong-kokoro.bat hoac render dang chay.
cd /d "%~dp0"
node tools\drive\kiem-drive.mjs --don-kokoro
set "RC=%ERRORLEVEL%"
if "%RC%"=="1" (echo. & echo Loi doc Drive - khong xoa gi. & pause & exit /b 1)
if "%RC%"=="2" (echo. & echo Khong co giong nao can xoa. & pause & exit /b 0)
if /i "%~1"=="xem" (pause & exit /b 0)
echo.
choice /c YN /m "Xoa giong Kokoro cua cac bai tren (video da len Drive)"
if errorlevel 2 (echo Khong xoa gi. & pause & exit /b 0)
node tools\drive\kiem-drive.mjs --don-kokoro --xoa
pause
