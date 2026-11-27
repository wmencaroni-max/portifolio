# Wendel Moretti Mencaroni · Portfólio

Site pessoal de página única para Wendel Moretti Mencaroni (Tech Analytics Senior): data science, big data, analytics e growth hacking. Saída estática.

## Executar localmente

Requisito: Node.js 22.23.4 ou superior (verificado com Node 26.13.1 e npm 11.20.0).

```powershell
npm install
npm run dev
```

Abra http://localhost:4321/portifolio/ (português) ou http://localhost:4321/portifolio/en/ (inglês). Política de Privacidade: /portifolio/privacidade/ e /portifolio/en/privacy/.

## Site publicado

https://wmencaroni-max.github.io/portifolio/ (GitHub Pages). Cada push na `main` publica sozinho pelo workflow `.github/workflows/deploy.yml` (ADR 0003).

| Comando | O que faz |
| --- | --- |
| `npm run dev` | Servidor de desenvolvimento com recarga automática em http://localhost:4321 |
| `npm run build` | Gera o site estático em `dist/` |
| `npm run preview` | Serve o `dist/` localmente para conferir a versão final |
| `npx astro check` | Verificação de tipos dos arquivos Astro e TS |

## Onde editar o conteúdo

Todo o texto fica em [src/data/perfil.ts](src/data/perfil.ts), em `conteudo.pt` e `conteudo.en`. Ao mudar um texto, mude nos dois idiomas. A foto é gerada por `node scripts/otimizar-foto.mjs`. Os itens marcados como "A CONFIRMAR" ou entre [colchetes] ainda precisam dos dados reais (veja [docs/status/CURRENT.md](docs/status/CURRENT.md)).

## Documentação

- [AGENTS.md](AGENTS.md): regras para agentes de IA
- [docs/REQUISITOS.md](docs/REQUISITOS.md): o que o site precisa fazer e critérios de aceite
- [docs/ARQUITETURA.md](docs/ARQUITETURA.md): estrutura e responsabilidades
- [docs/STACK.md](docs/STACK.md): dependências e versões verificadas
- [docs/DESIGN-SYSTEM.md](docs/DESIGN-SYSTEM.md): cores, tipografia, componentes e movimento
- [docs/TESTES.md](docs/TESTES.md): como validar e os limites da validação
- [docs/adr/](docs/adr/): decisões
- [docs/status/CURRENT.md](docs/status/CURRENT.md) e [docs/status/HANDOFF.md](docs/status/HANDOFF.md): situação e retomada
- [ONDE_ACHAR.md](ONDE_ACHAR.md): caminhos e comandos
