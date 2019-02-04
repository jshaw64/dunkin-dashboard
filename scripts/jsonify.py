import csv
import json

csvfile = open('../src/data/transactions.csv', 'r')
jsonfile = open('../src/data/transactions.json', 'w')

fieldnames = ("Date","Description","Original Description","Amount","Transaction Type","Category","Account Name","Labels","Notes")
reader = csv.DictReader( csvfile, fieldnames)

totalrows = 0
for row in reader:
  totalrows += 1

i = 0
csvfile.seek(0)

for row in reader:
    i = i + 1
    json.dump(row, jsonfile)
    if i == totalrows:
        jsonfile.write('\n')
    else:
        jsonfile.write(',\n')
