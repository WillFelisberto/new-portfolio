# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
Recrutadores e tech leads avaliando a contratação (CLT/PJ) de um desenvolvedor front-end. Chegam por LinkedIn ou link direto, querem entender rápido quem é Willian, o que ele construiu e como entrar em contato.

## Product Purpose
Portfólio pessoal de Willian de Souza Felisberto, front-end developer. Existe para converter visitas em conversas de contratação. Sucesso: o visitante vê experiência, projetos em destaque e conhece o stack, e envia uma mensagem pelo formulário de contato.

## Positioning
Front-end sênior (7+ anos, atualmente na Compass.UOL, com sólida experiência em e-commerce B2C e B2B e impacto comprovado em métricas de faturamento e conversão) e pesquisador de Mestrado em TIC com foco em Edge AI / TinyML na UFSC, unindo engenharia de software e estética de UI refinada.

## Operating Context
Páginas: home (hero, conhecimentos, educação, projetos em destaque, experiência, contato), lista de projetos e detalhe de projeto. Conteúdo gerenciado no Payload CMS (about, technologies, education, projects, workexperience, media). Contato via `/api/contact`, com Google Analytics.

## Capabilities and Constraints
- Next.js 15, React 19, Tailwind CSS 3, Framer Motion, Storybook 8, Jest, Payload 3 (MongoDB).
- Todo conteúdo vem do CMS e deve continuar editável; nada deve ser hardcoded além do texto de interface.
- UI em inglês.
- Estado de dependências: desatualizadas, com vulnerabilidades conhecidas (Next 15.0.4, Payload 3.6.0). Atualização é uma pendência aberta.

## Brand Commitments
Manter `public/images/logo.svg` e a foto `will.jpg`. Nome exibido: Willian Souza / Willian de Souza Felisberto.

## Evidence on Hand
Projetos, experiências, formação e tecnologias reais no CMS. Não há depoimentos nem métricas registradas; não inventar.

## Product Principles
1. O trabalho e a experiência reais vêm antes do enfeite.
2. Contato deve ser alcançável em poucos segundos de qualquer ponto da página.
3. Conteúdo editável pelo CMS, sem deploy de código.
4. Engenharia visível: o próprio site demonstra qualidade (testes, Storybook, acessibilidade).

## Accessibility & Inclusion
Contraste mínimo AA, foco visível por teclado e respeito a `prefers-reduced-motion`.
