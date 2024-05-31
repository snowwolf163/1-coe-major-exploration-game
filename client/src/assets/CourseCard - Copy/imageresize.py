import os
from PIL import Image
for x in ["./ARE", "./BEE", "./BIOE", "./CE", "./CEM", "./CHE", "./CS", "./ECE", "./ENVE", "./ESE", "./IE", "./ME", "./NSE", "./RHP"]:
    for y in os.listdir(x):
        location = os.path.join(x,y)
        image = image.open(location)
        i = image.size   # current size (height,width)
        i = 750, 1050 # new size
        newimage = image.resize(i)
        newimage.save(location)