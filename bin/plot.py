import pandas as pd
from matplotlib import pyplot as plt    


obj_find = pd.read_json('./data/raw/evaluate-find.json');
obj_reduce = pd.read_json('./data/raw/evaluate-reduce.json');

# Load data
df = pd.DataFrame({
    'find_native': obj_find['native'],
    'reduce_native': obj_reduce['native'],
    'find_lodash': obj_reduce['lodash'],
    'reduce_lodash': obj_reduce['lodash']
})

# Plot
params = {
    'axes.titlesize':'32',
    'axes.labelsize':'32',
    'xtick.labelsize':'24',
    'ytick.labelsize':'24',
          }
plt.rcParams.update(params)

fig = df.hist(\
    bins=20,
    layout=(2, 2), 
    figsize=(20, 20),
    ).ravel()[0].get_figure()

fig.suptitle('Lodash Vs Native performance: events distribution', fontsize=30)
plt.xlabel('Execution time [ms]', fontsize=30)
plt.ylabel('Events', fontsize=30)

fig.savefig('./data/plots/results.png');