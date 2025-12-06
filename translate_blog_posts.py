import json
import os

# Translation mappings for posts 9-14
translations = {
    "zh": {  # Chinese
        9: {"title": "LightRAG：简单、快速且高效的RAG应用", "excerpt": "LightRAG是一个强大、轻量且模块化的库，专为检索增强生成(RAG)应用而设计。", "tags": ["AI", "RAG", "知识图谱"]},
        10: {"title": "理解大型语言模型(LLMs)", "excerpt": "探索LLMs的工作原理，从Transformer架构到训练过程及其令人印象深刻的能力。", "tags": ["AI", "大型语言模型", "深度学习"]},
        11: {"title": "2025年自动化趋势", "excerpt": "随着AI智能体和超自动化的兴起，自动化正在发生变革。", "tags": ["自动化", "AI智能体", "科技趋势"]},
        12: {"title": "使用AI助手进行Web开发", "excerpt": "GitHub Copilot、ChatGPT和Gemini如何重塑软件开发流程。", "tags": ["Web开发", "AI工具", "Copilot"]},
        13: {"title": "机械工程 - 建筑与室内设计软件概览", "excerpt": "该领域的软件涵盖从2D设计、3D建模、BIM到深度结构分析和MEP。", "tags": ["机械", "建筑", "软件", "BIM"]},
        14: {"title": "Claude Opus 4.5：Anthropic最智能的AI模型", "excerpt": "Claude 4 Opus是Anthropic最先进的AI模型，具有卓越的推理能力和深度上下文理解。", "tags": ["AI", "Claude", "Anthropic", "LLM"]}
    },
    "ja": {  # Japanese
        9:  {"title": "LightRAG：シンプル、高速、効果的なRAGアプリケーション", "excerpt": "LightRAGは、検索拡張生成（RAG）アプリケーション向けに設計された強力で軽量かつモジュール式のライブラリです。", "tags": ["AI", "RAG", "知識グラフ"]},
        10: {"title": "大規模言語モデル（LLMs）の理解", "excerpt": "Transformerアーキテクチャからトレーニングプロセス、そして印象的な機能まで、LLMsがどのように機能するかを探ります。", "tags": ["AI", "LLM", "ディープラーニング"]},
        11: {"title": "2025年の自動化トレンド", "excerpt": "AIエージェントとハイパーオートメーションの台頭により、自動化が変革しています。", "tags": ["自動化", "AIエージェント", "技術トレンド"]},
        12: {"title": "AIアシスタントによるWeb開発", "excerpt": "GitHub Copilot、ChatGPT、Geminiがソフトウェア開発プロセスをどのように再形成しているか。", "tags": ["Web開発", "AIツール", "Copilot"]},
        13: {"title": "機械工学・建設・インテリアのソフトウェア概要", "excerpt": "この分野のソフトウェアは、2D設計、3Dモデリング、BIMから詳細な構造解析とMEPまで幅広くカバーしています。", "tags": ["機械", "建設", "ソフトウェア", "BIM"]},
        14: {"title": "Claude Opus 4.5：Anthropic最高のAIモデル", "excerpt": "Claude 4 Opusは、優れた推論能力と深いコンテキスト理解を備えたAnthropicの最先端AIモデルです。", "tags": ["AI", "Claude", "Anthropic", "LLM"]}
    },
    "ko": {  # Korean
        9:  {"title": "LightRAG: 간단하고 빠르며 효과적인 RAG 애플리케이션", "excerpt": "LightRAG는 검색 증강 생성(RAG) 애플리케이션을 위해 설계된 강력하고 가벼우며 모듈식 라이브러리입니다.", "tags": ["AI", "RAG", "지식 그래프"]},
        10: {"title": "대규모 언어 모델(LLMs) 이해하기", "excerpt": "Transformer 아키텍처부터 훈련 프로세스 및 인상적인 기능까지 LLM이 작동하는 방식을 탐구합니다.", "tags": ["AI", "LLM", "딥러닝"]},
        11: {"title": "2025년 자동화 트렌드", "excerpt": "AI 에이전트와 하이퍼 자동화의 부상으로 자동화가 변혁되고 있습니다.", "tags": ["자동화", "AI 에이전트", "기술 트렌드"]},
        12: {"title": "AI 어시스턴트를 활용한 웹 개발", "excerpt": "GitHub Copilot, ChatGPT, Gemini가 소프트웨어 개발 프로세스를 어떻게 재편하고 있는지.", "tags": ["웹 개발", "AI 도구", "Copilot"]},
        13: {"title": "기계공학 - 건설 및 인테리어 소프트웨어 개요", "excerpt": "이 분야의 소프트웨어는 2D 설계, 3D 모델링, BIM부터 심층 구조 분석 및 MEP까지 다양합니다.", "tags": ["기계", "건설", "소프트웨어", "BIM"]},
        14: {"title": "Claude Opus 4.5: Anthropic의 가장 지능적인 AI 모델", "excerpt": "Claude 4 Opus는 뛰어난 추론 능력과 깊은 컨텍스트 이해를 갖춘 Anthropic의 가장 진보된 AI 모델입니다.", "tags": ["AI", "Claude", "Anthropic", "LLM"]}
    },
    "fr": {  # French
        9:  {"title": "LightRAG : Simple, Rapide et Efficace pour les Applications RAG", "excerpt": "LightRAG est une bibliothèque puissante, légère et modulaire conçue pour les applications de génération augmentée par récupération (RAG).", "tags": ["IA", "RAG", "Graphe de connaissances"]},
        10: {"title": "Comprendre les Grands Modèles de Langage (LLMs)", "excerpt": "Explorez le fonctionnement des LLM, de l'architecture Transformer aux processus d'entraînement et à leurs capacités impressionnantes.", "tags": ["IA", "LLM", "Apprentissage profond"]},
        11: {"title": "Tendances de l'automatisation en 2025", "excerpt": "L'automatisation se transforme avec l'essor des agents IA et de l'hyper-automatisation.", "tags": ["Automatisation", "Agents IA", "Tendances technologiques"]},
        12: {"title": "Développement Web avec des Assistants IA", "excerpt": "Comment GitHub Copilot, ChatGPT et Gemini remodèlent le processus de développement logiciel.", "tags": ["Développement web", "Outils IA", "Copilot"]},
        13: {"title": "Aperçu des Logiciels en Génie Mécanique - Construction et Intérieur", "excerpt": "Les logiciels de ce domaine vont de la conception 2D, la modélisation 3D, le BIM à l'analyse structurelle approfondie et au MEP.", "tags": ["Mécanique", "Construction", "Logiciel", "BIM"]},
        14: {"title": "Claude Opus 4.5 : Le Modèle IA le Plus Intelligent d'Anthropic", "excerpt": "Claude 4 Opus est le modèle IA le plus avancé d'Anthropic, doté de capacités de raisonnement supérieures et d'une compréhension contextuelle profonde.", "tags": ["IA", "Claude", "Anthropic", "LLM"]}
    },
    "de": {  # German
        9:  {"title": "LightRAG: Einfach, Schnell und Effektiv für RAG-Anwendungen", "excerpt": "LightRAG ist eine leistungsstarke, leichtgewichtige und modulare Bibliothek für Retrieval Augmented Generation (RAG)-Anwendungen.", "tags": ["KI", "RAG", "Wissensgraph"]},
        10: {"title": "Große Sprachmodelle (LLMs) Verstehen", "excerpt": "Erforschen Sie, wie LLMs funktionieren, von der Transformer-Architektur bis zu Trainingsprozessen und ihren beeindruckenden Fähigkeiten.", "tags": ["KI", "LLM", "Deep Learning"]},
        11: {"title": "Automatisierungstrends 2025", "excerpt": "Die Automatisierung verändert sich mit dem Aufstieg von KI-Agenten und Hyper-Automatisierung.", "tags": ["Automatisierung", "KI-Agenten", "Tech-Trends"]},
        12: {"title": "Webentwicklung mit KI-Assistenten", "excerpt": "Wie GitHub Copilot, ChatGPT und Gemini den Softwareentwicklungsprozess umgestalten.", "tags": ["Webentwicklung", "KI-Tools", "Copilot"]},
        13: {"title": "Übersicht über Software im Maschinenbau - Bau und Innenausbau", "excerpt": "Software in diesem Bereich reicht von 2D-Design, 3D-Modellierung, BIM bis hin zu eingehender Strukturanalyse und MEP.", "tags": ["Maschinenbau", "Bau", "Software", "BIM"]},
        14: {"title": "Claude Opus 4.5: Anthropics Intelligentestes KI-Modell", "excerpt": "Claude 4 Opus ist Anthropics fortschrittlichstes KI-Modell mit überlegenen Denkfähigkeiten und tiefem Kontextverständnis.", "tags": ["KI", "Claude", "Anthropic", "LLM"]}
    },
    "it": {  # Italian
        9:  {"title": "LightRAG: Semplice, Veloce ed Efficace per Applicazioni RAG", "excerpt": "LightRAG è una libreria potente, leggera e modulare progettata per applicazioni di Retrieval Augmented Generation (RAG).", "tags": ["IA", "RAG", "Grafo delle conoscenze"]},
        10: {"title": "Comprendere i Grandi Modelli Linguistici (LLMs)", "excerpt": "Esplora come funzionano gli LLM, dall'architettura Transformer ai processi di addestramento e alle loro impressionanti capacità.", "tags": ["IA", "LLM", "Deep Learning"]},
        11: {"title": "Tendenze dell'Automazione nel 2025", "excerpt": "L'automazione si sta trasformando con l'ascesa degli agenti IA e dell'iper-automazione.", "tags": ["Automazione", "Agenti IA", "Tendenze tecnologiche"]},
        12: {"title": "Sviluppo Web con Assistenti IA", "excerpt": "Come GitHub Copilot, ChatGPT e Gemini stanno rimodellando il processo di sviluppo software.", "tags": ["Sviluppo web", "Strumenti IA", "Copilot"]},
        13: {"title": "Panoramica del Software nell'Ingegneria Meccanica - Costruzione e Interni", "excerpt": "Il software in questo campo spazia dalla progettazione 2D, modellazione 3D, BIM all'analisi strutturale approfondita e MEP.", "tags": ["Meccanica", "Costruzione", "Software", "BIM"]},
        14: {"title": "Claude Opus 4.5: Il Modello IA Più Intelligente di Anthropic", "excerpt": "Claude 4 Opus è il modello IA più avanzato di Anthropic, con capacità di ragionamento superiori e comprensione contestuale profonda.", "tags": ["IA", "Claude", "Anthropic", "LLM"]}
    }
}

def translate_blog_posts():
    """Translate blog posts 9-14 for all language files"""
    data_dir = "data"
    
    for lang_code, trans in translations.items():
        filename = f"blog_{lang_code}.json"
        filepath = os.path.join(data_dir, filename)
        
        if not os.path.exists(filepath):
            print(f"Skipping {filename} - file not found")
            continue
            
        # Read the JSON file
        with open(filepath, 'r', encoding='utf-8') as f:
            blog_data = json.load(f)
        
        # Update posts 9-14
        modified = False
        for post in blog_data:
            post_id = post.get('id')
            if post_id in trans:
                post['title'] = trans[post_id]['title']
                post['excerpt'] = trans[post_id]['excerpt']
                post['tags'] = trans[post_id]['tags']
                modified = True
                print(f"Translated post {post_id} for {lang_code}")
        
        # Save back to file
        if modified:
            with open(filepath, 'w', encoding='utf-8') as f:
                json.dump(blog_data, f, ensure_ascii=False, indent=4)
            print(f"✓ Updated {filename}")
        else:
            print(f"No updates needed for {filename}")

if __name__ == "__main__":
    translate_blog_posts()
    print("\n✅ Translation complete!")
