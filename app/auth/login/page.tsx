import LoginForm from "../_components/loginCard";

export default function LoginPage() {
  return (
    <main className="bg-primary-foreground flex">
      <div className="flex h-screen flex-1 items-center justify-center">
        <LoginForm />
      </div>

      <div className="relative flex flex-1 overflow-hidden">
        {/* Gradiente base usando sua cor primary */}
        <div className="from-primary absolute inset-0 bg-gradient-to-br via-blue-600 to-blue-900" />

        {/* Camada de mesh suave */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,oklch(0.65_0.18_267)_0%,transparent_60%)] opacity-60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,oklch(0.28_0.12_250)_0%,transparent_55%)] opacity-80" />

        {/* Círculos decorativos com blur */}
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
        <div className="bg-primary/40 absolute -bottom-20 -left-20 h-80 w-80 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 h-64 w-64 -translate-y-1/2 rounded-full bg-blue-300/10 blur-2xl" />

        {/* Conteúdo opcional no painel */}
        <div className="relative z-10 flex w-full flex-col items-center justify-center gap-4 px-12 text-white/90">
          <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/30 bg-white/20 backdrop-blur-sm">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-semibold tracking-tight">
            Bem-vindo de volta
          </h2>
          <p className="max-w-xs text-center text-sm leading-relaxed text-white/60">
            Acesse sua conta para continuar de onde parou.
          </p>
        </div>
      </div>
    </main>
  );
}
