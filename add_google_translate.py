import os
import re

# List of HTML files to add Google Translate to
html_files = [
    'index.html',
    'about.html',
    'blog.html',
    'contact.html',
    'construction.html',
    'food.html',
    'projects.html',
    'article.html'
]

def add_google_translate(filename):
    """Add Google Translate CSS and JS to HTML file"""
    
    if not os.path.exists(filename):
        print(f"Skipping {filename} - file not found")
        return False
        
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()
    
    modified = False
    
    # Check if google-translate.css already exists
    if 'google-translate.css' not in content:
        # Add CSS in head section
        content = re.sub(
            r'(</head>)',
            r'    <link rel="stylesheet" href="google-translate.css">\n\1',
            content
        )
        modified = True
        print(f"  Added google-translate.css to {filename}")
    
    # Check if google-translate.js already exists
    if 'google-translate.js' not in content:
        # Add JS before closing </body> tag
        content = re.sub(
            r'(</body>)',
            r'    <script src="google-translate.js"></script>\n\1',
            content
        )
        modified = True
        print(f"  Added google-translate.js to {filename}")
    
    if modified:
        with open(filename, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"✓ Updated {filename}")
        return True
    else:
        print(f"No changes needed for {filename}")
        return False

if __name__ == "__main__":
    print("Adding Google Translate widget to HTML files...")
    print("=" * 60)
    
    updated_count = 0
    for filename in html_files:
        if add_google_translate(filename):
            updated_count += 1
        print()
    
    print("=" * 60)
    print(f"✅ Updated {updated_count} files")
    print("\n🌐 Google Translate widget added!")
    print("Users can now auto-translate content while keeping")
    print("manually translated metadata for better SEO.")
