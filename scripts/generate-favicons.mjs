import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

// Neo-brutalist S.C.R.A.P.S. "The Acid Workbench" Favicon
// Strictly follows docs/ILLUSTRATION_PROMPTS.md:
// - Night (#150F23), Surface (#1F1633), Line (#3E2C59), Hard Well shadow (#0B0716)
// - Electric Violet (#7553FF), Acid Lime (#C2EF4E), Bubblegum Coral (#FA7FAA), Off-white Ink (#F6F6F8)
// - 3px hard outline, tactile dropshadow, active LED test point, W monogram
const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64" fill="none">
  <!-- Hard tactile drop shadow (S.C.R.A.P.S. 4px down) -->
  <rect x="6" y="8" width="52" height="52" rx="12" fill="#0B0716" />
  
  <!-- Outer SMD Carrier Body: Deep Aubergine with hard 2.5px border -->
  <rect x="6" y="5" width="52" height="52" rx="12" fill="#150F23" stroke="#0B0716" stroke-width="2.5" />
  
  <!-- Inner Recessed Surface: Plum -->
  <rect x="10" y="9" width="44" height="44" rx="8" fill="#1F1633" stroke="#3E2C59" stroke-width="1.5" />
  
  <!-- Hardware Solder Pins / DuPont contacts on sides -->
  <!-- Left pins -->
  <rect x="2" y="18" width="5" height="4" rx="1" fill="#7553FF" stroke="#0B0716" stroke-width="1.5" />
  <rect x="2" y="28" width="5" height="4" rx="1" fill="#7553FF" stroke="#0B0716" stroke-width="1.5" />
  <rect x="2" y="38" width="5" height="4" rx="1" fill="#7553FF" stroke="#0B0716" stroke-width="1.5" />
  
  <!-- Right pins -->
  <rect x="57" y="18" width="5" height="4" rx="1" fill="#7553FF" stroke="#0B0716" stroke-width="1.5" />
  <rect x="57" y="28" width="5" height="4" rx="1" fill="#7553FF" stroke="#0B0716" stroke-width="1.5" />
  <rect x="57" y="38" width="5" height="4" rx="1" fill="#7553FF" stroke="#0B0716" stroke-width="1.5" />

  <!-- Pin 1 Index Notch (Corner Tape in Bubblegum Coral) -->
  <path d="M12 9 L22 9 L10 21 L10 11 A2 2 0 0 1 12 9 Z" fill="#FA7FAA" stroke="#0B0716" stroke-width="1.5" />
  
  <!-- Active Hot LED Test Point (Acid Lime with hard border) -->
  <circle cx="48" cy="15" r="3.5" fill="#C2EF4E" stroke="#0B0716" stroke-width="1.5" />
  <circle cx="47.2" cy="14.2" r="1.2" fill="#FFFFFF" />

  <!-- Central Technical Monogram "W" (Neo-brutalist Acid Workbench) -->
  <!-- Tactile offset shadow for "W" -->
  <path d="M17 22 L23 44 L28 29 L36 29 L41 44 L47 22" 
        stroke="#0B0716" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" />
  <path d="M17 21 L23 43 L28 28 L36 28 L41 43 L47 21" 
        stroke="#7553FF" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
  <path d="M17 20 L23 42 L28 27 L36 27 L41 42 L47 20" 
        stroke="#F6F6F8" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />

  <!-- Micro Technical Terminal Cursor / Spark in Lime -->
  <rect x="30" y="44" width="4" height="2" fill="#C2EF4E" rx="0.5" />
</svg>`;

function buildIco(pngBuffers) {
  // pngBuffers: array of { width, height, buffer }
  const count = pngBuffers.length;
  const headerSize = 6;
  const dirEntrySize = 16;
  let offset = headerSize + count * dirEntrySize;

  const header = Buffer.alloc(headerSize);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // icon type
  header.writeUInt16LE(count, 4); // count

  const dirEntries = [];
  for (const item of pngBuffers) {
    const entry = Buffer.alloc(dirEntrySize);
    entry.writeUInt8(item.width >= 256 ? 0 : item.width, 0);
    entry.writeUInt8(item.height >= 256 ? 0 : item.height, 1);
    entry.writeUInt8(0, 2); // color count
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // planes
    entry.writeUInt16LE(32, 6); // bit count
    entry.writeUInt32LE(item.buffer.length, 8); // size
    entry.writeUInt32LE(offset, 12); // offset
    dirEntries.push(entry);
    offset += item.buffer.length;
  }

  return Buffer.concat([
    header,
    ...dirEntries,
    ...pngBuffers.map((b) => b.buffer),
  ]);
}

async function run() {
  const svgBuffer = Buffer.from(svgContent, 'utf-8');

  // Generate PNG sizes
  const sizes = [16, 32, 48, 64, 180, 192, 512];
  const rendered = {};
  for (const size of sizes) {
    rendered[size] = await sharp(svgBuffer)
      .resize(size, size)
      .png()
      .toBuffer();
  }

  const icoBuffer = buildIco([
    { width: 16, height: 16, buffer: rendered[16] },
    { width: 32, height: 32, buffer: rendered[32] },
    { width: 48, height: 48, buffer: rendered[48] },
  ]);

  // Write files
  const writes = [
    { file: 'public/icon.svg', data: svgBuffer },
    { file: 'public/favicon.svg', data: svgBuffer },
    { file: 'public/favicon.ico', data: icoBuffer },
    { file: 'public/apple-touch-icon.png', data: rendered[180] },
    { file: 'public/icon-192.png', data: rendered[192] },
    { file: 'public/icon-512.png', data: rendered[512] },
    { file: 'src/app/favicon.ico', data: icoBuffer },
    { file: 'src/app/(portfolio)/favicon.ico', data: icoBuffer },
    { file: 'src/app/(portfolio)/icon.png', data: rendered[32] },
    { file: 'src/app/(portfolio)/apple-icon.png', data: rendered[180] },
  ];

  for (const item of writes) {
    const dir = path.dirname(item.file);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(item.file, item.data);
    console.log(`Generated: ${item.file} (${item.data.length} bytes)`);
  }
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
