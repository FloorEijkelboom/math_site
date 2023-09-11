---
layout: default
parent: Linear Algebra
grand_parent: Essentials
nav_order: 4
title: Rank of a Matrix
---

# Rank of a Matrix


{: .motivation}
The rank of a matrix is a number that denotes the dimension of the vector space spanned by its column vectors. In other words, the rank corresponds to the number of linearly independent column vectors of the matrix. Intuitively, we can think of the rank of the matrix as the number of _essential_ columns that define the matrix, and is thus the measure of _nondegenerateness_. To see this, in this section we will show which properties of a matrix are affected by its rank.

In linear algebra, the rank of a matrix is the number of linearly independent rows or columns in the matrix. In other words, it is the maximum number of rows or columns that can be linearly combined to create a non-zero row or column in the matrix. This makes sense, as these two definitions are similar up to an action of the matrix transpose, and if the rank is to measure the number of essential components, then transposing a matrix shouldn't change that. 

As an example, let's find the rank of the following simple $$3\times 3$$ matrix $$\mathbf{A}$$:

$$
\mathbf{A} = \begin{bmatrix}
    1 & 0 & 2 \\
    0 & 1 & 1 \\
    2 & 0 & 4
\end{bmatrix}
$$

Now, let's denote the $$i$$-th column vector of the matrix $$\mathbf{A}$$ as $$\mathbf{a}_i$$. We can show that the third column vector $$\mathbf{a}_3$$ can be represented as a linear combination of the first two column vectors:

$$
\mathbf{a}_3 = 2\, \mathbf{a}_1 + \mathbf{a_2} = \begin{bmatrix}
    2 \\ 1 \\ 4
\end{bmatrix}
$$

From this we can see that one of the column vectors is not linearly independent, so the rank of the matrix $$\mathbf{A}$$ is equal to $$2$$ as we have two linearly independent vectors. 


We will list some important properties and implications of the rank, assuming that the matrix $$\mathbf{A}$$ is a $$m \times n$$ matrix.

>- The rank of a $$m \times n$$ matrix is an integer and cannot be greater than either $$m$$ or $$n$$. Formally, we can write: rank($$\mathbf{A}$$) $$\leq \text{min}(m,n)$$. 
>- If the rank of the matrix is equal to $$\text{min}(m,n)$$, then we say that the matrix has a _full rank_.
>- A square matrix $$\mathbf{A}$$ is invertible if and only if it has a _full rank_.
>- A matrix $$\mathbf{A}$$ and its transpose have the same rank, i.e. $$\text{rank}\left(\mathbf{A}\right) = \text{rank}\left(\mathbf{A}^{\text{T}}\right)$$.
>- Furthermore, a matrix $$\mathbf{A}$$ multiplied by its transpose has the same rank as the matrix $$\mathbf{A}$$ itself. This leads to the following equalities:
>
>$$
    \text{rank}\left(\mathbf{A}^{\text{T}}\mathbf{A}\right) = \text{rank}\left(\mathbf{A}\mathbf{A}^{\text{T}}\right) = \text{rank}\left(\mathbf{A}\right) = \text{rank}\left(\mathbf{A}^{\text{T}}\right)
$$

## Low-Rank Matrix Approximations 
For various reasons, such as compression or de-noising, we may wish to approximate a given matrix $$\mathbf{A}$$ by a matrix of the lower rank as best as possible.

We will begin by first introducing an equivalent way to represent matrices of a certain rank. This type of form will also be useful to understand Singular Value Decomposition in a later section. 

As defined above, a rank-1 matrix is a matrix that has only 1 linearly independent column vector. So, a general rank-1 $$m \times n$$ matrix $$\mathbf{A}$$ can be written using vectors $$\mathbf{v}$$ (an $$m$$-dimensional vector) and $$\mathbf{u}$$ (an $$n$$-dimensional vector) in the following form:

$$
\mathbf{A} = \mathbf{u}\mathbf{v}^{\text{T}} = \begin{bmatrix}
    u_1 \mathbf{v}^{\text{T}} \\
    u_2 \mathbf{v}^{\text{T}} \\
    \vdots \\
    u_m \mathbf{v}^{\text{T}}
\end{bmatrix} = \begin{bmatrix}
    u_1 \mathbf{v} &
    u_2 \mathbf{v} &
     ...  &
    u_m \mathbf{v}
\end{bmatrix}
$$ 

In a similar fashion, we can write a general rank-2 matrix $$m\times n$$ matrix $$\mathbf{A}$$ as a linear combination of two rank-1 matrices:

$$
\mathbf{A} = \mathbf{u}\mathbf{v}^{\text{T}}  + \mathbf{c}\mathbf{d}^{\text{T}} = \begin{bmatrix}
    u_1 \mathbf{v}^{\text{T}}+ c_1 \mathbf{d}^{\text{T}}  \\
    u_2 \mathbf{v}^{\text{T}}+ c_2 \mathbf{d}^{\text{T}}  \\
    \vdots \\
    u_m \mathbf{v}^{\text{T}}+ c_m \mathbf{d}^{\text{T}} 
\end{bmatrix} = \begin{bmatrix}
   \mathbf{u} & \mathbf{c}
\end{bmatrix}\begin{bmatrix}
   \mathbf{v}^{\text{T}}\\ \mathbf{d}^{\text{T}}
\end{bmatrix}
$$

It can be shown then that in general that a rank-$$k$$ matrix can be written as the sum of $$k$$ rank-1 matrices. Then, a rank-$$k$$ matrix $$ \mathbf{A}$$ of the shape $$m \times n$$ can be written as the product of two matrices:

$$
\mathbf{A} = \mathbf{U}\mathbf{V}^{\text{T}},
$$

where $$\mathbf{U}$$ is a $$m \times k$$ matrix, and $$\mathbf{V}$$ is a $$n \times k$$ matrix. This way, all column vectors of the matrix $$\mathbf{A}$$ are a linear combination of $$k$$ columns of the matrix $$\mathbf{U}$$[^1]

Now, let's use the result above to see how we can use it in the case of compression. If the matrix $$\mathbf{A}$$ was a $$m \times n$$ matrix, then in total we have $$m\cdot n$$ entries. On the other hand, if we manage to describe the matrix using matrices $$\mathbf{U}$$ and $$\mathbf{V}$$, then in total, we have $$k\cdot m + k\cdot n = k (m+n)$$ entries. In the case $$m$$ and $$n$$ are large and $$k$$ is small, this approach could save a lot of memory. 

It is worth noting that we have only shown that in principle, we could express a matrix in terms of lower-rank matrices, but we haven't shown an exact method to do so. We will return to this question in [this section](matrix_decomp).

{:. .summary}
The rank of a matrix is a measure of its nondegenerateness, denoting the dimension of the vector space spanned by its row/column vectors, and therefore it corresponds to the number of linearly independent row/column vectors of the matrix. The rank of a matrix is important in determining its properties, such as invertibility, and can be used in low-rank matrix approximations for compression, de-noising and other various purposes.

[^1]:Or equivalently, all rows are a linear combination of rows of the matrix $$\mathbf{V}^{\text{T}}$$.