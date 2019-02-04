import csv
import json
import os
import sys

data_path = os.path.dirname(sys.path[0] + '/../src/data/');
csvfile = open(data_path + '/transactions.csv', 'r')
jsonfile = open(data_path + '/transactions.json', 'w')

fieldnames = ("Date","Description","Original Description","Amount","Transaction Type","Category","Account Name","Labels","Notes")
reader = csv.DictReader( csvfile, fieldnames)

totalrows = 0
for row in reader:
  totalrows += 1

i = 0
first_written = 0
csvfile.seek(0)

jsonfile.write('[\n')

for row in reader:
    i = i + 1
    if row["Description"].find("Dunkin") != -1:
        if first_written != 0:
            jsonfile.write(',\n')
        else:
            first_written = 1
        json.dump(row, jsonfile)

jsonfile.write('\n]')
