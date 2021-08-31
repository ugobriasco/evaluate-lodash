import json
import pandas as pd
import matplotlib.pyplot as plt

# read file
with open('./data/raw/evaluate-find.json', 'r') as myfile:
    raw_data=myfile.read()

# parse file
obj = json.loads(raw_data)
data = pd.DataFrame({'lodash': obj['lodash'], 'native': obj['native']})

# plot
fig = data.plot(kind='bar',  figsize=(20, 16), fontsize=26).get_figure()
fig.savefig('./data/plots/evaluate-find.jpg')