@echo off
chcp 65001 >nul
REM #180 Render cac video CHUA CO TREN DRIVE (DetProMedia, ca thu muc con video\) - danh cho may chinh render (may 02).
REM   Khac 4-render-tat-ca.bat: ban kia chi bo qua video da co trong renders\dp.
REM   #195: ban nay chi render bai CHUA CO TREN DRIVE VA CHUA CO TRONG renders\dp
REM   (da co trong renders\dp nhung chua tai len -> dung 8-kiem-drive-toPush-folder.bat de tai len).
REM   4b-render-chua-len-drive.bat        -> ban 1280x720 (dat len web)
REM   4b-render-chua-len-drive.bat 0.5    -> ban nhe 960x540
REM Can khoa doc Drive: tools\drive\drive-key.txt (9-lay-khoa-drive.bat).
cd /d "%~dp0"
set "SC=%~1"
if "%SC%"=="" set "SC=2/3"
where python >nul 2>nul || (echo Chua co Python. Cai Python 3.10+ tu python.org, tick "Add python.exe to PATH". & pause & exit /b 1)
if not exist "public\illus\laptop.svg" (
  echo Chua co hinh public\illus - dang giai nen illus.zip ...
  powershell -NoProfile -Command "Expand-Archive -LiteralPath '%~dp0public\illus.zip' -DestinationPath '%~dp0public' -Force"
)
echo [1/3] Lap danh sach bai da du giong Kokoro ...
python tools\kokoro\ds-bai-du-giong.py
if errorlevel 1 (
  echo Chua co bai nao du giong - hoac loi doc danh sach. Chay truoc:  3-tao-giong-kokoro.bat all
  pause
  exit /b 1
)
echo [2/3] Bo cac video da co tren Drive hoac da co trong renders\dp ...
node tools\drive\kiem-drive.mjs --loc-drive=renders\dp\_ds-render.txt --ra=renders\dp\_ds-render-drive.txt
if errorlevel 2 (
  echo Moi bai du giong deu da co video tren Drive hoac trong renders\dp - khong can render.
  pause
  exit /b 0
)
if errorlevel 1 (
  echo Khong doc duoc Drive - xem loi o tren. Kiem khoa: 9-lay-khoa-drive.bat
  pause
  exit /b 1
)
echo [3/3] Render - scale %SC% - bo qua video da co trong renders\dp ...
call npx tsx render-CSK004.js --only-file=renders\dp\_ds-render-drive.txt --scale=%SC% --skip-done
echo.
echo Xong. Video o renders\dp. Tai len Drive: chay 8-kiem-drive-toPush-folder.bat (chep video chua co tren Drive ra renders\dp-toPush[...])
start "" "renders\dp"
pause
