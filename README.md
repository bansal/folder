# Folder

An open-source, serverless **Digital Asset Management (DAM)** software that helps you **store, organize, and share** files and folders. With **Folder**, you can securely share files, manage permissions, and even publish folders as a static website.

![Folder Preview](https://folder.run/preview/0.0.png)
![Folder Preview](https://folder.run/preview/6.0.png)
![Folder Preview](https://folder.run/preview/1.0.png)

## Why Folder?

- **Alternative to Google Drive**: Store files, manage assets, and serve them via CDN.
- **Built for AI & Modern Workflows**: Direct file access for AI training or querying.
- **Developer-Friendly**: Deploy on Cloudflare with **serverless architecture**.

## Tech Stack

- **Frontend**: Nuxt, TailwindCSS, Nuxt UI
- **Backend**: Nitro
- **Database**: Cloudflare D1
- **Storage**: Cloudflare R2
- **Authentication**: OAuth (Google, GitHub)
- **Server**: Cloudflare Workers
- **Deployment**: Cloudflare Wrangler

## Features

- Intuitive file and folder management
- Files and Folder uploads
- Secure file sharing with customizable permissions
- Public/Private visibility settings
- Public folder as website
- File previews for common formats
- Search functionality
- Responsive design for mobile and desktop
- Dark mode
- Authentication with Google and GitHub
- Custom domain support
- Serverless architecture

## Prerequisites

1. **Cloudflare Account** (for R2, D1 and Hosting)
2. **GitHub/Google Cloud Account** (for OAuth authentication)
3. **Domain name** (optional, for custom domains)

## Deployment

1. **Create Cloudflare resources**
   - Set up **D1 Database**
   - Create an **R2 Bucket**
2. **Set up OAuth**
   - Create an OAuth App in **GitHub Developer Settings** (or Google Cloud Console)
   - Obtain **Client ID & Secret**
3. Clone the repository

   ```sh
   git clone https://github.com/bansal/folder.git
   cd folder
   ```

4. Install dependencies: `npm install`
5. Configure Cloudflare credentials
   - Rename `wrapper.example.toml` → `wrapper.toml`
   - Update `wrapper.toml` the configuration with your **Cloudflare API key, R2 bucket name, and D1 DB name**
6. Deploy to Cloudflare Workers: `npm run deploy`

## Local Development

1. Configure your environment variables in a `.env` file
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
4. Visit [http://localhost:3000](http://localhost:3000) in your browser

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add some amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## Disclaimer

This project is still in development. **Use at your own risk.** See [DISCLAIMER](DISCLAIMER.md) for details.

## License

Read [LICENSE](LICENSE)
