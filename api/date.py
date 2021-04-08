from http.server import BaseHTTPRequestHandler
from datetime import datetime
from igramscraper.instagram import Instagram


class handler(BaseHTTPRequestHandler):

  def do_GET(self):
    instagram = Instagram()
    account = instagram.get_account_by_id(1478189341)


    self.send_response(200)
    self.send_header('Content-type', 'text/plain')
    self.end_headers()
    self.wfile.write(str("Hey").encode())
    return


    