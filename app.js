// Import required modules
const http = require('http');
const url = require('url');

// Import local modules
const getRootContent = require('./modules/root');
const getAboutContent = require('./modules/about');
const getContactContent = require('./modules/contact');

const PORT = 3000;  // Choose any free port

    const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;

    // Name parameter always "John Smith"
    const name = "John Smith";

    res.writeHead(200, { 'Content-Type': 'text/html' });

    if (pathname === '/') {
        res.end(`
            <h1>Welcome to my Node.js Application</h1>
            <p>${getRootContent(name)}</p>
            <footer><small>[Arcilla,Cassandra Aubrey R.][July 14, 2025][WD-302]</small></footer>
        `);
    } else if (pathname === '/about') {
        res.end(`
            <h1>This is the About Page</h1>
            <p>${getAboutContent(name)}</p>
            <footer><small>[Arcilla,Cassandra Aubrey R.][July 14, 2025][WD-302]</small></footer>
        `);
    } else if (pathname === '/contact') {
        res.end(`
            <h1>This is the Contact page</h1>
            <p>${getContactContent(name)}</p>
            <footer><small>[Arcilla,Cassandra Aubrey R.][July 14, 2025][WD-302]</small></footer>
        `);
    } else if (pathname === '/gallery') {
        // For gallery, just display a message here
        res.end(`
            <h1>This is the Gallery Page</h1>
            <footer><small>[Arcilla,Cassandra Aubrey R.][July 14, 2025][WD-302]</small></footer>
        `);
    } else {
        // Non-existing route
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end(`
            <h1>Invalid Request</h1>
            <footer><small>[Arcilla,Cassandra Aubrey R.][July 14, 2025][WD-302]</small></footer>
        `);
    }
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
