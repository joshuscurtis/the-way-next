from http.server import BaseHTTPRequestHandler
from datetime import datetime
import requests
import json


class handler(BaseHTTPRequestHandler):

    def do_GET(self):

        r = requests.get(
            'https://christchurchdunstable.org.uk/wp-json/wp/v2/posts?include[]=470&include[]=7912')
        a = requests.get(
            'https://christchurchdunstable.org.uk/wp-json/wp/v2/posts?include[]=470&include[]=8913')
        b = requests.get(
            'https://christchurchdunstable.org.uk/wp-json/wp/v2/posts?include[]=470&include[]=8910')
        c = requests.get(
            'https://christchurchdunstable.org.uk/wp-json/wp/v2/posts?include[]=470&include[]=8913')
        d = requests.get(
            'https://christchurchdunstable.org.uk/wp-json/wp/v2/posts?include[]=470&include[]=8913')

        x = {
            "news" : r.json()[0]['content']['rendered'],
            "alert" : a.json()[0]['content']['rendered'],
            "info" : b.json()[0]['content']['rendered']

        }


        self.send_response(200)
        self.send_header('Content-type', 'application/json')
        self.send_header('Cache-Control', 'Cache-Control: s-maxage=5, stale-while-revalidate=2629743')
        self.end_headers()
        self.wfile.write(json.dumps(x).encode())
        return
