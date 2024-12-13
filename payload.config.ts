import sharp from 'sharp';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import { mongooseAdapter } from '@payloadcms/db-mongodb';
import { buildConfig } from 'payload';
import { Projects } from '@/app/(payload)/collections/projects';
import { Media } from '@/app/(payload)/collections/media';
import { Technologies } from '@/app/(payload)/collections/technologies';
import path from 'path';
import { Education } from '@/app/(payload)/collections/education';
import { WorkExperience } from '@/app/(payload)/collections/workExperience';
import { About } from '@/app/(payload)/collections/about';
const __dirname = path.resolve();
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob';
import { nodemailerAdapter } from '@payloadcms/email-nodemailer';

export default buildConfig({
  // If you'd like to use Rich Text, pass your editor here
  editor: lexicalEditor(),

  email: nodemailerAdapter({
    defaultFromAddress: 'info@payloadcms.com',
    defaultFromName: 'Payload',
    // Nodemailer transportOptions
    transportOptions: {
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    },
  }),
  // Define and configure your collections in this array
  collections: [Projects, Media, Technologies, Education, WorkExperience],
  globals: [About],

  // Your Payload secret - should be a complex and secure string, unguessable
  secret: process.env.PAYLOAD_SECRET || '',
  // Whichever Database Adapter you're using should go here
  // Mongoose is shown as an example, but you can also use Postgres
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  typescript: {
    outputFile: path.resolve(__dirname, 'src/app/(payload)/payload-types.ts'),
  },

  plugins: [
    vercelBlobStorage({
      enabled: true, // Optional, defaults to true
      // Specify which collections should use Vercel Blob
      collections: {
        [Media.slug]: true,
        [Projects.slug]: true,
        [Technologies.slug]: true,
        [Education.slug]: true,
        [WorkExperience.slug]: true,
        [About.slug]: true,
      },
      // Token provided by Vercel once Blob storage is added to your Vercel project
      token: process.env.BLOB_READ_WRITE_TOKEN!,
    }),
  ],
  // If you want to resize images, crop, set focal point, etc.
  // make sure to install it and pass it to the config.
  // This is optional - if you don't need to do these things,
  // you don't need it!
  sharp,
});
