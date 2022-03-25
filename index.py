from aiohttp import request
from flask import Flask, render_template, jsonify , request
from getpass import getpass
import mysql.connector
from bs4 import BeautifulSoup
import numpy as np

app = Flask(__name__)

@app.route('/words')
async def getwords():
    word = request.args.get('word')
    miConexion = mysql.connector.connect(
        host='localhost', user='root', passwd='root', db='scrabbledb')
    cur = miConexion.cursor()
    cur.execute("SELECT * FROM words where word = '"+word+"'")
    word = cur.fetchall()
    miConexion.close()
    return jsonify(word)

@app.route('/initgame')
async def getletters():
    miConexion = mysql.connector.connect(
        host='localhost', user='root', passwd='root', db='scrabbledb')
    cur = miConexion.cursor()
    cur.execute("SELECT * FROM letters")
    word = cur.fetchall()
    miConexion.close()
    return jsonify(word)

@app.route('/')
def home():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True, port=3000)