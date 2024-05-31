import os
from PIL import Image
for x in ["./ARE", "./BEE", "./BIOE", "./CE", "./CEM", "./CHE", "./CS", "./ECE", "./ENVE", "./ESE", "./IE", "./ME", "./NSE", "./RHP"]:
    for y in os.listdir(x):
        location = os.path.join(x,y)
        image = Image.open(location)
        i = image.size   # current size (height,width)
        i = 750, 1050 # new size
        newimage = image.resize(i)
        newimage.save(location)
for x in ["./CH-121.png", "./COMM-111.png", "./CS-161.png", "./CS-162.png", "./ENGR-100.png", "./ENGR-102.png", "./ENGR-103.png", "./WR-121.png"]:
        image = Image.open(x)
        i = image.size   # current size (height,width)
        i = 750, 1050 # new size
        newimage = image.resize(i)
        newimage.save(x)