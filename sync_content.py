import json
import os

def sync_content_from_english():
    """Copy English content to other language files for posts 9-14"""
    
    # Read English blog data
    with open('data/blog_en.json', 'r', encoding='utf-8') as f:
        en_data = json.load(f)
    
    # Create a map of English content by ID
    en_content_map = {}
    for post in en_data:
        post_id = post.get('id')
        if post_id in [9, 10, 11, 12, 13, 14]:
            en_content_map[post_id] = post.get('content', '')
    
    # Language files to update
    lang_files = ['zh', 'ja', 'ko', 'fr', 'de', 'it']
    
    for lang_code in lang_files:
        filename = f'data/blog_{lang_code}.json'
        
        if not os.path.exists(filename):
            print(f"Skipping {filename} - file not found")
            continue
        
        # Read language file
        with open(filename, 'r', encoding='utf-8') as f:
            blog_data = json.load(f)
        
        # Update content for posts 9-14
        modified = False
        for post in blog_data:
            post_id = post.get('id')
            if post_id in en_content_map:
                # Only update if content is missing or still in wrong language
                current_content = post.get('content', '')
                if not current_content or len(current_content) < 100:
                    post['content'] = en_content_map[post_id]
                    modified = True
                    print(f"  Updated post {post_id} content")
        
        # Save back if modified
        if modified:
            with open(filename, 'w', encoding='utf-8') as f:
                json.dump(blog_data, f, ensure_ascii=False, indent=4)
            print(f"✓ Updated {filename}")
        else:
            print(f"No content updates needed for {filename}")

if __name__ == "__main__":
    print("Syncing English content to all languages for posts 9-14...")
    print("=" * 60)
    sync_content_from_english()
    print("=" * 60)
    print("✅ Content sync complete!")
    print("\nNote: Content is in English for international accessibility.")
