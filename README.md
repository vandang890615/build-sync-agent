# Website Translation Workflow

This document outlines the process for updating and synchronizing translations across the website.

## Structure

-   **`i18n.js`**: Contains the core translation logic and resource strings for static content (navigation, footer, page titles).
-   **`data/`**: Contains JSON files for dynamic content (blog posts, projects).
    -   `blog_{lang}.json`: Blog posts for a specific language (e.g., `blog_vi.json`, `blog_en.json`).
    -   `projects_{lang}.json`: Projects for a specific language.
-   **HTML Files**: Use `data-i18n` attributes to mark elements for translation.

## How to Add a New Language

1.  **Update `i18n.js`**:
    -   Add the new language code (e.g., `es` for Spanish) to the `resources` object.
    -   Copy the structure from `en` or another language and translate the values.
    -   Example:
        ```javascript
        es: {
            ...baseEn,
            nav: { home: "Inicio", ... },
            // ... other translations
        }
        ```

2.  **Create Data Files**:
    -   Create `data/blog_es.json` and `data/projects_es.json`.
    -   Translate the content within these JSON files.

3.  **Update Language Switcher**:
    -   In `index.html` (and all other HTML files), add the new language option to the `toggleLanguageMenu` function or the HTML dropdown if hardcoded (currently dynamic in `i18n.js` but the button text might need check).
    -   *Note*: The current implementation generates the dropdown options dynamically based on the `languages` array in `i18n.js`. You need to add the new language to the `languages` array in `i18n.js`.

## How to Update Content

### Static Content (Headers, Footers, UI)
1.  Open `i18n.js`.
2.  Locate the key you want to update (e.g., `footer.description`).
3.  Update the value for **ALL** supported languages to ensure consistency.

### Dynamic Content (Blog, Projects)
1.  Open the relevant JSON file in `data/` (e.g., `data/blog_en.json`).
2.  Update the content.
3.  **Crucial**: Repeat the update for all other language files (`data/blog_vi.json`, `data/blog_zh.json`, etc.) to keep content synchronized.

## Synchronization Checklist
-   [ ] `i18n.js`: All keys exist for all languages.
-   [ ] `data/*.json`: File counts match (e.g., if you have 3 English blog posts, you should have 3 Vietnamese ones).
-   [ ] HTML: `data-i18n` attributes match keys in `i18n.js`.
