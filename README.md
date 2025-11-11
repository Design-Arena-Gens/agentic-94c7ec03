# Adaptive Trend Shield Generator

Aplicação Next.js que gera um indicador em Pascal para uso direto no ProfitChart Pro (Nelogica). Ajuste parâmetros de tendência, volatilidade e suavização e copie/baixe o código final `.pas`.

## Requisitos

- Node.js 18+
- npm

## Instalação

```bash
npm install
npm run dev
```

Abra `http://localhost:3000` para utilizar o gerador interativo.

## Scripts

- `npm run dev` – ambiente de desenvolvimento
- `npm run build` – build de produção
- `npm start` – servidor de produção
- `npm run lint` – análises ESLint

## Estrutura

- `src/app/page.tsx` – UI e lógica do gerador
- `indicators/adaptive_trend_shield.pas` – versão padrão do indicador para importação rápida

## Exportando para o ProfitChart

1. Ajuste os parâmetros e copie/baixe o código via interface.
2. No ProfitChart Pro, abra o Editor de Indicadores.
3. Crie um novo indicador, cole o código e compile.
4. Aplique ao gráfico configurando os inputs desejados.
