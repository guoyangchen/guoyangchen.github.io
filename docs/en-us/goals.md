# Goals  
AI Matrix is a benchmark suite for testing AI software frameworks and hardware platforms. It aims at providing users a means of measuring the performance of different AI software and hardware and comparing their pros and cons. It also helps users gain insights into various factors that affect AI hardware performance and improve hardware design.

![img](./structure.jpg)  
The AI Matrix suite consists of [**four categories**](./contents.md) of tests: micro benchmarks, layer-based benchmarks, macro benchmarks, and synthetic benchmarks (StatsNet); they provide tests at different granularity. 
  - Micro benchmarks are focused on basic hardware level GEMM computation, which is the foundation of most neural networks
  - Layer-based benchmarks are focused on evaluating the basic elements of neural network
  - Macro benchmarks evaluate the complete models from different application areas
  - Synthetic benchmarks (StatsNets) are main innovations in this project; generated synthetic benchmarks (StatsNet) would match statistical characteristics of input models and provide more flexibility to performance testing.  

Majority of the applications are evaluated on Tensorflow while CNN tests are also evaluated in Caffe. Tensorflow is one of the most important frameworks in AI application domain and it is widely used in Alibaba also. Caffe is one of pioneers in the AI frameworks and there are still a lot of legacy models written in Caffe. Due to our limited resources, currently we only collect test cases from these two frameworks but in future, we may extend our collections in other frameworks.
