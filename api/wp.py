from http.server import BaseHTTPRequestHandler
from datetime import datetime
import requests


class handler(BaseHTTPRequestHandler):

    def do_GET(self):

        r = requests.get(
            'https://christchurchdunstable.org.uk/wp-json/wp/v2/posts?include[]=470&include[]=8913')
        a = requests.get(
            'https://christchurchdunstable.org.uk/wp-json/wp/v2/posts?include[]=470&include[]=8913')
        b = requests.get(
            'https://christchurchdunstable.org.uk/wp-json/wp/v2/posts?include[]=470&include[]=8913')
        c = requests.get(
            'https://christchurchdunstable.org.uk/wp-json/wp/v2/posts?include[]=470&include[]=8913')
        d = requests.get(
            'https://christchurchdunstable.org.uk/wp-json/wp/v2/posts?include[]=470&include[]=8913')

        self.send_response(200)
        self.send_header('Content-type', 'application/json')
        self.send_header('Cache-Control', 's-maxage=86400')
        self.end_headers()
        self.wfile.write(str(r.json()[0]['content']['rendered']+a.json()[0]['content']['rendered']+b.json()[
                         0]['content']['rendered']+c.json()[0]['content']['rendered']+d.json()[0]['content']['rendered']).encode())
        return
