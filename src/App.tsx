import { useEffect, useMemo, useState } from "react";
import StlPreview from "./components/StlPreview";
import { models, productFilters } from "./data/models";
import type { ModelEntry, ProductFamily } from "./types";

function formatList(items: string[]) {
  return items.join(" · ");
}

function withBase(path: string) {
  return `${import.meta.env.BASE_URL}${path}`.replace(/([^:]\/)\/+/g, "$1");
}

export default function App() {
  const [query, setQuery] = useState("");
  const [productFilter, setProductFilter] = useState<ProductFamily>("All");
  const [selectedId, setSelectedId] = useState(models[0]?.id ?? "");

  const filteredModels = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return models.filter((model) => {
      const matchesProduct =
        productFilter === "All" || model.product === productFilter;
      const haystack = [
        model.title,
        model.product,
        model.category,
        model.summary,
        model.tags.join(" "),
      ]
        .join(" ")
        .toLowerCase();
      const matchesQuery =
        normalizedQuery.length === 0 || haystack.includes(normalizedQuery);

      return matchesProduct && matchesQuery;
    });
  }, [productFilter, query]);

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
  const previewCount = models.filter((model) => model.previewPath).length;
  const stepCount = models.filter((model) =>
    model.files.some((file) => file.format === "step"),
  ).length;

  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="container topbar">
          <a className="brand" href="#top" aria-label="DynoForce 3D Library">
            <img
              className="brand-mark"
              src={`${import.meta.env.BASE_URL}brand/favicon.png`}
              alt=""
            />
            <span>DynoForce 3D Library</span>
          </a>
          <nav className="topnav" aria-label="Sektionen">
            <a href="#library">Bibliothek</a>
            <a href="#details">Modelldetails</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">DynoForce CAD & Print Files</div>
              <h1>
                STL ansehen, STEP laden und 3D-Dateien ohne Umwege finden.
              </h1>
              <p className="lead">
                Diese Bibliothek ist auf schnelle Navigation, saubere Downloads
                und klare Druckhinweise ausgelegt. Das Design lehnt sich an
                DynoForce an, ist aber für 3D-Dateien und technische Inhalte
                optimiert.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#library">
                  Zur 3D-Bibliothek
                </a>
                <a className="button button-secondary" href="#details">
                  Modelldetails ansehen
                </a>
              </div>
            </div>

            <div className="hero-panel">
              <div className="hero-stat">
                <strong>{models.length}</strong>
                <span>aufbereitete Einträge</span>
              </div>
              <div className="hero-stat">
                <strong>{previewCount}</strong>
                <span>Modelle mit STL-Preview</span>
              </div>
              <div className="hero-stat">
                <strong>{stepCount}</strong>
                <span>Einträge mit STEP-Datei</span>
              </div>
              <div className="hero-note">
                Fokus: schnelle Suche, klare Dateiformate, direkte
                Druckinformationen und gute Basis für spätere Uploads.
              </div>
            </div>
          </div>
        </section>

        <section className="stats-band">
          <div className="container stats-grid">
            <article>
              <strong>{featuredCount}</strong>
              <span>Empfohlene Modelle für den Schnellstart</span>
            </article>
            <article>
              <strong>STL + STEP</strong>
              <span>Direkter Download dort, wo beide Formate vorhanden sind</span>
            </article>
            <article>
              <strong>Print Notes</strong>
              <span>Material-, Slicer- und Einsatzhinweise pro Eintrag</span>
            </article>
          </div>
        </section>

        <section className="library-section container" id="library">
          <div className="section-head">
            <div>
              <div className="eyebrow">3D Library</div>
              <h2>Suche, Filter und technische Vorschau in einer Ansicht</h2>
            </div>
            <p>
              Modelle können nach Produktfamilie gefiltert werden. Die rechte
              Seite zeigt STL-Preview, Downloads und Hinweise für Druck oder
              Weiterbearbeitung.
            </p>
          </div>

          <div className="toolbar">
            <label className="search-field" htmlFor="search">
              <span>Suchen</span>
              <input
                id="search"
                type="search"
                placeholder="z. B. DynoGrip, Gehäuse, Attachment ..."
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
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="library-layout">
            <div className="catalog">
              {filteredModels.map((model) => (
                <ModelCard
                  key={model.id}
                  model={model}
                  active={model.id === selectedModel?.id}
                  onSelect={() => setSelectedId(model.id)}
                />
              ))}
              {filteredModels.length === 0 ? (
                <div className="empty-results">
                  Keine Modelle für diesen Filter gefunden.
                </div>
              ) : null}
            </div>

            <aside className="details-panel" id="details">
              {selectedModel ? (
                <>
                  <div className="details-head">
                    <div>
                      <div className="eyebrow">{selectedModel.product}</div>
                      <h3>{selectedModel.title}</h3>
                    </div>
                    <span className="version-pill">{selectedModel.version}</span>
                  </div>

                  <p className="details-summary">{selectedModel.summary}</p>

                  <div className="tag-row">
                    {selectedModel.tags.map((tag) => (
                      <span className="tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <StlPreview
                    url={
                      selectedModel.previewPath
                        ? withBase(selectedModel.previewPath)
                        : undefined
                    }
                  />

                  <div className="meta-grid">
                    <div className="meta-card">
                      <span className="meta-label">Kategorie</span>
                      <strong>{selectedModel.category}</strong>
                    </div>
                    <div className="meta-card">
                      <span className="meta-label">Material empfohlen</span>
                      <strong>{formatList(selectedModel.materials)}</strong>
                    </div>
                  </div>

                  <section className="content-block">
                    <div className="block-title">Downloads</div>
                    <div className="downloads">
                      {selectedModel.files.map((file) => (
                        <a
                          key={file.path}
                          className="download-card"
                          href={withBase(file.path)}
                          download={file.fileName}
                        >
                          <div>
                            <strong>{file.label}</strong>
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
                    <div className="block-title">Druckhinweise</div>
                    <ul className="notes-list">
                      {selectedModel.printNotes.map((note) => (
                        <li key={note}>{note}</li>
                      ))}
                    </ul>
                  </section>

                  <section className="content-block">
                    <div className="block-title">Infos & Kommentare</div>
                    <ul className="notes-list">
                      {selectedModel.infoNotes.map((note) => (
                        <li key={note}>{note}</li>
                      ))}
                    </ul>
                  </section>
                </>
              ) : (
                <div className="empty-results">
                  Kein Modell ausgewählt.
                </div>
              )}
            </aside>
          </div>
        </section>

      </main>
    </div>
  );
}

function ModelCard({
  model,
  active,
  onSelect,
}: {
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
          <h3>{model.title}</h3>
        </div>
        <span className="version-pill">{model.version}</span>
      </div>

      <p>{model.summary}</p>

      <div className="card-foot">
        <span>{model.category}</span>
        <span>{formatSummary.join(" · ")}</span>
      </div>
    </button>
  );
}
