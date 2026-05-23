import React, { useCallback, useContext, useState } from "react";
import "./CodePlayground.css";
import { themeContext } from "../../Context";

const DEFAULT_HTML = `<div class="card">
  <h1>Hello, World!</h1>
  <p>I am Ashish — Web Developer</p>
  <button onclick="alert('Code runs!')">Click me</button>
</div>`;

const DEFAULT_CSS = `* {
  box-sizing: border-box;
}

body {
  margin: 0;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: system-ui, sans-serif;
  background: linear-gradient(135deg, #050810, #0a1628);
  color: #e8f4ff;
}

.card {
  text-align: center;
  padding: 2rem;
  border-radius: 16px;
  border: 1px solid #00ff9d;
  box-shadow: 0 0 30px rgba(0, 255, 157, 0.25);
  background: rgba(0, 255, 157, 0.06);
}

h1 {
  margin: 0 0 0.5rem;
  color: #00ff9d;
  text-shadow: 0 0 12px rgba(0, 255, 157, 0.5);
}

p {
  color: #8ba3b8;
  margin: 0 0 1rem;
}

button {
  padding: 0.6rem 1.25rem;
  border: 1px solid #00e5ff;
  background: transparent;
  color: #00e5ff;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
}

button:hover {
  background: #00ff9d;
  color: #050810;
  border-color: #00ff9d;
}`;

const EXAMPLES = {
  hello: { html: DEFAULT_HTML, css: DEFAULT_CSS },
  button: {
    html: `<button class="neon-btn">Run Code ✓</button>`,
    css: `body {
  margin: 0; min-height: 100vh; display: grid; place-items: center;
  background: #050810;
}
.neon-btn {
  padding: 1rem 2rem;
  font-size: 1.1rem;
  border: 2px solid #00ff9d;
  background: transparent;
  color: #00ff9d;
  border-radius: 12px;
  cursor: pointer;
  box-shadow: 0 0 20px rgba(0,255,157,0.4);
}
.neon-btn:hover { background: #00ff9d; color: #000; }`,
  },
  card: {
    html: `<article class="profile">
  <h2>Web Developer</h2>
  <ul>
    <li>React</li>
    <li>Node.js</li>
    <li>HTML & CSS</li>
  </ul>
</article>`,
    css: `body {
  margin: 0; min-height: 100vh; display: grid; place-items: center;
  background: #0a0f1a; font-family: sans-serif;
}
.profile {
  padding: 1.5rem 2rem;
  border-radius: 14px;
  border: 1px solid rgba(0, 229, 255, 0.4);
  background: rgba(0, 229, 255, 0.08);
  color: #fff;
}
h2 { color: #00e5ff; margin-top: 0; }
li { color: #00ff9d; margin: 0.35rem 0; }`,
  },
};

function buildDocument(html, css) {
  const trimmed = html.trim();
  const styleBlock = css.trim() ? `<style>${css}</style>` : "";

  if (/^<!DOCTYPE|^<html/i.test(trimmed)) {
    if (styleBlock && /<\/head>/i.test(trimmed)) {
      return trimmed.replace(/<\/head>/i, `${styleBlock}</head>`);
    }
    if (styleBlock) {
      return trimmed.replace(/<body/i, `${styleBlock}<body`);
    }
    return trimmed;
  }

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  ${styleBlock}
</head>
<body>
${html}
</body>
</html>`;
}

const CodePlayground = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const [html, setHtml] = useState(DEFAULT_HTML);
  const [css, setCss] = useState(DEFAULT_CSS);
  const [activeTab, setActiveTab] = useState("html");
  const [preview, setPreview] = useState(() =>
    buildDocument(DEFAULT_HTML, DEFAULT_CSS)
  );
  const [status, setStatus] = useState("Ready");

  const runCode = useCallback(() => {
    try {
      const doc = buildDocument(html, css);
      setPreview(doc);
      setStatus("Ran successfully ✓");
    } catch {
      setStatus("Error building preview");
    }
  }, [html, css]);

  const resetCode = () => {
    setHtml(DEFAULT_HTML);
    setCss(DEFAULT_CSS);
    const doc = buildDocument(DEFAULT_HTML, DEFAULT_CSS);
    setPreview(doc);
    setStatus("Reset to default");
  };

  const loadExample = (key) => {
    const ex = EXAMPLES[key];
    setHtml(ex.html);
    setCss(ex.css);
    setPreview(buildDocument(ex.html, ex.css));
    setStatus(`Loaded: ${key}`);
  };

  return (
    <section className="code-playground" id="code-playground">
      <p className="section-tag">{"// web_dev.playground()"}</p>
      <h2 className="section-heading">Live Code Editor</h2>
      <p className={`section-desc ${darkMode ? "" : "light"}`}>
        Write HTML & CSS, hit Run, and see your code live — try it yourself!
      </p>

      <div className={`playground-shell glass-panel ${darkMode ? "dark" : "light"}`}>
        <div className="playground-toolbar">
          <div className="playground-tabs" role="tablist">
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === "html"}
              className={`pg-tab ${activeTab === "html" ? "active" : ""}`}
              onClick={() => setActiveTab("html")}
            >
              HTML
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === "css"}
              className={`pg-tab ${activeTab === "css" ? "active" : ""}`}
              onClick={() => setActiveTab("css")}
            >
              CSS
            </button>
          </div>

          <div className="playground-actions">
            <button type="button" className="pg-btn run" onClick={runCode}>
              ▶ Run
            </button>
            <button type="button" className="pg-btn reset" onClick={resetCode}>
              ↺ Reset
            </button>
          </div>
        </div>

        <div className="playground-examples">
          <span className="examples-label">Examples:</span>
          {Object.keys(EXAMPLES).map((key) => (
            <button
              key={key}
              type="button"
              className="pg-example-chip"
              onClick={() => loadExample(key)}
            >
              {key}
            </button>
          ))}
        </div>

        <div className="playground-panels">
          <div className="playground-editor-pane">
            {activeTab === "html" ? (
              <textarea
                className="code-textarea"
                value={html}
                onChange={(e) => setHtml(e.target.value)}
                spellCheck={false}
                aria-label="HTML code editor"
              />
            ) : (
              <textarea
                className="code-textarea"
                value={css}
                onChange={(e) => setCss(e.target.value)}
                spellCheck={false}
                aria-label="CSS code editor"
              />
            )}
            <span className="playground-status">{status}</span>
          </div>

          <div className="playground-preview-pane">
            <div className="preview-label">
              <span className="preview-dot" />
              Live Preview
            </div>
            <iframe
              title="Code preview"
              className="preview-iframe"
              sandbox="allow-scripts"
              srcDoc={preview}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodePlayground;
