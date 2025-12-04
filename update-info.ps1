# Find and replace "John Doe" with "Van Dang" in all HTML files
$files = Get-ChildItem -Path "public" -Filter "*.html" -Recurse

foreach ($file in $files) {
    (Get-Content $file.FullName) `
        -replace 'John Doe', 'Van Dang' `
        -replace 'johndoe', 'vandang890615' `
        -replace 'john@example.com', 'vandang890615@gmail.com' `
        -replace 'seed=John', 'seed=vandang' |
    Set-Content $file.FullName
}

Write-Host "✅ Updated all HTML files with your personal information!" -ForegroundColor Green
