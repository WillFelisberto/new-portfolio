export const dynamic = 'force-static';
export const revalidate = 86400; // 24 hours

export async function GET() {
  const content = `# Willian de Souza Felisberto — Portfolio & Professional Profile

> Frontend Developer & Fullstack Engineer with 7+ years of professional experience in JavaScript frameworks (React, Redux, KnockoutJS) and fullstack development (Node.js, TypeScript). MSc Student in Information and Communication Technologies at UFSC, specializing in Edge AI and TinyML.

## Summary & Identity
- **Full Name:** Willian de Souza Felisberto
- **Professional Title:** Frontend Developer & Edge AI Researcher
- **Current Position:** Frontend Developer at Compass.UOL (Feb 2021 – Present)
- **Location:** Araranguá, Santa Catarina, Brazil (Available for Global Remote)
- **Phone:** +55 (48) 99986-1410
- **Email:** willianaru@gmail.com / willian_aru_@hotmail.com
- **Website:** https://www.willianfelisberto.com.br
- **LinkedIn:** https://www.linkedin.com/in/willianfelisberto/
- **GitHub:** https://github.com/WillFelisberto

## Core Technical Skills
- **Frontend & Web:** JavaScript (ES6+), TypeScript, React, Next.js (App Router, Turbopack, SSG/SSR), Redux, KnockoutJS, HTML5, CSS3, Tailwind CSS, Styled Components, Responsive Web Design, Web Services.
- **Backend & APIs:** Node.js, Express, Microservices, RESTful APIs, Payload CMS v3 (Headless CMS), GraphQL, PHP, Laravel, Progress 4GL.
- **Databases & Cloud:** MongoDB, PostgreSQL, MySQL, Oracle Cloud Infrastructure (OCI), Oracle Cloud Commerce (OCC).
- **Artificial Intelligence & Edge:** Edge AI, TinyML, TensorFlow Lite for Microcontrollers (TFLM), INT8 Quantization, ESP32 / ESP32-S3, Computer Vision, AI Agents, GitHub Copilot.
- **Testing, Quality & CI/CD:** Jest, React Testing Library, Storybook, ESLint Flat Config, Prettier, Git, GitHub Actions, Docker, Scrum, Agile Methodologies.
- **Languages:** Portuguese (Native), English (Fluent / Full Professional Proficiency).

## Academic Background & Research
- **Master's Degree in Information and Communication Technologies (Focused in Edge AI)**
  - Institution: Federal University of Santa Catarina (UFSC)
  - Period: Mar 2026 – Present
  - Focus: Edge AI, TinyML, and embedded computer vision on low-power microcontrollers (ESP32-S3). Investigating local INT8 quantized neural network inference for real-time safety sensing with zero cloud latency.
- **Bachelor of Information and Communication Technologies (ICT)**
  - Institution: Federal University of Santa Catarina (UFSC)
  - Period: Feb 2013 – Feb 2018
  - Curriculum: Applied undergraduate program focused on software engineering, distributed systems, information systems, and databases.
  - Leadership: Vice-President of the Academic Center (CALTIC).

## Academic Publications
- **“Embedded TinyML for Driver Drowsiness Detection”**
  - **Authors:** Willian de Souza Felisberto, Roderval Marcelino
  - **Conference:** 2026 IEEE Colombian Conference on Applications of Computational Intelligence (ColCACI)
  - **Publication:** IEEE Xplore
  - **DOI:** https://doi.org/10.1109/ColCACI71483.2026.11691515
  - **IEEE Xplore URL:** https://ieeexplore.ieee.org/document/10850239
  - **Abstract:** Explores the application of TinyML for real-time driver drowsiness and fatigue detection directly on edge microcontrollers (ESP32-S3), utilizing INT8 quantized neural network inference for ultra-low computational latency, low power consumption, and zero cloud dependency.

## Licenses & Certifications
- **Oracle Cloud Infrastructure 2024 Certified Foundations Associate** — Oracle (Issued: Nov 2024)
- **Oracle Fusion AI Agent Studio Certified Foundations Associate - Rel 1** — Oracle (Issued: Sep 2025)
- **Oracle Cloud Infrastructure 2023 Certified Foundations Associate** — Oracle (Issued: Oct 2023)

## Professional Work Experience
- **Compass.UOL** (Feb 2021 – Present · Remote)
  - *Role:* Frontend Developer
  - Compass UOL is a global company driving organizational transformation through Artificial Intelligence, Generative AI, and Digital Technologies.
  - Specialized in front-end development using KnockoutJS within the Oracle Cloud Commerce (OCC) platform.
  - Sustained and maintained a B2C e-commerce platform focused on home appliances and furniture sales.
  - Implemented omnichannel functionalities to integrate online products with physical stores for rapid delivery.
  - Maintained and supported Node.js microservices linked to the OCC platform.
  - Contributed directly to a **120% revenue increase**, **106% transaction growth**, and **39% higher conversion rates**.

- **Smart Sistemas** (Feb 2020 – Feb 2021)
  - *Role:* FullStack Developer
  - Smart Sistemas specializes in software solutions for various industries.
  - Developed and maintained a B2B fashion and apparel web platform.
  - Utilized React, Hooks, Redux, and Styled Components for frontend development, emphasizing component reusability.
  - Managed backend development using Node.js and TypeScript, ensuring a cohesive tech stack.
  - Troubleshot and implemented features to enhance system performance and business rule customizations.

- **Agrosys Tecnologia** (Jul 2019 – Feb 2020 · Criciúma, SC)
  - *Role:* System Analyst
  - Agrosys Tecnologia is a leading Brazilian company providing technology solutions for agribusiness supply chain management.
  - Maintained mission-critical enterprise ERP systems developed in Progress 4GL.
  - Utilized a proprietary HTML page generation framework for ERP development.
  - Ensured system stability and scalability across nationwide agribusiness installations.

- **Zaib Agência Digital** (Jul 2018 – Jul 2019 · Araranguá, SC)
  - *Role:* Developer
  - Digital agency specializing in web development and digital marketing solutions.
  - Developed impactful landing pages using PHP and MySQL.
  - Converted legacy systems from Flash to modern HTML/CSS.
  - Created a CRUD-based financial management system using PHP with Laravel.
  - Provided remote technical support to clients via AnyDesk.

## Featured Projects & Open Source
- **fadigAI** (Open Source): Embedded TinyML driver drowsiness and micro-sleep detection running on ESP32-S3 microcontrollers with on-device INT8 inference, zero cloud dependency, and hardware alert peripherals.
  - GitHub: https://github.com/WillFelisberto/fadigAI
  - Paper: https://ieeexplore.ieee.org/document/10850239
- **shelfkeep** (Open Source): Industrial warehouse inventory audit system utilizing on-device computer vision and barcode scanning for automated shelf tracking.
  - GitHub: https://github.com/WillFelisberto/shelfkeep
- **Gatil dos Resgatados (Gatil CMS)** (Volunteer Open Source): High-traffic animal shelter web platform with Headless Payload CMS v3, Next.js 16 SSG, and online adoption sponsorship workflows.
  - Live Website: https://gatildosresgatados.com/
  - GitHub: https://github.com/WillFelisberto/gatil-cms

## Contact
- Portfolio Website: https://www.willianfelisberto.com.br
- Contact Form: https://www.willianfelisberto.com.br/#contact
- Email: willianaru@gmail.com
- Phone: +55 (48) 99986-1410
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
