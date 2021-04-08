from http.server import BaseHTTPRequestHandler
from datetime import datetime
import requests

class handler(BaseHTTPRequestHandler):

  def do_GET(self):


    r = requests.get('https://christchurchdunstable.org.uk/wp-json/wp/v2/posts?include[]=470&include[]=8913')

    self.send_response(200)
    self.send_header('Content-type', 'application/json')
    self.end_headers()
    self.wfile.write(str(r.json()).encode())
    return


    