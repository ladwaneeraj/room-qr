@echo off
rem One-time setup: moves the deploy workflow into place and pushes it.
cd /d "%~dp0"

if not exist ".github\workflows" mkdir ".github\workflows"

if exist "_setup\deploy.yml" (
    move /Y "_setup\deploy.yml" ".github\workflows\deploy.yml"
) else (
    if not exist ".github\workflows\deploy.yml" (
        echo ERROR: _setup\deploy.yml not found and workflow not in place.
        pause
        exit /b 1
    )
)

git add .github
git commit -m "Add GitHub Pages deploy workflow"
git push

echo.
echo ================================================
echo  Done! Build is starting on GitHub.
echo  Watch it:  https://github.com/ladwaneeraj/room-qr/actions
echo  Site:      https://ladwaneeraj.github.io/room-qr/
echo  (give it ~1 minute, then press Ctrl+Shift+R on the site)
echo ================================================
pause
