import json
import pandas as pd
import matplotlib.pyplot as plt

print("Plotting results ...")

# read file
with open('./data/raw/evaluate-find.json', 'r') as myfile:
    raw_data=myfile.read()

# parse file
obj = json.loads(raw_data)

data = pd.DataFrame({'lodash': obj['lodash'], 'native': obj['native']})
#data.hist(figsize=(10,10),bins=10)

fig = data.plot(\
    kind='hist', 
    subplots=True, 
    figsize=(10, 10),
    bins=20,
    title = "FIND: Lodash vs Native [ms]"
    )[0].get_figure()
plt.tight_layout()
fig.savefig('./data/plots/evaluate-find.png')


# read file
with open('./data/raw/evaluate-reduce.json', 'r') as myfile:
    raw_data=myfile.read()

# parse file
obj = json.loads(raw_data)

data = pd.DataFrame({'lodash': obj['lodash'], 'native': obj['native']})
#data.hist(figsize=(10,10),bins=10)

fig = data.plot(\
    kind='hist', 
    subplots=True, 
    figsize=(10, 10),
    bins=20,
    title = "REDUCE: Lodash vs Native [ms]"
    )[0].get_figure()
plt.tight_layout()
fig.savefig('./data/plots/evaluate-reduce.png')

print('Done! Plots available under ./data/plots')