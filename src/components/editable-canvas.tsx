import { useState, useRef, useCallback } from "react";

const STORAGE_KEY = "vitoria-canvas-content";

const defaultContent = `<h2>Seu espaço criativo</h2>
<p>Clique aqui e comece a escrever. Este é o seu canvas editorial — use para rascunhar ideias, briefings, textos de marca ou qualquer pensamento que precise ganhar forma.</p>
<p><br></p>
<p><em>Percepção antes da estética.</em></p>`;

function getInitialContent() {
  try {
    return localStorage.getItem(STORAGE_KEY) || defaultContent;
  } catch {
    return defaultContent;
  }
}

export function EditableCanvas() {
  const editorRef = useRef<HTMLDivElement>(null);
  const [saved, setSaved] = useState(false);

  const exec = useCallback((cmd: string, value?: string) => {
    document.execCommand(cmd, false, value);
    editorRef.current?.focus();
  }, []);

  const handleSave = useCallback(() => {
    if (!editorRef.current) return;
    try {
      localStorage.setItem(STORAGE_KEY, editorRef.current.innerHTML);
      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
    } catch {}
  }, []);

  const handleClear = useCallback(() => {
    if (!editorRef.current) return;
    editorRef.current.innerHTML = defaultContent;
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  const handleExport = useCallback(() => {
    if (!editorRef.current) return;
    const text = editorRef.current.innerText;
    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "canvas-vitoria.txt";
    a.click();
    URL.revokeObjectURL(url);
  }, []);

  return (
    <section className="mx-auto max-w-[1400px] px-6 md:px-10 py-24">
      <div className="flex items-end justify-between flex-wrap gap-4 mb-8">
        <div>
          <p className="eyebrow text-editorial">08 · Canvas editável</p>
          <h2 className="font-display text-4xl md:text-5xl mt-2">
            Seu espaço de <span className="italic">criação</span>.
          </h2>
        </div>
        <p className="text-sm text-ink/60 max-w-xs">
          Escreva, formate e salve. Seu conteúdo fica guardado no navegador.
        </p>
      </div>

      <div className="edito-card overflow-visible">
        {/* Toolbar */}
        <div className="flex flex-wrap items-center gap-1 px-4 py-3 border-b border-ink/10 bg-paper/40">
          <ToolBtn onClick={() => exec("bold")} title="Negrito">
            <span className="font-bold">B</span>
          </ToolBtn>
          <ToolBtn onClick={() => exec("italic")} title="Itálico">
            <span className="italic">I</span>
          </ToolBtn>
          <ToolBtn onClick={() => exec("underline")} title="Sublinhado">
            <span className="underline">U</span>
          </ToolBtn>
          <ToolBtn onClick={() => exec("strikeThrough")} title="Tachado">
            <span className="line-through">S</span>
          </ToolBtn>

          <Divider />

          <ToolBtn onClick={() => exec("formatBlock", "h2")} title="Título">
            H2
          </ToolBtn>
          <ToolBtn onClick={() => exec("formatBlock", "h3")} title="Subtítulo">
            H3
          </ToolBtn>
          <ToolBtn onClick={() => exec("formatBlock", "p")} title="Parágrafo">
            P
          </ToolBtn>

          <Divider />

          <ToolBtn onClick={() => exec("insertUnorderedList")} title="Lista">
            •  ≡
          </ToolBtn>
          <ToolBtn onClick={() => exec("insertOrderedList")} title="Lista numerada">
            1. ≡
          </ToolBtn>

          <Divider />

          <ToolBtn onClick={() => exec("justifyLeft")} title="Alinhar esquerda">
            ≡←
          </ToolBtn>
          <ToolBtn onClick={() => exec("justifyCenter")} title="Centralizar">
            ≡↔
          </ToolBtn>

          <div className="flex-1" />

          <ToolBtn onClick={handleClear} title="Limpar canvas" variant="ghost">
            Limpar
          </ToolBtn>
          <ToolBtn onClick={handleExport} title="Exportar como .txt" variant="ghost">
            Exportar ↓
          </ToolBtn>
          <button
            onClick={handleSave}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-ink text-background text-xs tracking-wider uppercase hover:bg-lime hover:text-ink transition-colors"
          >
            {saved ? "✓ Salvo" : "Salvar"}
          </button>
        </div>

        {/* Editor */}
        <div
          ref={editorRef}
          contentEditable
          suppressContentEditableWarning
          dangerouslySetInnerHTML={{ __html: getInitialContent() }}
          className="canvas-editor min-h-[400px] p-8 md:p-12 outline-none focus:ring-2 focus:ring-lime/30 rounded-b-[1.75rem] transition-shadow"
          onKeyDown={(e) => {
            if ((e.metaKey || e.ctrlKey) && e.key === "s") {
              e.preventDefault();
              handleSave();
            }
          }}
        />
      </div>

      <p className="mt-4 text-xs text-ink/40 text-center">
        Dica: use <kbd className="px-1.5 py-0.5 rounded bg-paper border border-ink/10 text-ink/60 font-mono text-[10px]">⌘S</kbd> para salvar rapidamente
      </p>
    </section>
  );
}

function ToolBtn({
  children,
  onClick,
  title,
  variant = "default",
}: {
  children: React.ReactNode;
  onClick: () => void;
  title: string;
  variant?: "default" | "ghost";
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      title={title}
      className={`inline-flex items-center justify-center min-w-[32px] h-8 px-2 rounded-lg text-xs font-medium transition-colors ${
        variant === "ghost"
          ? "text-ink/50 hover:text-ink hover:bg-paper"
          : "text-ink/70 hover:bg-lime/20 hover:text-ink"
      }`}
    >
      {children}
    </button>
  );
}

function Divider() {
  return <span className="w-px h-5 bg-ink/10 mx-1" />;
}
