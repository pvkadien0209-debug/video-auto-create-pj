@echo off
chcp 65001 >nul
REM #154 Render HANG LOAT moi video DA CO DU GIONG KOKORO (bai nao chua co giong thi bo qua).
REM   4-render-tat-ca.bat            -> ban 1280x720 (dat len web)
REM   4-render-tat-ca.bat 0.5        -> ban nhe 960x540 (xem nhanh)
REM Video da render roi (co mp4 trong renders\dp) se BO QUA -> dung giua chung (Ctrl+C) roi chay lai la lam tiep.
REM Muon render lai mot bai: xoa tep mp4 cua bai do trong renders\dp roi chay lai.
cd /d "%~dp0"
set "SC=%~1"
if "%SC%"=="" set "SC=2/3"
where python >nul 2>nul || (echo Chua co Python. Cai Python 3.10+ tu python.org, tick "Add python.exe to PATH". & pause & exit /b 1)
if not exist "public\illus\laptop.svg" (
  echo Chua co hinh public\illus - dang giai nen illus.zip ...
  powershell -NoProfile -Command "Expand-Archive -LiteralPath '%~dp0public\illus.zip' -DestinationPath '%~dp0public' -Force"
)
echo [1/2] Lap danh sach bai da du giong Kokoro ...
python tools\kokoro\ds-bai-du-giong.py
if errorlevel 1 (
  echo Chua co bai nao du giong - hoac loi doc danh sach. Chay truoc:  3-tao-giong-kokoro.bat all
  pause
  exit /b 1
)
echo [2/2] Render - scale %SC% - bo qua video da co ...
call npx tsx render-CSK004.js --only-file=renders\dp\_ds-render.txt --scale=%SC% --skip-done
echo.
echo Xong. Video o thu muc renders\dp  ^|  nhat ky: renders\dp\_log
start "" "renders\dp"
pause
