/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ['image/avif', 'image/webp'],
        domains: ['books.google.com'],
        // http://books.google.com/books/content?id=Q8zDEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'books.google.com',
                port: '',
                pathname: '/books/content/**',
            },
        ]
    },
}

module.exports = nextConfig
