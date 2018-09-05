# Mission  
AI Matrix is a benchmark suite for testing AI software frameworks and hardware platforms. It aims at providing users a means of measuring the performance of different AI sofware and hardware and comparing their pros and cons. It also helps users gain insights into various factors that affect AI hardware performance and improve hardware design.

![img](./structure.jpg)  
The AI Matrix suite consists of four categories of tests: micro benchmarks, layer-based benchmarks, macro benchmarks, and synthetic benchmarks (StatsNet). The testing granularity of each sub-category is increasing. 
  - Micro benchmarks are focused on basic hardware level GEMM compuation which is also important to AI computation
  - Layer-based benchmarks are focused on evaluating the basic element of neural network
  - Macro benchmarks evaluate the complete models from different application areas
  - Synthetic benchmarks are innovations from this project  

We hope the generated synthetic benchmarks could match statistical characteristcis of input models while provide more flexiblity to performance testing.  Majority of the applications are evaluated on tensorflow while CNN tests are also evaluated in caffe. Tensorflow is one of the most important frameworks in AI application domain and it is widely used in Alibaba also. Caffe is one of pioneers in the AI frameworks and there are still a lot of legacy models wrtitten in Caffe. Due to our limited resources, currently we only collect test cases from these two frameworks but in future, we may extend our collections in other frameworks.
