import os
import re

# List of main HTML files to add music player to
html_files = [
    'about.html',
    'blog.html', 
    'contact.html',
    'construction.html',
    'food.html',
    'projects.html',
    'article.html'
]

def add_music_player(filename):
    """Add music player CSS and JS to HTML file"""
    
    if not os.path.exists(filename):
        print(f"Skipping {filename} - file not found")
        return False
        
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()
    
    modified = False
    
    # Check if music-player.css already exists
    if 'music-player.css' not in content:
        # Add CSS after styles.css
        content = re.sub(
            r'(<link rel="stylesheet" href="styles.css">)',
            r'\1\n    <link rel="stylesheet" href="music-player.css">',
            content
        )
        modified = True
        print(f"Added music-player.css to {filename}")
    
    # Check if music-player.js already exists
    if 'music-player.js' not in content:
        # Add JS before closing </body> tag
        content = re.sub(
            r'(</body>)',
            r'    <script src="music-player.js"></script>\n\1',
            content
        )
        modified = True
        print(f"Added music-player.js to {filename}")
    
    if modified:
        with open(filename, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"✓ Updated {filename}")
        return True
    else:
        print(f"No changes needed for {filename}")
        return False

if __name__ == "__main__":
    print("Adding music player to HTML files...")
    print("=" * 50)
    
    updated_count = 0
    for filename in html_files:
        if add_music_player(filename):
            updated_count += 1
        print()
    
    print("=" * 50)
    print(f"✅ Updated {updated_count} files")
