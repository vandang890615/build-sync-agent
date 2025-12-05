import json
import os

source_file = 'data/blog_en.json'
target_langs = ['zh', 'ja', 'ko', 'fr', 'de', 'it']
new_ids = [9, 10, 11, 12]

# Read source data
with open(source_file, 'r', encoding='utf-8') as f:
    source_data = json.load(f)

new_posts = [post for post in source_data if post['id'] in new_ids]

print(f"Found {len(new_posts)} new posts to sync.")

for lang in target_langs:
    target_file = f'data/blog_{lang}.json'
    if os.path.exists(target_file):
        with open(target_file, 'r', encoding='utf-8') as f:
            target_data = json.load(f)
        
        # Check for duplicates and append
        existing_ids = {post['id'] for post in target_data}
        posts_to_add = [post for post in new_posts if post['id'] not in existing_ids]
        
        if posts_to_add:
            target_data.extend(posts_to_add)
            with open(target_file, 'w', encoding='utf-8') as f:
                json.dump(target_data, f, ensure_ascii=False, indent=4)
            print(f"Added {len(posts_to_add)} posts to {target_file}")
        else:
            print(f"No new posts to add for {target_file}")
    else:
        print(f"Warning: {target_file} not found.")
