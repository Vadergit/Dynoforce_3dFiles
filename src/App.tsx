import { useEffect, useMemo, useState } from "react";
import StlPreview from "./components/StlPreview";
import { models, productFilters } from "./data/models";
import {
  defaultLanguage,
  detectLanguage,
  languageNames,
  productLabels,
  supportedLanguages,
  translate,
  uiText,
} from "./i18n";
import type { Language, ModelEntry, ProductFamily } from "./types";

function formatList(items: string[]) {
  return items.join(" · ");
}

function withBase(path: string) {
  return `${import.meta.env.BASE_URL}${path}`.replace(/([^:]\/)\/+/g, "$1");
}

export default function App() {
  const [language, setLanguage] = useState<Language>(defaultLanguage);
  const [query, setQuery] = useState("");
  const [productFilter, setProductFilter] = useState<ProductFamily>("All");
  const [selectedId, setSelectedId] = useState(models[0]?.id ?? "");

  useEffect(() => {
    setLanguage(detectLanguage());
  }, []);

  useEffect(() => {
    window.localStorage.setItem("dynoforce-lang", language);
    document.documentElement.lang = language;
  }, [language]);

  const filteredModels = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return models.filter((model) => {
      const matchesProduct =
        productFilter === "All" || model.product === productFilter;
      const haystack = [
        translate(model.title, language),
        model.product,
        translate(model.category, language),
        translate(model.summary, language),
        model.tags[language].join(" "),
      ]
        .join(" ")
        .toLowerCase();
      const matchesQuery =
        normalizedQuery.length === 0 || haystack.includes(normalizedQuery);

      return matchesProduct && matchesQuery;
    });
  }, [language, productFilter, query]);

  useEffect(() => {
    if (!filteredModels.some((model) => model.id === selectedId)) {
      setSelectedId(filteredModels[0]?.id ?? "");
    }
  }, [filteredModels, selectedId]);

  const selectedModel =
    filteredModels.find((model) => model.id === selectedId) ??
    filteredModels[0] ??
    null;
  const featuredCount = models.filter((model) => model.featured).length;

  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="container topbar">
          <a className="brand" href="#top" aria-label={translate(uiText.brand, language)}>
            <img
              className="brand-mark"
              src={`${import.meta.env.BASE_URL}brand/favicon.png`}
              alt=""
            />
            <span>{translate(uiText.brand, language)}</span>
          </a>
          <div className="topbar-actions">
            <nav className="topnav" aria-label="Sektionen">
              <a href="#library">{translate(uiText.navLibrary, language)}</a>
              <a href="#details">{translate(uiText.navDetails, language)}</a>
            </nav>
            <div className="lang-switcher" aria-label={translate(uiText.language, language)}>
              {supportedLanguages.map((nextLanguage) => (
                <button
                  key={nextLanguage}
                  className={
                    nextLanguage === language ? "lang-button active" : "lang-button"
                  }
                  onClick={() => setLanguage(nextLanguage)}
                  type="button"
                >
                  {languageNames[nextLanguage]}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">{translate(uiText.heroEyebrow, language)}</div>
              <h1>{translate(uiText.heroTitle, language)}</h1>
              <p className="lead">{translate(uiText.heroLead, language)}</p>
            </div>
          </div>
        </section>

        <section className="stats-band">
          <div className="container stats-grid">
            <article>
              <strong>{featuredCount}</strong>
              <span>{translate(uiText.featuredModels, language)}</span>
            </article>
            <article>
              <strong>STL + STEP</strong>
              <span>{translate(uiText.dualFormat, language)}</span>
            </article>
            <article>
              <strong>{translate(uiText.notesHeadline, language)}</strong>
              <span>{translate(uiText.notesStat, language)}</span>
            </article>
          </div>
        </section>

        <section className="library-section container" id="library">
          <div className="section-head">
            <div>
              <div className="eyebrow">{translate(uiText.sectionEyebrow, language)}</div>
              <h2>{translate(uiText.sectionTitle, language)}</h2>
            </div>
            <p>{translate(uiText.sectionLead, language)}</p>
          </div>

          <div className="toolbar">
            <label className="search-field" htmlFor="search">
              <span>{translate(uiText.search, language)}</span>
              <input
                id="search"
                type="search"
                placeholder={translate(uiText.searchPlaceholder, language)}
                value={query}
                onChange={(event) => setQuery(event.target.value)}
              />
            </label>

            <div className="filter-row" aria-label="Produktfilter">
              {productFilters.map((filter) => (
                <button
                  key={filter}
                  className={
                    filter === productFilter ? "filter active" : "filter"
                  }
                  onClick={() => setProductFilter(filter)}
                  type="button"
                >
                  {translate(productLabels[filter], language)}
                </button>
              ))}
            </div>
          </div>

          <div className="library-layout">
            <div className="catalog">
              {filteredModels.map((model) => (
                <ModelCard
                  key={model.id}
                  language={language}
                  model={model}
                  active={model.id === selectedModel?.id}
                  onSelect={() => setSelectedId(model.id)}
                />
              ))}
              {filteredModels.length === 0 ? (
                <div className="empty-results">
                  {translate(uiText.noModels, language)}
                </div>
              ) : null}
            </div>

            <aside className="details-panel" id="details">
              {selectedModel ? (
                <>
                  <div className="details-head">
                    <div>
                      <div className="eyebrow">{selectedModel.product}</div>
                      <h3>{translate(selectedModel.title, language)}</h3>
                    </div>
                    <span className="version-pill">{selectedModel.version}</span>
                  </div>

                  <p className="details-summary">
                    {translate(selectedModel.summary, language)}
                  </p>

                  <div className="tag-row">
                    {selectedModel.tags[language].map((tag) => (
                      <span className="tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <section className="content-block">
                    <div className="block-title">{translate(uiText.preview, language)}</div>
                  </section>

                  <StlPreview
                    emptyText={translate(uiText.noPreview, language)}
                    loadingText={translate(uiText.stlLoading, language)}
                    stepText={translate(uiText.stepDownloadable, language)}
                    url={
                      selectedModel.previewPath
                        ? withBase(selectedModel.previewPath)
                        : undefined
                    }
                  />

                  <div className="meta-grid">
                    <div className="meta-card">
                      <span className="meta-label">{translate(uiText.category, language)}</span>
                      <strong>{translate(selectedModel.category, language)}</strong>
                    </div>
                    <div className="meta-card">
                      <span className="meta-label">
                        {translate(uiText.materials, language)}
                      </span>
                      <strong>{formatList(selectedModel.materials[language])}</strong>
                    </div>
                  </div>

                  <section className="content-block">
                    <div className="block-title">{translate(uiText.downloads, language)}</div>
                    <div className="downloads">
                      {selectedModel.files.map((file) => (
                        <a
                          key={file.path}
                          className="download-card"
                          href={withBase(file.path)}
                          download={file.fileName}
                        >
                          <div>
                            <strong>{translate(file.label, language)}</strong>
                            <span>
                              {file.format.toUpperCase()} · {file.sizeLabel}
                            </span>
                          </div>
                          <span className="download-arrow">↗</span>
                        </a>
                      ))}
                    </div>
                  </section>

                  <section className="content-block">
                    <div className="block-title">{translate(uiText.printNotes, language)}</div>
                    <ul className="notes-list">
                      {selectedModel.printNotes[language].map((note) => (
                        <li key={note}>{note}</li>
                      ))}
                    </ul>
                  </section>

                  <section className="content-block">
                    <div className="block-title">{translate(uiText.infoNotes, language)}</div>
                    <ul className="notes-list">
                      {selectedModel.infoNotes[language].map((note) => (
                        <li key={note}>{note}</li>
                      ))}
                    </ul>
                  </section>
                </>
              ) : (
                <div className="empty-results">
                  {translate(uiText.noModelSelected, language)}
                </div>
              )}
            </aside>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div>
            <div className="footer-title">DynoForce</div>
            <p className="footer-copy">{translate(uiText.footerCopy, language)}</p>
          </div>
          <div className="footer-links">
            <a href="https://dynoforce.ch" target="_blank" rel="noreferrer">
              {translate(uiText.footerHome, language)}
            </a>
            <a
              href="https://dynoforce-wiki.web.app/#uebersicht"
              target="_blank"
              rel="noreferrer"
            >
              {translate(uiText.footerWiki, language)}
            </a>
            <a
              href="https://event.dynoforce.ch"
              target="_blank"
              rel="noreferrer"
            >
              {translate(uiText.footerEvents, language)}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ModelCard({
  language,
  model,
  active,
  onSelect,
}: {
  language: Language;
  model: ModelEntry;
  active: boolean;
  onSelect: () => void;
}) {
  const formatSummary = model.files.map((file) => file.format.toUpperCase());

  return (
    <button
      className={active ? "model-card active" : "model-card"}
      onClick={onSelect}
      type="button"
    >
      <div className="model-card-head">
        <div>
          <span className="model-product">{model.product}</span>
          <h3>{translate(model.title, language)}</h3>
        </div>
        <span className="version-pill">{model.version}</span>
      </div>

      <p>{translate(model.summary, language)}</p>

      <div className="card-foot">
        <span>{translate(model.category, language)}</span>
        <span>{formatSummary.join(" · ")}</span>
      </div>
    </button>
  );
}
