# Metrics
There are a lot of factors that can affect the AI applications' final performance on hard accelerators. However, the fundamental and intuitive metric would be the elapsed time (**wall clock time**). In our test suites, we use wall clock as the basic metrics. In the current market of inference and training, NVIDIA products are still in a dominant position. Although Google's TPUs have been on public cloud but accessibility is still limited. To give a score for every test, we propose using the flagship product of NVIDIA as baseline, P4 for inference and V100 for training. In future, we will apply normalization metrics to adjust the value，for example, energy consumption. 
 
In the coming revised versions, we propose considering the following metrics as normalization metrics.
- Energy consumption of running a benchmark
- Hardware utilization

  
