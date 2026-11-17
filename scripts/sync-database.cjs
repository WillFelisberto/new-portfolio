const mongoose = require('mongoose');

function makeLexical(paragraphs) {
  return {
    root: {
      type: 'root',
      direction: 'ltr',
      format: '',
      indent: 0,
      version: 1,
      children: paragraphs.map((text) => ({
        type: 'paragraph',
        direction: 'ltr',
        format: '',
        indent: 0,
        version: 1,
        textFormat: 0,
        textStyle: '',
        children: [
          {
            type: 'text',
            text,
            detail: 0,
            format: 0,
            mode: 'normal',
            style: '',
            version: 1,
          },
        ],
      })),
    },
  };
}

async function run() {
  const uri = process.env.DATABASE_URI;
  if (!uri) {
    console.error('DATABASE_URI is missing');
    process.exit(1);
  }

  await mongoose.connect(uri);
  const db = mongoose.connection.db;
  console.log('Connected to MongoDB Atlas');

  // 1. UPDATE ABOUT (globals)
  const newAboutText =
    'Frontend Developer with 7+ years of experience in JavaScript frameworks (React, Redux, KnockoutJS) and Fullstack development (Node.js, TypeScript). Proven track record in building scalable e-commerce platforms, contributing to a 120% revenue increase, 106% transaction growth, and 39% higher conversion rates. Skilled in Agile methodologies, microservices, and performance optimization. Fluent in Portuguese and English, passionate about delivering seamless digital experiences.';

  const aboutUpdate = await db.collection('globals').updateOne(
    { globalType: 'about' },
    {
      $set: {
        description: makeLexical([newAboutText]),
        updatedAt: new Date(),
      },
    },
  );
  console.log('Updated About:', aboutUpdate.modifiedCount);

  // 2. UPDATE EDUCATION (educations)
  // Check if Master's degree already exists
  const masterTitle = 'Master\'s Degree in Information and Communication Technologies focused in Edge AI';
  const existingMaster = await db.collection('educations').findOne({ courseName: masterTitle });
  const ufscLogoId = new mongoose.Types.ObjectId('675c42536b1293660380d307');

  if (!existingMaster) {
    await db.collection('educations').insertOne({
      title: 'Federal University of Santa Catarina',
      courseName: masterTitle,
      startDate: new Date('2026-03-01T12:00:00.000Z'),
      endDate: null,
      educationLogo: ufscLogoId,
      url: 'https://ppgtic.ufsc.br/',
      description: makeLexical([
        'Master of Science research focused on Edge AI, TinyML, and embedded computer vision on low-power microcontrollers (ESP32S3).',
        'Investigating local INT8 quantized neural network inference for real-time safety systems and intelligent edge sensing without cloud dependency.',
      ]),
      createdAt: new Date(),
      updatedAt: new Date(),
      __v: 0,
    });
    console.log('Inserted Master Degree in Educations');
  } else {
    console.log('Master Degree already exists');
  }

  // 3. UPDATE WORK EXPERIENCES
  // Compass.UOL
  await db.collection('workexperiences').updateOne(
    { companyName: 'Compass.UOL' },
    {
      $set: {
        role: 'Frontend Developer',
        startDate: new Date('2021-02-01T12:00:00.000Z'),
        endDate: null,
        description: makeLexical([
          'Compass UOL is a global company that is part of AI Revolution Company, driving organizational transformation through Artificial Intelligence, Generative AI, and Digital Technologies.',
          'Maintained and supported microservices linked to the Oracle Cloud Commerce (OCC) platform.',
          'Specialized in front-end development using KnockoutJS within the Oracle Cloud Commerce (OCC) platform.',
          'Sustained and maintained a B2C e-commerce project focused on home appliances and furniture sales, contributing to a 120% revenue increase and 106% transaction growth.',
          'Implemented omnichannel functionalities to integrate online products with physical stores for rapid delivery.',
        ]),
        updatedAt: new Date(),
      },
    },
  );

  // Smart Sistemas
  await db.collection('workexperiences').updateOne(
    { companyName: 'Smart Sistemas' },
    {
      $set: {
        role: 'FullStack Developer',
        startDate: new Date('2020-02-01T12:00:00.000Z'),
        endDate: new Date('2021-02-01T12:00:00.000Z'),
        description: makeLexical([
          'Smart Sistemas is a technology company specializing in software solutions for various industries.',
          'Developed and maintained a B2B fashion and apparel project.',
          'Utilized React, Hooks, Redux, and Styled Components for frontend development, emphasizing component reusability.',
          'Managed backend development using NodeJS and TypeScript, ensuring a cohesive tech stack.',
          'Troubleshot and implemented features to enhance system performance and customization.',
        ]),
        updatedAt: new Date(),
      },
    },
  );

  // Agrosys Tecnologia
  await db.collection('workexperiences').updateOne(
    { companyName: 'Agrosys Tecnologia' },
    {
      $set: {
        role: 'System Analyst',
        startDate: new Date('2019-07-01T12:00:00.000Z'),
        endDate: new Date('2020-02-01T12:00:00.000Z'),
        description: makeLexical([
          'Agrosys Tecnologia is a leading Brazilian company providing technology solutions for agribusiness management.',
          'Maintained an ERP system tailored for the agribusiness sector, developed in Progress 4GL.',
          'Utilized a proprietary HTML page generation framework for ERP development.',
          'Ensured system stability and scalability, adapting solutions to meet specific industry needs.',
        ]),
        updatedAt: new Date(),
      },
    },
  );

  // Zaib Agência Digital
  await db.collection('workexperiences').updateOne(
    { companyName: { $regex: /zaib/i } },
    {
      $set: {
        companyName: 'Zaib Agência Digital',
        role: 'Developer',
        startDate: new Date('2018-07-01T12:00:00.000Z'),
        endDate: new Date('2019-07-01T12:00:00.000Z'),
        description: makeLexical([
          'Zaib Agência Digital is a digital agency specializing in web development and digital marketing solutions.',
          'Developed impactful landing pages using PHP and MySQL.',
          'Converted systems from Flash to HTML and adapted them to integrate proprietary frameworks.',
          'Created a CRUD-based financial system using PHP with Laravel.',
          'Provided technical support to clients remotely via AnyDesk.',
        ]),
        updatedAt: new Date(),
      },
    },
  );
  console.log('Updated Work Experiences');

  // 4. ADD TOP GITHUB PROJECTS TO PROJECTS COLLECTION IF MISSING
  // FadigAI
  const existingFadigAI = await db.collection('projects').findOne({ slug: 'fadigai' });
  if (!existingFadigAI) {
    await db.collection('projects').insertOne({
      title: 'fadigAI - TinyML Driver Drowsiness Detection',
      slug: 'fadigai',
      shortDescription:
        'Embedded Edge AI driver drowsiness detection system utilizing computer vision and INT8 quantized local neural inference on ESP32S3 microcontroller.',
      githubUrl: 'https://github.com/WillFelisberto/fadigAI',
      liveProjectUrl: 'https://studio.edgeimpulse.com/studio/968205',
      technologies: [],
      description: makeLexical([
        'fadigAI is an embedded Edge AI / TinyML computer vision system designed to detect driver drowsiness in real-time on edge microcontrollers without cloud connectivity.',
        'Built with C++, Arduino IDE, and Edge Impulse deployed to the Seeed Studio XIAO ESP32S3 Sense module.',
        'Features INT8 quantization of visual classification models to achieve low-latency inference directly inside vehicle cockpits.',
      ]),
      createdAt: new Date(),
      updatedAt: new Date(),
      __v: 0,
    });
    console.log('Inserted fadigAI in Projects');
  }

  // Shelfkeep
  const existingShelfkeep = await db.collection('projects').findOne({ slug: 'shelfkeep' });
  if (!existingShelfkeep) {
    await db.collection('projects').insertOne({
      title: 'Shelfkeep - Personal Inventory & Asset Manager',
      slug: 'shelfkeep',
      shortDescription:
        'Lightweight self-hosted personal inventory and asset manager REST API built with TypeScript and Node.js 22 native SQLite engine.',
      githubUrl: 'https://github.com/WillFelisberto/shelfkeep',
      technologies: [],
      description: makeLexical([
        'Shelfkeep is a self-hosted personal inventory REST API for tracking electronics, maker tools, and physical assets across rooms, shelves, and storage bins.',
        'Written in TypeScript with zero cloud dependencies, powered by Node.js 22 native node:sqlite engine with audit logging and fast search.',
      ]),
      createdAt: new Date(),
      updatedAt: new Date(),
      __v: 0,
    });
    console.log('Inserted Shelfkeep in Projects');
  }

  // Gatil dos Resgatados - preserve domain https://gatildosresgatados.com/
  await db.collection('projects').updateOne(
    { slug: 'gatil-dos-resgatados' },
    {
      $set: {
        liveProjectUrl: 'https://gatildosresgatados.com/',
        githubUrl: 'https://github.com/WillFelisberto/gatil-cms',
        updatedAt: new Date(),
      },
    },
  );
  console.log('Ensured Gatil dos Resgatados URL preserved');

  console.log('Database sync complete!');
  process.exit(0);
}

run().catch((err) => {
  console.error('Error syncing database:', err);
  process.exit(1);
});
