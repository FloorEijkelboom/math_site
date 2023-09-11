---
layout: default
parent: Linear Algebra
grand_parent: Essentials
nav_order: 11
title: Matrix Decompositions
---

# Matrix Decompositions


{: .motivation}
Matrix decompositions are important decompositions in linear algebra as they allow for simpler computations with matrices, as we shall see in the following subsections. On the other hand, they are also widely used in machine learning, for the purposes of data compression, denoising, and latent semantic analysis to name a few. Matrix decompositions usually decompose an original matrix into a product of simpler matrices, which have some specific features. In this section, we shall cover two important decompositions: Eigenvalue decomposition (Diagonalization) and Singular value decomposition (SVD).


## Eigenvalue decomposition
Eigenvalue decomposition, also often called diagonalization, is a type of matrix decomposition where we utilize eigenvectors and eigenvalues. Formally, the matrix $$\mathbf{A}$$ is said to be diagonalizable if we can write it in the following form:

$$
\label{eq:eigendecomposition}
    \mathbf{A} = \mathbf{P}\mathbf{D}\mathbf{P}^{-1},
$$

where matrix $$\mathbf{D}$$ is a diagonal matrix. Comparing this to change of basis equation discussed in the [Change of Basis section](change_of_basis), we can conclude that the columns of matrix $$\mathbf{P}$$ consist of the eigenvectors [^1]. This can be seen as we are switching to a basis in which our operator is diagonal, and this is exactly the basis spanned by eigenvectors. 

As mentioned in the previous subsection, although it is always possible to find eigenvectors and eigenvalues for a given square matrix $$\mathbf{A}$$, not every square matrix is diagonalizable. The problem here lies in the invertibility of the matrix $$\mathbf{P}$$, the matrix of eigenvectors. In some cases, it can happen that eigenvectors are colinear, so the inverse $$\mathbf{P}^{-1}$$ does not exist, and we cannot perform eigenvalue decomposition. 

In order to the usefulness of eigenvalue decomposition, let's take a look at one use-case. Suppose that we wish to find the $n$-th power of the matrix $$\mathbf{A}$$. Usually, we would have to perform $$n$$ matrix multiplications:

$$
\mathbf{A}^n = \underbrace{\mathbf{A}\cdot  ...  \cdot \mathbf{A}}_{n \text{ times}}.
$$

However, let's assume that the matrix $$\mathbf{A}$$ is diagonalizable, so we can write it in the form $$\mathbf{P}\mathbf{D}\mathbf{P}^{-1}$$. Then, the $$n$$-th power can be calculated as follows:

$$
\begin{split}
\mathbf{A}^n &= \underbrace{\mathbf{A}\cdot  ...  \cdot \mathbf{A}}_{n \text{ times}} \\[2.5mm]
&=  \underbrace{(\mathbf{P}\mathbf{D}\mathbf{P}^{-1})\cdot  ...  \cdot (\mathbf{P}\mathbf{D}\mathbf{P}^{-1})}_{n \text{ times}}\\[2.5mm]
&= \mathbf{P}\mathbf{D}\mathbf{P}^{-1} \mathbf{P}\mathbf{D}\mathbf{P}^{-1}  ... \mathbf{P}\mathbf{D}\mathbf{P}^{-1} \mathbf{P}\mathbf{D}\mathbf{P}^{-1} \\
&= \mathbf{P}\mathbf{D}^n\mathbf{P}^{-1}\\[2.0mm]
\end{split}
$$

The last equation follows from the fact that $$\mathbf{P}^{-1} \mathbf{P} = \mathbf{I}$$ for each intermediate term. Therefore, in this decomposition, we just need to calculate 3 matrix multiplications instead of $$n$$ multiplications, since the matrix $$\mathbf{D}^n$$ is still a diagonal matrix whose elements are raised to the $$n$$-th power[^2].


## Singular Value Decomposition
Another common type of matrix decomposition is Singular Value Decomposition, or often abbreviated as SVD. The main idea is to generalize the eigendecomposition to non-square matrices. Let's assume that matrix $$\mathbf{M}$$ is a real $$m \times n$$ matrix. Then, the singular value decomposition is a factorization of the form

$$\label{eq:svd}
    \mathbf{M} = \mathbf{U}\mathbf{\Sigma}\mathbf{V}^{\text{T}},
$$

where:

- $$\mathbf{U}$$ is an $$m\times m$$ orthogonal matrix.
- $$\mathbf{\Sigma}$$ is a $$m\times n$$ diagonal matrix with _nonnegative_ entries.
- $$\mathbf{V}$$ is an $$n\times n$$ orthogonal matrix.

The visualization of these matrices is shown in Figure 1. We can see that the matrix $$\mathbf{\Sigma}$$ has a diagonal part (which can have zero and non-zero elements), whereas the rest of the matrix is equal to zero. 

<div class="text-center">
  <img src="../figures/svd_matrices.PNG" alt="Caption of the figure." width="45%" id="fig:svd_matrices">
</div>

Figure 1:  _A visual representation of SVD for a $$2\times 2$$ matrix. Adapted from [Wikipedia](https://en.wikipedia.org/wiki/Singular_value_decomposition#/media/File:Singular_value_decomposition_visualisation.svg)._


The diagonal elements $$\sigma_i = \Sigma_{ii}$$ of the matrix $$\mathbf{\Sigma}$$ are called _singular values_ of $$\mathbf{\Sigma}$$. Singular values are uniquely determined by the matrix $$\mathbf{M}$$, and we can show that the number number of non-zero singular values is equal to the rank of $$\mathbf{\Sigma}$$. From decompositions explained in [Rank of a Matrix section](rank_of_matrix), we can see that the SVD expression is equivalent to the following:

$$
\mathbf{M} = \mathbf{U}\mathbf{\Sigma}\mathbf{V}^{\text{T}} = \sum_{i=1}^{\text{min}(m,n)} \sigma_i \cdot \mathbf{u}_i \mathbf{v}_i^{\text{T}}
$$

From this, we see that the SVD of matrix $$\mathbf{M}$$ expresses it as a (nonnegative) linear combination of rank-1 matrices, and we know that number of non-zero terms in such linear combination is equal to the rank of the matrix. 

Geometrically, SVD actually performs very simple and intuitive operations. Firstly, the matrix $$\mathbf{V}^{\text{T}}$$ performs a rotation in $$\mathbb{R}^n$$. Next, the matrix $$\mathbf{\Sigma}$$ simply rescales the rotated vectors by a singular value and appends/deletes dimensions to match the dimension $$m$$ to $$n$$. Finally, the matrix $$\mathbf{U}$$ performs a rotation in $$\mathbb{R}^m$$. In the case of a real $$2\times 2$$ matrix, SVD can be visualized as shown in Figure 2. On the top route, we can see the direct application of a matrix $$\mathbf{M}$$ on two unit vectors. On the bottom route, we can see the action of each matrix in the SVD. We have used a case of a square matrix, as it is easier to visualize (in general, the matrix $$\mathbf{\Sigma}$$ would add or remove dimensions, depending on the form of the matrix $$\mathbf{M}$$). 


<div class="text-center">
  <img src="../figures/svd.png" alt="Caption of the figure." width="45%" id="fig:svd">
</div>

Figure 2:  _A visual representation of SVD for a $$2\times 2$$ matrix. Adapted from [Wikipedia](https://en.wikipedia.org/wiki/Singular_value_decomposition#/media/File:Singular-Value-Decomposition.svg)._

We have motivated low-rank approximation methods in the [Rank of a Matrix section](rank_of_matrix), but we haven't discussed how SVD can come in handy for this application. We shall first explain the procedure of using SVD for approximating matrices by their low-rank counterpart and then will show why this approach works. The rank-$$k$$ approximation $$\mathbf{M}_k$$ of the matrix $$\mathbf{M}$$ can be found as follows:

1. We compute the singular value decomposition of the matrix $$\mathbf{M}$$ of the form $$\mathbf{M} = \mathbf{U}\mathbf{\Sigma}\mathbf{V}^{\text{T}}$$. We assume that the matrix the diagonal elements of the matrix $$\mathbf{\Sigma}$$ are sorted from high to low. 
2. We only keep the first $$k$$ columns of the matrix $$\mathbf{U}$$, and we denote this matrix as $$\mathbf{U}_k$$ (the shape of the matrix changes from $$m\times m \to m \times k$$). 
3. We only keep the first $$k$$ rows of the matrix $$\mathbf{V}^{\text{T}}$$, and we denote this matrix as $$\mathbf{V}^{\text{T}}_k$$ (the shape of the transposed matrix changes from $$n\times n \to k \times n$$). 
4. We only keep the first $$k$$ singular values (assuming they are ranked from high to low). 
5. The $$k$$-rank approximation $$\mathbf{M}_k$$ of the matrix $$\mathbf{M}$$ is then given by $$\mathbf{M}_k = \mathbf{U}_k \mathbf{\Sigma}_k \mathbf{V}_k^{\text{T}}$$

Although we have found a consistent way to calculate a $$k$$-rank approximation of an arbitrary matrix, how can we know whether a low-rank approximation using SVD is any good? In order to quantify the _goodness_ of the approximation, let's first determine how we will measure it. If we treat a matrix $$\mathbf{M}$$ as a vector, then the $$\ell_2$$ norm of it (called the Frobenius norm) is given by:

$$
\|\mathbf{M}\| = \sqrt{\sum_{ij} \text{M}_{ij}^2}
$$

A good low-rank approximation $$\mathbf{M}_k$$ of the matrix $$\mathbf{M}$$ can then intuitively be defined as the one that minimizes the error quantity $$\varepsilon \equiv \|\mathbf{M}-\mathbf{M}_k \|$$, i.e. an approximation that will resemble the original matrix the most, measured by the Frobenius norm. In fact, it can be shown that given any $$k$$-rank matrix $$\mathbf{A}_k$$, the following inequality holds:

$$
\|\mathbf{M}-\mathbf{M}_k \| \leq \|\mathbf{M}-\mathbf{A}_k \|,
$$

where $$\mathbf{M}_k$$ is the $$k$$-rank approximation obtained using SVD. Therefore, the low-rank approximation obtained using SVD is optimal in terms of the Frobenius norm. 

{: .summary}
>Eigenvalue decomposition, often called diagonalization, is a type of matrix decomposition in which we decompose a square matrix into simpler matrices that involve eigenvalues and eigenvectors. Although we can find eigenvectors and eigenvalues of all square matrices, we can diagonalize only those matrices whose eigenvectors form a basis, as we need to be able to invert the matrix that consists of eigenvectors[^3]. However, we can only perform eigenvalue decomposition for square matrices which is a big limitation. In the next subsection, we will introduce singular value decomposition, which can be thought of as a generalization of the eigenvalue decomposition for non-square matrices.
> 
>The Singular Value Decomposition (SVD) breaks down a matrix into simpler components, similar to the eigendecomposition but for non-square matrices. SVD expresses a matrix as the product of three matrices: $$\mathbf{U}$$, $$\mathbf{\Sigma}$$, and $$\mathbf{V}^\text{T}$$. The first and third matrices are orthogonal, and the second matrix is a diagonal matrix with non-negative numbers on the diagonal called singular values. SVD allows a matrix to be expressed as a sum of simpler matrices of rank 1, and this process involves simple operations of rotation and scaling. SVD can be used to approximate a matrix by a lower-rank matrix, and the goodness of the approximation is measured by the Frobenius norm. SVD provides the best possible low-rank approximation in terms of the Frobenius norm.


[^1]: Technically, we would write $$\mathbf{D} =\mathbf{P}^{-1}\mathbf{A}\mathbf{P}$$, but multiplying by both $$\mathbf{P}$$ and $$\mathbf{P}^{-1}$$ from both sides yields the eigendecomposition equation.
[^2]: For example if $$\lambda_i$$ is the $$i$$-th diagonal element of the matrix $$\mathbf{D}$$, then $$\lambda_i^n$$ will be the $$i$$-th diagonal element of the matrix $$\mathbf{D}^n$$.
[^3]: Only matrices whose rows are linearly independent have an inverse, i.e. they have a full rank.