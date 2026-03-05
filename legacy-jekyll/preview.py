import http.server
import socketserver
import os
import re
import markdown

class JekyllPreviewHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        # Handle custom routes
        if self.path == '/' or self.path == '/index.html':
            filepath = 'index.md'
            url_path = '/'
        elif self.path == '/contact' or self.path.startswith('/contact'):
            filepath = 'contact.md'
            url_path = '/contact'
        elif self.path == '/style' or self.path.startswith('/style'):
            filepath = 'style.md'
            url_path = '/style'
        elif self.path == '/resume' or self.path.startswith('/resume'):
            filepath = 'resume.md'
            url_path = '/resume'
        else:
            # Serve static files (like images or css if any)
            return super().do_GET()

        if not os.path.exists(filepath):
            self.send_error(404, "File not found")
            return

        with open('_layouts/default.html', 'r', encoding='utf-8') as f:
            template = f.read()

        with open(filepath, 'r', encoding='utf-8') as f:
            content_raw = f.read()

        # extract title for page.title
        title_match = re.search(r'title:\s*"?([^"\n]+)"?', content_raw)
        title = title_match.group(1).strip() if title_match else "Preview"

        # strip frontmatter
        content_raw = re.sub(r'^---.*?---\n', '', content_raw, flags=re.DOTALL)
        
        # Convert markdown to HTML
        html_content = markdown.markdown(content_raw, extensions=['extra', 'tables'])

        # replace liquid tags
        template = template.replace('{{ site.title | default: "ALLEN" }}', "ALLEN TOOLS")
        template = template.replace('{{ site.title | default: "ALLEN TOOLS" }}', "ALLEN TOOLS")
        template = template.replace('{{ site.title }}', "ALLEN TOOLS")
        template = template.replace("{{ site.time | date: '%Y' }}", "2026")
        template = template.replace("{{ '/' | relative_url }}", "/")
        template = template.replace("{{ '/contact' | relative_url }}", "/contact")
        
        # conditional rendering for CTA
        if url_path == '/contact':
            template = re.sub(r'{%\s*if page\.url \!= \'/contact\'.*?%}(.*?){%\s*endif\s*%}', '', template, flags=re.DOTALL)
        else:
            template = re.sub(r'{%\s*if page\.url \!= \'/contact\'.*?%}(.*?){%\s*endif\s*%}', r'\1', template, flags=re.DOTALL)

        # replace content
        final_html = template.replace('{{ content }}', html_content)
        final_html = final_html.replace('{{ page.title }}', title)

        self.send_response(200)
        self.send_header('Content-type', 'text/html')
        self.end_headers()
        self.wfile.write(final_html.encode('utf-8'))

# Use a specific port
PORT = 8080
Handler = JekyllPreviewHandler
Handler.extensions_map.update({
    ".js": "application/javascript",
})

socketserver.TCPServer.allow_reuse_address = True
with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"Serving local preview at http://localhost:{PORT}")
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        pass
