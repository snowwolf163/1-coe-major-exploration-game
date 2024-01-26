majors = open("majorslist", "r")
majorData = majors.read()
majors.close()
majorData = majorData.replace("\t", " ")
majorData = majorData.split("\n")
majorDataOut = []
for i in range(len(majorData[:-1])):
    if i % 11 == 0:
        majorDataOut.append(majorData[i])
    else:
        majorDataOut.append(majorData[i].split(" ", 2))

for i in range(0,len(majorDataOut),11):
    print("{")
    print(f'  "major": "{majorDataOut[i]}",')
    print(f'  "classCards": [')
    for j in range(1,11):
        print('    {')
        print(f'      "subject": {majorDataOut[i+j][0]}')
        print(f'      "courseNumber": {majorDataOut[i+j][1]}')
        print(f'      "className": {majorDataOut[i+j][2]}')
        print('    }')
    print("  ]")
    print("}")

