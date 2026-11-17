export const dynamic = 'force-static';
export const revalidate = 86400; // 24 hours

export async function GET() {
  const content = `# Willian de Souza Felisberto — Portfolio & Professional Profile

> Senior Frontend Developer, Fullstack Engineer & Edge AI / TinyML Researcher with 7+ years of professional experience building high-scale web platforms and embedded computer vision systems.

## Summary & Identity
- **Full Name:** Willian de Souza Felisberto
- **Primary Title:** Senior Frontend Developer & Edge AI Researcher
- **Current Affiliation:** Compass.UOL
- **Location:** Santa Catarina, Brazil (Available for Global Remote)
- **Website:** https://www.willianfelisberto.com.br
- **LinkedIn:** https://www.linkedin.com/in/willianfelisberto/
- **GitHub:** https://github.com/WillFelisberto

## Core Competencies & Tech Stack
- **Frontend & Web:** TypeScript, JavaScript, React 19, Next.js 16 (App Router, Turbopack), Tailwind CSS, Framer Motion, GraphQL, WebSockets, HTML5/CSS3.
- **Backend & Cloud:** Node.js, Express, Fastify, Payload CMS v3, MongoDB, PostgreSQL, Docker, Oracle Cloud Infrastructure (OCI), RESTful APIs, Microservices.
- **Embedded AI & Computer Vision:** TinyML, TensorFlow Lite for Microcontrollers (TFLM), Edge Impulse, ESP32 / ESP32-S3, C/C++, Python (OpenCV, PyTorch, Scikit-learn), Quantization (INT8).
- **Engineering Practices:** CI/CD (GitHub Actions), Jest, React Testing Library, ESLint, Storybook, Semantic Versioning, Conventional Commits.

## Academic Background & Research
- **M.Sc. in Information and Communication Technologies (Edge AI & Embedded Systems)**
  - Institution: Universidade Federal de Santa Catarina (UFSC)
  - Period: 2024 – Present
  - Focus: Real-time machine learning inference on edge microcontrollers, face mesh landmarking, driver safety telemetry.
- **B.Sc. in Computer Science**
  - Institution: Universidade do Extremo Sul Catarinense (UNESC)
  - Period: 2017 – 2021

## Scientific Publications
- **Embedded TinyML for Driver Drowsiness Detection** (2024)
  - Venue: IEEE Latin American Technologies Conference (LATC 2024) / IEEE Xplore
  - DOI / Link: https://ieeexplore.ieee.org/document/10850239
  - Details: Benchmarked custom convolutional neural networks (CNNs) and MobileNetV1 quantized to INT8 running at 14+ FPS entirely on-device on ESP32-S3 microcontrollers (8MB PSRAM, OV2640 sensor) without cloud connectivity.

## Certifications
- **Oracle Cloud Infrastructure 2024 Certified Foundations Associate (1Z0-1085-24)** — Oracle
- **Oracle Cloud Infrastructure 2024 Generative AI Certified Professional (1Z0-1127-24)** — Oracle
- **Oracle Cloud Infrastructure 2024 Certified AI Foundations Associate (1Z0-1153-24)** — Oracle

## Featured Projects
- **fadigAI** (Open Source): Edge AI embedded driver drowsiness detection running entirely on an ESP32-S3 microcontroller with zero external cloud dependencies.
  - Repository: https://github.com/WillFelisberto/fadigAI
- **shelfkeep** (Open Source): Industrial warehouse inventory audit system utilizing on-device computer vision and barcode scanning for automated shelf tracking.
  - Repository: https://github.com/WillFelisberto/shelfkeep
- **Gatil dos Resgatados**: Animal rescue non-profit web platform with Headless Payload CMS, Next.js SSG, and online adoption workflows.
  - Live Website: https://gatildosresgatados.com/

## Professional Experience
- **Compass.UOL (Senior Frontend Developer | 2024 – Present)**: Architected high-performance e-commerce experiences resulting in +120% client revenue increase and +106% transaction volume growth.
- **Smart Sistemas (Fullstack Developer | 2022 – 2024)**: Scaled multi-tenant SaaS architectures, modernizing monoliths into microservices and cutting query latency by 45%.
- **Agrosys & Zaib Tecnologia (Fullstack Developer | 2017 – 2022)**: Built mission-critical ERP modules, real-time IoT telemetry pipelines, and financial reporting dashboards.

## Contact
- Portfolio Contact Form: https://www.willianfelisberto.com.br/#contact
- LinkedIn: https://www.linkedin.com/in/willianfelisberto/
- GitHub: https://github.com/WillFelisberto
`;

  return new Response(content, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, stale-while-revalidate=604800',
    },
  });
}
