@echo off
chcp 65001 >nul
REM #164 Tao ANH BIA jpg 16:9 cho video bai hoc (Det + ten bai + chuoi bai) - renders\dp\img\TEN-BAI--w01.jpg (1280x720).
REM   5-tao-anh-bia.bat                      -> anh bia cho MOI bai co kich ban, bo qua anh da co
REM   5-tao-anh-bia.bat ten-bai--w01         -> chi mot bai (ve lai ke ca da co)
REM   5-tao-anh-bia.bat lai                  -> ve lai TAT CA (sau khi doi mau anh bia)
REM #166 CHI TAO ANH (khong render video). Video rieng: 4-render-tat-ca.bat
REM Xong thi tai ca thu muc renders\dp\img len thu muc con img cua Drive DetProMedia - web tu lay lam anh dai dien.
cd /d "%~dp0"
if "%~1"=="" (
  call npx tsx render-poster-CSK004.js --skip-done
) else if /i "%~1"=="lai" (
  call npx tsx render-poster-CSK004.js
) else (
  call npx tsx render-poster-CSK004.js --only=%~1
)
echo.
echo Xong. Anh bia o thu muc renders\dp\img - tai len Drive DetProMedia\img
start "" "renders\dp\img"
pause
