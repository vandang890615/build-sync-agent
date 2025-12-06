import json
import os

# Add post 15 to other language files
def add_post_15_to_languages():
    """Add post 15 to all language files that don't have it"""
    
    # Translation for post 15 in different languages
    post_15_translations = {
        "zh": {
            "title": "解锁Gemini CLI的实时网络数据",
            "excerpt": "详细指南：如何将实时网络访问功能集成到Gemini CLI以增强您的AI体验。",
            "tags": ["Gemini", "CLI", "网络数据", "AI"]
        },
        "ja": {
            "title": "Gemini CLIのリアルタイムWebデータを解放する",
            "excerpt": "Gemini CLIにリアルタイムWebアクセス機能を統合してAI体験を向上させる詳細ガイド。",
            "tags": ["Gemini", "CLI", "Webデータ", "AI"]
        },
        "ko": {
            "title": "Gemini CLI를 위한 실시간 웹 데이터 잠금 해제",
            "excerpt": "AI 경험을 향상시키기 위해 Gemini CLI에 실시간 웹 액세스 기능을 통합하는 방법에 대한 포괄적인 가이드입니다.",
            "tags": ["Gemini", "CLI", "웹 데이터", "AI"]
        },
        "fr": {
            "title": "Débloquer les Données Web en Temps Réel pour Gemini CLI",
            "excerpt": "Guide complet sur l'intégration des capacités d'accès web en temps réel dans Gemini CLI pour améliorer votre expérience IA.",
            "tags": ["Gemini", "CLI", "Données Web", "IA"]
        },
        "de": {
            "title": "Echtzeit-Webdaten für Gemini CLI Freischalten",
            "excerpt": "Ein umfassender Leitfaden zur Integration von Echtzeit-Webzugriffsfunktionen in Gemini CLI zur Verbesserung Ihrer KI-Erfahrung.",
            "tags": ["Gemini", "CLI", "Webdaten", "KI"]
        },
        "it": {
            "title": "Sbloccare i Dati Web in Tempo Reale per Gemini CLI",
            "excerpt": "Una guida completa sull'integrazione delle capacità di accesso web in tempo reale in Gemini CLI per migliorare la tua esperienza AI.",
            "tags": ["Gemini", "CLI", "Dati Web", "IA"]
        }
    }
    
    # English version template (content stays in English)
    with open('data/blog_en.json', 'r', encoding='utf-8') as f:
        en_data = json.load(f)
    
    # Find post 15
    post_15_en = None
    for post in en_data:
        if post.get('id') == 15:
            post_15_en = post
            break
    
    if not post_15_en:
        print("Post 15 not found in blog_en.json!")
        return
    
    # Add to each language file
    for lang_code, translation in post_15_translations.items():
        filename = f'data/blog_{lang_code}.json'
        
        if not os.path.exists(filename):
            print(f"Skipping {filename} - file not found")
            continue
        
        with open(filename, 'r', encoding='utf-8') as f:
            blog_data = json.load(f)
        
        # Check if post 15 already exists
        has_post_15 = any(post.get('id') == 15 for post in blog_data)
        
        if not has_post_15:
            # Create new post with translation
            new_post = {
                "id": 15,
                "title": translation["title"],
                "excerpt": translation["excerpt"],
                "content": post_15_en["content"],  # Keep English content
                "date": post_15_en["date"],
                "readTime": post_15_en["readTime"],
                "tags": translation["tags"],
                "image": post_15_en["image"]
            }
            
            blog_data.append(new_post)
            
            with open(filename, 'w', encoding='utf-8') as f:
                json.dump(blog_data, f, ensure_ascii=False, indent=4)
            
            print(f"✓ Added post 15 to {filename}")
        else:
            print(f"Post 15 already exists in {filename}")

if __name__ == "__main__":
    add_post_15_to_languages()
    print("\n✅ Post 15 sync complete!")
