"use client";

export default function CVPage() {
  return (
    <div className="section-container">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
          Curriculum Vitae
        </h1>
        <p className="text-text-secondary text-lg max-w-md mx-auto">
          Choose your preferred language to view or download my CV.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {/* English */}
        <div className="glass-card flex flex-col items-center text-center p-8">
          <span className="text-4xl mb-4">🇬🇧</span>
          <h2 className="text-xl font-semibold text-text-primary mb-2">English</h2>
          <p className="text-text-secondary text-sm mb-8">
            Full CV in English — professional experience, technical projects, and skills.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 w-full mt-auto">
            <a
              href="/cv/en"
              className="btn-primary flex-1 justify-center"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                <circle cx="12" cy="12" r="3"/>
              </svg>
              View Online
            </a>
            <a
              href="/CV_MaciejBledowski_EN.pdf"
              download
              className="btn-outline flex-1 justify-center"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download PDF
            </a>
          </div>
        </div>

        {/* Polish */}
        <div className="glass-card flex flex-col items-center text-center p-8">
          <span className="text-4xl mb-4">🇵🇱</span>
          <h2 className="text-xl font-semibold text-text-primary mb-2">Polski</h2>
          <p className="text-text-secondary text-sm mb-8">
            CV po polsku — doświadczenie zawodowe, projekty techniczne i umiejętności.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 w-full mt-auto">
            <a
              href="/cv/pl"
              className="btn-primary flex-1 justify-center"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                <circle cx="12" cy="12" r="3"/>
              </svg>
              Wyświetl online
            </a>
            <a
              href="/CV_MaciejBledowski_PL.pdf"
              download
              className="btn-outline flex-1 justify-center"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Pobierz PDF
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
