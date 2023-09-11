---
layout: default
parent: Linear Algebra
grand_parent: Essentials
nav_order: 4
title: Linear Operators
---

# Linear Operators

## Mappings

{: .motivation}
In machine learning, we often work with high-dimensional data represented as vectors. Linear algebra provides us with powerful tools to manipulate these vectors, but besides the basic operations of vector addition and dot product, we also need functions that can transform a vector into another vector. These functions are called linear operators and are important because they enable us to perform operations on vectors in a more efficient way. In this section, we will first introduce the concept of linear operators, and then discuss some of the most important ones.

In linear algebra, besides the operations that involve two vectors (vector addition, dot product), there are functions 
(mappings) that take as an input a vector, and output a vector. Let's denote this mapping as $$f$$. 
Formally, any mapping of this sort can be written as:

$$f:V\to W.$$

This is a standard mathematical notation which means the following: a function $$f$$ takes as an input a vector from the 
vector space $$V$$ and outputs a vector from a vector space $$W$$. Now, you might wonder why there are two vector spaces 
involved, and this will become more clear after a few examples. 


Let's consider the following two mappings $$f$$ and $$g$$:


$$f\left( \begin{bmatrix}
           x\\
           y
         \end{bmatrix}\right) = \begin{bmatrix}
           x \\
           y \\
           x+y
         \end{bmatrix} ,\, \, \, \, \, \,  g\left( \begin{bmatrix}
           x\\
           y
         \end{bmatrix}\right) = \begin{bmatrix}
           x \\
           y \\
           xy
         \end{bmatrix}.$$


This is a generalization of functions that we are used to; here our inputs are vectors, and so are the outputs. 
If $$x$$ and $$y$$ are real numbers, then formally we can write this mapping as $$f:\mathbb{R}^2\to \mathbb{R}^3$$, 
since the input to our mapping is a 2D vector, and the output is a 3D vector (therefore they _live_ in different vector spaces). 
You will work more with these types of functions in the Multivariate Calculus section. 


Now, which mappings can be called _linear_ mappings? The conditions are intuitive, and quite similar to the ones of the 
vector spaces, so we shall provide now a formal definition.


>Let $$V$$ and $$W$$ be vector spaces over the same field $$\mathbb{F}$$. A function $$f:V\to W$$ is said to be a _linear map_ 
> if for any two vectors $$\textbf{v}, \textbf{w}$$ from $$V$$ and any scalar $$\lambda$$ from $$\mathbb{F}$$, the following 
> two conditions are satisfied:
- **Additivity**: $$f(\textbf{v}+ \textbf{w}) =f(\textbf{v}) + f(\textbf{w});$$
- **Homogeneity**: $$f(\lambda \textbf{v}) = \lambda f(\textbf{v}).$$


The first condition states that the transformation of the sum of vectors has to be equal to the sum of transformations of every vector individually. 


The second condition simply states that it shouldn't matter whether we first multiply the vector $$\textbf{v}$$ by a scalar 
$$\lambda$$ and then transform it, or we first transform the vector $$\textbf{v}$$ and then multiply it by $$\lambda$$. 

Now, are the mappings $$f$$ and $$g$$ above linear or not? The way to check it is by testing whether they satisfy the 
additivity and homogeneity conditions, which we leave as an exercise[^1]. 

[^1]: You should find out that $$f$$ is indeed linear, while $$g$$ isn't.


## Matrix-vector multiplication


If you've encountered linear algebra before, then you probably associate linear mappings/transformations/operators with matrices. 
Let's first discuss how and why matrix-vector multiplication works, and then we will connect it to the concept of linear mappings 
discussed in the previous subsection. 


To start, let's imagine we have a very simple canonical basis $$B=\{\mathbf{b_1}, \mathbf{b_2}\}$$ in $$\mathbb{R}^2$$, 
where the basis vectors are:

$$\mathbf{b_1} = \begin{bmatrix}
           1\\
           0
         \end{bmatrix}, \, \, \, \, \, \mathbf{b_2} = \begin{bmatrix}
           0\\
           1
         \end{bmatrix}.$$


The matrix representation of a linear transformation is _defined_ to have the following form: $$n$$-th column of the matrix 
corresponds to a vector to which the $$n$$-th canonical basis vector transforms. 
For example, let's observe the following matrix $$\mathbf{A}$$:

$$\mathbf{A} = \begin{bmatrix}
           -1 & -2\\
           1 & -1
         \end{bmatrix}.$$

This means that the matrix $$\mathbf{A}$$ will transform the vectors $$\mathbf{b_1}$$ and $$\mathbf{b_2}$$ into $$\mathbf{b_1'}$$ 
and $$\mathbf{b_2'}$$ in the following way:  

$$\mathbf{b_1} = \begin{bmatrix}
           1\\
           0
         \end{bmatrix} \to\mathbf{b_1'} =\begin{bmatrix}
           -1\\
           1
         \end{bmatrix}, \, \, \, \, \,\mathbf{b_2}= \begin{bmatrix}
           0\\
           1
         \end{bmatrix} \to\mathbf{b_2'} = \begin{bmatrix}
           -2\\
           -1
         \end{bmatrix},$$

which is visualized in the figure below.

**Add later**


Now that we know how a matrix transformation transforms our basis vectors, let's see how this applies to an arbitrary vector. 
Let's consider a general matrix $$\mathbf{A}$$ and a vector $$\textbf{v}$$ which have the following form:

$$\mathbf{A} = \begin{bmatrix}
           \text{A}_{11} & \text{A}_{12}\\
           \text{A}_{21} & \text{A}_{22}
         \end{bmatrix}, \, \, \, \, \textbf{v} = \begin{bmatrix}
           v_1\\
           v_2 
         \end{bmatrix}.$$


The vector produced by the matrix-vector multiplication shall be denoted as $$\textbf{w}$$. Let's try to calculate it
using the rules of vector spaces and linear operators that we have learned so far:


$$\begin{align} \textbf{w}  &= \begin{bmatrix}
           \text{A}_{11} & \text{A}_{12}\\
           \text{A}_{21} & \text{A}_{22}
         \end{bmatrix} \begin{bmatrix}
           v_1\\
           v_2 
         \end{bmatrix} \\
&\stackrel{1}{=} \begin{bmatrix}
           \text{A}_{11} & \text{A}_{12}\\
           \text{A}_{21} & \text{A}_{22}
         \end{bmatrix} \left( \begin{bmatrix}
           v_1\\
           0 
         \end{bmatrix} + \begin{bmatrix}
           0\\
           v_2 
         \end{bmatrix}\right) \\
&\stackrel{2}{=} \begin{bmatrix}
           \text{A}_{11} & \text{A}_{12}\\
           \text{A}_{21} & \text{A}_{22}
         \end{bmatrix} \left( v_1\begin{bmatrix}
           1\\
           0 
         \end{bmatrix} + v_2\begin{bmatrix}
           0\\
           1 
         \end{bmatrix}\right) \\
        &\stackrel{3}{=} \begin{bmatrix}
           \text{A}_{11} & \text{A}_{12}\\
           \text{A}_{21} & \text{A}_{22}
         \end{bmatrix} \left( v_1\begin{bmatrix}
           1\\
           0 
         \end{bmatrix}\right) + \begin{bmatrix}
           \text{A}_{11} & \text{A}_{12}\\
           \text{A}_{21} & \text{A}_{22}
         \end{bmatrix} \left( v_2\begin{bmatrix}
           0\\
           1 
         \end{bmatrix}\right)\\
        &\stackrel{4}{=} v_1\begin{bmatrix}
           \text{A}_{11} & \text{A}_{12}\\
           \text{A}_{21} & \text{A}_{22}
         \end{bmatrix}  \begin{bmatrix}
           1\\
           0 
         \end{bmatrix} +v_2 \begin{bmatrix}
           \text{A}_{11} & \text{A}_{12}\\
           \text{A}_{21} & \text{A}_{22}
         \end{bmatrix}  \begin{bmatrix}
           0\\
           1 
         \end{bmatrix} \\
        &\stackrel{5}{=} v_1\begin{bmatrix}
           \text{A}_{11}\\
           \text{A}_{21}
         \end{bmatrix} +v_2 \begin{bmatrix}
            \text{A}_{12}\\
            \text{A}_{22}
         \end{bmatrix} \\
        &\stackrel{6}{=} \begin{bmatrix}
            \text{A}_{11}v_1 + \text{A}_{12} v_2\\
          \text{A}_{21}v_1  +  \text{A}_{22}v_2
        \end{bmatrix},
\end{align}$$

as one familiar with matrix-vector products will realise. It is important to discuss all the properties used in the 
derivation above, as they serve as a backbone to all calculations in linear algebra in general:

1. We have decomposed the vector $$\mathbf{v}$$ into its separate components.
2. We have pulled out the scalar from each vector in order to easily recognize the basis vectors $$\mathbf{b_1}$$ and $$\mathbf{b_2}$$.
3. Since we are dealing with a linear operator, we use the _additivity_ property defined above.
4. Again, as we are dealing with a linear operator, we use _homogeneity_ property defined above.
5. We use the definition of what matrix columns represent, i.e. we transform the canonical basis vectors accordingly.
6. We simply sum up the two remaining vectors.

Using known rules we have derived the elements of the transformed vector. This result is general, and if we have a 
matrix-vector multiplication of the type $$\mathbf{w} = \mathbf{A} \mathbf{v}$$, then the $$i$$-th element of 
the output vector $$\mathbf{w}$$ is given by:

$$\boxed{w_i = \sum_k \text{A}_{ik} v_k}$$

Note that $$ik$$-th element of the matrix $$\mathbf{A}$$ is simply the entry of the matrix at the $$i$$-th row and $$k$$-th column. 
Using this formula, we can find every element of the output vector $$\mathbf{w}$$. 

In the example above, we have assumed that the matrix $$\mathbf{A}$$ is a square matrix, which resulted in vectors 
$$\mathbf{v}$$ and $$\mathbf{w}$$ having the same dimension. Let's take a look at another matrix, $$\mathbf{A'}$$. 
We will define $$\mathbf{A'}$$ as:

$$\mathbf{A'} = \begin{bmatrix}
          1 & 0\\
           0 & 1 \\
           1 & 1 
         \end{bmatrix}.$$


Now, let's try to interpret the meaning of this matrix. We have stated that the columns of the matrix correspond to 
the vectors to which our basis vector will transform. So, this means the following:

$$\mathbf{b_1} = \begin{bmatrix}
           1\\
           0
         \end{bmatrix} \to\mathbf{b_1'} =\begin{bmatrix}
           1\\
           0 \\
           1
         \end{bmatrix}, \, \, \, \, \,\mathbf{b_2}= \begin{bmatrix}
           0\\
           1
         \end{bmatrix} \to\mathbf{b_2'} = \begin{bmatrix}
           0\\
           1 \\
           1
         \end{bmatrix},$$

i.e. we have a transformation from $$\mathbb{R}^2 \to \mathbb{R}^3$$. To calculate how this matrix would transform an 
arbitrary vector, we would use the procedure same as above, and would again retrieve equation from before. As a simple exercise, 
let's calculate the output vector $$\mathbf{w} = \mathbf{A'}\mathbf{v}$$, where vector $$\mathbf{v} = \begin{bmatrix}x,y\end{bmatrix}^\text{T}$$:

$$\begin{align}
&w_1 = \sum_{k=1}^2 \text{A}'_{1k}v_k = \text{A}'_{11}v_1 + \text{A}'_{12}v_2 = x + 0 = x\\
&w_2 = \sum_{k=1}^2 \text{A}'_{2k}v_k = \text{A}'_{21}v_1 + \text{A}'_{22}v_2 = 0 + y = y\\
&w_3 = \sum_{k=1}^2 \text{A}'_{3k}v_k = A'_{31}v_1 + A'_{32}v_2 = x+y 
\end{align}$$

Therefore, the output vector $$\mathbf{w}$$ is equal to:

$$\mathbf{w} = \begin{bmatrix}
           x\\
           y \\
           x+y 
           \end{bmatrix}.$$


This is exactly the mapping $$f$$ defined in the mappings section![^2] 

{: .summary}
>Let's summarize our current findings regarding matrix-vector multiplication:
>- We have a general formula for calculating how a matrix transforms a vector. 
>- The matrix-vector multiplication may or may not change the dimensionality of the input vector.
>- If we have a $$n \times k$$ matrix ($$n$$ rows, $$k$$ columns), then the input vector has to be $$k$$-dimensional, while the output will be $$n$$-dimensional. 
>- All linear transformations (in finite dimensions) can be written in the matrix form.  


## Matrix-matrix multiplication


In the previous subsection, we have discussed how matrices (linear operators) transform vectors, and how to calculate 
elements of the transformed vectors. Matrix-matrix multiplication can be thought of as chaining two transformations one 
after another, and for this reason, we can calculate the resulting matrix elements by analyzing how the two transformations 
act on the basis vectors. For simplicity, let's assume that we have two $$2\times 2$$ matrices $$\mathbf{A}$$ and 
$$\mathbf{B}$$ of the following form:

$$\mathbf{A} = 
\begin{bmatrix}
           \text{A}_{11} & \text{A}_{12}\\
           \text{A}_{21} & \text{A}_{22}
         \end{bmatrix}, \, \, \, \,\mathbf{B} =  \begin{bmatrix}
           \text{B}_{11} & \text{B}_{12}\\
           \text{B}_{21} & \text{B}_{22}
         \end{bmatrix}.$$


Now, we wish to calculate elements of the resulting matrix $$\textbf{C} = \textbf{A}\textbf{B}$$. 
As we stated before, columns of the matrix represent to what the canonical basis vectors transform to. 
Therefore, for example, the first column of the matrix $$\mathbf{C}$$ will be given by the vector to which 
the vector $$\mathbf{b}_1 = \begin{bmatrix}1,0\end{bmatrix}^\text{T}$$ will transform to. Let's calculate this by first 
acting with the matrix $$\mathbf{B}$$ and then with matrix $$\mathbf{A}$$ on the vector $$\mathbf{b}_1$$:

$$\begin{align}
    \mathbf{C} \, \mathbf{b}_1 &= \left(\mathbf{A} \mathbf{B}\right)\mathbf{b}_1\\
    &= \begin{bmatrix}
           \text{A}_{11} & \text{A}_{12}\\
           \text{A}_{21} & \text{A}_{22}  \end{bmatrix} \begin{bmatrix}
           \text{B}_{11} & \text{B}_{12}\\
           \text{B}_{21} & \text{B}_{22}
         \end{bmatrix} \begin{bmatrix}
          1\\
          0
         \end{bmatrix} \\
         &= \begin{bmatrix}
           \text{A}_{11} & \text{A}_{12}\\
           \text{A}_{21} & \text{A}_{22}  \end{bmatrix}\begin{bmatrix}
           \text{B}_{11} \\
           \text{B}_{21} 
         \end{bmatrix} \\
         &= \begin{bmatrix}
            \text{A}_{11}\text{B}_{11} + \text{A}_{12} \text{B}_{21} \\
           \text{A}_{21}\text{B}_{11} + \text{A}_{22}\text{B}_{21}
         \end{bmatrix},
\end{align}$$

where we have used identities and properties described in the matrix-vector multiplication section. Now, if we write the
matrix $$\mathbf{C}$$ in the following form:

$$\mathbf{C} = 
\begin{bmatrix}
           \text{C}_{11} & \text{C}_{12}\\
           \text{C}_{21} & \text{C}_{22}
         \end{bmatrix},$$

we can recognize that the elements of the first column are given by:

$$\begin{align}
&\text{C}_{11} =   \text{A}_{11}\text{B}_{11} + \text{A}_{12} \text{B}_{21}\\
&\text{C}_{21} =   \text{A}_{21}\text{B}_{11} + \text{A}_{22}\text{B}_{21}
\end{align}.$$





Similarly, we could calculate the elements of the second column of the matrix $$\mathbf{C}$$ by observing how the two 
transformations transform the vector $$\mathbf{b}_2 = \begin{bmatrix}0,1\end{bmatrix}^\text{T}$$. 

In general, if we have a matrix-matrix multiplication of the type $$\textbf{C} = \textbf{A}\textbf{B}$$, the the $$ij$$-th 
element of the matrix $$\mathbf{C}$$ is given by:

$$\boxed{\text{C}_{ij} = \sum_k \text{A}_{ik}\text{B}_{kj}}$$

It is important to note that we used a simple example where both matrices have the same dimensions. A more general case 
would be if the matrix $$\mathbf{A} \in \mathbb{R}^{n \times k}$$ and $$\mathbf{B} \in \mathbb{R}^{k \times m}$$. 
Then, the matrix $$\mathbf{B}$$ would take as the input a $$m$$-dimensional vector and transform it to a $$k$$-dimensional vector. 
Afterward, the matrix $$\mathbf{A}$$ would take as the input the transformed $$k$$-dimensional vector, and output a $$n$$-dimensional 
vector. So, the total transformation $$\mathbf{C}$$ would be a $$n \times m$$ matrix, i.e. $$\mathbf{C} \in \mathbb{R}^{n\times m}$$. 
Note that the elements of the matrix $$\mathbf{C}$$ would still be calculated using above formula.

Next, let's take a look at two special types of matrices:
- **Identity matrix:** Identity matrix is often denoted by $$\mathbf{I}$$ or $$\mathbb{I}$$, and it represents a matrix that leaves a vector unchanged, i.e. $$\mathbf{I}\mathbf{v} = \mathbf{v}$$. Such matrix has elements $$1$$ on the diagonal, and $$0$$ otherwise. For example, a $$3\times 3$$ identity matrix has the following form:
- 
    $$\mathbf{I} = 
    \begin{bmatrix}
               1 & 0 & 0\\
               0 & 1 & 0 \\
               0 & 0 &1
    \end{bmatrix}$$
- **Inverse matrix:** An inverse of a matrix $$\mathbf{A}$$ is denoted as $$\mathbf{A}^{-1}$$, and is defined by the following equation: $$\mathbf{A}^{-1}\mathbf{A} = \mathbf{A}\mathbf{A}^{-1} = \mathbf{I}$$. Intuitively, we can think of the inverse matrix $$\mathbf{A}^{-1}$$ as a matrix that counteracts the operation done by the matrix $$\mathbf{A}$$. Therefore, if we chain the two transformations together, it should be the same as if we did nothing (i.e. the total transformation is equal to the identity matrix $$\mathbf{I}$$). A matrix that has an inverse is called an invertible matrix, and only square matrices are invertible.

{: .summary}
>Let's briefly summarize important information regarding matrix-matrix multiplication:
>- Using our formula we can find elements of a matrix that is the result of matrix-matrix multiplication. 
>- Multiplying a $$n \times k$$ matrix with a $$k \times m$$ matrix will result in a $$n \times m$$ matrix.
>- In general, matrix multiplication is not commutative, i.e. $$\mathbf{A}\mathbf{B} \neq \mathbf{B}\mathbf{A}$$. 
>- An identity matrix $$\mathbf{I}$$ leaves the vector unchanged.
>- Some square matrices $$\mathbf{A}$$ have an inverse, which is denoted by $$\mathbf{A}^{-1}$$.



[^2]: This is actually a very general result, all linear mappings (in finite dimensional vector spaces) can be written as matrix multiplication.



