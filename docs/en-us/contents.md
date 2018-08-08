# Benchmarks
### Micro Benchmarks
The micro benchmark category consists of tests that measure the performance of the basic operations involved in training deep learning neural networks. This category mainly targets the GPU hardware platform and consists of the following tests.

### GEMM
Matrix-matrix multiplication (GEMM) is a fundamental operation in many scientific, engineering, and machine learning applications. There is a continuing demand to optimize this operation. This test consists of a variaty of differently parameterized GEMM operations, convolution, and memory operations.


### Layer-based Benchmarks
The neural networks are consisted of one or more layers and each layer involves some commonly used operations. The layer-based benchmarks create layers using these important operations and aim at testing the performance of running these layers on hardware.

### Macro Benchmarks
The macro benchmarks collect a couple of commonly used models in both academia and industry, including ILSVRC champions, CNN networks, and RNN networks. They test the performance of complete nerual networks, including training and inference under different software frameworks, such as TF, caffe and combination with tensorRT.   
The CNN models consist of the following:   
googlenet  
vgg16  
resnet50  
resnet152  
densenet
  
The RNN models consist of the following:  
natural machine translation (NMT)  
deepspeech
