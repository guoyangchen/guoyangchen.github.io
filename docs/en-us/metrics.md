# Metrics
There are a lot of factors affect the AI applications' final performance on hard accelerators. However, the fundamental and intuitive metric would be the running time (**wall clock time**). In our test suites, we use wall clock  as the basic metrics. In the current market of inference and training, NVIDIA products play an important role in it. Although Google TPU has been on public cloud but accessibility is still limited. Here to give a score to every test. We propose to use the flagship product of Nvidia as baseline. We use P4 as inference and V100 as training baseline. In future, we consider some normalization metrics to adjust the value. For ex, energy consumption. But as it is till not very reliable, we are still waiting some better condition to normalize these metrics.
 
In the coming revised versions, we propose to consider the following metrics as normalization metrics.
- Energy consumption of running a benchmark
- hardware utilization

  